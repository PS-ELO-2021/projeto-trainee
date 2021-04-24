import React from 'react';
import styles from './FormRegistrar.module.css'

export default function FormRegistrar() {
    return(
        <div className={styles.container}>
            <h2>Criar Conta</h2>
            <p className={styles.msg}>Informe seu nome, email e senha</p>
            <form>
                <input type="text" className={styles.input} placeholder="Nome">
                </input><br /><br />
                <input type="text" className={styles.input} placeholder="Email">
                </input><br /><br />
                <input type="password" className={styles.input} placeholder="Senha*">
                </input><br /><br />
                <p className={styles.obs}>*A senha deve ter pelo menos 6 caracteres</p>
                <input type="submit" className={styles.button} value="Cadastrar"></input><br /><br />
            </form>
            <button type="button" className={styles.buttonLogin}>Faça o Login</button>
        </div>
    );
}