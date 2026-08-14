import React, { useEffect, useState } from 'react'
import { db, auth } from '../firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { onAuthStateChanged } from 'firebase/auth'

export default function Admin(){
  const [customerPhone, setCustomerPhone] = useState('')
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState('')
  const [rate, setRate] = useState('')
  const [received, setReceived] = useState('')
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const unsub = onAuthStateChanged(auth, u=>{ setUser(u); setLoading(false) })
    return unsub
  },[])

  const handleAdd = async (e)=>{
    e.preventDefault()
    if(!user){
      alert('You must be signed in as an admin to save entries.')
      return
    }

    const total = (parseFloat(quantity || 0) * parseFloat(rate || 0)) || 0
    const remaining = total - (parseFloat(received || 0) || 0)
    const entry = {
      customerPhone,
      name,
      quantity: parseFloat(quantity || 0),
      rate: parseFloat(rate || 0),
      total,
      received: parseFloat(received || 0),
      remaining,
      createdAt: serverTimestamp(),
      createdBy: user.uid
    }

    try{
      await addDoc(collection(db, 'entries'), entry)
      alert('Saved to Firestore (production).')
      setCustomerPhone(''); setName(''); setQuantity(''); setRate(''); setReceived('')
    }catch(err){
      console.error(err)
      alert('Save failed: ' + (err.message || err))
    }
  }

  if(loading) return <div>Loading...</div>

  return (
    <div>
      <h3>Admin — Add Daily Entry</h3>
      {!user && <p style={{color:'red'}}>You are not signed in. Please sign in from Login page.</p>}

      <form onSubmit={handleAdd} style={{display:'grid',gap:8,maxWidth:420}}>
        <label>Customer Phone
          <input value={customerPhone} onChange={e=>setCustomerPhone(e.target.value)} placeholder="0312XXXXXXX" required />
        </label>
        <label>Customer Name
          <input value={name} onChange={e=>setName(e.target.value)} placeholder="Name" />
        </label>
        <label>Quantity (liters)
          <input value={quantity} onChange={e=>setQuantity(e.target.value)} placeholder="e.g. 2" required />
        </label>
        <label>Rate per liter
          <input value={rate} onChange={e=>setRate(e.target.value)} placeholder="e.g. 120" required />
        </label>
        <label>Received amount
          <input value={received} onChange={e=>setReceived(e.target.value)} placeholder="e.g. 240" />
        </label>
        <div>
          <button type="submit">Save Entry</button>
        </div>
      </form>

      <p style={{marginTop:16,color:'#555'}}>Entries are stored in Firestore. If you don't see saves working, ensure your authenticated user is added into the `admins` collection in Firestore (see README).</p>
    </div>
  )
}
