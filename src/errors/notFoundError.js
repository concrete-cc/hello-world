const BaseError = require('./baseError')

module.exports = class NotFoundError extends BaseError {
  constructor(message, options = {}) {
    super(message, options)

    this.statusCode = options.statusCode || 404
  }
}
