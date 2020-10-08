'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EnderecosSchema extends Schema {
  up () {
    this.create('enderecos', (table) => {

      table.increments()
      table.integer('cliente_id').references('id').inTable('clientes')
      table.string('descricao').notNullable()
      table.string('logradouro').notNullable()
      table.string('complemento').nullable()
      table.string('numero').nullable()
      table.string('bairro').nullable()
      table.string('cidade').nullable()
      table.string('estado').nullable()
      table.string('cep').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('enderecos')
  }
}

module.exports = EnderecosSchema
