const config = require('config')
const x509 = require('x509')
const fs = require('fs')
const log = require('./log')

function getHttpsAgentOptions(configProvider) {
  // This allows us to use a custom SSL certificate when making HTTPS requests:
  // See https://nodejs.org/api/https.html#https_https_request_options_callback or
  // https://www.npmjs.com/package/request#tlsssl-protocol for details
  const httpsAgentOptions = {}

  if (configProvider.has('https.concreteCustomCertificate')) {
    const certFilePath = configProvider.get('https.concreteCustomCertificate')
    try {
      const cert = fs.readFileSync(certFilePath).toString()
      x509.parseCert(cert)
      httpsAgentOptions.ca = cert
      log.info(`Successfully parsed SSL certificate file from ${certFilePath}`)
    } catch (err) {
      log.error('Cannot read SSL certificate file:', err)
    }
  } else {
    log.info('No custom SSL certificates defined. Skipping.')
  }

  return httpsAgentOptions
}

module.exports = {
  getHttpsAgentOptions,
  httpsAgentOptions: getHttpsAgentOptions(config),
}
