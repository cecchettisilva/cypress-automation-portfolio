const Joi = require('joi')

const schemaResponse200CreateComment = Joi.object({
    id: Joi.string().required(),
    message: Joi.string().required(),
    owner: Joi.object({
      id: Joi.string().required(),
      title: Joi.string().required(),
      firstName: Joi.string().required(),
      lastName: Joi.string().required()
    }).required(),
    post: Joi.string().required(),
    publishDate: Joi.string().isoDate().required()
})

const dataItemSchema = Joi.object({
    id: Joi.string().required(),
    title: Joi.string().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    picture: Joi.string().uri().required()
})
  
const schemaResponseGetListComment = Joi.object({
    data: Joi.array().items(dataItemSchema).required(),
    total: Joi.number().required(),
    page: Joi.number().required(),
    limit: Joi.number().required()
})

const schemaResponseErrorComment = Joi.object({
  error: Joi.string().required(),
  data: Joi.object({
    likes: Joi.number()
  }).allow(Joi.optional)
})

const ownerSchema = Joi.object({
  id: Joi.string().required(),
  title: Joi.string().allow('').optional(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required()
})

const dataSchema = Joi.object({
  id: Joi.string().required(),
  image: Joi.string(),
  likes: Joi.number().integer().required(),
  tags: Joi.array().items(Joi.string()).required(),
  text: Joi.string().required(),
  publishDate: Joi.date().iso().required(),
  updatedDate: Joi.date().iso().required(),
  owner: ownerSchema.required()
})

const schemaResponse200CommentByUserPost = Joi.object({
  data: Joi.array().items(dataSchema).required(),
  total: Joi.number().integer().required(),
  page: Joi.number().integer().required(),
  limit: Joi.number().integer().required()
})

module.exports = { schemaResponse200CreateComment, schemaResponseErrorComment, schemaResponseGetListComment, schemaResponse200CommentByUserPost }