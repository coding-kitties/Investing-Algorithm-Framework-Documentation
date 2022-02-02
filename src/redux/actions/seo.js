import {createAction} from "./index";
import {CLEAR_SEO_VARIABLES, SET_SEO_VARIABLES} from "../types";

export const clearSEOVariablesAction = () => createAction(CLEAR_SEO_VARIABLES);
export const setSEOVariablesAction = (title = null, description = null, image = null, url = null) =>
    createAction(SET_SEO_VARIABLES, {title: title, description: description, image: image, url: url})

