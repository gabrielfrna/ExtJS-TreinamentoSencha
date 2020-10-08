'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BillCategorySchema extends Schema {
  up() {
    this.create('bill_category', (table) => {
      table.increments()
      table.string('description', 50).notNullable()
      table.integer('parent_id', 50).nullable().references('id').inTable('bill_category')
      table.string('type', 1).notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('bill_category')
  }
}

module.exports = BillCategorySchema
