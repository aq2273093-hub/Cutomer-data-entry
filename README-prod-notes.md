Updated Firestore integration: Admin and Lookup pages now use Firestore; Login uses Firebase Auth. Added firestore.rules and seed-admin instructions.

IMPORTANT next steps (you must do one of these so admin can write entries):

1) Seed admin user (recommended via Firebase Console):
   - Go to Firebase Console → Firestore → Create collection named `admins`.
   - Create a document with the document ID equal to your Firebase UID (find it in Authentication after you sign up/sign in).
   - Add a field `email` with value `aq2273093@gmail.com`.

OR

2) Use the client-side seed helper (docs/seed-admin.md) after signing in. Or run the manual console JS shown in the doc.

Publishing security rules:
- I have added a `firestore.rules` file with recommended rules. Review before publishing. The rules currently allow initial admin creation from an authenticated user and restrict entry writes to authenticated admins.

Deploying to Vercel (recommended):
- Create a Vercel account and connect GitHub.
- Import repository `aq2273093-hub/Cutomer-data-entry`.
- In Vercel project settings add environment variables (if you later move config out of source):
  VITE_FIREBASE_API_KEY, VITE_FIREBASE_AUTH_DOMAIN, VITE_FIREBASE_PROJECT_ID, VITE_FIREBASE_STORAGE_BUCKET, VITE_FIREBASE_MESSAGING_SENDER_ID, VITE_FIREBASE_APP_ID
- Deploy. Vercel will auto-deploy on pushes.

If you want, I can now:
- Publish these changes directly to `main` (you asked me to push to main). I have pushed the code in this commit.
- Help you seed admin and publish security rules — tell me which step you want help with next.
