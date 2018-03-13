const BaseError = require('./baseError')

module.exports = class ConflictError extends BaseError {
  constructor(message, options = {}) {
    super(message, options)

    this.statusCode = options.statusCode || 409
  }
}
