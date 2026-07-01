const Job = require('../model/job')

const createJob = async (req, res) => {
    try {
        const { title, company, location, salary } = req.body;
        const job = await Job.create({
            title, company, location, salary,description
        })
        res.status(201).json({
            message: "Job created successfully",
            job
        });
    } catch (error) {
        res.status(500).json(error)
    }
}
const getAllJobs = async (req, res) => {
    try {
        const jobs = await Job.find();

        res.status(200).json({
            message: "Jobs fetched successfully",
            jobs
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
const getSingleJob = async (req, res) => {
    try {
        const { id } = req.params;

        const job = await Job.findById(id);

        if (!job) {
            return res.status(404).json({
                message: "Job not found"
            });
        }

        res.status(200).json({
            message: "Job fetched successfully",
            job
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
const updateJob = async (req, res) => {
    try {
        const { id } = req.params;

        const job = await Job.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );

        if (!job) {
            return res.status(404).json({
                message: "Job not found"
            });
        }

        res.status(200).json({
            message: "Job updated successfully",
            job
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
const deleteJob = async (req, res) => {
    try {
        const { id } = req.params;

        const job = await Job.findByIdAndDelete(id);

        if (!job) {
            return res.status(404).json({
                message: "Job not found"
            });
        }

        res.status(200).json({
            message: "Job deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
module.exports = {createJob , getAllJobs , getSingleJob , updateJob , deleteJob}