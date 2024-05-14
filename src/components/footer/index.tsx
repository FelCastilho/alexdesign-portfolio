import './style.css'

import Logo from '../../assets/logo - footer.svg';
import { Link } from 'react-router-dom';

import { FaInstagram, FaBehance } from "react-icons/fa";

export function Footer() {
    return (
        <footer>

            <div className="section1">

                <div className='contact-footer'>

                    <div className="footer-icons">
                            <Link to="https://www.instagram.com/alexoliveira_m/" target='_blank'>
                                <FaInstagram size={20}/>
                            </Link>

                            <Link to="https://www.behance.net/alexandoliveir114" target='_blank'>
                                <FaBehance />
                            </Link>

                    </div>
                </div>

                <img src={Logo} />

                <div className='blank-space-footer'></div>
                    
            </div>

            <p className='copyright'>Desenvolvido por <strong>Felipe Coutinho</strong> | © 2024 | Todos os direitos reservados</p>
        </footer>
    )
}