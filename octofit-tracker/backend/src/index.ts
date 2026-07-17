import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import usersRouter from './routes/users'
import teamsRouter from './routes/teams'
import activitiesRouter from './routes/activities'
import leaderboardRouter from './routes/leaderboard'
import workoutsRouter from './routes/workouts'

const app = express()
const PORT = process.env.PORT ? Number(process.env.PORT) : 8000
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/octofit'

app.use(express.json())

// Codespaces-aware API URL
const CODESPACE = process.env.CODESPACE_NAME
const BASE_API_URL = CODESPACE
  ? `https://${CODESPACE}-${PORT}.githubpreview.dev`
  : `http://localhost:${PORT}`

// Configure CORS to allow frontend in Codespaces or local dev
const allowedOrigins = [
  `http://localhost:5173`,
  `http://127.0.0.1:5173`,
]
if (CODESPACE) {
  allowedOrigins.push(`https://${CODESPACE}-5173.githubpreview.dev`)
}

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true)
      if (allowedOrigins.includes(origin)) return callback(null, true)
      return callback(new Error('Not allowed by CORS'))
    },
  })
)

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', apiUrl: BASE_API_URL })
})

// Mount API routes
app.use('/api/users', usersRouter)
app.use('/api/teams', teamsRouter)
app.use('/api/activities', activitiesRouter)
app.use('/api/leaderboard', leaderboardRouter)
app.use('/api/workouts', workoutsRouter)

async function start() {
  try {
    await mongoose.connect(MONGO_URI)
    console.log('Connected to MongoDB')
    app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
    console.log(`Base API URL: ${BASE_API_URL}`)
  } catch (err) {
    console.error('Failed to start server', err)
    process.exit(1)
  }
}

start()
