'use strict'

const debug = require('debug')('servicio-event:api:routes')
const express = require('express')
const asyncify = require('express-asyncify')
const auth = require('express-jwt')
const guard = require('express-jwt-permissions')()
const db = require('db')

const config = require('./config')

const api = asyncify(express.Router())

let services, Guest

api.use('*', async (req, res, next) => {
  if (!services) {
    debug('Connecting to database')
    try {
      services = await db(config.db)
    } catch (e) {
      return next(e)
    }
    Guest = services.Guest
  }
  next()
})

api.get('/', function (req, res, next) {
  res.send('hello world')
})

api.get('/guests', async (req, res, next) => {
  debug('A request has come to /guests')

  const guests = await Guest.findAll()
  console.log('--guests--')
  console.log(guests)

  res.send(guests)
})

api.get('/guest/:uuid', async (req, res, next) => {
  const { uuid } = req.params

  debug(`request to /guest/${uuid}`)

  let guest
  try {
    guest = await Guest.findByUuid(uuid)
  } catch (e) {
    return next(e)
  }

  if (!guest) {
    return next(new Error(`Guest not found with uuid ${uuid}`))
  }

  res.send(guest)
})

module.exports = api