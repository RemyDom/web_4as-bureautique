// |==== { Imports des composants } ====|
import { PopupContainer } from "./PopupContainer.jsx";

// |==== { Imports des modules + CSS } ====|
import React, { useState } from "react";
import "../../pages/Home.css";
function Conseil_Sticker(props) {

    // |==== { Création des variables } ====|
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const handleClosePopup = (e) => { // Fonction pour fermer le popup en cliquant sur la croix ou le fond de page opaque
        e.stopPropagation();
        if (e.target === e.currentTarget) {
            setIsPopupVisible(false);
        }
    };

    return (
        <div className="Home_container_Conseil_Stickers_background2">
            <div className="Home_container_Conseil_Stickers">

                <img className="Home_logo_stikers" src={props.icons} alt="Logo Stikers info" />

                <div className="Home_Conseil_Stickers_text">
                    <p style={{fontWeight: "bold", fontSize:"18px"} }>{props.title}</p>
                    <p>{props.summary}</p>
                </div>

                <div className="Home_logo_Conseil_Stickers_more" onClick={() => setIsPopupVisible(true)}>
                    <svg viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                        <g
                            className="Home_logo_Conseil_Stickers_svg"
                            transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                            fill="#FFFFFF"
                            stroke="none">
                            <path
                                d="M2435 4103 c-596 -48 -1152 -286 -1706 -731 -224 -180 -588 -550
                                    -691 -703 -33 -49 -43 -104 -28 -157 28 -105 488 -590 791 -833 1158 -931
                                    2448 -885 3664 130 187 156 579 568 632 664 20 36 25 92 13 136 -14 53 -161
                                    229 -374 448 -402 414 -794 692 -1225 868 -332 136 -748 205 -1076 178z m392
                                    -368 c152 -20 241 -39 356 -75 398 -124 769 -351 1142 -700 117 -109 327 -329
                                    365 -381 l19 -26 -152 -158 c-336 -350 -647 -585 -1012 -765 -335 -166 -617
                                    -242 -951 -257 -688 -30 -1394 327 -2044 1033 -74 80 -136 150 -138 155 -6 16
                                    424 436 550 537 313 249 659 442 972 542 127 41 285 77 391 89 50 6 101 13
                                    115 15 67 9 282 4 387 -9z"
                            />
                            <path
                                d="M2396 3455 c-196 -41 -366 -133 -497 -272 -101 -107 -180 -248 -221
                                    -398 -31 -115 -31 -335 0 -450 25 -90 85 -221 134 -293 114 -167 315 -307 523
                                    -364 114 -31 335 -31 450 0 320 87 569 336 656 657 18 65 22 107 22 225 0 118
                                    -4 160 -22 225 -87 321 -339 573 -656 656 -104 27 -293 34 -389 14z m292 -360
                                    c98 -23 179 -70 258 -149 220 -220 220 -552 0 -772 -44 -44 -95 -83 -133 -103
                                    -220 -111 -476 -68 -646 107 -210 218 -210 546 0 764 136 140 331 198 521 153z"
                            />
                        </g>
                    </svg>
                    
                </div>
                    {/* Appel les popup en fonction des vignettes cliquée */}
                    {isPopupVisible && <PopupContainer handleClose={handleClosePopup}>{props.popupContent}</PopupContainer>}
            </div>
        </div>
    );
}

export default Conseil_Sticker;