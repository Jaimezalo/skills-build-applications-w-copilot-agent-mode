import React, { useEffect, useState } from 'react'
import { WORKOUTS_API, fetchListUrl } from '../lib/api'
// Codespaces endpoint: https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/workouts/

export default function Workouts() {
  const [items, setItems] = useState([])
  useEffect(() => { fetchListUrl(WORKOUTS_API).then(setItems).catch(()=>setItems([])) }, [])
  return (
    <section>
      <h2>Workouts</h2>
      {items.length===0 ? <p>No hay entrenamientos.</p> : (
        <ul>
          {items.map(w=> (
            <li key={w._id || w.id}>{(w.exercises||[]).map(e=>e.name).join(', ')}</li>
          ))}
        </ul>
      )}
    </section>
  )
}
