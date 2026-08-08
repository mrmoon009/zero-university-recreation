# ZERO — clean-room recreation

This project is an original implementation inspired by the public information architecture and interaction patterns of zero.university.

It is NOT a copy of the site's proprietary source code. The UI, CSS, JS, component structure, and copy here were authored independently. The supplied media archive is included under `public/assets/` because it was provided by the user.

## Run
1. Install Node.js 18+.
2. In this folder run `npm install`.
3. Run `npm run dev`.
4. For deployment run `npm run build` and publish the `dist/` directory.

## Included
- Responsive navigation + mobile menu
- Hero media
- Career/role matrix
- Real-work scenario showcase
- Portfolio/proof section
- AI + human capability section
- Six-skill model
- Hiring/matching section
- Business-model section
- Beta email form (local demo; connect to your backend for persistence)
- Scroll reveal animations
- Responsive mobile/tablet layouts
- SEO title/description and accessible labels

## Production upgrades
Connect the waitlist form to your own API/Supabase/CRM, add server-side validation/rate limiting, configure CSP/security headers, add analytics with consent, and replace demo email behavior with a real backend endpoint.
