'use strict'

const supertest = require('supertest')
const server = require('../server')
const request = supertest(server.app)

describe('Given GET / ', () => {
  describe('When requested', () => {
    it('Then returns 200 status', async () => {
      const response = await request.get('/')
      expect(response.status).toEqual(200)
    })

    it('Then response body \'Hello World!\'', async () => {
      const response = await request.get('/')
      expect(response.text).toEqual('Hello World!')
    })
  })
})

describe('Given GET /iDoNotExist', () => {
  describe('When requested', () => {
    it('Then returns 404 status', async () => {
      const response = await request.get('/iDoNotExist')
      expect(response.status).toEqual(404)
    })

    it('Then returns error message', async () => {
      const response = await request.get('/iDoNotExist')
      expect(response.body.message).toEqual('Not Found!')
    })
  })
})

describe('Given GET /bad', () => {
  describe('When requested', () => {
    it('Then returns 500 status', async () => {
      const response = await request.get('/bad')
      expect(response.status).toEqual(500)
    })

    it('Then returns correct error obj', async () => {
      const response = await request.get('/bad')
      expect(response.body.error).toEqual('you\'ve messsed up')
      expect(response.body.time).toBeCloseTo(+new Date, -1)
      expect(response.body.route).toEqual('/bad')
      expect(response.body.query).toEqual({})
    })
  })
})

describe('Given GET /data', () => {
  describe('When requested', () => {
    it('Then returns 200 status', async() => {
      const response = await request.get('/data')
      expect(response.status).toEqual(200)
    })

    it('Then response obj is correct', async() => {
      const response = await request.get('/data')
      expect(response.body.action).toEqual('Give snacks')
      expect(response.body.toWhom).toEqual('yourself')
      expect(response.body.time).toBeCloseTo(+new Date, -1)
    })
  })
})
