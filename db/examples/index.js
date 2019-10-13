'use strict'

const db = require('../')

async function run() {
  const config = {
    database: process.env.DB_NAME || 'servicio_event',
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASS || 'uli',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
  }

  const { Guest } = await db(config).catch(handleFatalError)

  const guest = await Guest.createOrUpdate({
    uuid: '1',
    name: 'Diego Ulises Martínez',
    accompanied: false,
    accompanist: '',
    email: '15121185@tecmor.mx',
    hotel: 'Holiday In',
    invoice: 'OP226',
    bus: 1,
    attended: true
  }).catch(handleFatalError)

  console.log('--guest--')
  console.log(guest)

  const guest1 = await Guest.createOrUpdate({
    uuid: '2',
    name: 'Takeshi Nakamura',
    accompanied: true,
    accompanist: 'Jafet',
    email: 'g.t.n.ramirez@gmail.com',
    hotel: 'FIESTA INN ALTOZANO',
    invoice: 'OP214',
    bus: 1,
    attended: true
  }).catch(handleFatalError)

  console.log('--guest--')
  console.log(guest1)

  const guest2 = await Guest.createOrUpdate({
    uuid: '3',
    name: 'Angel Yañez Pérez',
    accompanied: true,
    accompanist: 'Alan Carrasco',
    email: 'tronkitos@gmail.com',
    hotel: 'HORIZON',
    invoice: 'OP216',
    bus: 2,
    attended: false
  }).catch(handleFatalError)

  console.log('--guest--')
  console.log(guest2)

  const guests = await Guest.findAll().catch(handleFatalError)
  console.log('--guests--')
  console.log(guests)
}

function handleFatalError (err) {
    console.error(err.message)
    console.error(err.stack)
    process.exit(1)
}

run()