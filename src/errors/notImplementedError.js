const BaseError = require('./baseError')

module.exports = class NotImplementedError extends BaseError {
  constructor(message, options = {}) {
    super(message, options)

    this.statusCode = options.statusCode || 501
  }
}
