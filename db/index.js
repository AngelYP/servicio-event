'use strict'

const setupDatabase = require('./lib/db')
const setupGuestModel = require('./models/guest')
const setupGuest = require('./lib/guest')
const defaults = require('defaults')
module.exports = async function (config) {
  config = defaults(config, {
    dialect: 'sqlite',
    pool: {
      max: 10,
      min: 0,
      idle: 10000
    },
    query: {
      raw: true
    }
  })
  const sequelize = setupDatabase(config)
  const GuestModel = setupGuestModel(config)

  await sequelize.authenticate()

  if (config.setup) {
    await sequelize.sync({ force: true })
  }

  const Guest = setupGuest(GuestModel)

  return {
    Guest
  }
}
