import React from 'react';
import FormHistorico from './components/FormularioHistorico/FormHistorico';
import './index.css'
import {Link} from 'react-router-dom';

export default function Historico() {
    return(
        <div className="containerHist">
            <h1>CONSULTA CEP</h1>
            <h2>Processo Seletivo ELO Jr 2021 - Grupo 2</h2>
            <Link to="/" className="buttonHist" >Consulta</Link>
            <FormHistorico />
        </div>
    );
}
