exports.uploadApplication = async (req, res) => {
  const { name, email, phone, position } = req.body;
  const resumePath = req.files["resume"] ? req.files["resume"][0].path : null;
  const coverLetterPath = req.files["coverLetter"]
    ? req.files["coverLetter"][0].path
    : null;

  try {
    const application = await JobApplication.create({
      name,
      email,
      phone,
      position,
      resumePath,
      coverLetterPath,
    });
    res.status(201).send("Job application submitted successfully");
  } catch (err) {
    console.error("Error submitting job application: ", err);
    res.status(500).send("Error submitting job application");
  }
};
