const express = require("express");
const cors = require("cors");

const sequelize = require("./util/database");
const userRoutes = require("./routes/users");
const reminderRoutes = require("./routes/reminder");
const JobApplicationRoutes = require("./routes/jobApplications");
const passwordRoutes = require("./routes/password");
const companyRoutes = require("./routes/company");

const User = require("./models/users");
const forgotPasswordRequest = require("./models/forgotpasswordRequests");
const reminder = require("./models/reminder");
const jobApplication = require("./models/jobApplication");
const company = require("./models/company");
const jobListing = require("./models/jobList");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/user", userRoutes);
app.use("/password", passwordRoutes);
app.use("/jobApplication", JobApplicationRoutes);
app.use("/reminder", reminderRoutes);
app.use("/company", companyRoutes);

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

company.hasMany(jobListing, { foreignKey: "company_id" });
jobListing.belongsTo(company, { foreignKey: "company_id" });

sequelize
  .sync()
  .then(() => {
    console.log("DB sync done");
  })
  .catch((err) => console.log(err));

app.listen(3000);
