const Sequelize = require("sequelize");
const db = require("../db");

const Advertisement = db.define("advertisement", {
  title: Sequelize.STRING,
  description: Sequelize.STRING,
  pictureUrl: Sequelize.STRING,
  price: Sequelize.INTEGER,
  email: Sequelize.STRING,
  phone: Sequelize.INTEGER
});

module.exports = Advertisement;
