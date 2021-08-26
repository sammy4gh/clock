import moment from 'moment';


const minutesReducer = (state = moment().minute(25).seconds(0), action) => {

    switch (action.type) {
        case 'MINUTES_ADDITION':
            return state.add(action.payload, 'minutes')
        case 'MINUTES_SUBTRACTION':
            return state.subtract(action.payload, 'minutes')
        case 'SECONDS_SUBTRACTION':
            return state.subtract(action.payload, 'seconds')
        case 'COUNTED_DOWN':
            return state = moment().minute(action.payload).seconds(0)
        case 'RESET':
            return state = moment().minute(1).seconds(0)
        case 'PAUSE':
            return state

        default:
            return state;

    }

}

export default minutesReducer;