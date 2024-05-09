const Joi = require('joi')

const schemaResponse200User = Joi.object({
  id: Joi.string().required(),
  title: Joi.string().valid('mr', 'mrs', 'miss').required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email({ tlds: { allow: false } }).required(),
  registerDate: Joi.date().iso().required(),
  updatedDate: Joi.date().iso().required()
})

const schemaResponseErrorUser = Joi.object({
  error: Joi.string().required()
})

module.exports = { schemaResponse200User, schemaResponseErrorUser }