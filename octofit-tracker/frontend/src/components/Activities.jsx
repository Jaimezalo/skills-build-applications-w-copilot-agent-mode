import React, { useEffect, useState } from 'react'
import { fetchList } from '../lib/api'

export default function Activities() {
  const [items, setItems] = useState([])
  useEffect(() => { fetchList('activities').then(setItems).catch(()=>setItems([])) }, [])
  return (
    <section>
      <h2>Activities</h2>
      {items.length===0 ? <p>No hay actividades.</p> : (
        <ul>
          {items.map(a=> (
            <li key={a._id || a.id}>{a.type} — {a.durationMin} min — {a.calories} kcal</li>
          ))}
        </ul>
      )}
    </section>
  )
}
