const startStopReducer = (state = false, action) => {

    switch (action.type) {
        case 'START_STOP':
            return !state
        default:
            return state;
    }

}

export default startStopReducer;