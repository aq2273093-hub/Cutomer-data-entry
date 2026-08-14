import React, { useState } from 'react'

export default function Admin(){
  const [customerPhone, setCustomerPhone] = useState('')
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState('')
  const [rate, setRate] = useState('')
  const [received, setReceived] = useState('')

  const handleAdd = (e)=>{
    e.preventDefault()
    // TODO: connect to Firebase Firestore to save entry
    alert('Saved (placeholder). Next: connect Firebase and deploy.')
  }

  return (
    <div>
      <h3>Admin — Add Daily Entry</h3>
      <form onSubmit={handleAdd} style={{display:'grid',gap:8,maxWidth:420}}>
        <label>Customer Phone
          <input value={customerPhone} onChange={e=>setCustomerPhone(e.target.value)} placeholder="0312XXXXXXX" />
        </label>
        <label>Customer Name
          <input value={name} onChange={e=>setName(e.target.value)} placeholder="Name" />
        </label>
        <label>Quantity (liters)
          <input value={quantity} onChange={e=>setQuantity(e.target.value)} placeholder="e.g. 2" />
        </label>
        <label>Rate per liter
          <input value={rate} onChange={e=>setRate(e.target.value)} placeholder="e.g. 120" />
        </label>
        <label>Received amount
          <input value={received} onChange={e=>setReceived(e.target.value)} placeholder="e.g. 240" />
        </label>
        <div>
          <button type="submit">Save Entry</button>
        </div>
      </form>

      <p style={{marginTop:16,color:'#555'}}>This is a scaffold. After you add Firebase config in <code>.env</code>, I'll guide how to connect Firestore and protect data.</p>
    </div>
  )
}
