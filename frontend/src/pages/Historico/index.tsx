import React, { useEffect, useRef, useState } from 'react';
import FormHistorico from './components/FormularioHistorico/FormHistorico';
import './index.css'
import {Link} from 'react-router-dom';
import { requisicaoPrivada } from '../../core/utils/requestUtils';
import { BuscaAPI } from '../../core/utils/types';
import { useForm } from 'react-hook-form';

export default function Historico() {
    const [valorBusca, setValorBusca] = useState<string>("")
    const [chaveBusca, setChaveBusca] = useState<string>("logradouro")
    const [minhaBusca, setMinhaBusca] = useState<BuscaAPI[]>([])
    const [isDigitando, setIsDigitando] = useState(false)
    const [filtrado, setFiltrado] = useState<BuscaAPI[]>([])

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

    useEffect(() => {
        setFiltrado(minhaBusca.filter(busca => {
            if(chaveBusca === "logradouro") {
                return busca.logradouro.startsWith(valorBusca)
            }
            else if(chaveBusca === "cidade") {
                return busca.cidade.startsWith(valorBusca)
            }
            else {
                return busca.estado.startsWith(valorBusca)
            }
        }))
    }, [valorBusca])

    return(
        <div>
            <Link to="/" className="buttonCons" >Consulta</Link>

            <form className="flex-container-historico">
                <input 
                    className="input-busca" 
                    type="text" 
                    placeholder="Buscar no histórico" 
                    onChange={event => {
                        setValorBusca(event.target.value)
                        setIsDigitando(true)
                    }}
                    value={valorBusca}/>
                <select className="input-chave" onChange={event => {
                    setChaveBusca(event.target.value)
                }}>
                    <option value="logradouro">Logradouro</option>
                    <option value="cidade">Cidade</option>
                    <option value="estado">Estado</option>
                </select>
            </form>
            
            <div className="flex-container-historico">
                {isDigitando ? filtrado.map((busca) => (
                    <FormHistorico {...busca} />
                )):
                minhaBusca.map((busca) => (
                    <FormHistorico {...busca} />
                ))}
            </div>
            
        </div>
    );
}
