# REMROBUX starter

A static storefront + Supabase authentication/database starter for a Robux and Roblox-account shop.

## 1) Create Supabase
1. Create a project at https://supabase.com.
2. Open SQL Editor and run all of `supabase/schema.sql`.
3. In Authentication > Providers > Email, enable email/password. For a quick test you may disable email confirmation, but for a public shop keep email confirmation enabled.
4. In Project Settings > API, copy Project URL and anon/public key into `config.js`.
5. Create your own account on the site, then run this SQL in Supabase SQL Editor to grant admin:
   `update public.profiles set role='admin' where email='YOUR_ADMIN_EMAIL';`

## 2) Configure bank QR
Edit `config.js`:
- BANK_NAME: bank short code supported by VietQR (e.g. a supported bank code)
- BANK_ACCOUNT: your receiving account number
- BANK_OWNER: account holder name
The QR is only a payment instruction. It does NOT verify money received. Admin must check their actual bank statement before pressing Approve. Never approve from a screenshot alone.

## 3) Run locally
For example, from this folder:
`python -m http.server 8000`
Then open http://localhost:8000. Or use VS Code Live Server.

## 4) Deploy GitHub Pages
1. Create a GitHub repository.
2. Upload `index.html`, `admin.html`, `styles.css`, `config.js`, `app.js`, `admin.js`.
3. Settings > Pages > Deploy from a branch > main / root.
4. Open the generated Pages URL. Add custom domain later in Settings > Pages.

## Important production checklist
- The public anon key is intended for browser use; never put Supabase `service_role` key in frontend files.
- Keep RLS enabled. Test with two customer accounts and one admin account.
- Configure Supabase Auth redirect URLs for localhost and your deployed domain.
- Add a proper payment provider/bank webhook before automating deposits. Do not automate balance credit based only on QR generation or a client-side message.
- This starter uses manual admin approval. Restrict admin account with strong password and MFA.
- Product `delivery_note` is intentionally not exposed by customer-facing product queries. For real digital-account delivery, implement a secure server-side claim/delivery RPC that returns credentials only to the purchaser, with audit logs and one-time stock records. Do not store personal email passwords or reuse accounts.
- Review Roblox Terms and applicable laws before selling Robux or accounts. Do not request customers' Roblox passwords or claim official Roblox affiliation.
- Add privacy policy, terms, refund policy, customer support, backups, rate limiting, abuse protection, and legal/tax review before taking public payments.
