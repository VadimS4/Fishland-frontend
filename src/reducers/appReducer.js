
const initialState = {
    fishes: [],
    currentFish: null,
    user: null
}

const appReducer = (state = initialState, action) => {
    console.log("reducer state:", state)
    console.log("reducer action:", action)
    switch(action.type) {
        case 'FETCH_FISH': {
            console.log('fetching', action)
            return {
                ...state,
                fishes: action.payload
            }
        }
        case 'FETCH_PROFILE': {
            console.log('fetching', action)
            return {
                ...state,
                user: action.payload
            }
        }
        case 'LOGOUT_USER': {
            console.log('logging out user', action)
            return {
                ...state,
                user: action.payload
            }
        }
        default:
            return state;
    }
}

export default appReducer;