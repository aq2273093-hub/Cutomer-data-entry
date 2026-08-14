import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// NOTE: Firebase config committed as requested. It's recommended to move these to environment variables for production.
const firebaseConfig = {
  apiKey: "AIzaSyBgiVutNrx9kbF5LVBIWn0AkWz5hX53jwM",
  authDomain: "cutomer-data-entry-a255d.firebaseapp.com",
  projectId: "cutomer-data-entry-a255d",
  storageBucket: "cutomer-data-entry-a255d.firebasestorage.app",
  messagingSenderId: "888069295824",
  appId: "1:888069295824:web:e747a74531aadebc8898d5"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
export default app
