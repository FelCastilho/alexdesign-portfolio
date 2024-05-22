import './style.css';

import { Link } from 'react-router-dom';

import logo from '../../../assets/logo - header.svg'

export function Orbis() {
    return (
        <section className='plexo'>

            <Link to="/">
                <img src={logo} alt="Logo de Alex" className='logo-alex' />
            </Link>

            <div className="orbis-container">

                <img src="https://lh3.googleusercontent.com/pw/AP1GczPfMnCUvCe1q85VWAPLnyf6Ro44LxeSOCqCaKUtjZO6kQ_fYuFdFt-e1u7BHPEZVIjq0Tyhk1GpReMBLIJa3dFRH--d6YN2RSOFC9zSoOQCR7GC3PQS7qY5RDBPfq52WNA6VLcMbM73VfD0fy65-UGS=w1314-h739-s-no-gm?authuser=3" alt="Capa do projeto Orbis" />

                <div className="orbis-container-text">
                    <p>
                        ENG: Plexo is a 100% digital bank, its objective is to offer the user a simplified and secure <br /> banking experience. Your target audience is younger people.
                        <br /><br />
                        PT: A Plexo é um banco 100% digital, o seu objetivo é oferecer ao usuário uma <br /> experiência bancária simplificada e segura. Seu púbilico-alvo são pessoas mais jovens.
                    </p>
                </div>

                <img src="https://lh3.googleusercontent.com/pw/AP1GczOrQCUgDhdrwWT3Z0zw5xz90jc8bpzJAi5iaMIZoLh7Iy9KygMvQz9f8xHI-65h-S5brUASvnlE4Q3Tpd3U21-Yu2PcM3LQhO4C3OTjaBWo-NOSfO3_XahoLpa8vmX-uIr8zPcNETBJ0kGoOSJXL-o=w1312-h739-s-no-gm?authuser=3"
                alt="Paleta de cor projeto plexo"/>


                <img src="https://lh3.googleusercontent.com/pw/AP1GczOpehC-0mQCj8nuxFj907fKf9Wv3T1guZXN7la8Z-d7RgP7Pn_rMd_BO7mbyxzROebhosHmo7sYpbBrOh1tPw_M6j4RsFIco4_hnnPCBuuqn0SbZFSV4bZ7pInoKcVkEzFeB6est2d5G-1mY_l0ArI=w1313-h739-s-no-gm?authuser=3" alt="Tipografia"/>

            </div>

        </section>
    )
}