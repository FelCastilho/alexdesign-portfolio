
import './style.css'

import orbis from '../../../assets/orbis.svg';
import clave from '../../../assets/clave.svg';
import plexo from '../../../assets/plexo.svg';

import { Link } from 'react-router-dom';

export function Projects() {

    return (
        <section className="projects" id='projetos'>

            <div className="container-projects">

                <div className="container-title">
                    <h1>PROJETOS</h1>
                    <hr className='line-projects' />
                </div>

                <div className="container-image-projects">


                    <Link to="#">
                        <img src={orbis} alt="Imagem projeto orbis" />
                    </Link>

                    <Link to="/clave" target='_blank'>
                        <img src={clave} alt="Imagem projeto clave" />
                    </Link>

                    <Link to="/plexo" target='_blank'>
                        <img src={plexo} alt="Imagem projeto clave" />
                    </Link>

                </div>
            </div>

        </section>
    )
}