import { Request, Response } from 'express'

import userBusiness from '../../business/user'

const findUser = async (req: Request, res: Response): Promise<any> => {
  const { email } = req.params

  try {
    const result = await userBusiness.findUser(email)

    if (result.email !== undefined) {
      return res.json({
        user: result
      })
    } else {
      return res.status(400).json({
        message: 'Nenhum usuário encontrado.'
      })
    }
  } catch (error) {
    console.error(error)
    return res.status(400).json({
      message: error.message ?? 'Ocorreu um erro inesperado. Tente novamente!'
    })
  }
}

const createUser = async (req: Request, res: Response): Promise<any> => {
  const { email, name } = req.body

  try {
    const result = await userBusiness.createUser(email, name)

    if (result !== undefined) {
      return res.json({
        message: 'Usuário criado com sucesso.'
      })
    } else {
      return res.status(400).json({
        message: 'Não foi possivel criar o usuário.'
      })
    }
  } catch (error) {
    console.error(error)
    return res.status(400).json({
      message: error.message ?? 'Ocorreu um erro inesperado. Tente novamente!'
    })
  }
}

export default {
  findUser,
  createUser
}
