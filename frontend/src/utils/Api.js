class Api {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    _check(res) {
        if (res.ok) {
            return res.json();
        }
        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            credentials: 'include',
            headers: this._headers,
            method: 'GET'
        })
            .then(res => this._check(res))
    }

    addInitialCards(cardData) {
        return fetch(`${this._baseUrl}/cards`, {
            credentials: 'include',
            headers: this._headers,
            method: 'POST',
            body: JSON.stringify({
                name: cardData.name,
                link: cardData.link
            })
        })
            .then(res => this._check(res))

    }
    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            credentials: 'include',
            headers: this._headers,
            method: 'GET'
        })
            .then(res => this._check(res))
    }

    setUserInfo(userData) {
        return fetch(`${this._baseUrl}/users/me`, {
            credentials: 'include',
            headers: this._headers,
            method: 'PATCH',
            body: JSON.stringify({
                name: userData.name,
                about: userData.about
            })
        })
            .then(res => this._check(res))
    }

    addCard(cardData) {
        return fetch(`${this._baseUrl}/cards`, {
            credentials: 'include',
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: cardData.name,
                link: cardData.link
            })
        })
            .then(res => this._check(res));
    }

    setUserAvatar(userData) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            credentials: 'include',
            headers: this._headers,
            method: 'PATCH',
            body: JSON.stringify({
                avatar: userData.avatar
            })
        })
            .then(res => this._check(res))
    }

    deleteCard(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}`, {
            credentials: 'include',
            method: 'DELETE',
            headers: this._headers,
        })
            .then(res => this._check(res))
    }

    putLike(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
            credentials: 'include',
            method: 'PUT',
            headers: this._headers,
        })
            .then(res => this._check(res))
    }

    deleteLike(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
            credentials: 'include',
            method: 'DELETE',
            headers: this._headers,
        })
            .then(res => this._check(res))
    }

    changeLikeCardStatus(cardId, isLiked) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
            credentials: 'include',
            method: `${!isLiked ? 'DELETE' : 'PUT'}`,
            headers: this._headers
        })
            .then(res => this._check(res));
    }

}

const api = new Api({
    baseUrl: 'https://api.mesto.pilot.nomoredomains.icu',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default api;