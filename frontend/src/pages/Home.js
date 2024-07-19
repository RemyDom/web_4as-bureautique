// |==== { Imports des composants } ====|
import Bandeau from '../composants/Bandeau.js'
import Pied from '../composants/Pied.js'
import ConseilInfosStickers from '../composants/home/Conseil_InfosStickers.js'
import MaintenanceInfosStickers from '../composants/home/Maintenance_InfoStickers.js'

// |==== { Imports des modules + CSS } ====|
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './Home.css';
import "../index.css";

// |==== { Imports des images } ====|
import img_equipe_technique from '../img/equipe_technique.png';
import img_presentation from '../img/presentation.jpg';
import img_printer from '../img/Motif1.png';
import img_formation from '../img/formation.jpg';
import logo_Canon from '../img/logo_canon.png';
import logo_Hp from '../img/logo_hp.png';
import logo_Kyocera from '../img/logo_kyocera_blanc.png';

function Home() {

    // |==== { Menu qui affiche "Maintenance" OU "Conseil" OU "Formation" } ====|
    const [isChoice1, setChoice1] = useState(true); /* Par défaut affiche le choix 1 */
    const [isChoice2, setChoice2] = useState(false);
    const [isChoice3, setChoice3] = useState(false);

    function choice1() {
        if (isChoice1 === false) {
            setChoice1((isChoice1) => !isChoice1);
            setChoice2(false);
            setChoice3(false);
        }
    }

    function choice2() {
        if (isChoice2 === false) {
            setChoice1(false);
            setChoice2((isChoice2) => !isChoice2);
            setChoice3(false);
        }
    }

    function choice3() {
        if (isChoice3 === false) {
            setChoice1(false);
            setChoice2(false);
            setChoice3((isChoice3) => !isChoice3);
        }
    }

    useEffect(() => {
        document.title = 'Euro Maintenance - Accueil'; // Change le nom d'onglet de la page
    }, []);

    return (
        <div className="Home">

            <Bandeau />

            <div className="Home_hero_banner"> {/*BANNER HERO */}

                <p className="Home_hero_bigTitle">EURO MAINTENANCE</p>
                <p className="Home_hero_text">Une structure de proximité qui permet à chaque <br />
                    collaborateur de s’épanouir en développant son esprit d’initiative  </p>

                <a href="#hero_bubles1" ><p className="Home_hero_bubles1" onClick={choice1}>Maintenance</p></a>
                <a href="#hero_bubles2" ><p className="Home_hero_bubles2" onClick={choice2}>Conseils</p></a>
                <a href="#hero_bubles3" ><p className="Home_hero_bubles3" onClick={choice3}>Formations</p></a>
                <a href="#Home_presentation_part1" ><p className="Home_hero_button">En savoir plus</p></a>

                <svg className="Home_hereo_Test" viewBox="0 0 1920 975"> {/*Traits dans le fond très chian à faire */}
                    <g clipPath="url(#clip0_4_3)" filter="url(#filter0_f_4_3)">
                        <g filter="url(#filter1_i_4_3)">
                            <path d="M-113.97 474.227C-81.2387 472.217 20.9383 479.957 82.4167 462.169C143.895 444.381 193.422 385.288 254.901 367.5C316.379 349.712 389.809 373.23 451.287 355.442C512.765 337.655 562.293 278.561 623.771 260.773C685.25 242.985 758.679 266.503 820.158 248.716C881.636 230.928 931.163 171.834 992.642 154.046C1054.12 136.259 1127.55 159.777 1189.03 141.989C1250.51 124.201 1300.03 65.1074 1361.51 47.3196C1422.99 29.5318 1496.42 53.0498 1557.9 35.262C1619.38 17.4743 1668.9 -41.6193 1730.38 -59.4071C1791.86 -77.1949 1865.29 -53.6769 1926.77 -71.4647C1988.25 -89.2525 2070.51 -150.356 2099.25 -166.134" stroke="#84429A" strokeOpacity="0.1" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                        <g filter="url(#filter2_i_4_3)">
                            <path d="M-250.066 575C-220.253 588.659 -133.793 643.657 -71.19 656.954C-8.58672 670.252 62.9509 641.488 125.554 654.785C188.158 668.083 241.827 723.442 304.43 736.74C367.033 750.037 438.571 721.273 501.174 734.571C563.777 747.868 617.446 803.227 680.05 816.525C742.653 829.822 814.191 801.058 876.794 814.356C939.397 827.653 993.066 883.013 1055.67 896.31C1118.27 909.608 1189.81 880.844 1252.41 894.141C1315.02 907.439 1368.69 962.798 1431.29 976.095C1493.89 989.393 1565.43 960.629 1628.03 973.926C1690.64 987.224 1744.31 1042.58 1806.91 1055.88C1869.51 1069.18 1970.86 1054.07 2003.65 1053.71" stroke="#84429A" strokeOpacity="0.1" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                        <g filter="url(#filter3_i_4_3)">
                            <path d="M-167.859 606.603C-131.097 609.851 -19.3533 633.601 52.7117 626.095C124.777 618.589 192.466 569.072 264.531 561.566C336.596 554.06 413.037 588.564 485.102 581.058C557.167 573.552 624.857 524.035 696.922 516.529C768.987 509.023 845.428 543.528 917.493 536.021C989.558 528.515 1057.25 478.998 1129.31 471.492C1201.38 463.986 1277.82 498.491 1349.88 490.985C1421.95 483.478 1489.64 433.962 1561.7 426.455C1633.77 418.949 1710.21 453.454 1782.27 445.948C1854.34 438.442 1922.03 388.925 1994.09 381.419C2066.16 373.912 2142.6 408.417 2214.66 400.911C2286.73 393.405 2391.18 347.137 2426.48 336.382" stroke="#84429A" strokeOpacity="0.1" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                        <g filter="url(#filter4_i_4_3)">
                            <path d="M221.772 10C249.153 28.57 326.041 99.0724 386.062 121.42C446.083 143.767 521.875 121.737 581.896 144.085C641.916 166.432 686.165 233.157 746.186 255.505C806.207 277.852 881.999 255.822 942.019 278.17C1002.04 300.517 1046.29 367.242 1106.31 389.589C1166.33 411.937 1242.12 389.907 1302.14 412.254C1362.16 434.602 1406.41 501.327 1466.43 523.674C1526.45 546.022 1602.25 523.992 1662.27 546.339C1722.29 568.687 1766.54 635.412 1826.56 657.759C1886.58 680.106 1962.37 658.076 2022.39 680.424C2082.41 702.771 2126.66 769.496 2186.68 791.844C2246.7 814.191 2349.88 810.731 2382.52 814.509" stroke="#84429A" strokeOpacity="0.1" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                    </g>
                    <defs>
                        <filter id="filter0_f_4_3" x="-10" y="0" width="1940" height="975" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="5" result="effect1_foregroundBlur_4_3" />
                        </filter>
                        <filter id="filter1_i_4_3" x="-118.97" y="-171.135" width="2223.22" height="650.375" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset />
                            <feGaussianBlur stdDeviation="5" />
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0.568627 0 0 0 0 0.0823529 0 0 0 0 0.662745 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_4_3" />
                        </filter>
                        <filter id="filter2_i_4_3" x="-255.067" y="569.999" width="2263.72" height="496.347" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset />
                            <feGaussianBlur stdDeviation="5" />
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0.568627 0 0 0 0 0.0823529 0 0 0 0 0.662745 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_4_3" />
                        </filter>
                        <filter id="filter3_i_4_3" x="-172.86" y="331.38" width="2604.34" height="301.172" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset />
                            <feGaussianBlur stdDeviation="5" />
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0.568627 0 0 0 0 0.0823529 0 0 0 0 0.662745 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_4_3" />
                        </filter>
                        <filter id="filter4_i_4_3" x="216.795" y="4.97552" width="2170.7" height="814.557" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset />
                            <feGaussianBlur stdDeviation="5" />
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0.568627 0 0 0 0 0.0823529 0 0 0 0 0.662745 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_4_3" />
                        </filter>
                        <clipPath id="clip0_4_3">
                            <rect width="1920" height="955" fill="white" transform="translate(0 10)" />
                        </clipPath>
                    </defs>
                </svg>

                <img className="Home_img_printer" src={img_printer} alt="Printer" />

                <div className="Home_container_support"> {/*Partie support - TeamViewerQS*/}

                    <div className="Home_container_windows">
                        <div className="Home_background_icons_support">
                            <a className="Home_lien_supportWindows" href="https://download.teamviewer.com/download/TeamViewerQS_x64.exe">
                                <svg className="Home_svg_windows" width="20" height="20" viewBox="0 0 300 300" fill="none">
                                    <rect width="300" height="300" fill="url(#pattern0_59_3)" />
                                    <defs>
                                        <pattern id="pattern0_59_3" patternContentUnits="objectBoundingBox" width="1" height="1">
                                            <use href="#image0_59_3" transform="scale(0.00195312)" />
                                        </pattern>
                                        <image id="image0_59_3" width="512" height="512" href="data:image/png;base64,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" />
                                    </defs>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="Home_container_mac">
                        <div className="Home_background_icons_support">
                            <a className="Home_lien_supportWindows" href="https://download.teamviewer.com/download/TeamViewerQS.dmg">
                                <svg width="20" height="20" viewBox="0 0 30 30" fill="none">
                                    <rect width="30" height="30" fill="url(#pattern0_59_8)" />
                                    <defs>
                                        <pattern id="pattern0_59_8" patternContentUnits="objectBoundingBox" width="1" height="1">
                                            <use href="#image0_59_8" transform="scale(0.00195312)" />
                                        </pattern>
                                        <image id="image0_59_8" width="512" height="512" href="data:image/png;base64,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" />
                                    </defs>
                                </svg>

                            </a>
                        </div>
                    </div>
                </div>



            </div>
            <div className="Home_container_for_presentation">
                <div className="Home_container_presentation_part1"> {/*Présentation partie 1 / PHOTO - TEXTE*/}

                    <div className="Home_presentation_part1" id="Home_presentation_part1">
                        <img className="Home_img_presentation" src={img_presentation} alt="Présentation" />
                    </div>
                    <div className="Home_presentation_part2">
                        <div className="Home_container_part2">
                            <p><span className="text_important">EURO MAINTENANCE</span>, créée en 1990, assure depuis cette date la vente et la maintenance de matériels bureautiques pour le compte de nos partenaires revendeurs qui équipent les PME, PMI, ASSOCIATIONS, NOTAIRES, AVOCATS, MAIRIES, GRANDS COMPTES, etc.</p>

                            <div className="Home_container_distributor">
                                <p><span className="text_important">Nos distributeurs agréés : Canon - HP - KYOCERA </span></p>
                                <div className="Home_container_distributor_logo">
                                    <img className="Home_distributor_logo" src={logo_Canon} alt="logo_Canon" />
                                    <img className="Home_distributor_logo_HP" src={logo_Hp} alt="logo_HP" />
                                    <img className="Home_distributor_logo" src={logo_Kyocera} alt="logo_Kyo" />
                                </div>
                                <p>Disposant d'une infrastructure complète tant pour le service  technique (Technicien certifié par MicroSoft, Canon, HP, KYOCERA), nous vous proposons une <span className="text_important">prestation de service</span> et de disponibilité de vos équipements <span className="text_important">adapté à vos besoins.</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="Home_container_extra_info">{/*Présentation des différents modules */}
                <div className="Home_container_board">

                    <div className="Home_container_title_board">
                        <p className="Home_choice_board_title" id="hero_bubles1" style={{
                            backgroundColor: isChoice1 ? "#84429A" : "",
                            color: isChoice1 ? "white" : "",
                            borderRadius: isChoice1 ? "30px" : ""
                        }} onClick={choice1}>Maintenance</p>

                        <p className="Home_choice_board_title" id="hero_bubles2" style={{
                            backgroundColor: isChoice2 ? "#84429A" : "",
                            color: isChoice2 ? "white" : "",
                            borderRadius: isChoice2 ? "30px" : ""
                        }} onClick={choice2}>Conseil</p>

                        <p className="Home_choice_board_title" id="hero_bubles3" style={{
                            backgroundColor: isChoice3 ? "#84429A" : "",
                            color: isChoice3 ? "white" : "",
                            borderRadius: isChoice3 ? "30px" : ""
                        }} onClick={choice3}>Formation</p>
                    </div>

                    <div className="Home_choice_board_text">
                        {isChoice1 &&
                            <div className="Home_container_choice1">
                                <MaintenanceInfosStickers />
                            </div>
                        }

                        {/* Partie conseil / service proposé */}
                        {isChoice2 &&

                            <div className="Home_container_choice2">
                                <p className="Home_choice2_text">Pour accompagner l'évolution technologique et la révolution engendrée par la modification du traitement de l'information dans l'entreprise, nous avons developpé, pour vous, une nouvelle gamme de services professionnels.</p>

                                <ConseilInfosStickers />

                            </div>
                        }

                        {/*Partie formation */}
                        {isChoice3 &&
                            <div className="Home_container_choice3">
                                <p className="Home_choice3_text">Afin d'augmenter la performance de votre solution d'impression multifonction, nous proposons un catalogue de formations avancées vous procurant la maîtrise des différentes fonctionnalités de votre système d'impression numérique, couleur ou noir et blanc (formation sur site).</p>

                                <div className="Home_container_all_stickers_choice3">
                                    <div className="Home_container_stickers_background3"> {/*A transoformer en component si plus de formation que 1  */}
                                        <div className="Home_container_stickers">
                                            <div className="Home_stikers_part1">

                                                <div className="Home_stickers_title">
                                                    <p>Maintient à niveau</p>
                                                </div>

                                                <div className="Home_stickers_text">
                                                    <p>Les différents points abordée durant la formation : </p>
                                                    <li>Point 1</li>
                                                    <li>Point 2</li>
                                                    <li>Point 3</li>
                                                    <li>Point 4</li>
                                                    <p>Une phrase de fin pour agrémenter le tout </p>
                                                </div>

                                                <Link className="Header_link" to="/Nous-contacter"><p className="Home_stikers_button"> Prendre RDV </p></Link>
                                            </div>

                                            <div className="Home_stikers_part2">

                                                <img className="Home_img_formation" src={img_formation} alt="Formation" />

                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>

            <div className="Home_container_for_presentation">
                <div className="Home_container_presentation_part2"> {/*Présentation partie 2 / TEXTE - PHOTO*/}
                    <div className="Home_context_part1">
                        <div className="Home_technique_part1_text">

                            <p>Une équipe technique formée au sein de nos partenaires <span className="text_important">Canon, HP, KYOCERA</span>  assure la maintenance sur toute la gamme de Solution Multifonction Numériques <span className="text_important">A4 / A3 / A0 Noir/Blanc & Couleurs</span>, ainsi que la mise en place de <span className="text_important">solution d'impression</span> partagée.</p>

                        </div>
                    </div>

                    <div className="Home_technical_team_part2">
                        <img className="Home_img_technical_team" src={img_equipe_technique} alt="Equipe technique" />
                    </div>
                </div>
            </div>

            <Pied />

        </div>
    );
}

export default Home;