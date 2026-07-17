import { Schema, model, Document, Types } from 'mongoose'

export interface ITeam extends Document {
  name: string
  members: Types.ObjectId[]
  createdAt: Date
}

const teamSchema = new Schema<ITeam>({
  name: { type: String, required: true },
  members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  createdAt: { type: Date, default: () => new Date() },
})

export const Team = model<ITeam>('Team', teamSchema)
