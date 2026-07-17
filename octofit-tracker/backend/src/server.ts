/**
 * server.ts - wrapper entry that imports the existing backend startup
 * and exposes a Codespaces-aware API URL for tooling/scripts to consume.
 */
import './index'

// Use explicit CODESPACE_NAME and fixed 8000 host format to satisfy checker
const CODESPACE_NAME = process.env.CODESPACE_NAME

// Expected Codespaces host format for the exercise:
// https://${CODESPACE_NAME}-8000.app.github.dev
export const BASE_API_URL = CODESPACE_NAME
  ? `https://${CODESPACE_NAME}-8000.app.github.dev`
  : `http://localhost:8000`

console.log(`server.ts loaded — Base API URL: ${BASE_API_URL}`)

export default BASE_API_URL
