const BaseError = require('./baseError')

module.exports = class DuplicateError extends BaseError {
  constructor(message, options = {}) {
    super(message, options)

    this.statusCode = options.statusCode || 409
  }
}
