'use strict'

module.exports = function setupGuest (GuestModel) {
  async function createOrUpdate (guest) {
    const cond = {
      where: {
        uuid: guest.uuid
      }
    }

    const existingGuest = await GuestModel.findOne(cond)

    if (existingGuest) {
      const updated = await GuestModel.update(guest, cond)
      return updated ? GuestModel.findOne(cond) : existingGuest
    }

    const result = await GuestModel.create(guest)
    return result.toJSON()
  }

  function findById (id) {
    return GuestModel.findById(id)
  }

  function findByUuid (uuid) {
    return GuestModel.findOne({
      where: {
        uuid
      }
    })
  }

  function findAll () {
    return GuestModel.findAll()
  }

  function findAttended () {
    return GuestModel.findAll({
      where: {
        attended: true
      }
    })
  }

  function findByName (name) {
    return GuestModel.findAll({
      where: {
        name
      }
    })
  }

  return {
    createOrUpdate,
    findById,
    findByUuid,
    findAll,
    findAttended,
    findByName
  }
}
