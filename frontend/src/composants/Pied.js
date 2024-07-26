// |==== { Imports des modules + CSS } ====|
import { Link } from "react-router-dom";
import './Pied.css';

// |==== { Imports des images } ====|
import logoEuroPied from '../img/logo4asPied.png';

function PiedDePage() {
    return (
        <div className="Footer_container">
            <div className="Footer_container_info">
                <img className="Footer_img_euro" src={logoEuroPied} alt="Présentation"></img>
                <p className="Footer_text_info" id='Footer_text_info1'>© 2024 4AS Bureautique</p>
                <p className="Footer_text_info" id='Footer_text_info2'><Link className="Footer_link" to="/CGU">CGU</Link></p>
                <p className="Footer_text_info" id='Footer_text_info3'><Link className="Footer_link" to="/Mentions-Legales">Mentions Légales</Link></p>
            </div>
        </div>
    );
}

export default PiedDePage;