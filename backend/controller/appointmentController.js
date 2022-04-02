const asyncHandler = require('express-async-handler')
const Appointment = require('../models/appointmentModel')

// @desc  Get all appointments
// @route GET /api/v1/appointments
// @access Public
const getAppointments = asyncHandler(async (req, res, next) => {

    const appointments = await Appointment.find({})
    res.status(200).json({
        success: true,
        count: appointments.length,
        data: appointments
    })

})

// @desc  Create an appointment
// @route POST /api/v1/appointments
// @access Public
const createAppointment = asyncHandler(async (req, res, next) => {

    const appointment = await Appointment.create(req.body)
    res.status(201).json({
        success: true,
        data: appointment
    })

})

module.exports = {
    getAppointments, createAppointment
}