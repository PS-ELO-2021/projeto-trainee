import React from 'react';
import styles from './FormLogin.module.css'

export default function FormLogin() {
    return(
        <div className={styles.container}>
            <h2>Login</h2>
            <p>Entre na sua conta com seu email e senha.</p>
            <form>
                <input type="text" className={styles.input} placeholder="Email">
                </input><br /><br />
                <input type="password" className={styles.input} placeholder="Senha">
                </input><br /><br />
                <input type="submit" className={styles.button} value="Login"></input><br /><br />
            </form>
            <button type="button" className={styles.buttonCriar}>Crie sua conta</button>
        </div>
    );
}