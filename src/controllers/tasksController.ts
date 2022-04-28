import { Request, Response } from 'express'
import Task, { ITask } from '../models/Task'

export const getAllTasks = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const tasks = await Task.find({})
    res.status(201).json({ tasks })
  } catch (error: any) {
    res.status(500).json({ msg: error })
  }
}

export const getTask = (_req: Request, res: Response): void => {
  res.send('get single task')
}

export const createTask = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const task: ITask = await Task.create(req.body)
    res.status(201).json({ task })
  } catch (error: any) {
    res.status(500).json({ msg: error })
  }
}

export const updateTask = (_req: Request, res: Response): void => {
  res.send('update task')
}

export const deleteTask = (_req: Request, res: Response): void => {
  res.send('delete task')
}
