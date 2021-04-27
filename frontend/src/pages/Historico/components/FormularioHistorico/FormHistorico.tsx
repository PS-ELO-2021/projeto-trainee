import React from 'react';
import { BuscaAPI } from '../../../../core/utils/types';
import styles from './FormHistorico.module.css';

export default function FormHistorico(testeporra : BuscaAPI) {
    return(
        <div>
            <div className={styles.boxContainer}>
                <p className={styles.resultHist + ' ' + styles.resultHistCEP}>CEP</p>
                <p className={styles.resultHist}>{testeporra.logradouro}</p>
                <p className={styles.resultHist}>{testeporra.bairro}</p>
                <p className={styles.resultHist}>{testeporra.cidade}</p>
                <p className={styles.resultHist}>{testeporra.estado}</p>
             </div>
        </div>
    );
}


