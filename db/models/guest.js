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
      defaultValue: false
    },
    accompanist: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    hotel: {
      type: Sequelize.STRING,
      allowNull: false
    },
    invoice: {
      type: Sequelize.STRING,
      allowNull: false
    },
    bus: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    attended: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  })
}
