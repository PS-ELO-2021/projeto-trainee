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
      else if (history.location.pathname === "/regisrar") {
        setTextoBt("LOGIN")
      }
      console.log(textoBt)
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
      </div>
    );
}

