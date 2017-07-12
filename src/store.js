import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import { hashHistory } from 'react-router';
import VideoReducer from './VideoReducer';

const rootReducer = combineReducers({
    routerReducer,
    VideoReducer
});

const middleWare = [thunkMiddleware, routerMiddleware(hashHistory)];
const initStore = (initialState) => {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; /*eslint no-underscore-dangle: ["error", { "allow": ["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] }]*/

    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(
            applyMiddleware(...middleWare)
        )
    );
};

export default initStore;
