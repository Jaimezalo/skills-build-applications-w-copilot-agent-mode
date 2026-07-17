/**
 * server.ts - wrapper entry that imports the existing backend startup
 * and exposes a Codespaces-aware API URL for tooling/scripts to consume.
 */
import './index'

const PORT = process.env.PORT ? Number(process.env.PORT) : 8000
const CODESPACE = process.env.CODESPACE_NAME

// Codespaces app host format: https://{CODESPACE}-{PORT}.app.github.dev
export const BASE_API_URL = CODESPACE
  ? `https://${CODESPACE}-${PORT}.app.github.dev`
  : `http://localhost:${PORT}`

console.log(`server.ts loaded — Base API URL: ${BASE_API_URL}`)

// Exporting default for potential programmatic imports
export default BASE_API_URL
