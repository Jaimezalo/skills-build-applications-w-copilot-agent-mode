import { Router } from 'express'

const router = Router()

// GET /api/activities/ - list activities
router.get('/', (_req, res) => {
  res.json({ activities: [] })
})

// POST /api/activities/ - create activity
router.post('/', (req, res) => {
  const activity = req.body
  res.status(201).json({ activity })
})

export default router
