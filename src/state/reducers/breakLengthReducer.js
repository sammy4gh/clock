const breakLengthReducer = (state = 5, action) => {
    switch (action.type) {
        case 'BREAK_INCREMENT':
            return state + action.payload
        case 'BREAK_DECREMENT':
            return state - action.payload
        default:
            return state
    }
}

export default breakLengthReducer;