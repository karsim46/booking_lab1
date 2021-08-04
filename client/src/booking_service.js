const baseURL = 'http://localhost:5000/api/bookings'

export const getGuests = () => {
    return fetch (baseURL)
    .then(res => res.json())
}