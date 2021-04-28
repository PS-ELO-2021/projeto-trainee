import React, { useState } from 'react';
import styles from './FormRegistrar.module.css'
import { useForm } from 'react-hook-form'
import { fazerLogin, requisicao } from '../../../../core/utils/requestUtils';
import { useHistory } from 'react-router';
import { LoginData, RegistrarFormState } from '../../../../core/utils/types';
import { Link } from 'react-router-dom';

export default function FormRegistrar() {
    const {register, handleSubmit, errors} = useForm<RegistrarFormState>()
    const [isEmailJaCadastrado, setIsEmailJaCadastrado] = useState<boolean>(false)
    let history = useHistory()

    const onSubmit = (data: RegistrarFormState) => {
        setIsEmailJaCadastrado(false)

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
        .catch(() => {
            setIsEmailJaCadastrado(true)
        })
    }

    return(
        <div className={styles.container}>
            <h2>Criar Conta</h2>
            <p className={styles.msg}>Informe seu nome, email e senha</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" className={styles.input}
                    placeholder="Nome" name="nome" ref={register({
                        required: "Campo obrigatório!"
                    })}>
                </input>
                {errors.nome && (
                    <small>{errors.nome.message}</small>
                )}
                <input type="text" className={styles.input} 
                    placeholder="Email" name="email" ref={register({
                        required: "Campo obrigatório!",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Insira um email válido!",
                        }
                    })}>
                </input>
                {errors.email && (
                    <small>{errors.email.message}</small>
                )}
                <input type="password" className={styles.input} 
                placeholder="Senha*" name="senha" ref={register({
                    required: "Campo obrigatório!",
                    minLength: {
                        value: 6,
                        message: "A senha deve possuir no mínimo 6 caracteres!"
                    }
                })}>
                </input>
                {errors.senha && (
                    <small>{errors.senha.message}</small>
                )}
                {isEmailJaCadastrado && (
                    <small>Email já cadastrado!</small>
                )}

                <p className={styles.obs}>*A senha deve ter pelo menos 6 caracteres</p>
                <input type="submit" className={styles.button} value="Cadastrar"></input>
            </form>
            <Link to="/login" className={styles.buttonLogin} >Faça o Login</Link>
        </div>
    );
}