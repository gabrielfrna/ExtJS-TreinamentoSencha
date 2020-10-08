'use strict'

class StoreBillToPay {
  // https://indicative-v5.adonisjs.com/

  get rules() {
    return {
      supplier_id: "required|integer",
      bank_account_id: "integer",
      bill_category_id: "integer",
      description: "required|max:255",
      installment: "required|integer",
      total_installments: "required|integer",
      due_date: "required",
      amount: "required",
      // paid_date: "",
      // discounts: "",
      // interests_and_fine: "",
      // paid_amount: "",
     // competence: "required",
      // reference_code: "",
      //notes: "required",
    };
  }

  async fails(errorMessages) {
    return this.ctx.response.status(422).json({
      message: errorMessages[0].message
    });
  }
}

module.exports = StoreBillToPay
