const express = require('express')
const router = express.Router()
const {
    getAppointments,
    createAppointment
} = require('../controller/appointmentController')

router.route('/').get(getAppointments).post(createAppointment)

module.exports = router
