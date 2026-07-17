import React, { useEffect, useState } from 'react'
import { LEADERBOARD_API, fetchListUrl } from '../lib/api'
// Codespaces endpoint: https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/

export default function Leaderboard() {
  const [items, setItems] = useState([])
  useEffect(() => { fetchListUrl(LEADERBOARD_API).then(setItems).catch(()=>setItems([])) }, [])
  return (
    <section>
      <h2>Leaderboard</h2>
      {items.length===0 ? <p>No hay resultados.</p> : (
        <ol>
          {items.map(entry=> (
            <li key={entry._id || entry.id}>{entry.user?.name || entry.user} — {entry.score}</li>
          ))}
        </ol>
      )}
    </section>
  )
}
