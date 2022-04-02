const express = require('express')
const router = express.Router()
const {
    getAppointments,
    getAppointmentById,
    createAppointment,
    updateAppointment
} = require('../controller/appointmentController')

// @toDo delete one appointment route

router.route('/').get(getAppointments).post(createAppointment)
router.route('/:id').get(getAppointmentById).put(updateAppointment)

module.exports = router
