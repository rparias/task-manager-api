import { Request, Response } from 'express'

export const getAllTasks = (_req: Request, res: Response): void => {
  res.send('get all tasks')
}

export const getTask = (_req: Request, res: Response): void => {
  res.send('get single task')
}

export const createTask = (_req: Request, res: Response): void => {
  res.send('create task')
}

export const updateTask = (_req: Request, res: Response): void => {
  res.send('update task')
}

export const deleteTask = (_req: Request, res: Response): void => {
  res.send('delete task')
}
