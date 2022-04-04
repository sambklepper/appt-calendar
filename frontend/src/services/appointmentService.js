export function getList() {
    return fetch(`/api/v1/appointments`)
        .then(data => data.json())
}

export function setItem(item) {
    return fetch('/api/v1/appointments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({item})
    })
        .then(data => data.json())
}