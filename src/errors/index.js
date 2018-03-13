const AccessError = require('./accessError')
const AuthError = require('./authError')
const ConflictError = require('./conflictError')
const DuplicateError = require('./duplicateError')
const NotFoundError = require('./notFoundError')
const NotImplementedError = require('./notImplementedError')
const ServerError = require('./serverError')
const ServiceUnavailableError = require('./serviceUnavailableError')
const ValidationError = require('./validationError')
const BaseError = require('./baseError')

module.exports = {
  BaseError,
  AccessError,
  AuthError,
  ConflictError,
  DuplicateError,
  NotFoundError,
  NotImplementedError,
  ServerError,
  ServiceUnavailableError,
  ValidationError,
}
