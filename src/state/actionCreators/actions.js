export const BREAK_INCREMENT = () => {
    return (dispatch) => {
        dispatch({
            type: 'BREAK_INCREMENT',
            payload: 1
        })
    }
}
export const BREAK_DECREMENT = () => {
    return (dispatch) => {
        dispatch({
            type: 'BREAK_DECREMENT',
            payload: 1
        })
    }
}
export const SESSION_INCREMENT = () => {
    return (dispatch) => {
        dispatch({
            type: 'SESSION_INCREMENT',
            payload: 1
        })
    }
}
export const SESSION_DECREMENT = () => {
    return (dispatch) => {
        dispatch({
            type: 'SESSION_DECREMENT',
            payload: 1
        })
    }
}

export const MINUTES_ADDITION = () => {
    return (dispatch) => {
        dispatch({
            type: 'MINUTES_ADDITION',
            payload: 1
        })
    }
}
export const MINUTES_SUBTRACTION = () => {
    return (dispatch) => {
        dispatch({
            type: 'MINUTES_SUBTRACTION',
            payload: 1
        })
    }
}
export const SECONDS = (seconds) => {
    return (dispatch) => {
        dispatch({
            type: 'SECONDS',
            payload: seconds
        })
    }
}

export const START_STOP = () => {
    return dispatch => {
        dispatch({
            type: 'START_STOP',
        })
    }
}
export const RESET = () => {
    return dispatch => {
        dispatch({
            type: 'RESET',
        })
    }
}

export const PAUSE = () => {
    return dispatch => {
        dispatch({
            type: 'PAUSE',
        })
    }
}

