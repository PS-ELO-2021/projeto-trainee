import React from 'react';
import styles from './FormLogin.module.css'
import { useForm } from 'react-hook-form'
import { fazerLogin } from '../../../../core/utils/requestUtils';

type formstate = {
    username: string;
    password: string;
}

function onSubmit(data: formstate){
    fazerLogin(data)
    .then(response => {
        console.log(response);
    })
}

export default function FormLogin() {
    const {register, handleSubmit, errors} = useForm<formstate>();
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
                <input type="submit" className={styles.button} value="Login"></input><br /><br />
            </form>
            <button type="button" className={styles.buttonCriar}>Crie sua conta</button>
        </div>
    );
}