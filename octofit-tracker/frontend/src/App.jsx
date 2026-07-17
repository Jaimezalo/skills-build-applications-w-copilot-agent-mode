import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import Activities from './components/Activities'
import Users from './components/Users'
import Teams from './components/Teams'
import Workouts from './components/Workouts'
import Leaderboard from './components/Leaderboard'
import { API_BASE } from './lib/api'

export default function App() {
  return (
    <div style={{fontFamily:'system-ui,Segoe UI,Roboto',padding:24}}>
      <header>
        <h1>OctoFit Tracker</h1>
        <nav style={{display:'flex',gap:12,marginBottom:12}}>
          <NavLink to="/users">Users</NavLink>
          <NavLink to="/teams">Teams</NavLink>
          <NavLink to="/activities">Activities</NavLink>
          <NavLink to="/workouts">Workouts</NavLink>
          <NavLink to="/leaderboard">Leaderboard</NavLink>
        </nav>
        <div style={{fontSize:12,color:'#555',marginBottom:12}}>API base: {API_BASE}</div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<div>Selecciona una sección.</div>} />
          <Route path="/users" element={<Users />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </main>
    </div>
  )
}
