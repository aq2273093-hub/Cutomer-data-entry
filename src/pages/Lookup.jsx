import React, { useState } from 'react'

export default function Lookup(){
  const [phone, setPhone] = useState('')
  const [result, setResult] = useState(null)

  const handleSearch = (e)=>{
    e.preventDefault()
    // TODO: lookup in Firestore by phone
    setResult({today: [{quantity:2, total:240, status:'Unpaid'}], outstanding: 120})
  }

  return (
    <div>
      <h3>Customer Lookup</h3>
      <form onSubmit={handleSearch} style={{display:'flex',gap:8,alignItems:'center'}}>
        <input placeholder="Enter phone or email" value={phone} onChange={e=>setPhone(e.target.value)} />
        <button type="submit">Search</button>
      </form>

      {result && (
        <div style={{marginTop:16}}>
          <h4>Today's deliveries</h4>
          <ul>
            {result.today.map((r,i)=> <li key={i}>{r.quantity}L — {r.total} PKR — {r.status}</li>)}
          </ul>
          <p><strong>Outstanding:</strong> {result.outstanding} PKR</p>
        </div>
      )}

      <p style={{marginTop:16,color:'#555'}}>Note: This is a UI prototype. Searching will work after Firebase Firestore connection.</p>
    </div>
  )
}
