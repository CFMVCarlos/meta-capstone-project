## 2026-06-30 - Added Content Security Policy (CSP)
**Vulnerability:** Missing defense-in-depth against Cross-Site Scripting (XSS).
**Learning:** Pure frontend React apps often lack headers like CSP because there's no backend server to set them. Using a `<meta http-equiv="Content-Security-Policy">` tag is a crucial workaround.
**Prevention:** Always ensure frontend-only applications define a strict CSP via meta tags or deployment configuration (e.g., Netlify/Vercel headers) to restrict script sources.
