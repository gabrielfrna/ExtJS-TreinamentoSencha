'use strict'

const { hooks } = require('@adonisjs/ignitor')

hooks.after.providersBooted(() => {
  const View = use('View')
  const Env = use('Env')
  const Exception = use('Exception')

  const Config = use('Config')

  View.global('config', function (key) {
    return Config.get(key)
  })

  View.global('appUrl', path => {
    const APP_URL = Env.get('APP_URL')

    return path ? `${APP_URL}/${path}` : APP_URL
  })

  View.global('webAppUrl', path => {
    const WEBAPP_URL = Env.get('WEBAPP_URL')

    return path ? `${WEBAPP_URL}/${path}` : WEBAPP_URL
  })

  // handle `InvalidSessionException`
  Exception.handle('InvalidSessionException', (error, { response }) => {
    return response.redirect('/login')
  })
})
