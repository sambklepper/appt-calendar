export function getList() {
    return fetch(`/api/v1/appointments`)
        .then(data => data.json())
}

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

export function getAppointmentById(id) {
    return fetch(`/api/v1/appointments/${id}`)
        .then(data => data.json())
}

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

export function deleteItem(id) {

    return fetch(`/api/v1/appointments/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(data => data.json())
}