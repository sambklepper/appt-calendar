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