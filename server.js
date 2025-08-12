const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json()); // to parse JSON bodies


const db = require('./models'); // This imports your Sequelize instance and models


// Sync DB without dropping tables
db.sequelize.sync()
  .then(() => console.log('Database synced!'))
  .catch(err => console.error('Failed to sync DB:', err));

// Import routes
const userRoutes = require('./routes/user.routes');
const subjectRoutes = require('./routes/subject.routes');
const categoryRoutes = require('./routes/category.routes');
const productRoutes = require('./routes/product.routes');
const orderRoutes = require('./routes/order.routes');

// Test route
app.get('/', (req, res) => {
  res.send('Sequelize + PostgreSQL is working!');
});

// Use routes
app.use('/api/users', userRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

// Start server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

