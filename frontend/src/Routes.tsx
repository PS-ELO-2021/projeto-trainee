import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Registrar from './pages/Registrar';
import Login from './pages/Login';
import Home from './pages/Home';
import Historico from './pages/Historico';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/registrar">
                    <Registrar />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/historico">
                    <Historico />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}