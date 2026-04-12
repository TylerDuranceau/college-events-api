const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Event = sequelize.define('Event', {
  title: { type: DataTypes.STRING, allowNull: false },
  description: DataTypes.TEXT,
  date: DataTypes.DATE,
  location: DataTypes.STRING
});

module.exports = Event;