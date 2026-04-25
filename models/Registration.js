const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Registration = sequelize.define('Registration', {
  status: { type: DataTypes.STRING, defaultValue: 'registered' }
});

module.exports = Registration;