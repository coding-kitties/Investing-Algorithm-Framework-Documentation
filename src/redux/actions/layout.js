import {createAction} from "./index";
import {SIDE_NAV_OPEN, SIDE_NAV_VALUE} from "../types";

export const sideNavOpenAction = (value) => {
    return createAction(SIDE_NAV_OPEN, {value: value});
}

export const sideNavValueAction = (value) => {
    return createAction(SIDE_NAV_VALUE, {value: value})
}