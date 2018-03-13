const Rollbar = require('rollbar')
const newrelic = require('newrelic')
const log = require('../infra/log')
const config = require('config')

const rollbar = Rollbar.init(config.get('performance.rollbar'))

function tellNewRelicAboutError(err) {
  if (config.get('performance.newrelic.agent_enabled')) {
    newrelic.noticeError(err)
  }
}

function tellRollbarAboutError(err) {
  if (config.get('performance.rollbar.enabled')) {
    rollbar.error(err)
  }
}

// eslint-disable-next-line no-unused-vars
module.exports = (err, req, res, next) => {
  log.error(err)
  tellNewRelicAboutError(err)
  tellRollbarAboutError(err)

  if (process.env.NODE_ENV === 'production') {
    // eslint-disable-next-line no-param-reassign
    delete err.stack
  }

  res.status(err.statusCode || 500).json(err)
}
