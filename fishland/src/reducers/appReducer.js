
const initialState = {
    fishes: [],
    currentFish: null,
    user: null
}

const appReducer = (state = initialState, action) => {
    console.log("reducer state:", state)
    console.log("reducer action:", action)
    switch(action.type) {
        default:
            return state;
    }
}

export default appReducer;