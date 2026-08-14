import React, { Suspense } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Admin from './pages/Admin'
import Lookup from './pages/Lookup'

export default function App(){
  return (
    <div style={{fontFamily:'Arial, sans-serif', padding:20}}>
      <header style={{display:'flex', gap:10, alignItems:'center'}}>
        <h2>Milk Shop — Customer Records</h2>
        <nav style={{marginLeft:20}}>
          <Link to="/admin">Admin</Link> | <Link to="/lookup">Customer Lookup</Link>
        </nav>
      </header>

      <main style={{marginTop:20}}>
        <Routes>
          <Route path="/admin" element={<Admin/>} />
          <Route path="/lookup" element={<Lookup/>} />
          <Route path="/" element={<div>Welcome. Use Admin or Customer Lookup from the menu.</div>} />
        </Routes>
      </main>

      <footer style={{marginTop:40, color:'#666'}}>PWA Starter • Firebase placeholders included</footer>
    </div>
  )
}
