const express = require("express");
const router = express.Router();

const companyController = require("../controllers/company");

router.post("/createCompany", companyController.createCompany);
router.post("/postjob", companyController.postJob);
router.get("/getCompany", companyController.getCompany);
router.get("/getjob", companyController.getJob);
module.exports = router;
