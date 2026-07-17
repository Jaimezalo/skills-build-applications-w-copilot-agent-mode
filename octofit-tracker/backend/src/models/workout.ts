import { Schema, model, Document, Types } from 'mongoose'

export interface IWorkout extends Document {
  user: Types.ObjectId
  exercises: { name: string; reps?: number; sets?: number; durationMin?: number }[]
  date: Date
}

const workoutSchema = new Schema<IWorkout>({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  exercises: [
    {
      name: String,
      reps: Number,
      sets: Number,
      durationMin: Number,
    },
  ],
  date: { type: Date, default: () => new Date() },
})

export const Workout = model<IWorkout>('Workout', workoutSchema)
