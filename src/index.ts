import express from 'express'
const app = express()

app.use(express.json())

const PORT = 3001

app.get('/ping', (_req, res) => {
  console.log('someone has pinged here')
  res.send('pong')
})

// app.get('api/v1/tasks')    - get all the tasks
// app.post('api/v1/tasks')   - create a new task
// app.get('api/v1/tasks')    - get single task
// app.patch('api/v1/tasks')  - update task
// app.delete('api/v1/tasks') - delete task

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
