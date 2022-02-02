import {createAction} from "./index";
import {SIDE_NAV_OPEN, SIDE_NAV_VALUE} from "../types";
import Cookies from "universal-cookie";

export const sideNavOpenAction = (value) => {
    const cookies = new Cookies();
    cookies.set(SIDE_NAV_OPEN, value, {secure: true, sameSite: 'none', path: "/"});
    return createAction(SIDE_NAV_OPEN, {value: value});
}

export const sideNavValueAction = (value) => {
    return createAction(SIDE_NAV_VALUE, {value: value})
}