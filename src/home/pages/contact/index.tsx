import './style.css'
import image from '../../../assets/img - help.png';

export function Contact() {
    return (
        <section className="contact">

            <div className="container-contact">

                <div className="text-contact">

                    <h1>Precisa de um projeto?</h1>

                    <p>
                        <strong>Agende uma conversa comigo.</strong> <br />
                        Vamos alinhar todos os pontos <br />
                        e transformar as suas ideias <br />
                        em realidade! <br />
                    </p>
                    
                    <a href="#">Agendar call</a>

                </div>

                <img src={image} alt="Foto de perfil" />

            </div>

        </section >
    )
}