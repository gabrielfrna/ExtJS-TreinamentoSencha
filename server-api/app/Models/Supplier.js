'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Supplier extends Model {

  static get fillable() {
    return [
      'name', 'phone', 'address', 'address_complement', 'address_reference', 'address_number', 'address_neighborhood',
      'address_state', 'address_city', 'address_postal_code', 'email', 'cnpj_cpf', 'rg_ie'
    ]
  }

  static get clonable() {
    //return this.fillable
    return ['name', 'phone']
  }

  static async cloneRecord(from, toRecordData) {
    return await this.create({
      ...toRecordData,
      name: from.name + ' *(DUPLICADO)'
    })
  }
}

module.exports = Supplier
