require('dotenv').config();

const express = require('express');
const app = express();

const logger = require('./middleware/logger');

// Middleware
app.use(express.json());
app.use(logger);

// Routes
app.get('/', (req, res) => {
  res.send('API is running');
});

const userRoutes = require('./routes/userRoutes');
const eventRoutes = require('./routes/eventRoutes');
const registrationRoutes = require('./routes/registrationRoutes');
const authRoutes = require('./routes/auth'); // ← ADDED

app.use('/users', userRoutes);
app.use('/events', eventRoutes);
app.use('/registrations', registrationRoutes);
app.use('/auth', authRoutes); // ← ADDED

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message });
});

module.exports = app;