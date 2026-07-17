/**
 * Seed the octofit_db database with test data
 *
 * This script connects to the local MongoDB instance at
 * mongodb://localhost:27017/octofit_db and inserts sample documents.
 */
import mongoose from 'mongoose'
import { User } from '../models/user'
import { Team } from '../models/team'
import { Activity } from '../models/activity'
import { Workout } from '../models/workout'
import { Leaderboard } from '../models/leaderboard'

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/octofit_db'

async function seed() {
  console.log('Seed the octofit_db database with test data')
  await mongoose.connect(MONGO_URI)
  console.log('Connected to MongoDB for seeding')

  // Clear collections
  await Promise.all([
    User.deleteMany({}),
    Team.deleteMany({}),
    Activity.deleteMany({}),
    Workout.deleteMany({}),
    Leaderboard.deleteMany({}),
  ])

  // Create users
  const alice = await User.create({ name: 'Alice Rivera', email: 'alice@example.com' })
  const bob = await User.create({ name: 'Bob Chen', email: 'bob@example.com' })
  const carla = await User.create({ name: 'Carla Gomez', email: 'carla@example.com' })

  // Create teams
  const teamA = await Team.create({ name: 'OctoSprinters', members: [alice._id, bob._id] })
  const teamB = await Team.create({ name: 'DeepSeaJoggers', members: [carla._id] })

  // Create activities
  await Activity.create({ user: alice._id, type: 'Running', durationMin: 30, calories: 300, date: new Date() })
  await Activity.create({ user: bob._id, type: 'Cycling', durationMin: 45, calories: 400, date: new Date() })
  await Activity.create({ user: carla._id, type: 'Yoga', durationMin: 60, calories: 200, date: new Date() })

  // Create workouts
  await Workout.create({ user: alice._id, exercises: [{ name: 'Push-ups', reps: 15, sets: 3 }, { name: 'Squats', reps: 20, sets: 3 }] })
  await Workout.create({ user: bob._id, exercises: [{ name: 'Deadlift', reps: 5, sets: 5 }] })

  // Create leaderboard entries
  await Leaderboard.create({ user: alice._id, score: 1200 })
  await Leaderboard.create({ user: bob._id, score: 900 })
  await Leaderboard.create({ user: carla._id, score: 700 })

  console.log('Seeding complete')
  await mongoose.disconnect()
}

seed().catch((err) => {
  console.error('Seeding failed', err)
  process.exit(1)
})

