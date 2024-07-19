// |==== { Imports des modules + CSS } ====|
import "./FormulaireContact.css";
import React, { useState } from "react";

// |==== { Imports des images } ====|
import imgContact from '../../img/bavarder.png';

const FormulaireContact = () => {

    /* |==== { Déclaration des valeurs } ====| */
    const [firstName, setFirstName] = useState(""); // Prénom (Obligatoire)
    const [lastName, setLastName] = useState(""); // Nom (Obligatoire)
    const [company, setCompany] = useState(""); // Entreprise (Optionnel)
    const [phone, setPhone] = useState(""); // Téléphone (Obligatoire)
    const [email, setEmail] = useState(""); // Mail (Obligatoire)
    const [message, setMessage] = useState(""); // Message (Obligatoire)
    const [resultMailSend, setResultMailSend] = useState(""); // Résultat d'envoi du mail 

    /* |==== { Vérification du Nom} ====| */
    const isFirstName = () => {
        let GetFirstName = document.getElementById("FormulaireContact_not_firstName"); // Vas chercher le libeller "not-name"

        if (firstName !== "") { // Si le "firstName" est différent de rien laisser le display "none"
            GetFirstName.style.display = "none";
            return true;

        } else { // Sinon le nom est vide afficher le message d'erreur dans le libeller "not-name"
            GetFirstName.style.display = "block";
            GetFirstName.style.animation = "dongle 1s";
            setTimeout(() => {
                GetFirstName.style.animation = "none";
            }, 1000);
            return false;
        }
    };

    /* |==== { Vérification du Nom} ====| */
    const isLastName = () => {
        let GetLastName = document.getElementById("FormulaireContact_not_lastName");

        if (lastName !== "") {
            GetLastName.style.display = "none";
            return true;

        } else {
            GetLastName.style.display = "block";
            GetLastName.style.animation = "dongle 1s";
            setTimeout(() => {
                GetLastName.style.animation = "none";
            }, 1000);
            return false;
        }
    };

    /* |==== { Vérification de l'entreprise} ====| */
    const isCompany = () => {
        let GetCompany = document.getElementById("FormulaireContact_not_company");

        if (company !== "") {
            GetCompany.style.display = "none";
            return true;

        } else {
            // Obligatoire :
            //GetCompany.style.display = "block";
            //GetCompany.style.animation = "dongle 1s";
            //setTimeout(() => {
            //    GetCompany.style.animation = "none";
            //}, 1000);
            //return false;
            // Facultatif :
            return true;
        }
    };

    /* |==== { Vérification du numéro } ====| */

    const isNumber = () => {
        let Getphone = document.getElementById("FormulaireContact_not_phone"); // Vas chercher le libeller "not-phone"
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
        let GetMail = document.getElementById("FormulaireContact_not_mail");
        let regexMail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (email.match(regexMail)) {
            GetMail.style.display = "none";
            return true;
        } else {
            GetMail.style.display = "block";
            GetMail.style.animation = "dongle 1s";
            setTimeout(() => {
                GetMail.style.animation = "none";
            }, 1000);
            return false;
        }
    };

    /* |==== { Vérification du Message} ====| */
    const isMessage = () => {
        let GetMessage = document.getElementById("FormulaireContact_not_message");

        if (message !== "") {
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

        var verifFirstName = isFirstName()
        var verifLastName = isLastName()
        var verifCompany = isCompany()
        var verifNumber = isNumber()
        var verifEmail = isEmail()
        var verifMessage = isMessage()

        if (verifFirstName && verifLastName && verifCompany && verifNumber && verifEmail && verifMessage) {
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

    return (
        <div className="FormulaireContact_container">

            <div className="FormulaireContact_container_Form">
                <form className="FormulaireContact_form">

                    <div className="FormulaireContact_container_title">
                        <p className="FormulaireContact_title">{"Contactez-nous ! "}</p>{" "}
                        <img className="FormulaireContact_imgContact" src={imgContact} alt="Logo contact" />
                    </div>

                    <div className="FormulaireContact_form_content">

                        <div className="FormulaireContact_container_names">
                            <div className="FormulaireContact_box_FirstName">
                                <label id="FormulaireContact_not_firstName">{"Prénom"}</label>
                                <input
                                    className="FormulaireContact_input"
                                    type="text"
                                    id="FormulaireContact_firstName"
                                    name="FormulaireContact_firstName"
                                    onChange={(e) => setFirstName(e.target.value)}
                                    placeholder={"Prénom *"}
                                    value={firstName}
                                    autoComplete="off"
                                />
                            </div>

                            <div className="FormulaireContact_box_LastName">
                                <label id="FormulaireContact_not_lastName">{"Nom"}</label>
                                <input
                                    className="FormulaireContact_input"
                                    type="text"
                                    id="FormulaireContact_lastName"
                                    name="FormulaireContact_lastName"
                                    onChange={(e) => setLastName(e.target.value)}
                                    placeholder={"Nom *"}
                                    value={lastName}
                                    autoComplete="off"
                                />
                            </div>
                        </div>


                        <div className="FormulaireContact_box_Company">
                            <label id="FormulaireContact_not_company">{"Société"}</label>
                            <input
                                className="FormulaireContact_input"
                                type="text"
                                id="FormulaireContact_company"
                                name="FormulaireContact_company"
                                onChange={(e) => setCompany(e.target.value)}
                                placeholder={"Société"}
                                value={company}
                                autoComplete="off"
                            />
                        </div>

                        <div className="FormulaireContact_box_Phone">
                            <label id="FormulaireContact_not_phone">{"Téléphone"}</label>
                            <input
                                className="FormulaireContact_input"
                                type="text"
                                id="FormulaireContact_phone"
                                name="FormulaireContact_phone"
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder={"Téléphone *"}
                                value={phone}
                                autoComplete="off"
                            />
                        </div>

                        <div className="FormulaireContact_box_Email">
                            <label id="FormulaireContact_not_mail">{"Mail"}</label>
                            <input
                                className="FormulaireContact_input"
                                type="mail"
                                id="FormulaireContact_email"
                                name="FormulaireContact_email"
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder={"Mail *"}
                                value={email}
                                autoComplete="off"
                            />
                        </div>

                        <div className="FormulaireContact_box_Message">
                            <label id="FormulaireContact_not_message">{"Message"}</label>
                            <textarea
                                className="FormulaireContact_textarea"
                                id="FormulaireContact_message"
                                name="FormulaireContact_message"
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder={"Message *"}
                                value={message}
                            />
                        </div>
                    </div>

                    <div className="FormulaireContact_SendBox">
                        <input
                            className="FormulaireContact_button"
                            type="button"
                            value={"Envoyer"}
                            onClick={checkList}
                        />
                    </div>


                    {/* |=========={ Message de validation / erreur d'envois }==========| */}

                    {resultMailSend === "success" && (

                        <div className="FormulaireContact_form_message" style={{ backgroundColor: "#28B463" }}>

                            <p>Votre message a bien été envoyé ! </p>

                        </div>
                    )}
                    {resultMailSend === "error" && (
                        <div
                            className="FormulaireContact_form_message"
                            style={{ backgroundColor: "rgb(253,87,87)" }}
                        >
                            <p> Une erreur s'est produite, veuillez recommencer.</p>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default FormulaireContact;
