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

router.post("/:jobId", auth, applyJob);

router.get("/my", auth, myApplications);

router.get("/job/:jobId", auth, admin, getApplicants);

router.put("/:id/status", auth, admin, updateApplicationStatus);

module.exports = router;