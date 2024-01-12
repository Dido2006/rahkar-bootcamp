const Sequelize = require('sequelize');

const sequelize = new Sequelize('pic', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});
