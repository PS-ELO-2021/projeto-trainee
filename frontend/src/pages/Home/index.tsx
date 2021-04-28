import React from 'react';
import FormConsultaCep from './components/FormularioCEP/FormConsultaCep';
import './index.css';
import {Link} from 'react-router-dom';

export default function Home() {
    return(
        <div>
            <h1 className="title">Consulta CEP</h1>
            <h2 className="subtitle">Processo Seletivo ELO Jr 2021 - Grupo 2</h2>


            <Link to="/historico" className="buttonHist">
                Histórico
            </Link>

            <FormConsultaCep />
        </div>
    );
}