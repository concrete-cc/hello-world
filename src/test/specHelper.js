const supertestAsPromised = require('supertest')
const Server = require('../server')
const log = require('../infra/log')

let serverConfig

async function startServer() {
  if (serverConfig) {
    return serverConfig
  }

  const server = await Server.start()
  const supertest = supertestAsPromised.agent(server)

  serverConfig = {
    supertest,
    log,
    server,
  }

  return serverConfig
}

function stopServer() {
  return Server.stop()
}

function handleAgentError(err) {
  log.error(err.message)

  if (err.response) {
    log.error(`(${err.response.status})`, err.response.body)
  }

  throw err
}

const wrap = fn => (...args) => fn(...args).catch(args[2])

module.exports = {
  startServer,
  stopServer,
  log,
  handleAgentError,
  wrap,
}
