import React from 'react';
import styles from './FormConsultaCep.module.css';

export default function FormConsultaCep() {
    return(
        <div className={styles.container}>
            <form>
                <div className={styles.formularioCep}>
                    <input className={styles.inputCep} type="text" placeholder="Digite o CEP" pattern="[0-9]{8}"></input>
                    <input className={styles.submitButton} type="submit" value="Consultar"></input>
                </div>
                <div>
                    <input type="text" disabled></input>
                </div>
                <div>
                    <input type="text" disabled></input>
                </div>
                <div>
                    <input type="text" disabled></input>
                </div>
                <div>
                    <input type="text" disabled></input>
                </div>
            </form>
        </div>
    );
}