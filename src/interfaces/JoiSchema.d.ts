import Joi from 'joi'

interface Validate {
  headers?: Joi.Schema
  body?: Joi.Schema
  query?: Joi.Schema
  params?: Joi.Schema
}

interface Schema {
  validate: Validate
}

export default Schema
