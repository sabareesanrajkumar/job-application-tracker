const Company = require("../models/company");
const JobListing = require("../models/jobList");

exports.createCompany = async (req, res) => {
  const { name, location, description, contactEmail, contactPhone, website } =
    req.body;

  try {
    const company = await Company.create({
      name,
      location,
      description,
      contactEmail,
      contactPhone,
      website,
    });
    res.status(201).json(company);
  } catch (error) {
    console.error("Error creating company:", error);
    res.status(500).send("Error creating company");
  }
};

exports.getCompany = async (req, res) => {
  try {
    const companies = await Company.findAll();
    res.status(200).json(companies);
  } catch (error) {
    console.error("Error fetching companies:", error);
    res.status(500).send("Error fetching companies");
  }
};

exports.postJob = async (req, res) => {
  const { company_id, title, description, location, salary } = req.body;

  try {
    const jobListing = await JobListing.create({
      company_id,
      title,
      description,
      location,
      salary,
    });
    res.status(201).json(jobListing);
  } catch (error) {
    console.error("Error creating job listing:", error);
    res.status(500).send("Error creating job listing");
  }
};

exports.getJob = async (req, res) => {
  const { company_id } = req.query;

  try {
    const jobListings = await JobListing.findAll({
      where: { company_id },
    });
    res.status(200).json(jobListings);
  } catch (error) {
    console.error("Error fetching job listings:", error);
    res.status(500).send("Error fetching job listings");
  }
};
