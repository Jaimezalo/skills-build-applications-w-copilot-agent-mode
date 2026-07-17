import { Schema, model, Document, Types } from 'mongoose'

export interface ILeaderboardEntry extends Document {
  user: Types.ObjectId
  score: number
  date: Date
}

const leaderboardSchema = new Schema<ILeaderboardEntry>({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  score: { type: Number, required: true },
  date: { type: Date, default: () => new Date() },
})

export const Leaderboard = model<ILeaderboardEntry>('Leaderboard', leaderboardSchema)
