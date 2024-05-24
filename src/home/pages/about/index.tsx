import './style.css'
import fotoPerfil from './alexandre.svg';

export function About() {
    return (
    
        <section className="about" id='sobre'>

        <div className="container-about">

            <div className="about-text">

                <div className="about-title">
                    <h1>SOBRE MIM</h1>
                    <hr />
                </div>

                <p>
                Me chamo Alexandre, tenho 22 anos, <br />
                natural do Rio de Janeiro. Trabalho <br />
                na área de design há 3 anos. Estou <br />
                pronto para te ouvir, entender e criar <br />
                um projeto com uma abordagem única <br />
                que atenda as suas necessidades.
                </p>
            
            </div>

            <div className="container-aboutImg"><img src={fotoPerfil} alt="Foto de perfil" className='image-about'/></div>

        </div>

    </section>

    )
}