const BaseError = require('./baseError')

module.exports = class ServerError extends BaseError {
  constructor(message, options = {}) {
    super(message, options)

    this.statusCode = options.statusCode || 500
  }
}
