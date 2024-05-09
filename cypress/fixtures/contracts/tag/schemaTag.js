const Joi = require('joi')

const schemaResponse200Tag = Joi.object({
    data: Joi.array()
      .items(
        Joi.string().allow(''), 
        Joi.string().allow(null) 
    )
})

const schemaResponse200TagByPost = Joi.object({
  data: Joi.array().items(Joi.object({
    id: Joi.string().required(),
    image: Joi.string().uri().required(),
    likes: Joi.number().integer().min(0).required(),
    tags: Joi.array().items(Joi.string()).required(),
    text: Joi.string().required(),
    publishDate: Joi.date().iso().required(),
    updatedDate: Joi.date().iso().optional(),
    owner: Joi.object({
      id: Joi.string().required(),
      title: Joi.string(),
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      picture: Joi.string().uri().optional()
    }).required()
  })).required(),
  total: Joi.number().integer().min(0).required(),
  page: Joi.number().integer().min(0).required(),
  limit: Joi.number().integer().min(0).required()
})

module.exports = { schemaResponse200Tag, schemaResponse200TagByPost }