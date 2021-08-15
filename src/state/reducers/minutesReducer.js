import moment from 'moment';


const minutesReducer = (state = moment().minute(25).seconds(0), action) => {

    switch (action.type) {
        case 'MINUTES_ADDITION':
            return state.add(action.payload, 'minutes')
        case 'MINUTES_SUBTRACTION':
            return state.subtract(action.payload, 'seconds')
        case 'RESET':
            return state = moment().minute(25).seconds(0)
        case 'PAUSE':
            return state
        default:
            return state;

    }

}

export default minutesReducer;