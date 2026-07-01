const express =require('express')
const router = express.Router()
const {register , login}= require('../controller/authcontroller')
const auth = require('../middleware/auth.js')

router.post ('/register',register)
router.post('/login', login)
router.get('/authentication', auth , (req, res) => {
    res.json({
        message: "JWT Working",
        user: req.user
    })
})

module.exports=router