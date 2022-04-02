const mongoose = require('mongoose')

const appointmentSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        type: {
            type: String,
            required: true

        },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Appointment', appointmentSchema)