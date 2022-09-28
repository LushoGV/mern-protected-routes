import {Router} from 'express'
import {verify} from '../controllers/verifyToken.js'
import {getTask, getTasks, createTask, updateTask ,removeTask} from '../controllers/tasks.controllers.js'

const router = Router()

router.get('/getTask/:idTask', verify, getTask)
router.get('/getTasks', verify, getTasks)
router.post('/addTask', verify, createTask)
router.put('/edit/:idTask', verify, updateTask)
router.delete('/delete/:idTask', verify, removeTask)

export default router