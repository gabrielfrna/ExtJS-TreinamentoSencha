'use strict'

class StoreBillCategory {
  // https://indicative-v5.adonisjs.com/

  get rules() {
    return {
      description: "required|max:50",
      parent_id: "integer",
      type: "required|in:P,R",// P = Pagar R = Receber
    };
  }

  async fails(errorMessages) {
    return this.ctx.response.status(422).json({
      message: errorMessages[0].message
    });
  }
}

module.exports = StoreBillCategory
