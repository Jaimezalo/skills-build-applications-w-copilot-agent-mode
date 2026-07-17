import React, { useEffect, useState } from 'react'
import { fetchList } from '../lib/api'

export default function Teams() {
  const [items, setItems] = useState([])
  useEffect(() => { fetchList('teams').then(setItems).catch(()=>setItems([])) }, [])
  return (
    <section>
      <h2>Teams</h2>
      {items.length===0 ? <p>No hay equipos.</p> : (
        <ul>
          {items.map(t=> (
            <li key={t._id || t.id}>{t.name} — members: {(t.members||[]).length}</li>
          ))}
        </ul>
      )}
    </section>
  )
}
