'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BillToPaySchema extends Schema {
  up() {
    this.create('bill_to_pay', (table) => {
      table.increments()
      table.integer('supplier_id').nullable().references('id').inTable('suppliers')
      table.integer('bill_category_id').notNullable().references('id').inTable('bill_category')
      table.string('description', 80).notNullable()
      table.integer('installment').defaultTo(1)
      table.integer('total_installments').defaultTo(1)
      table.date('due_date').notNullable()
      table.decimal('amount').notNullable()
      table.date('paid_date').nullable()
      table.decimal('discounts').nullable()
      table.decimal('interests_and_fine').nullable()
      table.decimal('paid_amount').nullable()
      table.string('competence', 6).nullable()
      table.integer('reference_code').nullable()
      table.text('notes').nullable()
      table.timestamps()
      table.timestamp('deleted_at').nullable()
    })
  }

  down() {
    this.drop('bill_to_pay')
  }
}

module.exports = BillToPaySchema
