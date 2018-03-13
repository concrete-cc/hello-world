const joiToSchema = require('joi-to-json-schema')

module.exports = function convertToJsonSchema(joiSchema) {
  const jsonSchema = joiToSchema(joiSchema)
  delete jsonSchema.patterns
  return jsonSchema
}
