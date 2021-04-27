import React from 'react';
import styles from './FormRegistrar.module.css'
import { useForm } from 'react-hook-form'
import { fazerLogin, requisicao } from '../../../../core/utils/requestUtils';
import { useHistory } from 'react-router';
import { LoginData, RegistrarFormState } from '../../../../core/utils/types';
import { Link } from 'react-router-dom';

export default function FormRegistrar() {
    const {register, handleSubmit, errors} = useForm<RegistrarFormState>()
    let history = useHistory()

    const onSubmit = (data: RegistrarFormState) => {
        requisicao({method:'POST', url:'http://localhost:8080/registrar', data})
        .then(() => {
            const loginData: LoginData = {username: data.email, password: data.senha}
            fazerLogin(loginData)
            .then(response => {
                localStorage.setItem('token', JSON.stringify(response.data))
            })
            .then(() => {
                history.push('/')
            })
        })
    }

    return(
        <div className={styles.container}>
            <h2>Criar Conta</h2>
            <p className={styles.msg}>Informe seu nome, email e senha</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" className={styles.input}
                    placeholder="Nome" name="nome" ref={register}>
                </input><br /><br />
                <input type="text" className={styles.input} 
                    placeholder="Email" name="email" ref={register}>
                </input><br /><br />
                <input type="password" className={styles.input} 
                placeholder="Senha*" name="senha" ref={register}>
                </input><br /><br />
                <p className={styles.obs}>*A senha deve ter pelo menos 6 caracteres</p>
                <input type="submit" className={styles.button} value="Cadastrar"></input><br /><br />
            </form>
            <Link to="/login" className={styles.buttonLogin} >Faça o Login</Link>
        </div>
    );
}