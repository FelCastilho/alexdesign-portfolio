import './style.css'

import fotoPerfil from './alexandre.svg'

export function About() {
    return (
    
        <section className="about" id="about">

            <div className="container-about">

                <div className="hero-about-text">

                    <h1>Sobre mim</h1>
                    <hr />

                    <p>
                    Me chamo Alexandre, tenho 22 anos, <br />
                    natural do Rio de Janeiro. Trabalho <br />
                    na área de design há 3 anos. Estou <br />
                    pronto para te ouvir, entender e criar <br />
                    um projeto com uma abordagem única <br />
                    que atenda as suas necessidades.
                    </p>
                
                </div>

                <img src={fotoPerfil} alt="Foto de perfil" className='image-about'/>

            </div>

        </section>

    )
}