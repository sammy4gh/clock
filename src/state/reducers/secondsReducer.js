const secondsReducer = (state = 0, action) => {
    switch (action.type) {
        case 'SECONDS':
            return action.payload

        default:
            return state;

    }
}

export default secondsReducer;