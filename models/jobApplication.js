const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const JobApplication = sequelize.define("JobApplication", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phone: {
    type: Sequelize.STRING,
  },
  position: {
    type: Sequelize.STRING,
  },
  resumePath: {
    type: Sequelize.STRING,
  },
  coverLetterPath: {
    type: Sequelize.STRING,
  },
});

module.exports = JobApplication;
