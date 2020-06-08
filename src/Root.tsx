import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import HomePage from './homePage/HomePage';
import { rootingURL } from './config/rootingURL';
import { Header } from './header/Header';

export const Root : React.FunctionComponent = function(){
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route path={rootingURL.home} component={HomePage} exact/>
                <Redirect to={rootingURL.home}/>
            </Switch>
        </BrowserRouter>
    );
}