import { Request, Response } from 'express'

export const getAllTasks = (_req: Request, res: Response): void => {
  res.send('all items from controller')
}
