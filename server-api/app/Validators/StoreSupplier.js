'use strict'


class StoreSupplier {
  // https://indicative-v5.adonisjs.com/

  get rules() {
    return {
      name: "required|max:80",
      email: "email"
    };
  }

  async fails(errorMessages) {
    return this.ctx.response.status(422).json({
      message: errorMessages[0].message
    });
  }
}

module.exports = StoreSupplier
