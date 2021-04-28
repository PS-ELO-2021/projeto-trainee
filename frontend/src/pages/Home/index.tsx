import React from 'react';
import FormConsultaCep from './components/FormularioCEP/FormConsultaCep';
import './index.css';
import {Link} from 'react-router-dom';

export default function Home() {
    return(
        <div>
            <Link to="/historico" className="buttonHist">
                Histórico
            </Link>

            <FormConsultaCep />
        </div>
    );
}
