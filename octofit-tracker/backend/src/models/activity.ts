import { Schema, model, Document, Types } from 'mongoose'

export interface IActivity extends Document {
  user: Types.ObjectId
  type: string
  durationMin: number
  calories: number
  date: Date
}

const activitySchema = new Schema<IActivity>({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, required: true },
  durationMin: { type: Number, required: true },
  calories: { type: Number, required: true },
  date: { type: Date, default: () => new Date() },
})

export const Activity = model<IActivity>('Activity', activitySchema)
