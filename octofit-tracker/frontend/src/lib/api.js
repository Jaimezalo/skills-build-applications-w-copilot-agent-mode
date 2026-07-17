import axios from 'axios'

const codespace = import.meta.env.VITE_CODESPACE_NAME
const base = codespace
  ? `https://${codespace}-8000.app.github.dev/api`
  : `http://localhost:8000/api`

export const API_BASE = base

// fetchList handles array responses, paginated { items: [...] }, or keyed objects
export async function fetchList(path) {
  const cleanedBase = API_BASE.replace(/\/+$/, '')
  const cleanedPath = path.replace(/^\/+/, '')
  const url = `${cleanedBase}/${cleanedPath}`
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

export default { API_BASE, fetchList }
