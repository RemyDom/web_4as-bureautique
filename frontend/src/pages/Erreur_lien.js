// |==== { Imports des composants } ====|
import Bandeau from '../composants/Bandeau.js';
import Pied from '../composants/Pied.js';

// |==== { Imports des modules + CSS } ====|
import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import './Home.css';

// |==== { Imports des images } ====|
import img_printer from '../img/Motif1.png';

function ErreurLien() {

    useEffect(() => {
        document.title = 'Euro Maintenance - Erreur 404'; // Change le nom d'onglet de la page
    }, []);

    return (
        <div className="ErreurLien_container">

            <Bandeau />

            <div className="ErreurLien_container_parts">
                <div className="ErreurLien_part1">

                    <p className="ErreurLien_T1">404</p>
                    <p className="ErreurLien_T2">Page Introuvable !</p>
                    <p className="ErreurLien_T3">
                        Nous sommes désolés, la page que vous cherchez semble ne pas exister. <br />
                    </p>

                    <div className="ErreurLien_ButtonContainer">
                        <Link className="ErreurLien_Link" to="/"><p className="ErreurLien_GoHomeButton"> Accueil </p></Link>
                    </div>
                    
                </div>

                <div className="ErreurLien_Part2">

                    <img className="ErreurLien_img_printer" src={img_printer} alt="Printer" />

                    <svg className="ErreurLien_svg_principal" width="647" height="572" viewBox="0 0 647 572" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M388.527 535.899C333.304 561.446 284.151 577.858 244.183 569.271C204.482 560.175 173.434 527.098 123.258 482.725C73.0825 438.352 3.17379 383.013 0.905984 301.494C-1.36182 219.975 63.3333 111.92 133.613 86.4705C203.893 61.021 280.023 117.668 361.66 102.692C442.958 87.5381 529.497 1.26956 581.95 0.835834C634.403 0.402104 652.576 86.998 644.56 174.154C635.938 261.641 601.199 350.374 553.086 412.679C505.239 474.475 443.751 510.352 388.527 535.899Z" fill="#84429A" />
                    </svg>

                    <svg className="ErreurLien_svg2"  width="43" height="57" viewBox="0 0 43 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M42.2 23.7C42.2 37.7 35.6 56.4 25.2 56.4C14.7 56.4 0.5 37.7 0.5 23.7C0.5 9.7 14.7 0.5 25.2 0.5C35.6 0.5 42.2 9.7 42.2 23.7Z" fill="#84429A" />
                    </svg>

                    <svg className="ErreurLien_svg3" width="28" height="25" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.9 9.3C27.9 15.4 19.7 24.4 12.8 24.4C5.8 24.4 0 15.4 0 9.3C0 3.2 5.8 0 12.8 0C19.7 0 27.9 3.2 27.9 9.3Z" fill="#84429A" />
                    </svg>



                </div>
            </div>


            <Pied />
        </div>
    );
}

export default ErreurLien;