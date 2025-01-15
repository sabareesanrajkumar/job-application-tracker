const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Reminder = sequelize.define("Reminder", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
  },
  reminderTime: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  isSent: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Reminder;
