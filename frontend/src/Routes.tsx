import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Registrar from './pages/Registrar';
import Login from './pages/Login';
import Home from './pages/Home';
import Historico from './pages/Historico';
import PrivateRoute from './core/utils/PrivateRoute';
import Navbar from './core/components/Navbar/Navbar';

export default function Routes() {
    return(
        <BrowserRouter>
            <Navbar />
            <Switch>
                <PrivateRoute path="/" exact>
                    <Home />
                </PrivateRoute>
                <Route path="/registrar">
                    <Registrar />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <PrivateRoute path="/historico">
                    <Historico />
                </PrivateRoute>
            </Switch>
        </BrowserRouter>
    );
}