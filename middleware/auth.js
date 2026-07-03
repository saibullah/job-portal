const jwt = require('jsonwebtoken')


const auth = (req, res, next) => {
    try {
        const authheader = req.headers.authorization
        if (!authheader) {
            return res.status(401).json({
                message: "No Token Provided"
            })
        }
        const token = authheader.split(' ')[1]
        const decodedtoken = jwt.verify(token, process.env.ACCESS_TOKEN)
        req.user = decodedtoken
        next()
    } catch (error) {
        res.status(400).json(error)
    }
}
module.exports = auth