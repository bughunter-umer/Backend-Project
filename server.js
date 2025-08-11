const express = require('express');
const cors = require('cors'); // Import CORS
const app = express();

// Enable CORS for all origins
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

const db = require('./models');

// Sync DB
db.sequelize.sync({ force: false }) // set to true to drop and recreate tables
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
  const db = require("./models");

db.sequelize.sync({ force: true }) // Drops and recreates tables
  .then(() => {
    console.log("Database synced!");
  })
  .catch((err) => {
    console.error("Error syncing database:", err);
  });

});
