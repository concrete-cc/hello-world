global.Promise = require('bluebird')

const log = require('./infra/log')
const { start } = require('./server')

function wrapWithErrorLogger(fn) {
  return () => fn().catch((err) => {
    log.error(err)
  })
}

wrapWithErrorLogger(() => start())()
