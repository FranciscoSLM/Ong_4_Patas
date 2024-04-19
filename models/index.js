const Sequelize = require('sequelize'); 
const sequelize = require('../config/sequelize'); 
const Partners = require('./partners'); 
const partners = Partners(sequelize, Sequelize.DataTypes);

const db = {
    partners,
    sequelize
};

module.exports = db; 
