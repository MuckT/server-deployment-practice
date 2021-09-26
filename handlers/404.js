'use strict'

// Define not found handler
const notFoundHandler = (req, res) => {
  res.status(404).send({
    error: 404,
    route: req.path,
    message: 'Not Found!'
  })
} 

// Export function(s)
module.exports = {
  handler: notFoundHandler
}