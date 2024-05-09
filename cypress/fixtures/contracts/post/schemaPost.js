const Joi = require('joi')

const schemaResponse200Post = Joi.object({
  id: Joi.string().required(),
  image: Joi.string().uri().required(),
  likes: Joi.number().required(),
  link: Joi.string().allow('').optional(),
  tags: Joi.array().items(Joi.string()).required(),
  text: Joi.string().required(),
  publishDate: Joi.string().isoDate().required(),
  updatedDate: Joi.string().isoDate().required(),
  owner: Joi.object({
    id: Joi.string().required(),
    title: Joi.string().optional(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required()
  }).required()
})

const schemaResponseErrorPost = Joi.object({
  error: Joi.string().required(),
  data: Joi.object({
    likes: Joi.number()
  }).allow(Joi.optional)
})

module.exports = { schemaResponse200Post, schemaResponseErrorPost }