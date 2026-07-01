const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const admin = require("../middleware/admin");

const {
    applyJob,
    myApplications,
    getApplicants,
    updateApplicationStatus
} = require("../controller/applicationcontroller");

// User applies for a job
router.post("/:jobId", auth, applyJob);

// User views their applications
router.get("/my", auth, myApplications);

// Admin views applicants for a job
router.get("/job/:jobId", auth, admin, getApplicants);

// Admin updates application status
router.put("/:id/status", auth, admin, updateApplicationStatus);

module.exports = router;