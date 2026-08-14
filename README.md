# Cutomer Data Entry (Milk Shop PWA)

This repository is a starter Progressive Web App (PWA) for a milk-shop customer data entry system. It includes a React + Vite frontend and Firebase configuration.

Important (you asked to commit config publicly)
- The Firebase web config has been committed into `src/firebase.js` so the demo app connects directly to your Firebase project. This is NOT recommended for long-term production; consider moving these values to environment variables and removing them from source control.

Features (planned / initial):
- Admin panel (data-entry UI for daily milk transactions) — UI scaffold included.
- Customer lookup page (enter phone/email and view today's record) — scaffold included.
- Authentication: Google & Email sign-in (Firebase Auth) — placeholders included.
- Payment workflow: manual by default (admin verifies). Automatic gateway integration (JazzCash/EasyPaisa) will be added when you provide merchant credentials.
- Language selector: English + Urdu (UI supports adding translations).
- PWA support (manifest included) so the app can be installed on phones.

Quick start (developer)
1. Install dependencies:
   npm install
2. Run locally (now connected to your Firebase project):
   npm run dev
3. Open http://localhost:5173

Next steps I will do if you confirm:
- Integrate Admin and Lookup pages to read/write from Firestore.
- Seed the `admins` collection with your admin email (aq2273093@gmail.com) so you can log in.
- Update Firestore security rules to restrict writes to admins only.
- Deploy to Vercel and set env vars (optional).

If you want me to proceed with Firestore integration and deployment, reply “Proceed with integration”.
