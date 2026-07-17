import { Router } from 'express'

const router = Router()

// GET /api/teams/ - list teams
router.get('/', (_req, res) => {
  res.json({ teams: [] })
})

// POST /api/teams/ - create team
router.post('/', (req, res) => {
  const team = req.body
  res.status(201).json({ team })
})

export default router
