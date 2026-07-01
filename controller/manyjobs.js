const Job = require("../model/job");

const addManyJobs = async (req, res) => {
    try {
        const jobs = await Job.insertMany(req.body);

        res.status(201).json({
            message: "Jobs added successfully",
            jobs
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = { addManyJobs };