import './style.css'

import orbis from '../../../assets/orbis.svg';
import clave from '../../../assets/clave.svg';

export function Projects(){
    return(
        <section className="projects">

            <div className="container-projects">

                <div className="container-title">
                    <h1>PROJETOS</h1>
                    <hr className='line-projects'/>
                </div>

                <div className="container-image-projects">
                    <img src={orbis} alt="Imagem projeto orbis" />
                    <img src={clave} alt="Imagem projeto clave" />
                </div>
            </div>
            


        </section>
    )
}