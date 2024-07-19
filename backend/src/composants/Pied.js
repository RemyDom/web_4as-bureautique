// |==== { Imports des modules + CSS } ====|
//import { Link } from "react-router-dom";
import './Pied.css';

// |==== { Imports des images } ====|
import logoEuroPied from '../img/logoEuroPied.png';

function PiedDePage() {
    return (
        <div className="Footer_container">
            <div className="Footer_container_info">
                <img className="Footer_img_euro" src={logoEuroPied} alt="Présentation"></img>
                <p className="Footer_text_info" id='Footer_text_info1'>© 2023 Euro Maintenance</p>
            </div>
        </div>
    );
}

export default PiedDePage;