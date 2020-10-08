'use strict'

const BillToPay = use('App/Models/BillToPay')
const Database = use('Database')

// const ArticleTag = use('App/Models/ArticleTag')

class BillToPayService {
  /**
   *
   * @param billToPayData
   * @param installments
   * @param transaction
   * @returns {Promise<*>} return the BillToPay Model
   */
  async create({billToPayData, installments}, transaction) {
    let trx;

    if (!transaction) {
      trx = await Database.beginTransaction()
    } else {
      trx = transaction
    }

    const record = await BillToPay.create({
      ...billToPayData,
      // user_id: 1
    }, trx)

    if (Array.isArray(installments)) {
      for (const i in installments) {
        const installment = installments[i]

        const installmentRecord = await BillToPay.create({
          supplier_id: installment.supplier_id,
          bill_category_id: installment.bill_category_id,
          due_date: installment.due_date,
          amount: installment.amount,
          installment: installment.installment,
          reference_code: record.id,
          total_installments: installments.length,//TODO Pegar da principal
          description: installment.description//TODO pegar da principal
        }, trx)
      }
    }

    if (!record && !transaction) {
      trx.rollback();
    }
    if (!transaction) {
      trx.commit();
    }
    // if (this.newRecordEvent) {
    //   Event.fire(this.newRecordEvent, record);
    // }
    return record
  }

}

module.exports = BillToPayService
