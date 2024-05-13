import './style.css';
import { Link } from 'react-router-dom';

export function Hero() {
    return (
        <section className="hero">

            <div className='hero-container'>

                <div className="hero-text">

                    <h1>
                        Realizando projetos que cumprem <br id="bp-desktop-1"/> 
                        seus objetivos estratégicos.
                    </h1>

                    <div className="btn-container">
                        <Link to="#" id='btn-projetos'>Projetos</Link>
                        <Link to="#" id='btn-contact'>Entre em contato</Link>
                    </div>

                </div>

                <div className='blank-space'></div>

            </div>

        </section>

    )
}