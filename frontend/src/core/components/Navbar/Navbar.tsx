import styles from './Navbar.module.css'
import {isAutenticado} from '../../utils/requestUtils'
import { Redirect, useHistory } from 'react-router';
import { getSessaoUsuarioAsLoginType } from '../../utils/auth';
import { useState } from 'react';

export default function Navbar() {
    const [texto, setTexto] = useState<string>(
        `${isAutenticado() ? `${getSessaoUsuarioAsLoginType().emailUsuario}` : "Faça login ou cadastre-se!"}`)
        
    let history = useHistory()

    function logout() {
        localStorage.removeItem('token')
        history.push('/login')
    }

    const mudarTexto = () => {
        isAutenticado() ? setTexto(`${getSessaoUsuarioAsLoginType().emailUsuario}`) 
        : setTexto("Faça login ou cadastre-se!");
    }

    history.listen(() => {
        mudarTexto()
    })

    return(
        <div className={styles.container}>
            <button 
            className={isAutenticado() ? styles.logoutButton : styles.displayNone} 
            onClick={() => logout()}>
                LOGOUT
            </button>
            <p className={styles.navbarText}>{texto}</p>
        </div>
    );
}

