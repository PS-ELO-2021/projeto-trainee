import React from 'react';
import { BuscaAPI } from '../../../../core/utils/types';
import styles from './FormHistorico.module.css';

export default function FormHistorico(props : BuscaAPI) {
  return(
    <div className={styles.container}>
      <p className={styles.resultHist + ' ' + styles.resultHistCEP}>{props.cep}</p>
      <p className={styles.resultHist}>{props.logradouro}</p>
      <p className={styles.resultHist}>{props.bairro}</p>
      <p className={styles.resultHist}>{props.cidade}</p>
      <p className={styles.resultHist}>{props.estado}</p>
      <p className={styles.resultHist}>{props.criadoEm}</p>
    </div>
  );
}


