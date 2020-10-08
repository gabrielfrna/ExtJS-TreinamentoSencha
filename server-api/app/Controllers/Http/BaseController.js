'use strict'

const Database = use('Database')

class BaseController {

  constructor() {
    // this.filters = []
    this.sorters = []
    // this.select = []
    // this.rootProperty = 'data'
    this.paginateRows = true
    this.entityModel = null
  }

  parsePagination(request) {
    // if(request.input('limit')){
    return {
      page: parseInt(request.input('page')),
      start: parseInt(request.input('start')),
      limit: parseInt(request.input('limit'))
    }
    // }
  }


  parseSearch(request) {
    return {
      columns: request.input('fields') && JSON.parse(request.input('fields')),
      searchTerm: request.input('query')
    }
  }

  parseSelect(request) {
    return request.input('select') && JSON.parse(request.input('select'))
  }

  parseFilters(request) {
    // TODO
    // Caso informar em properties alguma coluna nao permitida fazer validação
    return request.input('filter') && JSON.parse(request.input('filter'))
  }

  parseSorters(request) {
    return request.input('sort') && JSON.parse(request.input('sort'))
  }

  parseGroupers(request) {
    return request.input('group') && JSON.parse(request.input('group'))
  }

  applySortersToQuery(sorters, query) {
    if (Array.isArray(sorters)) {
      for (var i = 0, len = sorters.length; i < len; i++) {
        query.orderBy(sorters[i].property, sorters[i].direction);
      }
    }
    return query;
  }

  applyGroupersToQuery(groupers, query) {
    if (Array.isArray(groupers)) {
      for (var i = 0, len = groupers.length; i < len; i++) {
        query.groupBy(groupers[i].column);
      }
    }
    return query;
  }

  applySelectToQuery(select, query) {
    if (Array.isArray(select)) {
      for (var i = 0, len = select.length; i < len; i++) {
        query.select(select[i]);
      }
    }
  }


  applyFiltersToQuery(filters, query) {
    if (Array.isArray(filters)) {
      for (var i = 0, len = filters.length; i < len; i++) {
        let operator = filters[i].operator,
          column = filters[i].property,
          value = filters[i].value;

        const castType = filters[i].castType;

        if (castType) {
          column = Database.raw(`${castType}(${filters[i].property})`)
          // if (mysql) {
          //   column = Database.raw(`cast(${filters[i].property} as ${castType})`)
          // } else if (sqlite) {
          //   column = Database.raw(`${castType}(${filters[i].property}})`)
          // }
          //strftime('%d-%m-%Y', 'now')

          //select * from clientes where created_at = '2020-07-20';
          //select * from clientes where cast(created_at as date) = '2020-07-20'
        }

        switch (operator) {
          case 'like':
            query.where(column, 'like', `%${value}%`);
            break;

          case 'in':
            /**
             * se o value for uma array vamos usar whereIn ou entao fazer um
             * split da string
             */
            if (!Array.isArray(value)) {
              value = value.split(',');
            }
            query.whereIn(column, value)
            break;

          case 'not_in':
            /**
             * se o value for uma array vamos usar whereIn ou entao fazer um
             * split da string
             */
            if (!Array.isArray(value)) {
              value = value.split(',');
            }
            query.whereNotIn(column, value)
            break;

          case 'between':
            query.whereBetween(column, value);
            break;

          case 'not_between':
            query.whereNotBetween(column, value);
            break;

          case 'null':
            query.whereNull(column);
            break;

          case 'not_null':
            query.whereNotNull(column);
            break;

          case '<':
            query.where(column, '<', value);
            break;

          case '>':
            query.where(column, '>', value);
            break;

          default:
            query.where(column, '=', value);
            break;

        }
      }
    }
    return query;
  }


  applySearchToQuery({columns, searchTerm}, query) {
    if (searchTerm && Array.isArray(columns)) {
      const terms = searchTerm.split(' ');
      let stringTerms = '%';

      for (const i in terms) {
        stringTerms += terms[i] + '%';
      }

      query.where(function (q) {
        for (const i in columns) {
          let columnName = columns[i];

          q.orWhere(columnName, 'like', stringTerms);
        }
      });
    }
    return query;

  }

  /**
   * Show a list of all records.
   * GET resource
   */
  async index({params, request, response}) {
    const query = this.getModelBaseQuery(),
      includedRelations = this.entityModel.includedRelations;

    let result = {};

    this.applyFiltersToQuery(this.parseFilters(request), query)
    this.applySearchToQuery(this.parseSearch(request), query)
    this.applySelectToQuery(this.parseSelect(request), query)
    this.applySortersToQuery(this.parseSorters(request), query)
    this.applyGroupersToQuery(this.parseGroupers(request), query)
    // this.applyBelongsToToQuery(query)
    // this.applyBelongsToManyToQuery(query)

    //TODO if relations

    if (includedRelations && Array.isArray(includedRelations.belongsTo)) {
      includedRelations.belongsTo.forEach(function (relation) {
        query.with(relation)
      })
    }

    if (this.paginateRows) {
      const pageParams = this.parsePagination(request)
      const paginate = await query.paginate(pageParams.page, pageParams.limit)
      const metadata = paginate.toJSON()

      result.total = metadata.total
      result.perPage = metadata.perPage
      result.lastPage = metadata.lastPage
      result.page = metadata.page
      result.data = metadata.data

    } else {
      result.data = await query.fetch()
      // this.applyPaginationToQuery(this.parsePagination(request), query)
    }

    return response.json(result)
  }


