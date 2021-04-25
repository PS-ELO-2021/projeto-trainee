type loginType = {
    access_token: string;
    token_type: string;
    expires_in: number;
    scope: string;
    idUsuario: number;
    emailUsuario: string;
}

export function getSessaoUsuario() {
    const sessaoUsuario = localStorage.getItem('token') || '{}'

    return sessaoUsuario
}