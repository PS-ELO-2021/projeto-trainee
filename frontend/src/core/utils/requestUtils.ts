import axios, {Method} from 'axios';

type RequestParams = {
    method?: Method;
    url: string;
    data?: object;
    params?: object;
    headers?: object;
}

type LoginData = {
    username: string;
    password: string;
}

const URL_BASE = "http://localhost:8080"

export const requisicao = ({method = 'GET', url, data, params, headers}:RequestParams) => {
    return axios({
        method,
        url: `${url}`,
        data,
        params
    });
}

export const fazerLogin = (data:LoginData) => {
    const payload = {
        ...data,
        grant_type: 'password'
    }

    const token = `grupo2:654321`
    const headers = {
        Authorization: `Basic ${window.btoa(token)}`,
        'Content-Type': 'application/x-www-form-urlencoded'
    }

    return requisicao({method: 'POST', url: `${URL_BASE}/oauth/token`, data: payload, headers})
}