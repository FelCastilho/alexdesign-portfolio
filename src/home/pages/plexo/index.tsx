import './style.css';

import { Link } from 'react-router-dom';

import capa from './image/1.svg';
import paleta from './image/5.svg';
import tipografia from './image/9.svg'

import cartoes from './image/10.svg'
import cartoes2 from './image/11.svg'
import cartoes3 from './image/12.svg'
import cartoes4 from './image/13.svg'

import app from './image/14.svg'
import app2 from './image/15.svg'
import app3 from './image/16.svg'
import app4 from './image/17.svg'
import app5 from './image/18.svg'
import site from './image/19.svg'

import placa from './image/20.svg'
import placa2 from './image/21.svg'
import placa3 from './image/22.svg'
import placa4 from './image/23.svg'

import carrossel from './image/24.svg'
import carrossel2 from './image/25.svg'

import obrigado from './image/26.svg'

import logo from '../../../assets/logo - header.svg'

export function Plexo() {
    return (
        <section className='plexo'>

            <Link to="/">
                <img src={logo} alt="Logo de Alex" className='logo-alex' />
            </Link>

            <div className="plexo-container">

                <img src={capa} alt="Capa do projeto Plexo" />

                <div className="plexo-container-text">
                    <p>
                        ENG: Plexo is a 100% digital bank, its objective is to offer the user a simplified and secure <br /> banking experience. Your target audience is younger people.
                        <br /><br />
                        PT: A Plexo é um banco 100% digital, o seu objetivo é oferecer ao usuário uma <br /> experiência bancária simplificada e segura. Seu púbilico-alvo são pessoas mais jovens.
                    </p>
                </div>

                <div className="apresentation-1">
                    <div className="image-1"></div>
                    <div className="image-2"></div>
                    <div className="image-3"></div>
                </div>

                <img src={paleta} alt="Capa do projeto Clave"/>

                <div className="logo-apresentation">
                    <div className="logo1"></div>
                    <div className="logo2"></div>
                    <div className="logo3"></div>
                </div>

                <img src={tipografia} alt="Capa do projeto Clave"/>

                <div className="mockups">

                    <img src={cartoes} alt="Capa do projeto Clave"/>

                    <img src={cartoes2} alt="Capa do projeto Clave"/>

                    <img src={cartoes3} alt="Capa do projeto Clave"/>

                    <img src={cartoes4} alt="Capa do projeto Clave"/>

                    <img src={app} alt="Capa do projeto Clave"/>

                    <img src={app2} alt="Capa do projeto Clave"/>

                    <img src={app3} alt="Capa do projeto Clave"/>

                    <img src={app4} alt="Capa do projeto Clave"/>

                    <img src={app5} alt="Capa do projeto Clave"/>

                    <img src={site} alt="Capa do projeto Clave"/>

                    <img src={placa} alt="Capa do projeto Clave"/>

                    <img src={placa2} alt="Capa do projeto Clave"/>

                    <img src={placa3} alt="Capa do projeto Clave"/>

                    <img src={placa4} alt="Capa do projeto Clave"/>

                    <img src={carrossel} alt="Capa do projeto Clave"/>

                    <img src={carrossel2} alt="Capa do projeto Clave"/>

                    <img src={obrigado} alt="Capa do projeto Clave"/>

                </div>

            </div>

        </section>
    )
}