const express = require('express')
const router = express.Router()
const {createJob , getAllJobs ,getSingleJob , updateJob,deleteJob} = require('../controller/jobcontroller')
const {addManyJobs}= require('../controller/manyjobs')
const auth = require('../middleware/auth')
const admin = require('../middleware/admin')
router.post('/',createJob)
router.post("/bulk", addManyJobs);

router.get("/", getAllJobs);

router.get("/:id", getSingleJob);
router.post("/", auth, admin, createJob);
router.put("/:id", auth, admin, updateJob);
router.delete("/:id", auth, admin, deleteJob);
module.exports = router