import React from 'react';
import styles from './FormConsultaCep.module.css';
import {requisicao} from '../../../../core/utils/requestUtils'

export default function FormConsultaCep() {
    return(
        <div className={styles.container}>
            <form>
                <div className={styles.formularioCep}>
                    <input id="cep" 
                    className={`${styles.inputCep} ${styles.inputHome}`} 
                    type="text" 
                    placeholder="Digite o CEP" 
                    pattern="[0-9]{8}" />

                    <input type="button" 
                    value="Consultar" 
                    className={styles.submitButton}
                    onClick={() => {buscarCep()}} />
                </div>
                <div>
                    <input className={styles.inputHome} id="logradouro" type="text" disabled></input>
                </div>
                <div>
                    <input className={styles.inputHome} id="bairro" type="text" disabled></input>
                </div>
                <div>
                    <input className={styles.inputHome} id="cidade" type="text" disabled></input>
                </div>
                <div>
                    <input className={styles.inputHome} id="estado" type="text" disabled></input>
                </div>
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
    .then(response => {logradouroElement.value = response.data.logradouro;
                        bairroElement.value = response.data.bairro
                        cidadeElement.value = response.data.localidade
                        estadoElement.value = response.data.uf});
}