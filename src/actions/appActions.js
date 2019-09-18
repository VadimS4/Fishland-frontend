export const fetchFish = (dispatch) => {
    fetch('https://fishland-backend.herokuapp.com/api/v1/fish')
    .then(resp => resp.json())
    .then(json => {
        dispatch ({
            type: 'FETCH_FISH',
            payload: json
        })
    })
    .catch(err => console.log(err))
}

export const getUserProfile = (dispatch) => {
    let token = localStorage.getItem('jwt')
    if (token) {
        fetch('https://fishland-backend.herokuapp.com/api/v1/profile', {
            headers: {'Authorization': 'Bearer ' + token}
        })
        .then(resp => resp.json())
        .then(json => {
            dispatch ({
                type: 'FETCH_PROFILE',
                payload: json.user
            })
        })
        .catch(err => console.log(err))
    }
}

export const logUserOut = (dispatch) => {
    localStorage.setItem('jwt', '')
    dispatch ({
        type: "LOGOUT_USER",
        payload: null
    })
}