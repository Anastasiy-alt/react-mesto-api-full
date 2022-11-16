import Api from './Api';
export const BASE_URL = 'http://api.mesto.pilot.nomoredomains.icu';

export const register = (email, password) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
        .then(Api._check)
};

export const authorize = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include'
    })
        .then(Api._check)
};

export const checkToken = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': "application/json",
            'Authorization': `Bearer ${token}`
        },
        credentials: 'include'
    })
        .then(Api._check)
        .then(res => res.json())
        .then(data => data)
}