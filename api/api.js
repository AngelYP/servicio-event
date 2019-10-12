'use strict'

const debug = require('debug')('servicio-event:api:routes')
const express = require('express')
const asyncify = require('express-asyncify')
const auth = require('express-jwt')
const guard = require('express-jwt-permissions')()
//const db = require('db')

const config = require('./config')

const api = asyncify(express.Router())

let services

api.use('*', async (req, res, next) => {
  if (!services) {
    debug('Connecting to database')
    try {
      //services = await db(config.db)
    } catch (e) {
      return next(e)
    }

  }
  next()
})

api.get('/', function (req, res, next) {
  res.send('hello world')
})

api.get('/tests', auth(config.auth), async (req, res, next) => {
  debug('A request has come to /tests')

/*
  const { user } = req

  if (!user || !user.username) {
    return next(new Error('Not authorized'))
  }

  let agents = []
  try {
    if (user.admin) {
      agents = await Agent.findConnected()
    } else {
      agents = await Agent.findByUsername(user.username)
    }
  } catch (e) {
    return next(e)
  }
*/
  res.send('Authorized')
})


module.exports = api
