const soundPlayReducer = (state = false, action) => {

    switch (action.type) {
        case 'PLAY':
            return !state
        default:
            return state
    }

}

export default soundPlayReducer;