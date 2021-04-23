import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>

                </Route>
                <Route path="/registrar">

                </Route>
                <Route path="/login">

                </Route>
                <Route path="/historico">

                </Route>
            </Switch>
        </BrowserRouter>
    );
}