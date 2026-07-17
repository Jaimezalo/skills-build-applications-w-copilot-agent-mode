import { Router } from 'express'
import { Activity } from '../models/activity'

const router = Router()

// GET /api/activities/ - list activities
router.get('/', async (_req, res) => {
  const activities = await Activity.find().populate('user').lean()
  res.json({ activities })
})

// POST /api/activities/ - create activity
router.post('/', async (req, res) => {
  const payload = req.body
  const activity = new Activity(payload)
  await activity.save()
  res.status(201).json({ activity })
})

export default router
