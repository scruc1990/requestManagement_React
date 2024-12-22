export const makeBearerToken = (token) => {
    return {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }
}