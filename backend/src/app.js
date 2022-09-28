import express from 'express'   
import authRouter from './routes/auth.routes.js'
import tasksRouter from './routes/tasks.routes.js'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())
app.use(authRouter)
app.use(tasksRouter)

export default app
