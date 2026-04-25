const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Event = sequelize.define('Event', {
  title: { 
    type: DataTypes.STRING, 
    allowNull: false 
  },
  description: { 
    type: DataTypes.TEXT 
  },
  date: { 
    type: DataTypes.DATE 
  },
  location: { 
    type: DataTypes.STRING 
  },
  userId: { 
    type: DataTypes.INTEGER, 
    allowNull: false 
  }
});

module.exports = Event;