'use strict'

const getTimestamp = (req, res, next) => {
  let stamp = +new Date
  req.timestamp = stamp
  // console.log(`Unix Timestamp: ${stamp}`)
  next()
}

module.exports = {
  logTime: getTimestamp
}