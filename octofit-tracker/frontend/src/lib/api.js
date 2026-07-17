import axios from 'axios'

const codespace = import.meta.env.VITE_CODESPACE_NAME
const base = codespace
  ? `https://${codespace}-8000.app.github.dev/api`
  : `http://localhost:8000/api`

export const API_BASE = base
export const USERS_API = `${API_BASE}/users/`
export const TEAMS_API = `${API_BASE}/teams/`
export const ACTIVITIES_API = `${API_BASE}/activities/`
export const WORKOUTS_API = `${API_BASE}/workouts/`
export const LEADERBOARD_API = `${API_BASE}/leaderboard/`

// fetchList handles array responses, paginated { items: [...] }, or keyed objects
export async function fetchListUrl(url) {
  const res = await axios.get(url)
  const data = res.data
  if (Array.isArray(data)) return data
  if (data == null) return []
  if (Array.isArray(data.items)) return data.items
  // find first array value
  for (const k of Object.keys(data)) {
    if (Array.isArray(data[k])) return data[k]
  }
  return []
}

export default { API_BASE, USERS_API, TEAMS_API, ACTIVITIES_API, WORKOUTS_API, LEADERBOARD_API, fetchListUrl }
