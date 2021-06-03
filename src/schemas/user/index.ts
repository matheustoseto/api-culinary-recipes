import Joi from 'joi'

const findUser = {
  validate: {
    params: Joi.object({
      email: Joi
        .string()
        .email()
        .required()
    })
  }
}

const createUser = {
  validate: {
    body: Joi.object({
      email: Joi
        .string()
        .email()
        .required(),
      name: Joi
        .string()
        .required()
    })
  }
}

export default {
  findUser,
  createUser
}
