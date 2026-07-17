import React, { useEffect, useState } from 'react'
import { fetchList } from '../lib/api'

export default function Users() {
  const [items, setItems] = useState([])
  useEffect(() => { fetchList('users').then(setItems).catch(()=>setItems([])) }, [])
  return (
    <section>
      <h2>Users</h2>
      {items.length===0 ? <p>No hay usuarios.</p> : (
        <ul>
          {items.map(u=> (
            <li key={u._id || u.id}>{u.name || u.email}</li>
          ))}
        </ul>
      )}
    </section>
  )
}
