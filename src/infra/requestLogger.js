const morgan = require('morgan')
const logger = require('./log')

logger.stream = {
  write(message) {
    logger.info(message)
  },
}

module.exports = morgan('combined',
  {
    stream: logger.stream,
  })
