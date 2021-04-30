import React, { useState } from 'react';
import styles from './FormLogin.module.css'
import { useForm } from 'react-hook-form'
import { fazerLogin } from '../../../../core/utils/requestUtils';
import { Link, useHistory } from 'react-router-dom';
import { LoginFormState } from '../../../../core/utils/types';

export default function FormLogin() {
  const {register, handleSubmit, errors} = useForm<LoginFormState>();
  const [isAcessoNegado, setIsAcessoNegado] = useState<boolean>(false)
  let history = useHistory()

  const onSubmit = (data: LoginFormState) => {
    setIsAcessoNegado(false)

    fazerLogin(data)
    .then(response => {
      localStorage.setItem('token', JSON.stringify(response.data))
    })
    .then(() => {
      history.push('/')
    })
    .catch(() => {
      setIsAcessoNegado(true)
    })
  }

  return(
    <div className={styles.flexBox}>
      <div className={styles.container}>
        <h2>Login</h2>
        <p>Entre na sua conta com seu email e senha.</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" className={styles.input} 
            placeholder="Email" name="username" 
            ref={register({
              required: "Campo obrigatório!",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Email inválido!"
              }
            })}>
          </input>
          {errors.username && (
            <small>{errors.username.message}</small>
          )}
          <input type="password" className={styles.input} 
            placeholder="Senha" name="password" ref={register({
              required: "Campo obrigatório!",
            })}>
          </input>
          {errors.password && (
            <small>{errors.password.message}</small>
          )}
          {isAcessoNegado && (
            <small>Senha ou email incorreto!</small>
          )}
          <input type="submit" className={styles.button} value="Login">
          </input>
        </form>
        <Link to="/registrar" className={styles.buttonCriar}>Crie sua conta</Link>
      </div>
    </div>
  );
}
