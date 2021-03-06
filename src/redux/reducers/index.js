import {combineReducers} from 'redux';
import loadingReducer from "./loading";
import layoutReducer from "./layout";
import SEOReducer from "./seo";
import eventsReducer from "./events";

export default combineReducers({
    loading: loadingReducer,
    layout: layoutReducer,
    seo: SEOReducer,
    events: eventsReducer
});
