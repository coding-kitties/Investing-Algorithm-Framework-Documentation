import {applyMiddleware, compose, createStore} from 'redux';
import {createWrapper, HYDRATE} from 'next-redux-wrapper';
import combinedReducer from './reducers/index';

const reducer = (state, action) => {
    if (action.type === HYDRATE) {
        return {
            ...state, // use previous state
            ...action.payload, // apply delta from hydration
        }
    } else {
        return combinedReducer(state, action)
    }
}

// function configureStore()
// create a makeStore function
const makeStore = () => {
    const composeEnhancers = typeof window != 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    let store = createStore(reducer, {}, composeEnhancers(applyMiddleware()));
    return store
}

export const wrapper = createWrapper(makeStore, {debug: false});
