import { Router } from 'express'

const router = Router()

// GET /api/workouts/ - list workouts
router.get('/', (_req, res) => {
  res.json({ workouts: [] })
})

// POST /api/workouts/ - create workout
router.post('/', (req, res) => {
  const workout = req.body
  res.status(201).json({ workout })
})

export default router
