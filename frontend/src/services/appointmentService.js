// Get all appointments
export function getList() {
    return fetch(`/api/v1/appointments`)
        .then(data => data.json())
}

// Get appointment by id
export async function getAppointmentByIdAsync(id) {
    const data = await fetch(`/api/v1/appointments/${id}`)
    return data.json()
}

// Create new appointment
export function setItem(appointment) {
    return fetch('/api/v1/appointments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(appointment)

    })
        .then(appointment => appointment.json())
        .then((info) => {
            console.log(info)
        })
}

// Edit appointment
export function editAppointment(appointment) {
    return fetch(`/api/v1/appointments/${appointment.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(appointment)

    })
        .then(appointment => appointment.json())
        .then((info) => {
            console.log(info)
        })
}

// Delete appointment
export function deleteItem(id) {
    return fetch(`/api/v1/appointments/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(data => data.json())
}