const msg = {
    break: "Break",
    session: "Session"
}

const msgReducer = (state = msg.session, action) => {

    switch (action.type) {
        case 'BREAK':
            return state = msg.break
        case 'SESSION':
            return state = msg.session
        default:
            return state;
    }
}

export default msgReducer;