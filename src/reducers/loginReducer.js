
const initialState = {
    username: '',
    password: ''
}

const loginReducer = (state = initialState, action) => {
    console.log(state)
    console.log(action)
    switch(action.type) {
        default:
            return state;
    }
}

export default loginReducer;