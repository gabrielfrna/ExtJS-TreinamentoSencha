'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class BillToPay extends Model {
  static get table() {
    return 'bill_to_pay'
  }

  static get dates() {
    return super.dates.concat(["paid_date", "due_date"]);
  }

  static get includedRelations() {
    return {
      belongsTo: ['bill_category', 'supplier'],
      //hasMany: ['installments']
      //TODO hasOne and more
    }
  }

  static get fillable() {
    return [
      'supplier_id', 'bank_account_id', 'bill_category_id', 'description', 'installment', 'total_installments',
      'due_date', 'amount', 'paid_date', 'discounts', 'interests_and_fine', 'paid_amount', 'competence',
      'reference_code', 'notes'
    ]
  }

  static get clonable() {
    return [
      'supplier_id', 'bank_account_id', 'bill_category_id', 'description', 'due_date', 'amount', 'competence',
      'reference_code', 'notes'
    ]
  }

  static baseQuery() {

    return this.query()
      .select([
        'bill_to_pay.*'
      ])

  }

  bill_category() {
    return this.belongsTo('App/Models/BillCategory')
  }

  installments() {
    return this.hasMany('App/Models/BillToPay', 'id', 'reference_code')
  }

  supplier() {
    return this.belongsTo('App/Models/Supplier')
  }

  static async cloneRecord(from, toRecordData) {
    return await this.create({
      ...toRecordData,
      description: from.description + ' *(DUPLICADO)',
      installment: 1,
      total_installments: 1
    })
  }
}

module.exports = BillToPay
