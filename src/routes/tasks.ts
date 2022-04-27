import express from 'express'
import { getAllTasks } from '../controllers/tasksController'

const router = express.Router()

router.get('/', (req, res) => {
  getAllTasks(req, res)
})

export default router
