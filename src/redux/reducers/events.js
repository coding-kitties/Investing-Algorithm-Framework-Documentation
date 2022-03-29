import {CLEAR_EVENTS, ERROR_EVENT, SUCCESS_EVENT} from "../types";

let initialState = {
    errorMessages: null,
    successMessages: null
}

export default function eventsReducer(state = initialState, action) {
    switch (action.type) {
        case ERROR_EVENT:
            return {...state, errorMessages: action.message};
        case SUCCESS_EVENT:
            return {...state, successMessages: action.message};
        case CLEAR_EVENTS:
            return initialState;
        default:
            return state;
    }
}
