'use strict'

const debug = require('debug')('servicio-event:api:routes')
const express = require('express')
const asyncify = require('express-asyncify')
// const auth = require('express-jwt')
// const guard = require('express-jwt-permissions')()
const db = require('db')

const config = require('./config')

const api = asyncify(express.Router())

const cors = require("cors")

let services, Guest

api.use(cors())
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

  const jsonGuests = {
    guests: guests
  }
  

  console.log('--guests--')
  console.log(jsonGuests)


  res.send(jsonGuests)
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

api.get('/guest/delete/:uuid', async (req, res, next) => {
  const { uuid } = req.params

  debug(`request to /guest/delete/${uuid}`)

  try {
    await Guest.deleteByUuid(uuid)
  } catch (e) {
    return next(e)
  }


  res.send(`Got a DELETE request at /${uuid}`)
})

api.get('/guest/update/:uuid/:name/:accompanied/:accompanist/:email/:hotel/:invoice/:attended', async (req, res, next) => {
  const { uuid, name, accompanied, accompanist, email, hotel, invoice, attended } = req.params

  debug(`request to /guest/${uuid}`)

  let guest
  try {
    guest = await Guest.findByUuid(uuid)
    if(guest){
      Guest.createOrUpdate({
        uuid: uuid,
        name: name,
        accompanied: accompanied,
        accompanist: accompanist,
        email: email,
        hotel: hotel,
        invoice: invoice,
        attended: attended
      })
    }
  } catch (e) {
    return next(e)
  }

  if (!guest) {
    return next(new Error(`Guest not found with uuid ${uuid}`))
  }

  res.send(guest)
})

api.get('/guest/create/:name/:accompanied/:accompanist/:email/:hotel/:invoice/:attended', async (req, res, next) => {
  const { name, accompanied, accompanist, email, hotel, invoice, attended} = req.params

  debug(`request to /guest/create`)

  let guest
  try {
    guest = await Guest.create({
        name: name,
        accompanied: accompanied,
        accompanist: accompanist,
        email: email,
        hotel: hotel,
        invoice: invoice,
        attended: attended
      })
  } catch (e) {
    return next(e)
  }

  res.send(guest)
})

module.exports = api
