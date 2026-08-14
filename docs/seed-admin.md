# Firestore admin seeding helper (client-side)
# You can run this in browser console after signing in as the admin user.
# Replace <YOUR_USER_UID> and <YOUR_EMAIL> with your values.

const seedAdmin = async () => {
  const db = firebase.firestore()
  await db.collection('admins').doc('<YOUR_USER_UID>').set({ email: '<YOUR_EMAIL>', createdAt: new Date() })
  console.log('Admin seeded')
}

# Note: Prefer using Firebase Console to add admin document directly under Firestore → Collection: admins → Document ID: <uid> → field email: <email>
