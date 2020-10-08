'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Cliente extends Model {

  enderecos () {
    return this.hasMany('App/Models/Endereco', 'id', 'cliente_id')
  }

  static get fillable() {
    return [
      'nome', 'email', 'sobrenome', 'sexo', 'ativo', 'renda', 'data_nascimento', 'foto', 'observacao'
    ]
  }


  static baseQuery(){
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
      nome: from.nome + ' *(DUPLICADO de '+from.id+')',
    })

    return record
  }

  static get entityRelationShips() {
    return {
      // belongsTo: [],
      hasMany: ['enderecos']
    }
  }
}

module.exports = Cliente
