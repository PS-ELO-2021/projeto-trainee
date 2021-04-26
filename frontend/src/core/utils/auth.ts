import { loginType } from "./types"

export function getSessaoUsuario() {
    const sessaoUsuario = localStorage.getItem('token') || '{}'

    return sessaoUsuario
}

export function getSessaoUsuarioAsLoginType() {
    const sessaoUsuario = getSessaoUsuario()

    const parsedSessaoUsuario = JSON.parse(sessaoUsuario)

    return parsedSessaoUsuario as loginType
}