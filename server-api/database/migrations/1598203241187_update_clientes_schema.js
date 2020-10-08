'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UpdateClientesSchema extends Schema {
  up() {
    this.table('clientes', (table) => {
      table.text('observacao').nullable()
      table.text('foto').nullable()
    })
  }

  down() {
    this.table('clientes', (table) => {
      table.dropColumn('observacao')
      table.dropColumn('foto')
    })
  }
}

module.exports = UpdateClientesSchema