  getModelBaseQuery() {
    if (this.entityModel.hasOwnProperty('baseQuery')) {
      this.modelBaseQuery = this.entityModel.baseQuery()
    } else {
      this.modelBaseQuery = this.entityModel.query()
    }

    return this.modelBaseQuery
  }

  /**
   * Display a single record.
   * GET resource/:id
   */
  async show({params, response}) {
    const query = this.getModelBaseQuery();

    query.where(this.entityModel.primaryKey, params.id)
    // const record = await this.entityModel.find(params.id)


    // this.applyBelongsToToQuery(query)
    // this.applyBelongsToManyToQuery(query)

    const record = await query.first()

    if (!record) {
      // console.log('cai aqui', record);
      return response.status(404).json({error: 'record_not_found'})
    }
    return response.json({
      success: true,
      data: record
    })
  }

  /**
   * Update record.
   * PUT or PATCH resource/:id
   */
  async update({params, auth, request, response}) {
    const record = await this.entityModel.find(params.id);

    if (!record) {
      return response.status(404).json({data: 'Resource not found'})
    }

    //Talvez alguns campos não permite alteração
    //TODO - implementar guardedToUpdate e remover do fillable
    const data = request.only(this.entityModel.fillable)

    await record.merge({...data})
    await record.save()


    if (request.input(this.entityModel.primaryKey)) {
      record._clientId = request.input(this.entityModel.primaryKey)
    }
    return response.status(200).json({
      data: record
    })
  }

  /**
   * POST
   * Create/save a new record.
   *
   * @param params
   * @param auth
   * @param request
   * @param response
   * @returns {Promise<void|*>}
   */
  async store({params, auth, request, response}) {
    const record = await this.entityModel.create({
        ...request.only(this.entityModel.fillable),
        // user_id: 1
      }),
      entityRelationShips = this.entityModel.entityRelationShips;

    await record.reload()

      console.log('aqui entityRelationships', entityRelationShips);
    /**
     * Verificar se no params POST possui algum paramentro com nome de relacionamento hasMany
     *
     * Se sim inserir em loop e transaction
     */
    //TODO colocar trasaction no inset principal e das relationsships
    if (entityRelationShips && Array.isArray(entityRelationShips.hasMany)) {


      entityRelationShips.hasMany.forEach(async function (relation) {
        let associatedData = JSON.parse(request.input(relation))

        await associatedData.forEach(async function (rec) {

          rec[record[relation]().foreignKey] = record.id
          const relatedModel = record[relation]().RelatedModel;

          if (rec[relatedModel.primaryKey] <= 0) {
            delete rec[relatedModel.primaryKey]
            await relatedModel.create(rec)
          }
        })
      })
    }

    if (request.input(this.entityModel.primaryKey)) {
      record._clientId = request.input(this.entityModel.primaryKey)
    }

    return response.status(201).json({
      data: record
    })
  }


  /**
   * Delete a record with id.
   * DELETE entity/:id
   */
  async destroy({params, response}) {
    const record = await this.entityModel.find(params.id)

    if (!record) {
      return response.status(404).json(null)
    }

    await record.delete()

    return response.status(204).json(null)
    // return response.status(204).json({
    //   success: true,
    //   message: 'deleted'
    // })
  }

  /**
   * clone a record from an id.
   * POST resource/:id/duplicate
   */
  async duplicate({params, auth, request, response}) {
    const from = await this.entityModel.find(params.id)
    const recordData = {}

    let record

    if (from) {
      if (Array.isArray(this.entityModel.clonable)) {
        this.entityModel.clonable.forEach(function (field) {
          recordData[field] = from[field]
        })

        if (this.entityModel.cloneRecord) {
          record = await this.entityModel.cloneRecord(from, recordData)
        } else {
          record = await this.entityModel.create({
            ...recordData
          })
        }
      } else {
        return response.status(501).json({error: 'not_clonable'})//TODO qual stataus?
      }
    } else {
      return response.status(404).json({error: 'record_not_found'})
    }

    return response.status(201).json(record)
  }

  async buildTree({params, auth, request, response}) {
    const query = this.entityModel.query().select('id', 'description', 'parent_id')
    let rows = await query.fetch()
    let items = rows.toJSON();

    const arrayToTree1 = require('array-to-tree');
    //  const {arrayToTree} = require('performant-array-to-tree');
    const myTree = arrayToTree1(items, {
      parentProperty: 'parent_id',
      customID: 'id'
    });

    // const myTree2 = arrayToTree(items, {
    //   parentId: 'parent_id',
    //   id: 'id',
    //   dataField: null
    // });

    //
    //
    //
    return response.json({
      children: myTree,
      //teste2: myTree2
    })

  }

}

module.exports = BaseController
