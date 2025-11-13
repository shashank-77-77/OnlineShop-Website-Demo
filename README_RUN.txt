OnlineShop_Local - Quick Run (Windows PowerShell)

1) Open TWO PowerShell windows.

2) Backend:
   cd OnlineShop_Local\backend
   npm install
   npm start
   (Backend will listen on http://localhost:5000)

3) Frontend:
   cd OnlineShop_Local\frontend
   npm install
   npm start
   (React dev server opens http://localhost:3000)

Demo credentials:
  Email: demo@example.com
  Password: demo123

Notes:
- Uploads will be saved to backend\uploads
- products.json holds sample data and is updated when you add products
- For production, replace the demo auth with hashed passwords and a real DB
