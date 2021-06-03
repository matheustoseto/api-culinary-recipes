import { Router } from 'express'

import JoiValidate from '../../middlewares/JoiValidate'
import userController from '../../controllers/user'
import userSchema from '../../schemas/user'

const router = Router()

router.get('/user/:email', JoiValidate(userSchema.findUser), userController.findUser)
router.post('/user', JoiValidate(userSchema.createUser), userController.createUser)

export default router
