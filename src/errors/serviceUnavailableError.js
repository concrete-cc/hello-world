const BaseError = require('./baseError')

module.exports = class ServiceUnavailableError extends BaseError {
  constructor(message, options = {}) {
    super(message, options)

    this.statusCode = options.statusCode || 503
  }
}
