const timer = (state = null, action) => {
    switch (action.type) {

        case 'SET_INTERVAL':
            return state = action.payload
        case 'CLEAR_INTERVAL':
            console.log(state)
            return clearInterval(action.payload) || null;
        default:
            return state;
    }
}

export default timer;