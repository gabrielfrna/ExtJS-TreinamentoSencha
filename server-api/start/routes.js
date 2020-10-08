'use strict'
const Cliente = use('App/Models/Cliente')
const Endereco = use('App/Models/Endereco')
/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')


Route.post('/login', 'AuthController.authenticate')
Route.post('/register', 'AuthController.register');
// .middleware('throttle:10');
Route.get('/register/confirm/:token', 'AuthController.confirmEmail');
Route.post('/password/email', 'Auth/PasswordResetController.prepareResetLinkEmail');
Route.post('/password/reset', 'Auth/PasswordResetController.reset');


//CRUD completo / index

/**
 *  *
 * GET - index - lista
 * POST - store - insere
 * PUT - update - atualiza
 * DELETE - destroy - exclusão
 */


Route.group(() => {
  Route.resource('bill_to_pay', 'BillToPayController')
    .apiOnly()
    .validator(new Map([
      [['bill_to_pay.store'], ['StoreBillToPay']],
      [['bill_to_pay.update'], ['UpdateBillToPay']]
    ]))
  Route.resource('supplier', 'SupplierController')
    .apiOnly()
    .validator(new Map([
      [['supplier.store'], ['StoreSupplier']]
    ]))

  Route.post('bill_to_pay/:id/duplicate', 'BillToPayController.duplicate')
  Route.post('supplier/:id/duplicate', 'SupplierController.duplicate')

  Route.get('bill_category_tree', 'BillCategoryController.buildTree')
  Route.get('yearly_paid_bills', 'BillToPayController.getYearlyPaidBills');
  Route.get('paid_bills_by_category', 'BillToPayController.getPaidBillByCategory');
  Route.resource('bill_category', 'BillCategoryController')
    .apiOnly()
    .validator(new Map([
      [['bill_category.store'], ['StoreBillCategory']],
      [['bill_category.update'], ['UpdateBillCategory']]
    ]))




  Route.resource('clientes', 'ClienteController')
  Route.resource('enderecos', 'EnderecoController')
  Route.resource('users', 'UserController')
  Route.post('clientes/:id/duplicate', 'CustomerController.duplicate')

  Route.get('financeiro', function ({response}) {
    response.json({
      data: [
        {receita: 15000, despesa: 14000, mes: 'JAN', ano: 2019},
        {receita: 16000, despesa: 10000, mes: 'FEV', ano: 2019},
        {receita: 17000, despesa: 11000, mes: 'MAR', ano: 2019},
        {receita: 18000, despesa: 11000, mes: 'ABR', ano: 2019},
        {receita: 19000, despesa: 11000, mes: 'MAI', ano: 2019},
        {receita: 20000, despesa: 12000, mes: 'JUN', ano: 2019},
        {receita: 12000, despesa: 14000, mes: 'JUL', ano: 2019},
        {receita: 13000, despesa: 4000, mes: 'AGO', ano: 2019},
        {receita: 19000, despesa: 11000, mes: 'SET', ano: 2019},
        {receita: 22000, despesa: 12000, mes: 'OUT', ano: 2019},
        {receita: 27000, despesa: 14000, mes: 'NOV', ano: 2019},
        {receita: 32000, despesa: 19000, mes: 'DEZ', ano: 2019}
      ]
    })
  });

  Route.get('pie', function ({response}) {
    response.json({
      data: [
        {description: 'Google', value: 800},
        {description: 'Apple', value: 700},
        {description: 'Microsoft', value: 650},
        {description: 'Amazon', value: 600},
        {description: 'Facebook', value: 600}
      ]
    })
  });

  Route.get('events', function ({response}) {
    response.json({
      data: [{
        "id": 1,
        "calendarId": 1,
        "endDate": "2019-10-05T06:30:00.000Z",
        "startDate": "2019-10-05T05:30:00.000Z",
        "title": "Go To Gym",
        "duration  ": 5
      }, {
        "id": 2,
        "calendarId": 1,
        "endDate": "2019-10-01T10:00:00.000Z",
        "startDate": "2019-10-01T08:00:00.000Z",
        "title": "Go to Coaching",
        "duration  ": 5
      }, {
        "id": 3,
        "calendarId": 2,
        "endDate": "2019-10-03T11:00:00.000Z",
        "startDate": "2019-10-20T18:30:00.000Z",
        "title": "Office hours"
      }, {
        "id": 4,
        "calendarId": 2,
        "endDate": "2019-10-30T03:00:00.000Z",
        "startDate": "2019-10-30T01:00:00.000Z",
        "title": "Update me..."
      }, {
        "id": 5,
        "calendarId": 3,
        "endDate": "2019-10-28T12:30:00.000Z",
        "startDate": "2019-10-30T01:30:00.000Z",
        "title": "Scrum Call 1"
      }, {
        "id": 6,
        "calendarId": 3,
        "endDate": "2019-10-05T03:00:00.000Z",
        "startDate": "2019-10-05T01:00:00.000Z",
        "title": "Scrum Call 2"
      }, {
        "id": 7,
        "calendarId": 4,
        "endDate": "2019-09-14T01:30:00.000Z",
        "startDate": "2019-09-13T00:30:00.000Z",
        "title": "Personal Alarm 1"
      }, {
        "id": 8,
        "calendarId": 5,
        "endDate": "2019-09-25T03:00:00.000Z",
        "startDate": "2019-09-20T01:00:00.000Z",
        "title": "Appointment..."
      }]
    })
  });

  Route.get('calendars', function ({response}) {
    response.json({
      data: [{
        "id": 1,
        "title": "Personal"
      }, {
        "id": 2,
        "title": "Office Meeting"
      }, {
        "id": 3,
        "title": "Scrum Call"
      }, {
        "id": 4,
        "title": "Personal Alarm"
      }, {
        "id": 5,
        "title": "Appointment"
      }]
    });
  });
  Route.get('pivot', function ({response}) {
    response.json({
      data: [
        {vendedor: 'Wemerson', total: 555.20, pais: 'Brasil', cliente: 'Google', ano: 2020},
        {vendedor: 'Wemerson', total: 125.20, pais: 'Brasil', cliente: 'Google', ano: 2020},
        {vendedor: 'Wemerson', total: 125.20, pais: 'Brasil', cliente: 'Google', ano: 2020},
        {vendedor: 'Felipe', total: 125.20, pais: 'Brasil', cliente: 'Dell', ano: 2020},
        {vendedor: 'Wemerson', total: 125.20, pais: 'Brasil', cliente: 'Google', ano: 2020},
        {vendedor: 'Wemerson', total: 125.20, pais: 'Brasil', cliente: 'Google', ano: 2020},
        {vendedor: 'Felipe', total: 125.20, pais: 'Brasil', cliente: 'Google', ano: 2020},
        {vendedor: 'Wemerson', total: 444.20, pais: 'Brasil', cliente: 'Dell', ano: 2020},
        {vendedor: 'Wemerson', total: 5555.20, pais: 'Brasil', cliente: 'Google', ano: 2020},
        {vendedor: 'Wemerson', total: 125.20, pais: 'Brasil', cliente: 'Google', ano: 2019},
        {vendedor: 'Maria', total: 444.20, pais: 'Brasil', cliente: 'Dell', ano: 2019},
        {vendedor: 'Felipe', total: 6666.20, pais: 'Brasil', cliente: 'Google', ano: 2019},
        {vendedor: 'Wemerson', total: 44.20, pais: 'Brasil', cliente: 'Google', ano: 2019},
        {vendedor: 'Felipe', total: 125.20, pais: 'Brasil', cliente: 'Dell', ano: 2019},
        {vendedor: 'Wemerson', total: 125.20, pais: 'Brasil', cliente: 'Dell', ano: 2019},
        {vendedor: 'Maria', total: 125.20, pais: 'Brasil', cliente: 'Google', ano: 2019},
        {vendedor: 'Wemerson', total: 125.20, pais: 'Brasil', cliente: 'Google', ano: 2019},
        {vendedor: 'Felipe', total: 125.20, pais: 'Brasil', cliente: 'Dell', ano: 2019},
        {vendedor: 'Wemerson', total: 125.20, pais: 'Brasil', cliente: 'Google', ano: 2019},
        {vendedor: 'Felipe', total: 125.20, pais: 'Brasil', cliente: 'Dell', ano: 2019},
        {vendedor: 'Wemerson', total: 125.20, pais: 'Brasil', cliente: 'Google', ano: 2019},
        {vendedor: 'Maria', total: 125.20, pais: 'Brasil', cliente: 'Google', ano: 2019},
        {vendedor: 'Wemerson', total: 555.20, pais: 'Brasil', cliente: 'Google', ano: 2019},
        {vendedor: 'Felipe', total: 125.20, pais: 'Brasil', cliente: 'Apple', ano: 2018},
        {vendedor: 'Wemerson', total: 125.20, pais: 'Brasil', cliente: 'Google', ano: 2019},
        {vendedor: 'Maria', total: 125.20, pais: 'Brasil', cliente: 'Google', ano: 2019},
        {vendedor: 'Wemerson', total: 125.20, pais: 'Brasil', cliente: 'Google', ano: 2019},
        {vendedor: 'Maria', total: 125.20, pais: 'Brasil', cliente: 'Google', ano: 2019},
        {vendedor: 'Wemerson', total: 666.20, pais: 'Brasil', cliente: 'Apple', ano: 2019},
        {vendedor: 'Maria', total: 125.20, pais: 'Brasil', cliente: 'Google', ano: 2019},
        {vendedor: 'Wemerson', total: 777.20, pais: 'Brasil', cliente: 'Google', ano: 2018},
        {vendedor: 'Maria', total: 888.20, pais: 'Brasil', cliente: 'Apple', ano: 2018}
      ]
    });
  });
}).prefix('api/v1')
//.middleware('auth')

Route.on('/').render('welcome')
