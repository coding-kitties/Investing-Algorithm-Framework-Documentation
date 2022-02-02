import {FINISHED, PAGE_LOADING, STARTED} from "../types";

let initialState = {
    pageLoading: false,
};

export default function loadingReducer(state = initialState, action) {
    switch (action.type) {
        case PAGE_LOADING[STARTED]:
            return {...state, pageLoading: true};
        case PAGE_LOADING[FINISHED]:
            return {...state, pageLoading: false};
        default:
            return state;
    }
}

