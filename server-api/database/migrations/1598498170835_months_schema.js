'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MonthsSchema extends Schema {
  up () {
    this.create('months', (table) => {
      table.integer('order')
      table.string('short_name')
      table.string('month_name')
      table.timestamps()
    })
  }

  down () {
    this.drop('months')
  }
}

module.exports = MonthsSchema
