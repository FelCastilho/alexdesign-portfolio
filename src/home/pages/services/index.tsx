import { useState } from 'react';

import './style.css'
import { FaPenNib } from "react-icons/fa";
import { CiPen } from "react-icons/ci";
import { FaCirclePlay } from "react-icons/fa6";

export function Services() {

    const [iconColor] = useState("#EBF1FF");

    return (
        <section className='services'>

            <div className="services-container">

                <div className="services-text">

                    <div className="services-title">
                        <h1>SERVIÇOS</h1>
                        <hr />
                    </div>

                    <div className="services-itens">
                        <div className='service'>
                            <FaPenNib color={iconColor} />
                            Design de Identidade Visual
                        </div>

                        <div className='service'>
                            <CiPen color={iconColor} />
                            Design para redes sociais
                        </div>

                        <div className='service'>
                            <FaCirclePlay color={iconColor} />
                            Edição de vídeo
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}