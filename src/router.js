const health = require('./api/health')
const version = require('./api/version')

module.exports = [
  { path: '/', module: version },
  { path: '/health', module: health },
]
