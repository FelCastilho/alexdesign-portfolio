import './style.css';
import { Link } from 'react-router-dom';

export function Hero() {
    return (
        <section className="hero">

            <div className='hero-container'>

                <div className="hero-text">

                    <h1>
                        Realizando projetos <br className='bp-mobile-hero'/>
                        que cumprem <br className='bp-desktop-hero'/> seus <br className='bp-mobile-hero'/>
                        objetivos estratégicos. <br className='bp-mobile-hero'/>
                    </h1>

                    <div className="btn-container">
                        <Link to="#projetos" id='btn-projetos'>Projetos</Link>
                        <Link to="#" id='btn-contact'>Entre em contato</Link>
                    </div>

                </div>

                <div className='blank-space'></div>

            </div>

        </section>

    )
}