'use strict'

const debug = require('debug')('servicio-event:api:db')

module.exports = {
  db: {
    database: process.env.DB_NAME || 'servicio_event',
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
    logging: s => debug(s)
  },
  auth: {
    secret: process.env.SECRET || 'event'
  }
}
