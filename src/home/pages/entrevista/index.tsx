import './style.css'

import { Link } from 'react-router-dom'

export function Entrevista() {
    return (

        <section id="video">

            <h1 className='entrevista-title'>Entrevista com Fábio Porchat e Dani Calabresa</h1>

            <p>Entrevista feita pelo canal Team Comics para <br />divulgar o filme "O Palestrante".</p>

            <div className="video">

                <div className="container-video">

                    <iframe width="560" height="315" src="https://www.youtube.com/embed/a8Em1XaJCiQ?si=juyvzA9dulzv3Rof" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>

                </div>

            </div>

            <Link to="/">
                Voltar
            </Link>

        </section>

    )
}