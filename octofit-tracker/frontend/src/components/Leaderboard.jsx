import React, { useEffect, useState } from 'react'
import { fetchList } from '../lib/api'

export default function Leaderboard() {
  const [items, setItems] = useState([])
  useEffect(() => { fetchList('leaderboard').then(setItems).catch(()=>setItems([])) }, [])
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
