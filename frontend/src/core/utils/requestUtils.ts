import axios, {AxiosRequestConfig, Method} from 'axios';
import { getSessaoUsuario } from './auth';

type RequestParams = {
    method?: Method;
    url: string;
    data?: any;
    params?: object;
    headers?: object;
}

export type LoginData = {
    username: string;
    password: string;
}

const URL_BASE = "http://localhost:8080"

export const requisicao = (params: AxiosRequestConfig) => {
    return axios({
        ...params
    });
}

export const fazerLogin = (data:LoginData) => {
    const payloadString: string = `username=${data.username}&password=${data.password}&grant_type=password`;
    

    const token = `grupo2:654321`
    const headers = {
        Authorization: `Basic ${window.btoa(token)}`,
        'Content-Type': 'application/x-www-form-urlencoded'
    }

    return requisicao({method: 'POST', url: `${URL_BASE}/oauth/token`, data: payloadString, headers})
}

export function isAutenticado() {
    if(getSessaoUsuario() === '{}') {
        return false;
    }
    return true;
}