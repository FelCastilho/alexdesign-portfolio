import './style.css'

import { Link } from 'react-router-dom'

export function Critica() {
    return (

        <section id="video">

            <h1 className='critica-title'>Crítica - Missão Impossível 7</h1>

            <div className="video">

                <div className="container-video">

                    <iframe width="560" height="315" src="https://www.youtube.com/embed/O9wxkMX_HcU?si=mVckMw5YlI_VA5pM" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>

                </div>

            </div>

            <Link to="/">
                Voltar
            </Link>

            

        </section>

    )
}