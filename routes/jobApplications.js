const express = require("express");
const router = express.Router();

const jobApplicationController = require("../controllers/jobApplication");

router.post("/uploadapplication", jobApplicationController.uploadApplication);

module.exports = router;
