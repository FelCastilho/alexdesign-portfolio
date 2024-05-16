
import './style.css'

import orbis from '../../../assets/orbis.svg';

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
                        <img src="https://lh3.googleusercontent.com/pw/AP1GczNKKr4HTfr7hDcVPNOKLfyxGIK5qYu66sLDuSiziM06t8aKwZeZYsi9MF4M5F5uJGO1O6y1aJ3bCq2g90tUdO0nxkTf9vVNP5yUtA3io4uE2BPnm3q5vFFv8yZwKWKzX3Wd8ry6fSi7FCqxXx_B2Ao=w738-h739-s-no-gm?authuser=3" alt="Imagem projeto clave" />
                    </Link>

                    <Link to="/plexo" target='_blank'>
                        <img src="https://lh3.googleusercontent.com/pw/AP1GczPEgm1PM9PqZ3Ghl-drg3rcNVTFjfNLYpfrh5S7jrMSjz7HPotGQ0rKAwln3ARpoOFAF6K0lvX4q7McdsPT5AtegMU-dUvD8QIvm6MjN7BdW9ppFkyWlz58jPO2RR5psupy8qzf8VOhuAghtrXZoos=w378-h378-s-no-gm?authuser=3" alt="Imagem projeto clave" />
                    </Link>

                </div>
            </div>

        </section>
    )
}