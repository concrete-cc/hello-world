const health = require('microhealth')

module.exports = {
  GET,
}

function GET(req, res) {
  health.route(req, res)
}

GET.apiDoc = {
  summary: 'Get the health of the service',
  operationId: 'health',
  responses: {
    200: {
      description: 'A confirmation that everything is OK',
    },
  },
}
