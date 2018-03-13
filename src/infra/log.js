const anotherlog = require('anotherlog')
const packageJson = require('../../package.json')

const log = anotherlog(packageJson.name)

// TODO: Default console formatter hides stacktrace, possibly bug in winston?
delete log.transports.console.formatter

module.exports = log
