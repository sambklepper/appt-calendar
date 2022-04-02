const mongoose = require('mongoose')

const appointmentSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Title is required'],
        },
        date: {
            type: Date,
            required: [true, 'Date is required'],
        },
        type: {
            type: String,
            required: [true, 'Type is required'],
            enum: ['professional', 'personal', 'medical', 'emergency', 'other'],
            default: 'professional'
        },
        status: {
            type: String,
            required: [true, 'Status is required'],
            enum: ['pending', 'confirmed', 'cancelled'],
            default: 'pending'
        },
        description: {
            type: String,
            required: [true, 'Description is required'],
        },
        address: {
            street: {
                type: String,
            },
            city: {
                type: String,
            },
            state: {
                type: String,
            },

            zipCode: {
                type: String,
            },
        },
        notes: [{
            type: String,
        }],
        url: [{
            type: String,
        }],
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Appointment', appointmentSchema)