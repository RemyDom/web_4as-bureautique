// |==== { Imports des composants } ====|
import Bandeau from '../composants/Bandeau.js';
import Pied from '../composants/Pied.js';

// |==== { Imports des images } ====|
import imgInks from '../img/niveau-dencre.png';
import imgVous from '../img/compte.png';
import imgDevices from '../img/photocopieur.png';
import imgCounter from '../img/counter.png';
import imgShop from '../img/boutique.png';

// |==== { Imports des modules + CSS } ====|
import { useState, useEffect } from 'react';
import "./Commande_encre.css";

function CommandeEncre() {

    /* |==== { Déclaration des valeurs } ====| */

    const [lastName, setLastName] = useState(""); // (Obligatoire)
    const [firstName, setFirstName] = useState(""); // (Obligatoire)
    const [company, setCompany] = useState(""); // (Obligatoire)
    const [phone, setPhone] = useState(""); // (Obligatoire)
    const [email, setEmail] = useState(""); // (Obligatoire)
    const [reference, setReference] = useState(""); // (Obligatoire)
    const [serialNumber, setSerialNumber] = useState(""); // (Obligatoire)
    const [counter1, setCounter1] = useState(""); // (Obligatoire)
    const [counter2, setCounter2] = useState(""); // (Obligatoire)
    const [counter3, setCounter3] = useState(""); // (Obligatoire)
    const [counter4, setCounter4] = useState(""); // (Obligatoire)
    let [black, setBlack] = useState(""); // (Obligatoire)
    let [yellow, setYellow] = useState(""); // (Obligatoire)
    let [magenta, setMagenta] = useState(""); // (Obligatoire)
    let [cyan, setCyan] = useState(""); // (Obligatoire)
    const [message, setMessage] = useState(""); // (Obligatoire)
    const [resultMailSend, setResultMailSend] = useState(""); // Statut de l'envoi du mail 

    /* |==== { Vérification du Nom} ====| */
    const isLastName = () => {
        let GetLastName = document.getElementById("CommandeEncre_not_lastName"); // Vas chercher le libeller "CommandeEncre_not_lastName"

        if (lastName !== "") { // Si le "name" est différent de rien laisser le display "none"
            GetLastName.style.display = "none";
            return true;

        } else { // Sinon le nom est vide afficher le message d'erreur dans le libeller "not-name"
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
        let GetFirstName = document.getElementById("CommandeEncre_not_firstName");

        if (firstName !== "") {
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

    /* |==== { Vérification de l'entreprise} ====| */
    const isCompany = () => {
        let GetCompany = document.getElementById("CommandeEncre_not_company");

        if (company !== "") {
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

    /* |==== { Vérification du numéro } ====| */

    const isPhone = () => {
        let Getphone = document.getElementById("CommandeEncre_not_phone"); // Vas chercher le libeller "not-phone"
        let PhoneRegex = /(^\+[0-9]{2}|^\+[0-9]{2}\(0\)|^\(\+[0-9]{2}\)\(0\)|^00[0-9]{2}|^)\s?([0-9]{9}$|[0-9\-\s]{10}$)/; // Vérification format numéro par regex (tout pays compris)

        if (phone.match(PhoneRegex)) { // Si "phone" est validé par regex laisse le dislay en "none"
            Getphone.style.display = "none";
            return true;
        } else { // Sinon afficher le message d'erreur dans le libeller "not-phone"
            Getphone.style.display = "block";
            Getphone.style.animation = "dongle 1s";
            setTimeout(() => {
                Getphone.style.animation = "none";
            }, 1000);
            return false;
        }
    };

    /* |==== { Vérification de l'email} ====| */
    const isEmail = () => {
        let mail = document.getElementById("CommandeEncre_not_email");
        let regexMail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (email.match(regexMail)) {
            mail.style.display = "none";
            return true;
        } else {
            mail.style.display = "block";
            mail.style.animation = "dongle 1s";
            setTimeout(() => {
                mail.style.animation = "none";
            }, 1000);
            return false;
        }
    };

    /* |==== { Vérification du modèle} ====| */
    const isReference = () => {
        let GetReference = document.getElementById("CommandeEncre_not_ref");

        if (reference !== "") {
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

    /* |==== { Vérification du Numéro de série} ====| */
    const isSerialNumber = () => {
        let GetSerialNumber = document.getElementById("CommandeEncre_not_serialNumber");

        if (serialNumber !== "") {
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

    /* |==== { Vérification du compteur 1 } ====| */
    const isCounter1 = () => {
        let GetCounter1 = document.getElementById("CommandeEncre_not_counter1");

        if (counter1 >= 1) {
            GetCounter1.style.display = "none";
            return true;
        } else {
            GetCounter1.style.display = "block";
            GetCounter1.style.animation = "dongle 1s";
            setTimeout(() => {
                GetCounter1.style.animation = "none";
            }, 1000);
            return false;
        }
    };

    /* |==== { Vérification du compteur 2 } ====| */
    const isCounter2 = () => {
        let GetCounter2 = document.getElementById("CommandeEncre_not_counter2");

        if (counter2 >= 1) {
            GetCounter2.style.display = "none";
            return true;
        } else {
            GetCounter2.style.display = "block";
            GetCounter2.style.animation = "dongle 1s";
            setTimeout(() => {
                GetCounter2.style.animation = "none";
            }, 1000);
            return false;
        }
    };

    /* |==== { Vérification du compteur 3 } ====| */
    const isCounter3 = () => {
        let GetCounter3 = document.getElementById("CommandeEncre_not_counter3");

        if (counter3 >= 1) {
            GetCounter3.style.display = "none";
            return true;
        } else {
            // Obligatoire :
            //GetCounter3.style.display = "block";
            //GetCounter3.style.animation = "dongle 1s";
            //setTimeout(() => {
            //    GetCounter3.style.animation = "none";
            //}, 1000);
            //return false;
            // Facultatif : 
            GetCounter3.style.display = "none";
            return true;
        }
    };

    /* |==== { Vérification du compteur 4 } ====| */
    const isCounter4 = () => {
        let GetCounter4 = document.getElementById("CommandeEncre_not_counter4");

        if (counter4 >= 1) {
            GetCounter4.style.display = "none";
            return true;
        } else {
            // Obligatoire : 
            //GetCounter4.style.display = "block";
            //GetCounter4.style.animation = "dongle 1s";
            //setTimeout(() => {
            //    GetCounter4.style.animation = "none";
            //}, 1000);
            //return false;
            // Facultatif :
            GetCounter4.style.display = "none";
            return true;
        }
    };

    /* |==== { Vérification nombre encres noir } ====| */
    const isBlack = () => {
        let GetBlack = document.getElementById("CommandeEncre_not_blackCartridges");

        if (black >= 1) { // Commande d'une cartouche OK 
            GetBlack.style.display = "none";
            return true;
        } else if (black === "0" || black === "") { // Si rien de renseigné / 0 = OK SI sommes des ancres > à  1 
            GetBlack.style.display = "none";
            black = 0; // Passage au cas ou de la valeur à 0 pour le compte 
            return true;
        }else { // Valeur négative / lettre ect... ERREUR 
            GetBlack.style.display = "block";
            GetBlack.style.animation = "dongle 1s";
            setTimeout(() => {
                GetBlack.style.animation = "none";
            }, 1000);
            return false;
        }
    };

    /* |==== { Vérification nombre encres cyan } ====| */
    const isCyan = () => {
        let GetCyan = document.getElementById("CommandeEncre_not_cyanCartridges");

        if (cyan >= 1) { 
            GetCyan.style.display = "none";
            return true;
        } else if (cyan === "0" || cyan === "") { 
            GetCyan.style.display = "none";
            cyan = 0; 
            return true;
        } else { 
            GetCyan.style.display = "block";
            GetCyan.style.animation = "dongle 1s";
            setTimeout(() => {
                GetCyan.style.animation = "none";
            }, 1000);
            return false;
        }
    };

    /* |==== { Vérification nombre encres magenta } ====| */
    const isMagenta = () => {
        let GetMagenta = document.getElementById("CommandeEncre_not_magentaCartridges");

        if (magenta >= 1) {
            GetMagenta.style.display = "none";
            return true;
        } else if (magenta === "0" || magenta === "") {
            GetMagenta.style.display = "none";
            magenta = 0;
            return true;
        } else {
            GetMagenta.style.display = "block";
            GetMagenta.style.animation = "dongle 1s";
            setTimeout(() => {
                GetMagenta.style.animation = "none";
            }, 1000);
            return false;
        }
    };

    /* |==== { Vérification nombre encres Jaune } ====| */
    const isYellow = () => {
        let GetYellow = document.getElementById("CommandeEncre_not_yellowCartridges");

        if (yellow >= 1) {
            GetYellow.style.display = "none";
            return true;
        } else if (yellow === "0" || yellow === "") {
            GetYellow.style.display = "none";
            yellow = 0;
            return true;
        } else {
            GetYellow.style.display = "block";
            GetYellow.style.animation = "dongle 1s";
            setTimeout(() => {
                GetYellow.style.animation = "none";
            }, 1000);
            return false;
        }
    };

    /* |==== { Vérification si au moins une cartouches est commandé avant de continuer vers l'envoi du mail } ====| */
    const isCartridges = () => {

        var verifBlack = isBlack()
        var verifCyan = isCyan()
        var verifMagenta = isMagenta()
        var verifYellow = isYellow()

        if (verifBlack && verifCyan && verifMagenta && verifYellow) { // Si toutes les vérif renvois true alors vérifier 

            let GetCartridges = document.getElementById("CommandeEncre_not_Cartridges");
            const ColorCheck = parseInt(black) + parseInt(cyan) + parseInt(magenta) + parseInt(yellow); // Vérifie que au moins 1 des 4 renvois 1 sinon afficher erreur 

            if ((ColorCheck) >= 1) {
                GetCartridges.style.display = "none";
                return true;
            } else {
                GetCartridges.style.display = "block";
                GetCartridges.style.animation = "dongle 1s";
                setTimeout(() => {
                    GetCartridges.style.animation = "none";
                }, 1000);
                return false;

            }
        } else {
            return false;
        }
    };

    /* |==== { Vérification du Message} ====| */
    const isMessage = () => {
        let GetMessage = document.getElementById("CommandeEncre_not_message");

        if (message !== "") {
            GetMessage.style.display = "none";
            return true;
        } else {
            //Message.style.display = "block";
            //Message.style.animation = "dongle 1s";
            //setTimeout(() => {
            //    Message.style.animation = "none";
            //}, 1000);
            //return false;
            GetMessage.style.display = "none";
            return true;
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
        var checkCounter1 = isCounter1();
        var checkCounter2 = isCounter2();
        var checkCounter3 = isCounter3();
        var checkCounter4 = isCounter4();
        var checkCartridges = isCartridges();
        var checkMessage = isMessage();

        if (checkLastName && checkFirstName && checkCompany && checkEmail && checkPhone && checkReference && checkSerialNumber &&
            checkCounter1 && checkCounter2 && checkCounter3 && checkCounter4 &&
            checkCartridges && checkMessage) { // Msg de succes / Erreur à refaire 

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
        document.title = 'Euro Maintenance - Encres'; // Change le nom d'onglet de la page
    }, []);

    return (
        <div className="CommandeEncre_container">

            <Bandeau />

            <form className="CommandeEncre_container_Form">

                <div className="CommandeEncre_form">

                    <div className="CommandeEncre_container_title">
                        <p className="CommandeEncre_title">{"Commande d'encres"}</p>{" "}
                        <img className="CommandeEncre_imgInks" src={imgInks} alt="Logo encres" />
                    </div>

                    <div className="CommandeEncre_container_sub_title">
                        <img className="CommandeEncre_imgSubtitle" src={imgVous} alt="Logo vous" />
                        <p className="CommandeEncre_p">À propos de vous </p>
                    </div>

                    <div className="CommandeEncre_container_aboutme">

                        <div className="CommandeEncre_container_Names">

                            <div className="CommandeEncre_box_LastName">
                                <label id="CommandeEncre_not_lastName">{"Nom"}</label>
                                <input
                                    className="CommandeEncre_input"
                                    type="text"
                                    id="CommandeEncre_lastName"
                                    name="CommandeEncre_lastName"
                                    onChange={(e) => setLastName(e.target.value)}
                                    value={lastName}
                                    placeholder={"Nom *"}
                                    autoComplete="off"
                                />
                            </div>

                            <div className="CommandeEncre_box_firstName">
                                <label id="CommandeEncre_not_firstName">{"Prénom"}</label>
                                <input
                                    className="CommandeEncre_input"
                                    type="text"
                                    id="CommandeEncre_firstName"
                                    name="CommandeEncre_firstName"
                                    onChange={(e) => setFirstName(e.target.value)}
                                    value={firstName}
                                    placeholder={"Prénom *"}
                                    autoComplete="off"
                                />
                            </div>

                            <div className="CommandeEncre_box_company">
                                <label id="CommandeEncre_not_company">{"Société"}</label>
                                <input
                                    className="CommandeEncre_input"
                                    type="text"
                                    id="CommandeEncre_company"
                                    name="CommandeEncre_company"
                                    onChange={(e) => setCompany(e.target.value)}
                                    value={company}
                                    placeholder={"Société *"}
                                    autoComplete="off"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="CommandeEncre_container_contact">

                        <div className="CommandeEncre_box_email">
                            <label id="CommandeEncre_not_email">{"Email"}</label>
                            <input
                                className="CommandeEncre_input"
                                type="text"
                                id="CommandeEncre_email"
                                name="CommandeEncre_email"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                placeholder={"Email *"}
                                autoComplete="off"
                            />
                        </div>

                        <div className="CommandeEncre_box_phone">
                            <label id="CommandeEncre_not_phone">{"Téléphone"}</label>
                            <input
                                className="CommandeEncre_input"
                                type="text"
                                id="CommandeEncre_phone"
                                name="CommandeEncre_phone"
                                onChange={(e) => setPhone(e.target.value)}
                                value={phone}
                                placeholder={"Téléphone *"}
                                autoComplete="off"
                            />
                        </div>
                    </div>

                    <div className="CommandeEncre_container_aboutdevice">

                        <div className="CommandeEncre_container_sub_title">
                            <img className="CommandeEncre_imgSubtitle" src={imgDevices} alt="Logo devices" />
                            <p className="CommandeEncre_p">À propos du périphérique  </p>
                        </div>

                        <div className="CommandeEncre_ids">

                            <div className="CommandeEncre_box_ref">
                                <label id="CommandeEncre_not_ref">{"Modèle"}</label>
                                <input
                                    className="CommandeEncre_input"
                                    type="text"
                                    id="CommandeEncre_ref"
                                    name="CommandeEncre_ref"
                                    onChange={(e) => setReference(e.target.value)}
                                    value={reference}
                                    placeholder={"Modèle * "}
                                    autoComplete="off"
                                />
                            </div>

                            <div className="CommandeEncre_box_serialNumber">
                                <label id="CommandeEncre_not_serialNumber">{"Numéro de série"}</label>
                                <input
                                    className="CommandeEncre_input"
                                    type="text"
                                    id="CommandeEncre_serialNumber"
                                    name="CommandeEncre_serialNumber"
                                    onChange={(e) => setSerialNumber(e.target.value)}
                                    value={serialNumber}
                                    placeholder={"Numéro de série *"}
                                    autoComplete="off"
                                />
                            </div>
                        </div>


                        <div className="CommandeEncre_container_sub_title">
                            <img className="CommandeEncre_imgSubtitle" src={imgCounter} alt="Logo counter" />
                            <p className="CommandeEncre_p">Relevé des compteurs  </p>
                        </div>

                        <div className="CommandeEncre_counters">

                            <div className="CommandeEncre_box_InkCounter">
                                <label id="CommandeEncre_not_counter1">{"Nombre invalide"}</label>
                                <input
                                    className="CommandeEncre_input"
                                    type="text"
                                    id="CommandeEncre_counter1"
                                    name="CommandeEncre_counter1"
                                    onChange={(e) => setCounter1(e.target.value)}
                                    placeholder={"Noir et Blanc *"}
                                    value={counter1}
                                    autoComplete="off"
                                />
                            </div>

                            <div className="CommandeEncre_box_InkCounter">
                                <label id="CommandeEncre_not_counter2">{"Nombre invalide"}</label>
                                <input
                                    className="CommandeEncre_input"
                                    type="text"
                                    id="CommandeEncre_counter2"
                                    name="CommandeEncre_counter2"
                                    onChange={(e) => setCounter2(e.target.value)}
                                    placeholder={"Couleurs *"}
                                    value={counter2}
                                    autoComplete="off"
                                />
                            </div>

                            <div className="CommandeEncre_box_InkCounter">
                                <label id="CommandeEncre_not_counter3">{"Nombre invalide"}</label>
                                <input
                                    className="CommandeEncre_input"
                                    type="text"
                                    id="CommandeEncre_counter3"
                                    name="CommandeEncre_counter3"
                                    onChange={(e) => setCounter3(e.target.value)}
                                    placeholder={"Lecture"}
                                    value={counter3}
                                    autoComplete="off"
                                />
                            </div>

                            <div className="CommandeEncre_box_InkCounter">
                                <label id="CommandeEncre_not_counter4">{"Nombre invalide"}</label>
                                <input
                                    className="CommandeEncre_input"
                                    type="text"
                                    id="CommandeEncre_counter4"
                                    name="CommandeEncre_counter4"
                                    onChange={(e) => setCounter4(e.target.value)}
                                    placeholder={"Impression"}
                                    value={counter4}
                                    autoComplete="off"
                                />
                            </div>

                        </div>

                        <div className="CommandeEncre_container_sub_title">
                            <img className="CommandeEncre_imgSubtitle" src={imgShop} alt="Logo counter" />
                            <p className="CommandeEncre_p">Boutique  </p>
                        </div>

                        <div className="CommandeEncre_Cartridges">

                            <div className="CommandeEncre_box_NotCartridges">
                                <label id="CommandeEncre_not_Cartridges">{"Veuillez commander au moins une cartouche"}</label>
                            </div>

                            <div className="CommandeEncre_box_InkCartridges">
                                <label id="CommandeEncre_not_blackCartridges">{"invalide"}</label>
                                <input
                                    className="CommandeEncre_input"
                                    type="text"
                                    id="CommandeEncre_black"
                                    name="CommandeEncre_black"
                                    onChange={(e) => setBlack(e.target.value)}
                                    placeholder={"Noir *"}
                                    value={black}
                                    autoComplete="off"
                                />
                            </div>

                            <div className="CommandeEncre_box_InkCartridges">
                                <label id="CommandeEncre_not_yellowCartridges">{"invalide"}</label>
                                <input
                                    className="CommandeEncre_input"
                                    type="text"
                                    id="CommandeEncre_yellow"
                                    name="CommandeEncre_yellow"
                                    onChange={(e) => setYellow(e.target.value)}
                                    placeholder={"Jaune *"}
                                    value={yellow}
                                    autoComplete="off"
                                />
                            </div>

                            <div className="CommandeEncre_box_InkCartridges">
                                <label id="CommandeEncre_not_magentaCartridges">{"invalide"}</label>
                                <input
                                    className="CommandeEncre_input"
                                    type="text"
                                    id="CommandeEncre_magenta"
                                    name="CommandeEncre_magenta"
                                    onChange={(e) => setMagenta(e.target.value)}
                                    placeholder={"Magenta *"}
                                    value={magenta}
                                    autoComplete="off"
                                />
                            </div>

                            <div className="CommandeEncre_box_InkCartridges">
                                <label id="CommandeEncre_not_cyanCartridges">{"invalide"}</label>
                                <input
                                    className="CommandeEncre_input"
                                    type="text"
                                    id="CommandeEncre_cyan"
                                    name="CommandeEncre_cyan"
                                    onChange={(e) => setCyan(e.target.value)}
                                    placeholder={"Cyan *"}
                                    value={cyan}
                                    autoComplete="off"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="CommandeEncre_box_message">
                        <label id="CommandeEncre_not_message">{"Message"}</label>
                        <textarea
                            className="CommandeEncre_textarea"
                            id="message"
                            name="message"
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder={"Message / Informations supplémentaires"}
                            value={message}
                        />
                    </div>

                    <div className="CommandeEncre_SendBox">
                        <input
                            className="CommandeEncre_button"
                            type="button"
                            value={"Envoyer"}
                            onClick={checkList}
                        />
                    </div>

                    {/* |=========={ Message de validation / erreur d'envois }==========| */}

                    {resultMailSend === "success" && (

                        <div className="CommandeEncre_form_message" style={{ backgroundColor: "#28B463" }}>

                            <p>Votre commande à bien été envoyé ! </p>

                        </div>
                    )}
                    {resultMailSend === "error" && (
                        <div
                            className="CommandeEncre_form_message"
                            style={{ backgroundColor: "rgb(253,87,87)" }}
                        >
                            <p> Une erreur s'est produite, veuillez recommencer.</p>
                        </div>
                    )}
                </div>
            </form>

            <Pied />
        </div>
    );
}

export default CommandeEncre;