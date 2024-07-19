export const PopupContainer = ({ children, handleClose }) => { // Récupère les informations du popup sélectionné 
    return (
        <div className="Home_container_popups_background" onClick={(e) => handleClose(e)}>
            <div className="Home_container_popups">

                <div className="Home_exit_popups">

                    <svg version="1.0" onClick={(e) => handleClose(e)}
                        width="15px" height="15px" viewBox="0 0 512.000000 512.000000"
                        preserveAspectRatio="xMidYMid meet">

                        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                            fill="#FF0000" stroke="none">
                            <path d="M205 5103 c-171 -61 -248 -244 -175 -410 17 -39 212 -239 1063 -1090
                                    l1042 -1043 -1046 -1047 c-1163 -1165 -1084 -1076 -1084 -1218 1 -86 25 -145
                                    85 -205 60 -60 119 -84 205 -85 142 0 53 -79 1218 1084 l1047 1046 1048 -1046
                                    c1164 -1163 1075 -1084 1217 -1084 86 1 145 25 205 85 60 60 84 119 85 205 0
                                    142 79 53 -1084 1217 l-1046 1048 1046 1048 c1163 1164 1084 1075 1084 1217
                                    -1 86 -25 145 -85 205 -60 60 -119 84 -205 85 -142 0 -53 79 -1218 -1084
                                    l-1047 -1046 -1043 1042 c-870 871 -1050 1046 -1091 1064 -68 30 -158 34 -221
                                    12z"/>
                        </g>
                    </svg>
                </div>

                <div className="popup-content">{children}</div> {/* Affiche le popup*/}
            </div>
        </div>
    );
};