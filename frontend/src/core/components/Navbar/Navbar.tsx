import styles from './Navbar.module.css'
import { isAutenticado } from '../../utils/requestUtils'
import { Redirect, useHistory } from 'react-router';
import { getSessaoUsuarioAsLoginType } from '../../utils/auth';
import { useState } from 'react';

export default function Navbar() {
  const [texto, setTexto] = useState<string>(
    `${isAutenticado() ? `${getSessaoUsuarioAsLoginType().emailUsuario}` : "Visitante"}`)

    let history = useHistory()

    // Apagar? //
    function logout() {
      localStorage.removeItem('token')
      history.push('/login')
    }

    function navBut () {
      if (isAutenticado()) {
        localStorage.removeItem('token')
        history.push('/login')
      }
      else {
        history.push('/')
      }

    }

    const mudarTexto = () => {
      isAutenticado() ? setTexto(`${getSessaoUsuarioAsLoginType().emailUsuario}`) 
        : setTexto("Visitante");
    }

    history.listen(() => {
      mudarTexto()
    })

    return(
      <div className={styles.container}>
        <div className={styles.limit}>
        <button 
          className={isAutenticado() ? styles.logoutButton : styles.logoutButton} 
          onClick={() => navBut()}>
          {isAutenticado() ? "SAIR" : "HOME"}
        </button>
        </div>
        <p className={styles.navbarTitle}>Consulta CEP</p>
        <p className={styles.navbarText}>{texto}</p>
      </div>
    );
}

