import { RequestHandler } from 'express'
import { createValidator } from 'express-joi-validation'
import JoiSchema from 'interfaces/JoiSchema'

const validator = createValidator({
  passError: true
})

export default (schema: JoiSchema): RequestHandler[] => {
  const validation: RequestHandler[] = []

  if ((schema?.validate?.headers) !== undefined) validation.push(validator.headers(schema.validate.headers))
  if ((schema?.validate?.body) !== undefined) validation.push(validator.body(schema.validate.body))
  if ((schema?.validate?.query) !== undefined) validation.push(validator.query(schema.validate.query))
  if ((schema?.validate?.params) !== undefined) validation.push(validator.params(schema.validate.params))

  return validation
}
