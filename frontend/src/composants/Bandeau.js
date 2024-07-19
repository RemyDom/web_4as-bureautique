// |==== { Imports des modules + CSS } ====|
import { Link } from "react-router-dom";
import './Bandeau.css';

// |==== { Imports des images } ====|
import imgLogoEntreprise from '../img/logoEuro_Stext.png';

function Bandeau() {

    return (
        <div className="Header_container">

            <div className="Header_part1"> 
                <Link to="/"><img className="Header_logo_euro" src={imgLogoEntreprise} alt="LogoEURO" /></Link>
            </div>

            <div className="Header_part2"> 
                <nav className="Header_navbar">
                    <ul className="Header_navbar_ul">
                        <li className="Header_navbar_choice"><Link className="Header_link" to="/">Notre Société</Link></li>

                        <li className="Header_navbar_choiceToSub" ><p className="Header_link">Nos Services</p> 
                            <div className="Header_submenu">
                                <nav className="Header_SubNavbar">
                                    <ul className="Header_submenu_navbar_ul">
                                        <li className="Header_navbar_SubChoice"><Link className="Header_SubLink" to="/Nos-Services">Nos Services</Link></li>
                                        <li className="Header_navbar_SubChoice"><Link className="Header_SubLink" to="/Demande-intervention">Demande D'interventions</Link></li>
                                        <li className="Header_navbar_SubChoice"><Link className="Header_SubLink" to="/Commande-de-pieces">Commande de pièces</Link></li>
                                        <li className="Header_navbar_SubChoice"><Link className="Header_SubLink" to="/Commande-encres">Commande d'encres</Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </li>

                        <li className="Header_navbar_choice"><Link className="Header_link" to="/Document-technique-login">Document technique</Link></li>
                        <li className="Header_navbar_choice"><Link className="Header_link" to="/Nous-contacter">Nous contacter</Link></li>
                    </ul>

                </nav>
            </div>
        </div>
    );
}

export default Bandeau;