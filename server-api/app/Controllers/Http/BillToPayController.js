'use strict'


const BaseController = use('App/Controllers/Http/BaseController')
const BillToPay = use('App/Models/BillToPay')
const BillToPayService = use('App/Services/BillToPayService')
const Database = use('Database')


class BillToPayController extends BaseController {

  constructor() {
    super()
    this.entityModel = BillToPay
    this.billToPayService = new BillToPayService
  }

  async store({params, auth, request, response}) {
    const {installments} = request.only(['installments'])
    const billToPayData = request.only(this.entityModel.fillable)


    const bill = await this.billToPayService.create({
      billToPayData: billToPayData,
      installments: installments
    })

    return response.status(201).json(bill)
  }

  async getPaidBillByCategory({params, auth, request, response}) {
    const data = await BillToPay.query()
      .select([
        'bill_category_id',
        'bill_category.description',
        // Database.raw('extract(MONTH from due_date) as month')
        Database.raw('sum(amount) as total')
      ])
      .innerJoin('bill_category', 'bill_category.id', 'bill_to_pay.bill_category_id')
      .groupBy('bill_category_id')
      .fetch()

    response.json({
      data: data
    });
  }

  async getYearlyPaidBills({params, auth, request, response}) {
    const data = await Database.table('months')
      .select([
        'order as month_order',
        'short_name as month_short_name',
        // 'month_name',
        Database.raw('(select COALESCE(sum(paid_amount),0)  from bill_to_pay where strftime(\'%m\', bill_to_pay.paid_date) = `months`.`order`) as total_paid'),
        Database.raw('(select COALESCE(sum(amount),0)  from bill_to_pay where strftime(\'%m\', bill_to_pay.due_date) = `months`.`order`) as total_to_pay'),
        // Database.raw('COALESCE(sum(amount),0) as total_to_pay'),
      ])
      // .leftJoin('bill_to_pay', Database.raw("strftime('%m', bill_to_pay.paid_date)"), 'months.order')
      // .where(Database.raw("strftime('%Y', paid_date)"), request.input('year'))
      .groupBy('month_short_name')
      // .groupBy('month_name')
      // .groupBy('month_order')
      .orderBy('month_order')
    // .fetch()

    response.json({
      data: data
    });
  }


}

module.exports = BillToPayController
