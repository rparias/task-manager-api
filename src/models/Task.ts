import mongoose, { Schema, Document } from 'mongoose'

export interface ITask extends Document {
  name: string
  completed: boolean
}

// only the properties defined here are going to be stored in the DB
const TaskSchema: Schema = new Schema({
  name: { type: String, required: true },
  completed: { type: Boolean, required: true },
})

export default mongoose.model<ITask>('Task', TaskSchema)
