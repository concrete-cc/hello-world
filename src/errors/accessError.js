const BaseError = require('./baseError')

module.exports = class AccessError extends BaseError {
  constructor(message, options = {}) {
    super(message, options)

    this.statusCode = options.statusCode || 403
  }
}
