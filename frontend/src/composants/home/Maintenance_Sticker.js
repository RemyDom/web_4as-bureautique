// |==== { Imports des modules + CSS } ====|
import { Link } from "react-router-dom";
import "../../pages/Home.css";
function Maintenance_Sticker(props) {
    return (
        <div className="Home_container_Maintenance_Stickers_background1">
            <div className="Home_container_Maintenance_Stickers">

                <div className="Home_Maintenance_Stickers_text">
                    <p style={{ fontSize: "20px", textAlign: "center", fontWeight: "bold", marginBottom: "5%" }}>{props.title}</p>

                    <div className="Home_container_maintenance_price" >
                        <div className="Home_Maintenance_Price_Background">
                            <p style={{ color: "white", textAlign: "center" }}>{props.price}</p>
                        </div>
                    </div>

                    <div>{props.popupContent}</div>

                    <div className="Home_container_maintenance_more">
                        <Link className="Home_contact_link" to="/Nous-contacter"><p className="Home_maintenance_more">{props.more}</p></Link>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Maintenance_Sticker;