'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SuppliersSchema extends Schema {
  up() {
    this.create('suppliers', (table) => {
      table.increments()
      table.string('name', 80).notNullable()//nome completo
      table.string('phone', 15)//telefone principal
      table.string('address', 80)//endereço
      table.string('address_complement', 150)//complemento do endereço
      table.string('address_reference', 250)//ponto de referencia do endereço
      table.string('address_number', 10).defaultTo('sn')//numero do imovel
      table.string('address_neighborhood', 60)//bairro
      table.string('address_state', 2)//uf
      table.string('address_city', 50)//cidade
      table.string('address_postal_code', 9)//cep
      table.string('email', 80)//email
      table.string('cnpj_cpf', 18)//cnpj ou cpf
      table.string('rg_ie', 20)//RG
      table.timestamps()
      table.timestamp('deleted_at').nullable()
    })
  }

  down() {
    this.drop('suppliers')
  }
}

module.exports = SuppliersSchema
