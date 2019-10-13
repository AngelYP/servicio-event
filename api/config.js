'use strict'

const debug = require('debug')('servicio-event:api:db')

module.exports = {
  db: {
    database: process.env.DB_NAME || 'servicio_event',
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASS || 'uli',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    logging: s => debug(s)
  },
  auth: {
    secret: process.env.SECRET || 'event'
  }
}
