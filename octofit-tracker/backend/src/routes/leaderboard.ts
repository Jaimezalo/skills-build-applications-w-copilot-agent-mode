import { Router } from 'express'
import { Leaderboard } from '../models/leaderboard'

const router = Router()

// GET /api/leaderboard/ - top scores
router.get('/', async (_req, res) => {
  const leaderboard = await Leaderboard.find().sort({ score: -1 }).populate('user').lean()
  res.json({ leaderboard })
})

export default router
