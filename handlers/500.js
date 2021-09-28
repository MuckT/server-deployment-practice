'use strict'

// Define error handler
const errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.json(
    { 
      error: err,
      time: req.timestamp,
      route: req.path,
      query: req.query,
      body: req.body,
    }
  )
}

// Export function(s)
module.exports = {
  handler: errorHandler
}
