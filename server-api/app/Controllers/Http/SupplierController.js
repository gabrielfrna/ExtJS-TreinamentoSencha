'use strict'


const BaseController = use('App/Controllers/Http/BaseController')
const Supplier = use('App/Models/Supplier')


class SupplierController extends BaseController {

  constructor() {
    super()
    this.entityModel = Supplier
  }

}

module.exports = SupplierController
