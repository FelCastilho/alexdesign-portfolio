import { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Logo from '../../assets/logo - header.svg';

export function Header() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  }

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <header>
      <nav className={`navbar ${isOpen ? 'open' : ''}`}>

        <div className="nav-container">

          <img src={Logo} className="logo-header" />

          <div className="menu-icon" onClick={toggleNavbar}>

            <div className={`bar ${isOpen ? 'open' : ''}`}></div>
            <div className={`bar ${isOpen ? 'open' : ''}`}></div>
            <div className={`bar ${isOpen ? 'open' : ''}`}></div>

          </div>

          <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
            <li><Link to="/" onClick={() => handleClick('inicio')}>Ínicio</Link></li>
            <li><Link to="/" onClick={() => handleClick('sobre')}>Sobre</Link></li>
            <li><Link to="/" onClick={() => handleClick('contato')}>Contato</Link></li>
            <li><Link to="/mentorias">Mentorias</Link></li>
          </ul>

        </div>
      </nav>
    </header>
  )
};