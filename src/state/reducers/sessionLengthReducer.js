const sessionLengthReducer = (state = 1, action) => {
    switch (action.type) {
        case 'SESSION_INCREMENT':
            return state + action.payload
        case 'SESSION_DECREMENT':
            return state - action.payload
        case 'SET_LIMIT':
            return state;
        case 'RESET':
            return state = 1;
        default:
            return state
    }
}

export default sessionLengthReducer;