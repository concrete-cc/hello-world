module.exports = class BaseError extends Error {
  constructor(message, options = {}) {
    super(message)

    this.name = this.constructor.name
    this.statusCode = options.statusCode || 500

    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, this.constructor)
    } else {
      this.stack = (new Error(message)).stack
    }
  }
}
