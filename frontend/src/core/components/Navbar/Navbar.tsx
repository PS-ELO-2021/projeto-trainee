import styles from './Navbar.module.css'
import { isAutenticado } from '../../utils/requestUtils'
import { Redirect, useHistory } from 'react-router';
import { getSessaoUsuarioAsLoginType } from '../../utils/auth';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Navbar() {
  const [textoBt, setTextoBt] = useState<string> ("REGISTRAR")
  const [texto, setTexto] = useState<string>(
    `${isAutenticado() ? `${getSessaoUsuarioAsLoginType().emailUsuario}` : "Visitante"}`)

    let location = useLocation()
    const history = useHistory()

    useEffect(() => {
      if (isAutenticado()) {
        setTextoBt("SAIR")
      }
      else if (history.location.pathname === "/login") {
        setTextoBt("REGISTRAR")
      }
      else if (history.location.pathname === "/registrar") {
        setTextoBt("LOGIN")
      }
    }, [location])



    function navBut () {
      if (isAutenticado()) {
        localStorage.removeItem('token')
        history.push('/login')
      }
      else if (history.location.pathname === "/login") {
        history.push('/registrar')
      }
      else {
        history.push('/login')
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
          {textoBt}
        </button>
        </div>
        <p className={styles.navbarTitle}>Consulta CEP</p>
        <p className={styles.navbarText}>{texto}</p>
        <div className={styles.imagemDiv}>
          <svg xmlns="http://www.w3.org/2000/svg" className={styles.imagemPerfil} ><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
        </div>
      </div>
    );
}

