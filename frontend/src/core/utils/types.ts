import { Method } from "axios";

export type RequestParams = {
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

export type PrivateRouteParams = {
    children: React.ReactNode;
    path: string;
    exact?: boolean;
}

export type Busca = {
    cep: string;
    logradouro: string;
    bairro: string;
    cidade: string;
    estado: string;
    usuario: {
        id: number;
    }
}

export type LoginFormState = {
    username: string;
    password: string;
}

export type RegistrarFormState = {
    nome: string;
    email: string;
    senha: string;
}

export type loginType = {
    access_token: string;
    token_type: string;
    expires_in: number;
    scope: string;
    idUsuario: number;
    emailUsuario: string;
}