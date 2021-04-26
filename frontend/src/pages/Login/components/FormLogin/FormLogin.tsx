import React from 'react';
import styles from './FormLogin.module.css'
import { useForm } from 'react-hook-form'
import { fazerLogin, isAutenticado, requisicao } from '../../../../core/utils/requestUtils';
import { Link, Redirect, Route, useHistory } from 'react-router-dom';
import { LoginFormState } from '../../../../core/utils/types';

export default function FormLogin() {
    const {register, handleSubmit, errors} = useForm<LoginFormState>();
    let history = useHistory()

    const onSubmit = (data: LoginFormState) => {
        fazerLogin(data)
        .then(response => {
            localStorage.setItem('token', JSON.stringify(response.data))
        })
        .then(() => {
            history.push('/')
        })
    }

    return(
        <div className={styles.container}>
            <h2>Login</h2>
            <p>Entre na sua conta com seu email e senha.</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" className={styles.input} 
                    placeholder="Email" name="username" ref={register}>
                </input><br /><br />
                <input type="password" className={styles.input} 
                    placeholder="Senha" name="password" ref={register}>
                </input><br /><br />
                <input type="submit" className={styles.button} value="Login">
                </input><br /><br />
            </form>
            <button type="button" className={styles.buttonCriar}>Crie sua conta</button>
        </div>
    );
}