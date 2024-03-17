// db/connection.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('my_next_app_db', 'root', 'Gokusolos$1', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
