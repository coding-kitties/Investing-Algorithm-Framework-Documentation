import {CLEAR_ERROR_EVENT, CLEAR_SUCCESS_EVENT, ERROR_EVENT, SUCCESS_EVENT} from "../types";

let initialState = {
    successEvent: null,
    errorEvent: null,
};

export default function contextReducer(state = initialState, action) {
    switch (action.type) {
        case SUCCESS_EVENT:
            return {...state, successEvent: action.message}
        case ERROR_EVENT:
            return {...state, errorEvent: action.message}
        case CLEAR_SUCCESS_EVENT:
            return {...state, successEvent: null}
        case CLEAR_ERROR_EVENT:
            return {...state, errorEvent: null}
        default:
            return state;
    }
}

