import './style.css'

import { Link } from 'react-router-dom'

export function Evento() {
    return (

        <section id="video">

            <h1 className='evento-title'>Teaser Amigos que Valem Ouro
            </h1>

            <p>Evento realizado em São Paulo com foco em ajudar <br />Microempreendedores a fazerem networking.</p> 

            <div className="video">

                <div className="container-video">

                    <iframe width="560" height="315" src="https://www.youtube.com/embed/qKbgLhMmPZk?si=f1MhGu88y_VExKPy" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>

                </div>

            </div>

            <Link to="/">
                Voltar
            </Link>



        </section>

    )
}