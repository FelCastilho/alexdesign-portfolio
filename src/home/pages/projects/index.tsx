
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
                        <img src={orbis} alt="Capa do projeto orbis" />
                    </Link>

                    <Link to="/clave" target='_blank'>
                        <img src="https://lh3.googleusercontent.com/pw/AP1GczNKKr4HTfr7hDcVPNOKLfyxGIK5qYu66sLDuSiziM06t8aKwZeZYsi9MF4M5F5uJGO1O6y1aJ3bCq2g90tUdO0nxkTf9vVNP5yUtA3io4uE2BPnm3q5vFFv8yZwKWKzX3Wd8ry6fSi7FCqxXx_B2Ao=w738-h739-s-no-gm?authuser=3" alt="Capa do projeto Clave" />
                    </Link>

                    <Link to="/plexo" target='_blank'>
                        <img src="https://lh3.googleusercontent.com/pw/AP1GczPEgm1PM9PqZ3Ghl-drg3rcNVTFjfNLYpfrh5S7jrMSjz7HPotGQ0rKAwln3ARpoOFAF6K0lvX4q7McdsPT5AtegMU-dUvD8QIvm6MjN7BdW9ppFkyWlz58jPO2RR5psupy8qzf8VOhuAghtrXZoos=w378-h378-s-no-gm?authuser=3" alt="Capa do projeto Plexo" />
                    </Link>

                </div>

                <div className="container-image-projects">

                    <Link to="/critica">
                        <img src="https://lh3.googleusercontent.com/pw/AP1GczMwOElYy_9IfGmBfoOgnjC79ZxD7UyWLCXWZcPGh0MmCoDji9oucjLRA2SZ2CNzSc4AMjn9uYzkgvaSe9k9oWZbMCphWG4D-E6xomR7I_elFwKRTJOModB3Gs-AugVbItz4MdPHMT67dGQtjaJa7Ylp=w378-h378-s-no-gm?authuser=3" alt="Capa de críticas" />
                    </Link>

                    <Link to="/evento">
                        <img src="https://lh3.googleusercontent.com/pw/AP1GczMD0u8guG7nVYUZTAiZNMjWQ4-xDWC4Z16sSWvvurBOXlCEBdn0qJ9mpNWy7Cd-HejfS2uOn03f5_dnGGuuWiYqmVpfsQqAeaZOydaa8MeYcmVKbh4baAIP73nImfZGeIOXmWiy2w5HdXbMEtOVC8_t=w378-h378-s-no-gm?authuser=3" alt="Capa de eventos" />
                    </Link>

                    <Link to="/entrevista">
                        <img src="https://lh3.googleusercontent.com/pw/AP1GczPWCtFtEIQfHOENj8G26oR7EnHawCQupCCQQ4ap28I19Q1883DvCZCRSdALX1udaJ4wDKL4fTEGFCgjF3pwiwSBtZmBZHeDKEhuDmeAeUruFMo5HMmCX1s9nBRjszpxA-_QOwGXEO9yvsMScnEyjiE_=w378-h378-s-no-gm?authuser=3" alt="Capa de entrevistas" />
                    </Link>

                </div>
                
            </div>

        </section>
    )
}