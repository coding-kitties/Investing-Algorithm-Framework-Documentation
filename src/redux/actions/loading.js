import {createAction} from "./index";
import {PAGE_LOADING} from "../types/loading";
import {FINISHED, STARTED} from "../types";

export const pageLoadingActions = {
    start: () => createAction(PAGE_LOADING[STARTED]),
    finished: () => createAction(PAGE_LOADING[FINISHED])
};
