import React from 'react';
import FormLogin from './components/FormLogin/FormLogin'
import './index.css'

export default function Login() {
    return(
      <div>
        <h1 className="title">Consulta CEP</h1>
        <h2 className="subtitle">Processo Seletivo ELO Jr 2021 - Grupo 2</h2>
        <FormLogin />
      </div>
    );
}