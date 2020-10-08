'use strict'

/*
|--------------------------------------------------------------------------
| SetupSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class SetupSeeder {
  async run() {

    const months = await Database
      .from('months')
      .insert([
          {order: '01', short_name: 'JAN', month_name: 'Janeiro'},
          {order: '02', short_name: 'FEV', month_name: 'Fevereiro'},
          {order: '03', short_name: 'MAR', month_name: 'Março'},
          {order: '04', short_name: 'ABR', month_name: 'Abril'},
          {order: '05', short_name: 'MAI', month_name: 'Maio'},
          {order: '06', short_name: 'JUN', month_name: 'Junho'},
          {order: '07', short_name: 'JUL', month_name: 'Julho'},
          {order: '08', short_name: 'AGO', month_name: 'Agosto'},
          {order: '09', short_name: 'SET', month_name: 'Setembro'},
          {order: '10', short_name: 'OUT', month_name: 'Outubro'},
          {order: '11', short_name: 'NOV', month_name: 'Novembro'},
          {order: '12', short_name: 'DEZ', month_name: 'Dezembro'}
        ]
      );

  }
}

module.exports = SetupSeeder
