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
const getAppointmentById = asyncHandler(async (req, res) => {
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
// @desc  Update an appointment
// @route PUT /api/v1/appointments/:id
// @access Public
const updateAppointment = asyncHandler(async (req, res) => {

    const {
        title,
        description,
        date,
        type,
        status,
    } = req.body

    const appointment = await Appointment.findById(req.params.id)

    if (appointment) {
        appointment.title = title
        appointment.description = description
        appointment.date = date
        appointment.type = type
        appointment.status = status

        await appointment.save()
        res.status(200).json({
            success: true,
            data: appointment
        })
    } else {
        res.status(404)
        throw new Error('No appointment found')
    }
})


// @toDo  Delete an appointment

module.exports = {
    getAppointments, createAppointment, getAppointmentById, updateAppointment
}