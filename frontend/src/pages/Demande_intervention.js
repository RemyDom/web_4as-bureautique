// |==== { Imports des composants } ====|
import Bandeau from '../composants/Bandeau.js';
import Pied from '../composants/Pied.js';

// |==== { Imports des images } ====|
import imgIntervention from '../img/intervention.png';
import imgVous from '../img/compte.png';
import imgDevices from '../img/photocopieur.png';
//import imgTools from '../img/outils.png';

// |==== { Imports des modules + CSS } ====|
import { useState, useEffect } from 'react';
import './Demande_intervention.css';
function DemandeIntervention() {

    /* |==== { Déclaration des valeurs } ====| */
    const [lastName, setLastName] = useState(""); // (Obligatoire)
    const [firstName, setFirstName] = useState(""); // (Obligatoire)
    const [company, setCompany] = useState(""); // (Obligatoire)
    const [email, setEmail] = useState(""); // (Obligatoire)
    const [phone, setPhone] = useState(""); // (Obligatoire)
    const [reference, setReference] = useState(""); // (Obligatoire)
    const [serialNumber, setSerialNumber] = useState(""); // (Obligatoire)
    const [location, setLocation] = useState(""); // (Obligatoire)
    const [message, setMessage] = useState(""); // (Obligatoire)
    const [resultMailSend, setResultMailSend] = useState(""); // Statut de l'envoi du mail 

    /* |==== { Vérification du Nom} ====| */
    const isLastName = () => {
        let GetLastName = document.getElementById("DemandeIntervention_not_lastName"); // Vas chercher le libeller "DemandeIntervention_not_lastName"

        if (lastName !== "") { // Si le "LastName" est différent de rien laisser le display "none" | .trim est utilisé pour retiré les espaces en trop 
            GetLastName.style.display = "none";
            return true;

        } else { // Sinon le nom est vide afficher le message d'erreur dans le libeller "DemandeIntervention_not_lastName"
            GetLastName.style.display = "block";
            GetLastName.style.animation = "dongle 1s";
            setTimeout(() => {
                GetLastName.style.animation = "none";
            }, 1000);
            return false;
        }
    };

    /* |==== { Vérification du Prénom} ====| */
    const isFirstName = () => {
        let GetFirstName = document.getElementById("DemandeIntervention_not_firstName");

        if (firstName.trim() !== "") {
            GetFirstName.style.display = "none";
            return true;

        } else {
            GetFirstName.style.display = "block";
            GetFirstName.style.animation = "dongle 1s";
            setTimeout(() => {
                GetFirstName.style.animation = "none";
            }, 1000);
            return false;
        }
    };

    /* |==== { Vérification de la Société} ====| */
    const isCompany = () => {
        let GetCompany = document.getElementById("DemandeIntervention_not_company");

        if (company.trim() !== "") {
            GetCompany.style.display = "none";
            return true;

        } else {
            GetCompany.style.display = "block";
            GetCompany.style.animation = "dongle 1s";
            setTimeout(() => {
                GetCompany.style.animation = "none";
            }, 1000);
            return false;
        }
    };

    /* |==== { Vérification de l'email} ====| */
    const isEmail = () => {
        let GetEmail = document.getElementById("DemandeIntervention_not_email");
        let regexMail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; // Vérification du forma de l'email via une REGEX

        if (email.match(regexMail)) { // Si "email" est validé par la Regex n'affiche pas d'erreur
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

    /* |==== { Vérification du numéro } ====| */

    const isPhone = () => {
        let Getphone = document.getElementById("DemandeIntervention_not_phone");
        let PhoneRegex = /(^\+[0-9]{2}|^\+[0-9]{2}\(0\)|^\(\+[0-9]{2}\)\(0\)|^00[0-9]{2}|^)\s?([0-9]{9}$|[0-9\-\s]{10}$)/;

        if (phone.match(PhoneRegex)) {
            Getphone.style.display = "none";
            return true;
        } else {
            Getphone.style.display = "block";
            Getphone.style.animation = "dongle 1s";
            setTimeout(() => {
                Getphone.style.animation = "none";
            }, 1000);
            return false;
        }
    };

    /* |==== { Vérification du modèle } ====| */

    const isReference = () => {
        let GetReference = document.getElementById("DemandeIntervention_not_ref");

        if (reference.trim() !== "") {
            GetReference.style.display = "none";
            return true;
        } else {
            GetReference.style.display = "block";
            GetReference.style.animation = "dongle 1s";
            setTimeout(() => {
                GetReference.style.animation = "none";
            }, 1000);
            return false;
        }
    };

    /* |==== { Vérification du numéro de série } ====| */

    const isSerialNumber = () => {
        let GetSerialNumber = document.getElementById("DemandeIntervention_not_serialNumber");

        if (serialNumber.trim() !== "") {
            GetSerialNumber.style.display = "none";
            return true;
        } else {
            GetSerialNumber.style.display = "block";
            GetSerialNumber.style.animation = "dongle 1s";
            setTimeout(() => {
                GetSerialNumber.style.animation = "none";
            }, 1000);
            return false;
        }
    };

    /* |==== { Vérification de l'emplacement } ====| */

    const isLocation = () => {
        let GetLocation = document.getElementById("DemandeIntervention_not_location");

        if (location.trim() !== "") {
            GetLocation.style.display = "none";
            return true;
        } else {
            GetLocation.style.display = "block";
            GetLocation.style.animation = "dongle 1s";
            setTimeout(() => {
                GetLocation.style.animation = "none";
            }, 1000);
            return false;
        }
    };

    /* |==== { Vérification du message } ====| */

    const isMessage = () => {
        let GetMessage = document.getElementById("DemandeIntervention_not_message");

        if (message.trim() !== "") {
            GetMessage.style.display = "none";
            return true;
        } else {
            GetMessage.style.display = "block";
            GetMessage.style.animation = "dongle 1s";
            setTimeout(() => {
                GetMessage.style.animation = "none";
            }, 1000);
            return false;
        }
    };

    /* |==== { Vérification que tout les champs soit OK } ====| */

    const checkList = () => {
        var checkLastName = isLastName();
        var checkFirstName = isFirstName();
        var checkCompany = isCompany();
        var checkEmail = isEmail();
        var checkPhone = isPhone();
        var checkReference = isReference();
        var checkSerialNumber = isSerialNumber();
        var checkLocation = isLocation();
        var checkMessage = isMessage();

        if (checkLastName && checkFirstName && checkCompany && checkEmail && checkPhone
            && checkReference && checkSerialNumber && checkLocation && checkMessage) { // Msg de succes / Erreur à refaire 

            setResultMailSend("success");
            setTimeout(() => { // Clear le message de validation après 10 seconde
                    setResultMailSend("");
                }, 10000);
            console.log("Envoyé");
            return true;
        }
        else {
            setResultMailSend("error");
            setTimeout(() => { // Clear le message d'erreur après 10 seconde
                    setResultMailSend("");
                }, 10000);
            console.log("Pas envoyé");
            return false;
        }
    }

    useEffect(() => {
        document.title = 'Euro Maintenance - Interventions'; // Change le nom d'onglet de la page
    }, []);

    return (
        <div className="DemandeIntervention_container">

            <Bandeau />

            <div className="DemandeIntervention_container_Form">


                <form className="DemandeIntervention_form">

                    <div className="DemandeIntervention_container_title">
                        <p className="DemandeIntervention_title">{"Demande d'intervention"}</p>{" "}
                        <img className="DemandeIntervention_imgIntervention" src={imgIntervention} alt="Logo intervention" />
                    </div>

                    <div className="DemandeIntervention_container_sub_title">
                        <img className="DemandeIntervention_imgSubtitle" src={imgVous} alt="Logo vous" />
                        <p className="DemandeIntervention_p">À propos de vous </p>
                    </div>


                    <div className="DemandeIntervention_form_content">

                        <div className="DemandeIntervention_container_aboutme">

                            <div className="DemandeIntervention_container_Names">

                                <div className="DemandeIntervention_box_LastName">
                                    <label id="DemandeIntervention_not_lastName">{"Nom"}</label>
                                    <input
                                        className="DemandeIntervention_input"
                                        type="text"
                                        id="DemandeIntervention_lastName"
                                        name="DemandeIntervention_lastName"
                                        onChange={(e) => setLastName(e.target.value)}
                                        value={lastName}
                                        placeholder={"Nom *"}
                                        autoComplete="off"
                                    />
                                </div>

                                <div className="DemandeIntervention_box_firstName">
                                    <label id="DemandeIntervention_not_firstName">{"Prénom"}</label>
                                    <input
                                        className="DemandeIntervention_input"
                                        type="text"
                                        id="DemandeIntervention_firstName"
                                        name="DemandeIntervention_firstName"
                                        onChange={(e) => setFirstName(e.target.value)}
                                        value={firstName}
                                        placeholder={"Prénom *"}
                                        autoComplete="off"
                                    />
                                </div>

                                <div className="DemandeIntervention_box_company">
                                    <label id="DemandeIntervention_not_company">{"Société"}</label>
                                    <input
                                        className="DemandeIntervention_input"
                                        type="text"
                                        id="DemandeIntervention_company"
                                        name="DemandeIntervention_company"
                                        onChange={(e) => setCompany(e.target.value)}
                                        value={company}
                                        placeholder={"Société *"}
                                        autoComplete="off"
                                    />
                                </div>
                            </div>

                            <div className="DemandeIntervention_container_contact">

                                <div className="DemandeIntervention_box_email">
                                    <label id="DemandeIntervention_not_email">{"Email"}</label>
                                    <input
                                        className="DemandeIntervention_input"
                                        type="text"
                                        id="DemandeIntervention_email"
                                        name="DemandeIntervention_email"
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
                                        placeholder={"Email *"}
                                        autoComplete="off"
                                    />
                                </div>

                                <div className="DemandeIntervention_box_phone">
                                    <label id="DemandeIntervention_not_phone">{"Téléphone"}</label>
                                    <input
                                        className="DemandeIntervention_input"
                                        type="text"
                                        id="DemandeIntervention_phone"
                                        name="DemandeIntervention_phone"
                                        onChange={(e) => setPhone(e.target.value)}
                                        value={phone}
                                        placeholder={"Téléphone *"}
                                        autoComplete="off"
                                    />
                                </div>
                            </div>

                        </div>

                        <div className="DemandeIntervention_container_aboutdevice">

                            <div className="DemandeIntervention_container_sub_title">
                                <img className="DemandeIntervention_imgSubtitle" src={imgDevices} alt="Logo devices" />
                                <p className="DemandeIntervention_p">À propos du périphérique  </p>
                            </div>

                            <div className="DemandeIntervention_ids">

                                <div className="DemandeIntervention_box_ref">
                                    <label id="DemandeIntervention_not_ref">{"Modèle"}</label>
                                    <input
                                        className="DemandeIntervention_input"
                                        type="text"
                                        id="DemandeIntervention_ref"
                                        name="DemandeIntervention_ref"
                                        onChange={(e) => setReference(e.target.value)}
                                        value={reference}
                                        placeholder={"Modèle * "}
                                        autoComplete="off"
                                    />
                                </div>

                                <div className="DemandeIntervention_box_serialNumber">
                                    <label id="DemandeIntervention_not_serialNumber">{"Numéro de série"}</label>
                                    <input
                                        className="DemandeIntervention_input"
                                        type="text"
                                        id="DemandeIntervention_serialNumber"
                                        name="DemandeIntervention_serialNumber"
                                        onChange={(e) => setSerialNumber(e.target.value)}
                                        value={serialNumber}
                                        placeholder={"Numéro de série *"}
                                        autoComplete="off"
                                    />
                                </div>
                            </div>


                            <div className="DemandeIntervention_box_location">
                                <label id="DemandeIntervention_not_location">{"Emplacement du périphérique"}</label>
                                <input
                                    className="DemandeIntervention_input"
                                    type="text"
                                    id="DemandeIntervention_location"
                                    name="DemandeIntervention_location"
                                    onChange={(e) => setLocation(e.target.value)}
                                    value={location}
                                    placeholder={"Emplacement *"}
                                    autoComplete="off"
                                />
                            </div>

                            <div className="DemandeIntervention_box_Message">
                                <label id="DemandeIntervention_not_message">{"Description du problème"}</label>
                                <textarea
                                    className="DemandeIntervention_textarea"
                                    id="DemandeIntervention_message"
                                    name="DemandeIntervention_message"
                                    onChange={(e) => setMessage(e.target.value)}
                                    value={message}
                                    placeholder={"Description du problème *"}
                                />
                            </div>
                        </div>


                    </div>

                    <div className="DemandeIntervention_SendBox">
                        <input
                            className="DemandeIntervention_button"
                            type="button"
                            value={"Envoyer"}
                            onClick={checkList}
                        />
                    </div>


                    {/* |=========={ Message de validation / erreur d'envois }==========| */}
                    
                    {resultMailSend === "success" && (

                        <div className="DemandeIntervention_form_message" style={{ backgroundColor: "#28B463" }}>

                            <p>Votre demande d'intervention a bien été envoyé ! </p>

                        </div>
                    )}
                    {resultMailSend === "error" && (
                        <div
                            className="DemandeIntervention_form_message"
                            style={{ backgroundColor: "rgb(253,87,87)" }}
                        >
                            <p> Une erreur s'est produite, veuillez recommencer.</p>
                        </div>
                    )}
                </form>
            </div>

            <Pied />
        </div>
    );
}

export default DemandeIntervention;
