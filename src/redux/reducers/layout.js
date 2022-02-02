import {SIDE_NAV_OPEN, SIDE_NAV_VALUE} from "../types";

let initialState = {
    sideNavOpen: false,
};

export default function layoutReducer(state = initialState, action) {
    switch (action.type) {
        case SIDE_NAV_OPEN:
            return {...state, sideNavOpen: action.value};
        case SIDE_NAV_VALUE:
            return {...state, sideNavValue: action.value};

        default:
            return state;
    }
}

