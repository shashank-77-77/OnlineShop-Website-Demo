const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const productsRoute = require('./routes/products');

const app = express();
const PORT = process.env.PORT || 5000;

const loginRoute = require('./routes/login');
app.use('/api/login', loginRoute);


// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/products', productsRoute);

// Root route
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
