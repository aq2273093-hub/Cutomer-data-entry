import React, { useState } from 'react'
import { auth } from '../firebase'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

export default function Login(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const nav = useNavigate()

  const handleEmailSignIn = async (e)=>{
    e.preventDefault()
    try{
      await signInWithEmailAndPassword(auth, email, password)
      alert('Signed in')
      nav('/admin')
    }catch(err){
      alert('Sign-in failed: ' + (err.message || err))
    }
  }

  const handleRegister = async (e)=>{
    e.preventDefault()
    try{
      await createUserWithEmailAndPassword(auth, email, password)
      alert('Account created. You may need to add yourself to admins collection in Firestore.')
      nav('/login')
    }catch(err){
      alert('Register failed: ' + (err.message || err))
    }
  }

  const handleGoogle = async ()=>{
    try{
      const provider = new GoogleAuthProvider()
      await signInWithPopup(auth, provider)
      alert('Signed in with Google')
      nav('/admin')
    }catch(err){
      alert('Google sign-in failed: ' + (err.message || err))
    }
  }

  return (
    <div style={{maxWidth:400}}>
      <h3>Login / Register</h3>
      <form onSubmit={handleEmailSignIn} style={{display:'grid',gap:8}}>
        <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required />
        <input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} required />
        <div style={{display:'flex',gap:8}}>
          <button type="submit">Sign in</button>
          <button onClick={handleRegister} type="button">Register</button>
        </div>
      </form>

      <div style={{marginTop:12}}>
        <button onClick={handleGoogle}>Sign in with Google</button>
      </div>

      <p style={{marginTop:12}}>After signing in, if you need admin access add your user record into the `admins` collection in Firestore (document id = your user UID, field: email).</p>
    </div>
  )
}
