'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClientesSchema extends Schema {
  up () {
    this.create('clientes', (table) => {
      table.increments();
      table.string('nome').notNullable()
      table.string('sobrenome').notNullable()
      table.string('email').notNullable()
      table.string('telefone').nullable()
      table.decimal('renda').nullable()
      table.date('data_nascimento')
      table.boolean('ativo')
      table.string('sexo').notNullable()
      table.timestamps()
    });
  }

  down () {
    this.drop('clientes')
  }
}

module.exports = ClientesSchema
