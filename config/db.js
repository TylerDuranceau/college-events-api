const { Sequelize } = require('sequelize');

const sequelize = process.env.DB_URL
  ? new Sequelize(process.env.DB_URL, {
      dialect: 'postgres',
      protocol: 'postgres',
      logging: false
    })
  : new Sequelize({
      dialect: 'sqlite',
      storage: './database.sqlite',
      logging: false
    });

module.exports = sequelize;