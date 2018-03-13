const BaseError = require('./baseError')

module.exports = class ValidationError extends BaseError {
  constructor(message, options = {}) {
    super(message, options)

    this.statusCode = options.statusCode || 400
  }
}
