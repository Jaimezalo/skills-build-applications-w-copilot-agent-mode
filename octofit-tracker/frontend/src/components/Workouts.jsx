import React, { useEffect, useState } from 'react'
import { fetchList } from '../lib/api'

export default function Workouts() {
  const [items, setItems] = useState([])
  useEffect(() => { fetchList('workouts').then(setItems).catch(()=>setItems([])) }, [])
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
