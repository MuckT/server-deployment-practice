'use strict'

const supertest = require('supertest')
const server = require('../server')
const request = supertest(server.app)

describe('Given GET / ', () => {
  describe('When requested', () => {
    it('Then response body \'Hello World!\'', async() => {
      const response = await request.get('/')
      expect(response.text).toEqual('Hello World!')
    })

    it('Then returns 200 status', async() => {
      const response = await request.get('/')
      expect(response.status).toEqual(200)
    })
  })
})

describe('Given GET /iDoNotExist', () => {
  describe('When requested', () => {
    it('Then returns 404 status', async() => {
      const response = await request.get('/iDoNotExist')
      expect(response.status).toEqual(404)
    })

    it('Then returns error message', async() => {
      const response = await request.get('/iDoNotExist')
      expect(response.body.message).toEqual('Not Found!')
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
      expect(response.body).toEqual({action:"Give snacks",toWhom:"yourself"});
    })
  })
})
