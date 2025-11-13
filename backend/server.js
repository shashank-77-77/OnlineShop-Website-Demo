const express = require('express');
const multer = require('multer');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const UPLOAD_DIR = path.join(__dirname, 'uploads');
if (!fs.existsSync(UPLOAD_DIR)) fs.mkdirSync(UPLOAD_DIR);

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, UPLOAD_DIR),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

const DB_FILE = path.join(__dirname, 'products.json');
function readDB(){
  if (!fs.existsSync(DB_FILE)) return [];
  try { return JSON.parse(fs.readFileSync(DB_FILE, 'utf8')) } catch(e){ return []; }
}
function writeDB(data){
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
}

// In-memory users (demo only)
const USERS = [
  { id: 1, name: "Demo User", email: "demo@example.com", password: "demo123" }
];

app.post('/api/register', (req, res) => {
  const { name, email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'email+password required' });
  if (USERS.find(u => u.email === email)) return res.status(400).json({ error: 'user exists' });
  USERS.push({ id: Date.now(), name, email, password });
  res.json({ ok: true });
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const user = USERS.find(u => u.email === email && u.password === password);
  if (!user) return res.status(401).json({ error: 'invalid credentials' });
  res.json({ token: 'token-' + user.id, user: { id: user.id, name: user.name, email: user.email } });
});

app.get('/api/products', (req, res) => {
  res.json(readDB());
});

app.get('/api/products/:id', (req, res) => {
  const p = readDB().find(x => x.id === Number(req.params.id));
  if (!p) return res.status(404).json({ error: 'not found' });
  res.json(p);
});

app.post('/api/products', upload.fields([{ name: 'images' }, { name: 'videos' }]), (req, res) => {
  const { title, description, price, contact } = req.body;
  const images = (req.files && req.files['images'] || []).map(f => '/uploads/' + path.basename(f.path));
  const videos = (req.files && req.files['videos'] || []).map(f => '/uploads/' + path.basename(f.path));
  const products = readDB();
  const newP = { id: Date.now(), title, description, price: Number(price || 0), contact, images, videos };
  products.push(newP);
  writeDB(products);
  res.json(newP);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Backend listening on', PORT));
