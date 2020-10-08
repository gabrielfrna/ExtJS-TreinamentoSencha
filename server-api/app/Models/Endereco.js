'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Endereco extends Model {

  cliente() {
    return this.belongsTo('App/Models/Cliente', 'cliente_id', 'id')
  }

  static get fillable() {
    return [
      'cliente_id', 'descricao', 'logradouro', 'complemento', 'numero', 'bairro', 'cidade', 'estado', 'cep'
    ]
  }


  static baseQuery() {
    return this.query()
    //.select([
    //   '*',
    //   'icon_cls as iconCls',
    //   'row_cls'
    // ])
  }


  static get clonable() {
    return this.fillable
    //return ['name', 'label_id', 'sale_price']
  }

  static async cloneRecord(from, toRecordData) {
    const record = await this.create({
      ...toRecordData,
      nome: from.nome + ' *(DUPLICADO de ' + from.id + ')',
    })

    return record
  }

  static get entityRelationShips() {
    return {
      belongsTo: ['cliente']
    }
  }


}

module.exports = Endereco
