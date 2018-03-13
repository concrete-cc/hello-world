require('newrelic')
const config = require('config')
const express = require('express')

global.Promise = require('bluebird')

const boom = require('express-boom')
const bodyParser = require('body-parser')
const openapi = require('express-openapi')

const requestLogger = require('./infra/requestLogger')
const log = require('./infra/log')

const apiDoc = require('./apiDoc')
const paths = require('./router')

const errorHandler = require('./middleware/errorHandler')

const app = express()

if (app.get('env') === 'development') {
  app.set('json spaces', 2)
}

app.set('x-powered-by', false)
app.enable('trust proxy')
app.use(boom())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({ limit: config.get('server.jsonBodyLimit') }))

app.use(requestLogger)

openapi.initialize({
  app,
  docsPath: '/swagger',
  exposeApiDocs: true,
  apiDoc,
  consumesMiddleware: {
    'application/json': bodyParser.json({
      limit: config.get('server.jsonBodyLimit'),
    }),
    'application/x-www-form-urlencoded': bodyParser.urlencoded({
      extended: false,
    }),
  },
  paths,
})

app.use(errorHandler)

let server

module.exports = {
  async start() {
    return new Promise((resolve) => {
      server = app.listen(config.get('server.port'), () => {
        log.info(`App: Server is running on port ${config.get('server.port')}`)
      })

      return resolve(app)
    })
  },
  stop() {
    return server.close()
  },
}
