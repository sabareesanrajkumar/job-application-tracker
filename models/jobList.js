const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const JobListing = sequelize.define("JobListing", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
  },
  location: {
    type: Sequelize.STRING,
  },
  salary: {
    type: Sequelize.STRING,
  },
});

module.exports = JobListing;
