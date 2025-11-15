const express = require('express');
const router = express.Router();

// Sample users
const users = [
  { email: "admin@example.com", password: "admin123" },
  { email: "user@example.com", password: "user123" }
];

router.post("/", (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    res.json({ message: "Login successful", email: user.email });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

module.exports = router;
