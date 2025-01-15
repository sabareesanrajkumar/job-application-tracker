const express = require("express");
const router = express.Router();

const reminderController = require("../controllers/reminder");

router.post("/setreminder", reminderController.setReminder);
router.get("/getreminder", reminderController.getReminder);

module.exports = router;
