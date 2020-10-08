'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class BillCategory extends Model {

  static get table() {
    return 'bill_category'
  }

  static get fillable() {
    return [
      'description', 'parent_id', 'type'
    ]
  }
}

module.exports = BillCategory
