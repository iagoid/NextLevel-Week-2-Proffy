import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import './styles.css'

interface PageHeaderProps {
    title: string;
    description?: string;
}

// Passo os valores pegos pelo PageHeaderProps
const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt=""/>
                </Link>
                <img src={logoImg} alt=""/>
            </div>

            <div className="header-content">
                <strong>{props.title}</strong>
                {/* A segunda parte só executa se a primeira for verdadeira */}
                { props.description && <p>{props.description}</p> }
            {/* Pega o conteudo que está entre a abertura 
            e fechamento da tag PageHeader */}
            {props.children}
            </div>
        </header>
    );
}

export default PageHeader