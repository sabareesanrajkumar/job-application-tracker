const express = require("express");
const cors = require("cors");

const sequelize = require("./util/database");
const userRoutes = require("./routes/users");
const reminderRoutes = require("./routes/reminder");
const JobApplicationRoutes = require("./routes/jobApplications");
const passwordRoutes = require("./routes/password");

const User = require("./models/users");
const forgotPasswordRequest = require("./models/forgotpasswordRequests");
const reminder = require("./models/reminder");
const jobApplication = require("./models/jobApplication");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/user", userRoutes);
app.use("/password", passwordRoutes);
app.use("/jobApplication", JobApplicationRoutes);
app.use("/reminder", reminderRoutes);

User.hasMany(forgotPasswordRequest, {
  foreignKey: "userId",
});
forgotPasswordRequest.belongsTo(User, {
  foreignKey: "userId",
});

User.hasMany(jobApplication, {
  foreignKey: "userId",
});
jobApplication.belongsTo(User, {
  foreignKey: "userId",
});

User.hasMany(reminder, {
  foreignKey: "userId",
});
reminder.belongsTo(User, {
  foreignKey: "userId",
});

sequelize
  .sync()
  .then(() => {
    console.log("DB sync done");
  })
  .catch((err) => console.log(err));

app.listen(3000);
