import React, { useEffect, useRef, useState } from 'react';
import FormHistorico from './components/FormularioHistorico/FormHistorico';
import './index.css'
import {Link} from 'react-router-dom';
import { requisicaoPrivada } from '../../core/utils/requestUtils';
import { BuscaAPI } from '../../core/utils/types';

export default function Historico() {
    const [minhaBusca, setMinhaBusca] = useState<BuscaAPI[]>([])

    useEffect(() => {
        requisicaoPrivada({method:'GET', url:'http://localhost:8080/buscas'})
        .then(response => {
            setMinhaBusca(response.data) 
        })
    }, [])

    return(
        <div className="containerHist">
            <h1>CONSULTA CEP</h1>
            <h2>Processo Seletivo ELO Jr 2021 - Grupo 2</h2>
            <Link to="/" className="buttonHist" >Consulta</Link>

            <form className="flex-container-historico">
                <input 
                    className="input-busca" 
                    type="text" 
                    placeholder="Buscar no histórico" />
            </form>
            
            <div className="flex-container-historico">
                {minhaBusca.map((busca) => (
                    <FormHistorico {...busca} />
                ))}
            </div>
            
        </div>
    );
}
