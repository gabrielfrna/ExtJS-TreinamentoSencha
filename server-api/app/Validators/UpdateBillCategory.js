'use strict'

class UpdateBillCategory {
  // https://indicative-v5.adonisjs.com/

  get rules() {
    return {
      description: "max:50",//notNull notEmpty
      parent_id: "integer",
      type: "in:P,R",// P = Pagar R = Receber
    };
  }

  async fails(errorMessages) {
    return this.ctx.response.status(422).json({
      message: errorMessages[0].message
    });
  }
}

module.exports = UpdateBillCategory
