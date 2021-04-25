import React from 'react';
import styles from './FormRegistrar.module.css'
import { useForm } from 'react-hook-form'
import { fazerLogin, requisicao, LoginData } from '../../../../core/utils/requestUtils';
import { useHistory } from 'react-router';

type formstate = {
    nome: string;
    email: string;
    senha: string;
}

// function onSubmit(data: formstate){
//     requisicao({method:'POST', url:'http://localhost:8080/registrar', data})
    
//     const loginData: LoginData = {username: data.email, password: data.senha}
//     fazerLogin(loginData)
//     .then(response => {
//         localStorage.setItem('token', JSON.stringify(response.data))
//     })
//     .then(() => {
//         history.push('/')
//     })
// }

export default function FormRegistrar() {
    const {register, handleSubmit, errors} = useForm<formstate>()
    let history = useHistory()

    const onSubmit = (data: formstate) => {
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
            <button type="button" className={styles.buttonLogin}>Faça o Login</button>
        </div>
    );
}