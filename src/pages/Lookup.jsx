import React, { useState } from 'react'
import { db } from '../firebase'
import { collection, query, where, getDocs, orderBy } from 'firebase/firestore'

export default function Lookup(){
  const [phone, setPhone] = useState('')
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSearch = async (e)=>{
    e.preventDefault()
    setLoading(true)
    try{
      const q = query(collection(db, 'entries'), where('customerPhone','==',phone), orderBy('createdAt','desc'))
      const snap = await getDocs(q)
      const today = snap.docs.map(d=> ({ id: d.id, ...d.data() }))
      const outstanding = today.reduce((s, r)=> s + (r.remaining || 0), 0)
      setResult({today, outstanding})
    }catch(err){
      console.error(err)
      alert('Lookup failed: ' + (err.message || err))
    }finally{ setLoading(false) }
  }

  return (
    <div>
      <h3>Customer Lookup</h3>
      <form onSubmit={handleSearch} style={{display:'flex',gap:8,alignItems:'center'}}>
        <input placeholder="Enter phone or email" value={phone} onChange={e=>setPhone(e.target.value)} required />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Searching…</p>}

      {result && (
        <div style={{marginTop:16}}>
          <h4>Deliveries</h4>
          <ul>
            {result.today.length === 0 && <li>No records found</li>}
            {result.today.map((r,i)=> <li key={i}>{r.createdAt && r.createdAt.toDate ? r.createdAt.toDate().toLocaleString() : 'Date'} — {r.quantity}L — {r.total} PKR — Remaining: {r.remaining}</li>)}
          </ul>
          <p><strong>Outstanding:</strong> {result.outstanding} PKR</p>
        </div>
      )}

      <p style={{marginTop:16,color:'#555'}}>Note: This app now reads from Firestore. Make sure entries exist and your Firestore rules allow reads.</p>
    </div>
  )
}
