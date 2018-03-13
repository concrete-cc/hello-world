const joiToJsonSchema = require('./utils/joiToJsonSchema')
const joi = require('joi')

module.exports = {
  swagger: '2.0',
  info: {
    title: 'Tasks Query API Service',
    version: '1.0.0',
  },
  definitions: {
    Error: joiToJsonSchema(joi.object().keys({
      message: joi.string().required(),
    })),
  },
  paths: {},
}
