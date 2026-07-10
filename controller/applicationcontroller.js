const Application = require('../model/application')


const applyJob = async (req, res) => {
    try {
        const { jobId } = req.params;

        const application = await Application.create({
            user: req.user.id,
            job: jobId
        });

        res.status(201).json({
            message: "Job applied successfully",
            application
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
const myApplications = async (req, res) => {
    try {
        const applications = await Application.find({
            user: req.user.id
        }).populate("job");

        res.status(200).json(applications);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const getApplicants = async (req, res) => {
    try {
        const { jobId } = req.params;

        const applicants = await Application.find({
            job: jobId
        }).populate("user");

        res.status(200).json(applicants);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


const updateApplicationStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        const application = await Application.findByIdAndUpdate(
            id,
            { status },
            { new: true }
        );

        if (!application) {
            return res.status(404).json({
                message: "Application not found"
            });
        }

        res.status(200).json({
            message: "Application updated",
            application
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    applyJob,
    myApplications,
    getApplicants,
    updateApplicationStatus
}