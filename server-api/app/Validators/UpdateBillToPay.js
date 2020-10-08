'use strict'

class UpdateBillToPay {
  get rules() {
    return {
      supplier_id: "integer",
      bank_account_id: "integer",
      bill_category_id: "integer",
      description: "max:255",
      installment: "integer",
      total_installments: "integer",
      // due_date: "required",
      // amount: "required",
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

module.exports = UpdateBillToPay
