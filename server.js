'use strict'

// Require expect & cors
const express = require('express')

// Assign to app 
const app = express()

// Import handlers
const notFound = require('./handlers/404')
const error = require('./handlers/500')
const logger = require('./middleware/logger')

// Routes
app.get('/', logger.logTime,  (req, res) => {
  res.status(200).send("Hello World!")
})

app.get('/data', logger.logTime, (req, res) => {
  let outPut = {
    action: 'Give snacks',
    toWhom: 'yourself',
    time: req.timestamp
  }
  res.status(200).json(outPut);
})

// Use handlers
app.use('*', notFound.handler)
app.use(error.handler)

// Use middleware
app.use(logger.logTime)

// Export modules
module.exports = {
  app: app,
  start: (port) => app.listen(port, console.log(`Server is up and running on port: ${port}`)),
}