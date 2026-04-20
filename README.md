# MVC-APP
## 🔄 Deployment Adaptation (Vercel)

To deploy the application on Vercel, the traditional Express-based MVC structure was modified.

Vercel does not support running a full Express server (`app.js`) directly.
As a result, the backend logic was refactored into a **serverless function**.

### ⚠️ Changes Made:

* Removed:

  * `app.js`
  * `controllers/`
  * `routes/`
  * `models/`

* Replaced with:

  * `api/index.js` (handles all backend logic)

### 📁 Deployment Structure:

mvc-app/
│
├── api/
│   └── index.js
│
├── views/
│   └── index.html
│
├── vercel.json
└── package.json

---

### 🧠 Note

This change was made **only for deployment purposes**.

The original MVC structure remains important for understanding proper software architecture, but Vercel requires a serverless approach instead of a traditional Node.js server.
