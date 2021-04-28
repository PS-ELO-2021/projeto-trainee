import React from 'react';
import { BuscaAPI } from '../../../../core/utils/types';
import styles from './FormHistorico.module.css';

export default function FormHistorico(props : BuscaAPI) {
  return(
    <div className={styles.horizontal}>
      <div className={styles.container}>
        <p className={styles.resultHist + ' ' + styles.resultHistCEP}>{props.cep}</p>
        <p className={styles.resultHist}><b>Logradouro:</b> {props.logradouro}</p>
        <p className={styles.resultHist}><b>Bairro:</b> {props.bairro}</p>
        <p className={styles.resultHist}><b>Cidade:</b> {props.cidade}</p>
        <p className={styles.resultHist}><b>Estado:</b> {props.estado}</p>
      </div>
    </div>
  );
}
