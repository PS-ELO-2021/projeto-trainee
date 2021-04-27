import React from 'react';
import FormConsultaCep from './components/FormularioCEP/FormConsultaCep';
import './index.css';
import {Link, useHistory} from 'react-router-dom';

export default function Home() {
    let history = useHistory()

    return(
        <div className="container">
            <h1 className="h1-home">CONSULTA CEP</h1>
            <h2 className="h2-home">Processo Seletivo ELO Jr 2021 - Grupo 2</h2>


            {/* <Link to="/historico" className="buttonHist">
                Histórico
            </Link> */}

            <button className="buttonHist" onClick={() => {history.push('/historico')}}></button>

            <FormConsultaCep />
        </div>
    );
}