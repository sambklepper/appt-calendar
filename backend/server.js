const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const PORT = process.env.PORT || 8000

// Connect to database
connectDB()

// Initialize express as a variable
const app = express()

// Body parser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Initial route
app.get('/', (req, res) => {
  res.send('API running...')
})

// Appointment routes
app.use('/api/v1/appointments', require('./routes/appointmentRoutes'))

// Error middleware
app.use(errorHandler)

// Listen for PORT
app.listen(PORT, () => console.log(`Server running on port ${PORT}`.rainbow.bold))
