import { Router } from 'express'

const router = Router()

// GET /api/users/ - list users
router.get('/', (_req, res) => {
  res.json({ users: [] })
})

// POST /api/users/ - create user
router.post('/', (req, res) => {
  const user = req.body
  res.status(201).json({ user })
})

export default router
