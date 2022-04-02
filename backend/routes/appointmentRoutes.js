const express = require('express')
const router = express.Router()
const {
    getAppointments,
    getAppointmentById,
    createAppointment,
    updateAppointment,
    deleteAppointment
} = require('../controller/appointmentController')

router.route('/').get(getAppointments).post(createAppointment)
router.route('/:id').get(getAppointmentById).put(updateAppointment).delete(deleteAppointment)

module.exports = router
