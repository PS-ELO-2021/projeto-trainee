import React from 'react';
import styles from './FormHistorico.module.css';

export default function FormHistorico() {
    return(
        <div>
            <form className={styles.flexContainer}>
                <input 
                    className={styles.buscaHist} 
                    type="text" 
                    placeholder="Buscar no histórico" />
            </form>
            <div className={styles.flexContainer}>
                <div className={styles.boxContainer}>
                    <p className={styles.resultHist + ' ' + styles.resultHistCEP}>CEP</p>
                    <p className={styles.resultHist}>Logradouro</p>
                    <p className={styles.resultHist}>Bairro</p>
                    <p className={styles.resultHist}>Cidade</p>
                    <p className={styles.resultHist}>Estado</p>
                </div>
                <div className={styles.boxContainer}>
                    <p className={styles.resultHist + ' ' + styles.resultHistCEP}>CEP</p>
                    <p className={styles.resultHist}>Logradouro</p>
                    <p className={styles.resultHist}>Bairro</p>
                    <p className={styles.resultHist}>Cidade</p>
                    <p className={styles.resultHist}>Estado</p>
                </div>
                <div className={styles.boxContainer}>
                    <p className={styles.resultHist + ' ' + styles.resultHistCEP}>CEP</p>
                    <p className={styles.resultHist}>Logradouro</p>
                    <p className={styles.resultHist}>Bairro</p>
                    <p className={styles.resultHist}>Cidade</p>
                    <p className={styles.resultHist}>Estado</p>
                </div>
            </div>
        </div>
    );
}
