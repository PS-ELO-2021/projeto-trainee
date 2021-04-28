import React, { useState } from 'react';
import styles from './FormConsultaCep.module.css';
import { requisicao } from '../../../../core/utils/requestUtils'
import { getSessaoUsuarioAsLoginType } from '../../../../core/utils/auth';
import { AxiosResponse } from 'axios';
import { Busca } from '../../../../core/utils/types';
import { useForm } from 'react-hook-form';

export default function FormConsultaCep() {
    const {register, handleSubmit, errors} = useForm();
    const [isCepInvalido, setIsCepInvalido] = useState<boolean>(false)

    const onSubmit = () => {
        const cep: string = (document.getElementById("cep") as HTMLInputElement).value
        const logradouroElement: HTMLInputElement = document.getElementById("logradouro") as HTMLInputElement
        const bairroElement: HTMLInputElement = document.getElementById("bairro") as HTMLInputElement
        const cidadeElement: HTMLInputElement = document.getElementById("cidade") as HTMLInputElement
        const estadoElement: HTMLInputElement = document.getElementById("estado") as HTMLInputElement

        setIsCepInvalido(false)

        requisicao({url: `https://viacep.com.br/ws/${cep}/json/`})
        .then(response => {
            if(response.data.erro == true) {
                throw 404;
            }

            logradouroElement.value = response.data.logradouro;
            bairroElement.value = response.data.bairro
            cidadeElement.value = response.data.localidade
            estadoElement.value = response.data.uf

            salvarCep(response)
        })
        .catch(() => {
            setIsCepInvalido(true)
        });
    }

    return(
        <div className={styles.container}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input id="cep" 
                className={`${styles.inputCep} ${styles.inputHome}`} 
                type="text" 
                placeholder="Digite o CEP"
                name="cep"
                ref={register({
                    pattern: {
                        value: /[0-9]{8}/,
                        message: "Cep deve conter apenas números!",
                    },
                    minLength: {
                        value: 8,
                        message: "Cep deve conter 8 números!"
                    },
                    maxLength: {
                        value: 8,
                        message: "Cep deve conter 8 números!"
                    }
                })}/>
                

                <input type="submit" 
                value="Consultar" 
                className={styles.submitButton} />
                
                {errors.cep && (
                    <small>{errors.cep.message}</small>
                )}
                {isCepInvalido && (
                    <small>Cep não encontrado</small>
                )}

                <input className={styles.inputHome} id="logradouro" type="text" disabled></input>
                <input className={styles.inputHome} id="bairro" type="text" disabled></input>
                <input className={styles.inputHome} id="cidade" type="text" disabled></input>
                <input className={styles.inputHome} id="estado" type="text" disabled></input>
            </form>
        </div>
    );
}

function buscarCep() {
    const cep: string = (document.getElementById("cep") as HTMLInputElement).value
    const logradouroElement: HTMLInputElement = document.getElementById("logradouro") as HTMLInputElement
    const bairroElement: HTMLInputElement = document.getElementById("bairro") as HTMLInputElement
    const cidadeElement: HTMLInputElement = document.getElementById("cidade") as HTMLInputElement
    const estadoElement: HTMLInputElement = document.getElementById("estado") as HTMLInputElement

    requisicao({url: `https://viacep.com.br/ws/${cep}/json/`})
    .then(response => {
        if(response.data.erro == true) {
            throw 400;
        }

        logradouroElement.value = response.data.logradouro;
        bairroElement.value = response.data.bairro
        cidadeElement.value = response.data.localidade
        estadoElement.value = response.data.uf

        salvarCep(response)
    })
    .catch(() => {
        
    });
}

function salvarCep(response: AxiosResponse) {
    const busca: Busca = {
        cep: response.data.cep,
        logradouro: response.data.logradouro,
        bairro: response.data.bairro,
        cidade: response.data.localidade,
        estado: response.data.uf,
        usuario: {
            id: getSessaoUsuarioAsLoginType().idUsuario
        }
    }

    const token = getSessaoUsuarioAsLoginType().access_token

    const headers = {
        Authorization: `Bearer ${token}`
    }

    requisicao({method:'POST', url:'http://localhost:8080/buscas', data: busca, headers})
}