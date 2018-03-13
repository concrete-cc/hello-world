const os = require('os')

const ErrorBase = require('./baseError')

module.exports = class AuthError extends ErrorBase {
  constructor(message, options = {}) {
    super(message, options)

    this.statusCode = options.statusCode || 401
    this.details = options.details || {}
  }

  toString() {
    return Array.of(
      `Message: ${this.message}`,
      `Details: ${this.details}`,
      `Stack: ${this.stack}`,
    ).join(os.EOL)
  }
}
