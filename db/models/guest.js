'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupGuestModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('guest', {
    uuid: {
      type: Sequelize.STRING,
      allowNull: false
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    accompanied: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    accompanist: {
      type: Sequelize.STRING,
      allowNull: true
    },
    email: {
      type: Sequelize.STRING,
      allowNull: true
    },
    hotel: {
      type: Sequelize.STRING,
      allowNull: true
    },
    invoice: {
      type: Sequelize.STRING,
      allowNull: true
    },
    bus: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    attended: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  })
}
