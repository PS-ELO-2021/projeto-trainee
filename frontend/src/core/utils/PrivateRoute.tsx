import React from "react"
import { Redirect, Route } from 'react-router-dom'
import {isAutenticado} from "./requestUtils";
import {PrivateRouteParams} from "./types"

export default function PrivateRoute({children, path}: PrivateRouteParams) {
    if(isAutenticado()) {
        return <Route path={path}>{children}</Route>
    } 
    return <Redirect to="/login" />
}
