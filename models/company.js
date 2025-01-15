const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Company = sequelize.define("Company", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  location: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
  contactEmail: {
    type: Sequelize.STRING,
  },
  contactPhone: {
    type: Sequelize.STRING,
  },
  website: {
    type: Sequelize.STRING,
  },
});

module.exports = Company;
