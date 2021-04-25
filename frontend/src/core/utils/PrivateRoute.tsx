import React from "react"
import { Redirect, Route } from 'react-router-dom'
import { getSessaoUsuario } from "./auth";
import {isAutenticado} from "./requestUtils";

type params = {
    children: React.ReactNode;
    path: string;
    exact?: boolean;
}

export default function PrivateRoute({children, path}: params) {
    if(isAutenticado()) {
        return <Route path={path}>{children}</Route>
    } 
    return <Redirect to="/login" />
}
