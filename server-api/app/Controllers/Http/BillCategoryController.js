'use strict'


const BaseController = use('App/Controllers/Http/BaseController')
const BillCategory = use('App/Models/BillCategory')


class BillCategoryController extends BaseController {

  constructor() {
    super()
    this.entityModel = BillCategory
  }

}

module.exports = BillCategoryController
