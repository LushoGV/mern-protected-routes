import {Router} from 'express'
import {login, signIn} from '../controllers/auth.controllers.js'

const router = Router()

router.post('/login', login)
router.post('/register', signIn)

export default router