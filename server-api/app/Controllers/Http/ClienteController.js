'use strict'
const BaseController = use('App/Controllers/Http/BaseController')
const Cliente = use('App/Models/Cliente')

class ClienteController extends BaseController {

  constructor() {
    super()
    this.entityModel = Cliente
  }

}

module.exports = ClienteController
