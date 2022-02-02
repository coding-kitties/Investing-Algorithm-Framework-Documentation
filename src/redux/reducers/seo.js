import {CLEAR_SEO_VARIABLES, SET_SEO_VARIABLES} from "../types";
import {APP_DESCRIPTION, APP_TITLE, SEO_IMAGE, SEO_URL} from "../../configuration";

const initialState = {
    title: APP_TITLE,
    description: APP_DESCRIPTION,
    image: SEO_IMAGE,
    url: SEO_URL,
}

export default function SEOReducer(state = initialState, action) {
    switch (action.type) {
        case SET_SEO_VARIABLES:
            state = initialState;
            return {...state, ...reduceSEOVariables(action)};
        case CLEAR_SEO_VARIABLES:
            return initialState;
        default:
            return state;
    }
};

const reduceSEOVariables = (action) => {
    const notNull = ["title", "description", "image", "url"]

    notNull.forEach((item) => {
        if (action[item] === null) {
            delete action[item]
        }
    })

    const remove = ["type", "showError", "showSuccess"]
    remove.forEach((item) => {
        delete action[item]
    })
    return action
}
