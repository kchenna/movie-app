import React from 'react';
import { Provider } from 'react-redux';
import { hashHistory, Route, Router, IndexRoute } from 'react-router';
import AppContainer from './AppContainer';
import HomeContainer from './HomeContainer';
import PlayerContainer from './PlayerContainer';

import store from "./store";

export const routes = (
    <Route
        component={AppContainer}
        path="/"
    >
        <IndexRoute component={HomeContainer}/>
        <Route
            component={PlayerContainer}
            key="player"
            path="player"
        />
    </Route>
);

export default (
    <Provider store={store()}>
        <Router
            history={hashHistory}
            routes={routes}
        />
    </Provider>
);

