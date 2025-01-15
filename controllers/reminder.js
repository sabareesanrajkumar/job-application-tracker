const Reminder = require("../models/reminder");

exports.setReminder = async (req, res) => {
  const { user_id, title, description, reminderTime } = req.body;

  try {
    const reminder = await Reminder.create({
      user_id,
      title,
      description,
      reminderTime,
    });

    res.status(201).send("Reminder set successfully");
  } catch (error) {
    console.error("Error creating reminder:", error);
    res.status(500).send("Error setting reminder");
  }
};

exports.getReminder = async (req, res) => {
  const { user_id } = req.query;

  try {
    const reminders = await Reminder.findAll({
      where: { user_id },
    });

    res.status(200).json(reminders);
  } catch (error) {
    console.error("Error fetching reminders:", error);
    res.status(500).send("Error fetching reminders");
  }
};
