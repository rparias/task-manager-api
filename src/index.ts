import express from 'express'
import tasksRouter from './routes/tasks'
import connectDB from './db/connect'
import 'dotenv/config'

const app = express()

app.use(express.json())

app.get('/ping', (_req, res) => {
  console.log('someone has pinged here')
  res.send('pong')
})

app.use('/api/v1/tasks', tasksRouter)

// app.get('api/v1/tasks')    - get all the tasks
// app.post('api/v1/tasks')   - create a new task
// app.get('api/v1/tasks')    - get single task
// app.patch('api/v1/tasks')  - update task
// app.delete('api/v1/tasks') - delete task

const PORT = 3001

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

const db = process.env.DB_CONN_STRING ?? null
if (db !== null) {
  connectDB({ db })
}
