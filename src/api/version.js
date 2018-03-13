const nodeEmoji = require('node-emoji')
const config = require('config')

module.exports = {
  GET,
}

function GET(req, res) {
  res.send(`HELLO WORLD! ${config.get('server.buildVersion')} ${nodeEmoji.random().emoji}`)
}

GET.apiDoc = {
  summary: 'Get the version of the service',
  operationId: 'version',
  responses: {
    200: {
      description: 'Use this to check that the latest code has been deployed',
    },
  },
}
