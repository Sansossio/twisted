const {
  describe,
  it
} = require('mocha')
const { expect } = require('chai')
const { restore, stub } = require('sinon')
const httpStatus = require('http-status-codes')
const { SpectatorApi } = require('../../../src/apis/lol/spectator/spectator')

describe('Spectator API', () => {
  describe('Active game', () => {
    it('Should return error message if dont exists an active game', async () => {
      stub(SpectatorApi.prototype, 'request').callsFake(() => {
        const error = new Error()
        error.statusCode = httpStatus.NOT_FOUND
        throw error
      })
      try {
        const api = new SpectatorApi()
        const response = await api.activeGame()
        expect(response).to.haveOwnProperty('message')
      } finally {
        restore()
      }
    })
    it('Should throw error with another status code errors', (done) => {
      stub(SpectatorApi.prototype, 'request').callsFake(() => {
        const error = new Error()
        error.statusCode = httpStatus.FORBIDDEN
        throw error
      })
      const api = new SpectatorApi()
      api.activeGame()
        .then(() => done(new Error('Bad error handler response')))
        .catch(() => done())
        .finally(() => restore())
    })
  })
})
