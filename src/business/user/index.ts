import AWS from '../../services/aws'

const dynamoDB = new AWS.DynamoDB()

const findUser = async (email: string): Promise<any> => {
  const params = {
    TableName: 'api-culinary-recipes-user',
    KeyConditionExpression: 'email = :email',
    ExpressionAttributeValues: {
      ':email': { S: `${email}` }
    }
  }

  const result = await dynamoDB
    .query(params)
    .promise()
    .then((data) => {
      const { Items } = data
      const item = Items?.[0]
      return {
        email: item?.email.S,
        name: item?.name.S
      }
    })
    .catch((err) => {
      throw err
    })

  return result
}

const createUser = async (email: string, name: string): Promise<any> => {
  const { email: existUser } = await findUser(email)

  if (existUser !== undefined) {
    throw Error('Já existe um usuário com esse E-Mail.')
  }

  const params = {
    TableName: 'api-culinary-recipes-user',
    Item: {
      email: { S: `${email}` },
      name: { S: `${name}` }
    }
  }

  const result = await dynamoDB
    .putItem(params)
    .promise()
    .then((data) => {
      return data
    })
    .catch((err) => {
      throw err
    })

  return result
}

export default {
  findUser,
  createUser
}
