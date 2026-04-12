const express = require('express');
const app = express();

const logger = require('./middleware/logger');

app.use(express.json());
app.use(logger);

// routes
const userRoutes = require('./routes/userRoutes');
const eventRoutes = require('./routes/eventRoutes');
const registrationRoutes = require('./routes/registrationRoutes');

app.use('/users', userRoutes);
app.use('/events', eventRoutes);
app.use('/registrations', registrationRoutes);

// error handler (LAST)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message });
});

module.exports = app;