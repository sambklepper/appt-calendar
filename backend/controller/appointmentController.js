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

// @desc  Get single appointment
// @route GET /api/v1/appointments/:id
// @access Public
const getAppointment = asyncHandler(async(req, res) => {
    const appointment = await Appointment.findById(req.params.id)

    if (!appointment) {
        throw new Error('No appointment found')
    }
    res.status(200).json({
        success: true,
        data: appointment
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

// @toDo  Update an appointment
// @toDo  Delete an appointment

module.exports = {
    getAppointments, createAppointment, getAppointment
}