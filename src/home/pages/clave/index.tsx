import './style.css';

import { Link } from 'react-router-dom';

import capa from './images/1.svg';
import paleta from './images/2.svg';

import logo1 from './images/3.svg';
import logo2 from './images/4.svg';
import logo3 from './images/5.svg';
import logo4 from './images/6.svg';

import tipografia from './images/9.svg';
import businessCard from './images/10.svg';
import businessCard2 from './images/11.svg';
import adesivo from './images/12.svg';
import sacola from './images/13.svg';
import avental from './images/14.svg';
import placa from './images/15.svg';
import obrigado from './images/16.svg';

import logo from '../../../assets/logo - header.svg'

export function Clave() {
  return (
    <section className='clave'>

      <Link to="/">
        <img src={logo} alt="Logo de Alex" className='logo-alex' />
      </Link>


      <div className="clave-container">

        <img src={capa} alt="Capa do projeto Clave" />

        <div className="clave-container-text">
          <p>
            PT: A Clave é uma confeitaria cuja sua especialidade são os deliciosos bolos no pote. <br />
            O nome foi baseado em inúmeros projetos fictícios de uma cafeteria com mesmo nome, <br /> logo, unimos o útil ao agradável.

            <br /><br />

            EN: Clave is a confectionery whose specialty is delicious cakes in a jar. <br />
            The name was based on numerous fictional projects from a coffee shop with the same <br /> name, so we combined the useful with the pleasant.
          </p>

        </div>

        <img src={paleta} alt="Capa do projeto Clave" />

        <div className="clave-logo-container">
          <div className='clave-logo-apresentation1'>
            <img src={logo1} alt="" />
            <img src={logo2} alt="" />
          </div>

          <div className='clave-logo-apresentation2'>
            <img src={logo3} alt="" />
            <img src={logo4} alt="" />
          </div>
        </div>

        <div className='clave-pattern-apresentation'>
          <div className="pattern1"></div>
          <div className="pattern2"></div>
        </div>

        <div className="clave-mockup-container">
          <img src={tipografia} alt="Capa do projeto Clave" />
          <img src={businessCard} alt="Capa do projeto Clave" />
          <img src={businessCard2} alt="Capa do projeto Clave" />
          <img src={adesivo} alt="Capa do projeto Clave" />
          <img src={sacola} alt="Capa do projeto Clave" />
          <img src={avental} alt="Capa do projeto Clave" />
          <img src={placa} alt="Capa do projeto Clave" />
          <img src={obrigado} alt="Capa do projeto Clave" />
        </div>
      </div>

    </section>
  )
}