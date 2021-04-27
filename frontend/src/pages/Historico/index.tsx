import React, { useEffect, useRef, useState } from 'react';
import FormHistorico from './components/FormularioHistorico/FormHistorico';
import './index.css'
import {Link} from 'react-router-dom';
import { requisicaoPrivada } from '../../core/utils/requestUtils';
import { BuscaAPI } from '../../core/utils/types';
import { useForm } from 'react-hook-form';

export default function Historico() {
    const [name, setName] = useState<string>("")
    const {register, handleSubmit, errors} = useForm();
    const [minhaBusca, setMinhaBusca] = useState<BuscaAPI[]>([])

    useEffect(() => {
        requisicaoPrivada({method:'GET', url:'http://localhost:8080/buscas'})
        .then(response => {
            setMinhaBusca(response.data) 
            
        })
    }, [])

    minhaBusca.sort(function(a, b) {
        var c = new Date(a.criadoEm);
        var d = new Date(b.criadoEm);
        return d.getTime() - c.getTime();
    })

    const onSubmit = () => {
        let filtrado = minhaBusca.filter(busca => {
            const chave = "logradouro"
            if(chave === "logradouro") {
                return busca.logradouro.startsWith(name)
            }
            else if(chave === "cidade") {
                return busca.cidade.startsWith(name)
            }
            else {
                return busca.estado.startsWith(name)
            }
        })

        console.log(filtrado)
    }

    return(
        <div className="containerHist">
            <h1>CONSULTA CEP</h1>
            <h2>Processo Seletivo ELO Jr 2021 - Grupo 2</h2>
            <Link to="/" className="buttonHist" >Consulta</Link>

            <form onSubmit={handleSubmit(onSubmit)} className="flex-container-historico">
                <input 
                    className="input-busca" 
                    type="text" 
                    placeholder="Buscar no histórico" 
                    name="valor"
                    ref={register}
                    onChange={event => setName(event.target.value)}
                    value={name}/>
                <input type="submit" className="input-busca"/>
            </form>
            
            <div className="flex-container-historico">
                {minhaBusca.map((busca) => (
                    <FormHistorico {...busca} />
                ))}
            </div>
            
        </div>
    );
}
