'use strict'

const getTimeStamp = (req, res, next) => {
  let stamp = +new Date
  console.log(`Unix Timestamp: ${stamp}`)
  next()
}

module.exports = {
  logTime: getTimeStamp
}