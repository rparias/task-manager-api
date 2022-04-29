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

export const getTask = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id: taskID } = req.params
    const task = await Task.findOne({ _id: taskID })
    if (task == null) {
      res.status(404).json({ msg: `No task with id: ${taskID}` })
    } else {
      res.status(201).json({ task })
    }
  } catch (error: any) {
    res.status(500).json({ msg: error })
  }
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

export const updateTask = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id: taskId } = req.params
    const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
      new: true,
      runValidators: true,
    })
    if (task == null) {
      res.status(404).json({ msg: `No task with id: ${taskId}` })
    }
    res.status(200).json({ task })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

export const deleteTask = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id: taskId } = req.params
    const task = await Task.findOneAndDelete({ _id: taskId })
    if (task == null) {
      res.status(404).json({ msg: `No task with id: ${taskId}` })
    }
    res.status(200).json({ task })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}
