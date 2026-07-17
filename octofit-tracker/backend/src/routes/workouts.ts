import { Router } from 'express'
import { Workout } from '../models/workout'

const router = Router()

// GET /api/workouts/ - list workouts
router.get('/', async (_req, res) => {
  const workouts = await Workout.find().populate('user').lean()
  res.json({ workouts })
})

// POST /api/workouts/ - create workout
router.post('/', async (req, res) => {
  const payload = req.body
  const workout = new Workout(payload)
  await workout.save()
  res.status(201).json({ workout })
})

export default router
