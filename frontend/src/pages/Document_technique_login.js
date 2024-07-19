// |==== { Imports des composants } ====|
import Bandeau from '../composants/Bandeau.js'
import Pied from '../composants/Pied.js'

// |==== { Imports des modules + CSS } ====|

import React, { useState, useEffect } from "react";
import "./Document_technique.css";

// |==== { Imports des images } ====|
import OeilFerme from '../img/oeilFermer.png'
import Oeil from '../img/oeil.png'

function TechnicalPaperLogin() {

    const [password, setPassword] = useState(""); // Mot de passe (OBLIGATOIRE)
    const [email, setEmail] = useState(""); // Email (OBLIGATOIRE)
    let [isOpen, setisOpen] = useState(false); // Affiche le mdp si besoin

    /* |==== { Vérification de l'email} ====| */
    const isEmail = () => {
        let GetEmail = document.getElementById("TechnicalPaperLogin_not_email");
        let regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; 

        if (email.match(regexEmail)) { 
            GetEmail.style.display = "none";
            return true;
        } else { 
            GetEmail.style.display = "block";
            GetEmail.style.animation = "dongle 1s";
            setTimeout(() => {
                GetEmail.style.animation = "none";
            }, 1000);
            return false;
        }
    };

    /* |==== { Vérification du Mot de passe} ====| */
    const isPassword = () => {
        let Getpassword = document.getElementById("TechnicalPaperLogin_not_password");

        if (password.trim() !== '') {
            Getpassword.style.display = "none";
            return true;

        } else {
            Getpassword.style.display = "block";
            Getpassword.style.animation = "dongle 1s";
            setTimeout(() => {
                Getpassword.style.animation = "none";
            }, 1000);
            return false;
        }
    };

    /* |==== { Liste de validation } ====| */
    const commitList = () => {
        var checkEmail = isEmail();
        var checkPassword = isPassword();

        if (checkEmail && checkPassword === true) {
            console.log("Mot de passe saisi:", password);
            console.log("email:", email);
            return true;
        } else {
            console.log("Mot de passe saisi vide zebi");
            console.log("email vide zebi:");
            return false;
        }
    }


    const handleLogin = () => { /* en prepa pour la validation du mdp en bdd */
        if (commitList() === true) {
            console.log("WELCOME ! ");
        } else {
            console.log("VOUS NE PASSEREZ PAS");
        }
    };

    // |==== { Affichage du mot de passe + changement oeil img } ====|
    const showPassword = () => {

        let GetEyeOff = document.getElementById("OeilMdpOff");
        let GetEyeOn = document.getElementById("OeilMdpOn");

        if (isOpen === false) {
            GetEyeOn.style.display = "block";
            GetEyeOff.style.display = "none";
            setisOpen(!isOpen); // Inverser l'état pour changer l'oeil
        } else {
            GetEyeOn.style.display = "none";
            GetEyeOff.style.display = "block";
            setisOpen(!isOpen); // Inverser l'état pour changer l'oeil
        }
    }

    useEffect(() => {
        document.title = 'Euro Maintenance - Login'; // Change le nom d'onglet de la page
    }, []);

    return (
        <div className="TechnicalPaperLogin_container_page">

            < Bandeau />

            <div className="TechnicalPaperLogin_container">

                <div className="TechnicalPaperLogin_container_login">
                    <div className="TechnicalPaperLogin_background_login">
                        <h3 className="TechnicalPaperLogin_h3"> Accès Documents Techniques</h3>

                        <div className="TechnicalPaperLogin_box_email">
                            <label id="TechnicalPaperLogin_not_email">{"Erreur ou vide"}</label>
                            <input
                                className="TechnicalPaperLogin_input_email"
                                type="text"
                                id="TechnicalPaperLogin_email"
                                name="TechnicalPaperLogin_email"
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder={"Email"}
                                value={email}
                                autoComplete="on"
                            /></div>


                        <div className="TechnicalPaperLogin_box_password">
                            <label id="TechnicalPaperLogin_not_password">{"Erreur ou vide"}</label>
                            <input
                                className="TechnicalPaperLogin_input_password"
                                type={isOpen ? "text" : "password"}
                                id="TechnicalPaperLogin_password"
                                name="TechnicalPaperLogin_password"
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder={"Mot de passe"}
                                value={password}
                                autoComplete="off"
                            />

                            <img id="OeilMdpOff" className="TechnicalPaperLogin_oeilFerme_password" onClick={showPassword} src={OeilFerme} alt="OeilFermeMdp" />
                            <img id="OeilMdpOn" className="TechnicalPaperLogin_oeil_password" onClick={showPassword} src={Oeil} alt="OeilMdp" />
                        </div>

                        <div className="TechnicalPaperLogin_SendBox">
                            <input
                                className="TechnicalPaperLogin_button"
                                type="button"
                                value={"Connexion"}
                                onClick={handleLogin}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <Pied />
        </div>
    );
}

export default TechnicalPaperLogin;