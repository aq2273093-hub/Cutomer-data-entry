# Cutomer Data Entry (Milk Shop PWA)

This repository is a starter Progressive Web App (PWA) for a milk-shop customer data entry system. It includes a React + Vite frontend and placeholders for Firebase configuration (Auth + Firestore). The app is initially a minimal MVP so you can review the UI and deploy it quickly.

Features (planned / initial):
- Admin panel (data-entry UI for daily milk transactions) — UI scaffold included.
- Customer lookup page (enter phone/email and view today's record) — scaffold included.
- Authentication: Google & Email sign-in (Firebase Auth) — placeholders included.
- Payment workflow: manual by default (admin verifies). Automatic gateway integration (JazzCash/EasyPaisa) will be added when you provide merchant credentials.
- Language selector: English + Urdu (UI supports adding translations).
- PWA support (manifest included) so the app can be installed on phones.

Important notes
- Do NOT commit Firebase keys or merchant secrets to this repository. Use Vercel/Firebase environment variables.
- You (the repo owner) asked that admin seeding is disabled for now; follow the README to set up admin after deployment.

Quick start (developer)
1. Install dependencies:
   npm install
2. Create a Firebase project and enable Firestore + Authentication (Google and Email/Password). See README for full steps.
3. Create a .env file with your Firebase config (use VITE_ prefixed vars). Example in .env.example.
4. Run locally:
   npm run dev

Deploy
- Recommended: Vercel (connect this repo, set environment variables, and deploy). The README has full instructions.

If you want, I can now:
- Deploy a temporary demo on my test Firebase so you can click through the UI immediately.
- Or I can wait for you to add your Firebase project credentials and then help deploy to your own free Firebase + Vercel setup.

---

Urdu (مختصر)
یہ ریپوزٹری ایک شروعاتی پراجیکٹ ہے جو روایتی PWA کے طور پر کام کرے گا۔ فرنٹ اینڈ React + Vite پر ہے اور بیک اینڈ کے لیے Firebase استعمال کرنے کی ہدایات دی گئی ہیں۔

