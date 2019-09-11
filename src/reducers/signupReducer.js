
const initialState = {
    name: '',
    username: '',
    password: ''
}

const signupReducer = (state = initialState, action) => {
    console.log(state)
    console.log(action)
    switch(action.type) {
        default:
            return state;
    }
}

export default signupReducer;