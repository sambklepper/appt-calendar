const express = require('express')
const router = express.Router()
const {
    getAppointments,
    getAppointment,
    createAppointment
} = require('../controller/appointmentController')

// @toDo update one appointment route
// @toDo delete one appointment route

router.route('/').get(getAppointments).post(createAppointment)
router.route('/:id').get(getAppointment)

module.exports = router
