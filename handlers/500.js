'use strict'

// Define error handler
const errorHandler = (req, res, error) => {
  res.status(500).send({
    error: 500,
    route: route.path,
    query: req.query,
    body: req.body,
    message: `Server Error: ${error.message}`
  })
}

// Export function(s)
module.exports = {
  handler: errorHandler
}