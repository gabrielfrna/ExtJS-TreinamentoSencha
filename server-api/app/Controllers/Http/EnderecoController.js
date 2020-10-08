'use strict'
const BaseController = use('App/Controllers/Http/BaseController')
const Endereco = use('App/Models/Endereco')

class EnderecoController extends BaseController {

  constructor() {
    super()
    this.entityModel = Endereco
  }

}

module.exports = EnderecoController
