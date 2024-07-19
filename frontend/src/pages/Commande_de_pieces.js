// |==== { Imports des composants } ====|
import Bandeau from '../composants/Bandeau.js';
import Pied from '../composants/Pied.js';

// |==== { Imports des images } ====|
import imgSparePart from '../img/piece-detachee.png';
import imgVous from '../img/compte.png';
import imgDevices from '../img/photocopieur.png';

// |==== { Imports des modules + CSS } ====|
import { useState, useEffect } from 'react';
import "./Commande_de_pieces.css";

function CommandePiece() {

    /* |==== { Déclaration des valeurs } ====| */

    const [lastName, setLastName] = useState(""); // (Obligatoire)
    const [firstName, setFirstName] = useState(""); // (Obligatoire)
    const [company, setCompany] = useState(""); // (Obligatoire)
    const [phone, setPhone] = useState(""); // (Obligatoire)
    const [email, setEmail] = useState(""); // (Obligatoire)
    const [reference, setReference] = useState(""); // (Obligatoire)
    const [serialNumber, setSerialNumber] = useState(""); // (Obligatoire)
    let deliveryAddressEuro = false; // (Choix avec au moins 1 obligatoire)
    let deliveryAddressHome = false; // (Choix avec au moins 1 obligatoire)
    const [address, setAddress] = useState(""); // (Facultatif si livraison EURO)
    const [message, setMessage] = useState(""); // (Obligatoire)
    const [resultMailSend, setResultMailSend] = useState(""); // Statut de l'envoi du mail


    /* |==== { Vérification du Nom} ====| */
    const isLastName = () => {
        let GetLastName = document.getElementById("CommandePiece_not_lastName"); // Vas chercher le libeller "CommandePiece_not_lastName"

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
        let GetFirstName = document.getElementById("CommandePiece_not_firstName");

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
        let GetCompany = document.getElementById("CommandePiece_not_company");

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
        let Getphone = document.getElementById("CommandePiece_not_phone"); // Vas chercher le libeller "not-phone"
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
        let mail = document.getElementById("CommandePiece_not_email");
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
        let GetReference = document.getElementById("CommandePiece_not_ref");

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
        let GetSerialNumber = document.getElementById("CommandePiece_not_serialNumber");

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

    /* |==== { Vérification du choix Euro } ====| */
    const isDeliveryEuro = () => {
        deliveryAddressEuro = !deliveryAddressEuro;
        console.log("Euro status", deliveryAddressEuro);
    };

    /* |==== { Vérification du choix Home } ====| */
    const isDeliveryHome = () => {
        deliveryAddressHome = !deliveryAddressHome;
        console.log("Home status", deliveryAddressHome);

        // Affiche l'input pour renseigner son adresse si case coché
        let GetDivAddress = document.getElementById("CommandePiece_delivery2_adress");

        if (deliveryAddressHome === true) {
            GetDivAddress.style.display = "block";
        } else {
            GetDivAddress.style.display = "none";
        }
    };

    /* |==== { Vérification de l'adresse } ====| */
    const isAddress = () => {
        let GetAddress = document.getElementById("CommandePiece_not_deliveryAdress");
        console.log(address);
        if (address !== "") {
            GetAddress.style.display = "none";
            return true;
        } else {
            GetAddress.style.display = "block";
            GetAddress.style.animation = "dongle 1s";
            setTimeout(() => {
                GetAddress.style.animation = "none";
            }, 1000);
            return false;
        }
    };


    /* |==== { Vérification du choix de livraison } ====| */
    const isDelivery = () => {
        let GetDeliveryAddress = document.getElementById("CommandePiece_not_delivery");

        // Si au moins 1 choix de livraison est fait OK sinon erreur 
        if (deliveryAddressHome === true && deliveryAddressEuro === false) {
            console.log("Choix : Home ");

            if (isAddress() === true) {
                console.log("isAdresse : ", address);
                GetDeliveryAddress.style.display = "none";
                return true;
            } else {
                console.log("isAdresse : ", address);
                return false;
            }
            
        } else if (deliveryAddressHome === false && deliveryAddressEuro === true) {
            console.log("Choix : Euro ");
            GetDeliveryAddress.style.display = "none";
            return true;
        } else {
            console.log("Choix : Erreur ");

            GetDeliveryAddress.style.display = "block";
            GetDeliveryAddress.style.animation = "dongle 1s";
            setTimeout(() => {
                GetDeliveryAddress.style.animation = "none";
            }, 1000);
            return false;
        }
    };

    /* |==== { Vérification du Message} ====| */
    const isMessage = () => {
        let GetMessage = document.getElementById("CommandePiece_not_message");

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
    /* |==== { Ajout d'une ligne au formulaire de pièce } ====| */

    const [rows, setRows] = useState([{ parts: '', quantity: '', review: '' }]);

    const addRow = () => {
        setRows([...rows, { parts: '', quantity: '', review: '' }]);
    };

    const handleChange = (index, e) => {
        const { name, value } = e.target;
        const updatedRows = [...rows];
        updatedRows[index][name] = value;
        setRows(updatedRows);
    };

    /* |==== { Vérification du Message} ====| */
    const isOrder = () => {
        let GetMessage = document.getElementById("CommandePiece_not_message");
        console.log("Parts", rows.parts);
        if (rows.parts !== "") {
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
        console.log("Commande de pièces : ", rows);
        var checkLastName = isLastName();
        var checkFirstName = isFirstName();
        var checkCompany = isCompany();
        var checkEmail = isEmail();
        var checkPhone = isPhone();
        var checkReference = isReference();
        var checkSerialNumber = isSerialNumber();
        var checkDelivery = isDelivery();
        var checkOrder = isOrder();
        var checkMessage = isMessage();

        if (checkLastName && checkFirstName && checkCompany && checkEmail && checkPhone && checkReference && checkSerialNumber &&
            checkDelivery && checkOrder &&
            checkMessage) { // Msg de succes / Erreur à refaire 

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
        document.title = 'Euro Maintenance - Pièces'; // Change le nom d'onglet de la page
    }, []);
    
    return (
        <div className="CommandePiece_container">

            <Bandeau />

            <form className="CommandePiece_container_Form">

                <div className="CommandePiece_form">

                    <div className="CommandePiece_container_title">
                        <p className="CommandePiece_title">{"Commande de pièces "}</p>{" "}
                        <img className="CommandePiece_imgIntervention" src={imgSparePart} alt="Logo encres" />
                    </div>

                    <div className="CommandePiece_container_sub_title">
                        <img className="CommandePiece_imgSubtitle" src={imgVous} alt="Logo vous" />
                        <p className="CommandePiece_p">À propos de vous </p>
                    </div>

                    <div className="CommandePiece_container_aboutme">

                        <div className="CommandePiece_container_Names">

                            <div className="CommandePiece_box_LastName">
                                <label id="CommandePiece_not_lastName">{"Nom"}</label>
                                <input
                                    className="CommandePiece_input"
                                    type="text"
                                    id="CommandePiece_lastName"
                                    name="CommandePiece_lastName"
                                    onChange={(e) => setLastName(e.target.value)}
                                    value={lastName}
                                    placeholder={"Nom *"}
                                    autoComplete="off"
                                />
                            </div>

                            <div className="CommandePiece_box_firstName">
                                <label id="CommandePiece_not_firstName">{"Prénom"}</label>
                                <input
                                    className="CommandePiece_input"
                                    type="text"
                                    id="CommandePiece_firstName"
                                    name="CommandePiece_firstName"
                                    onChange={(e) => setFirstName(e.target.value)}
                                    value={firstName}
                                    placeholder={"Prénom *"}
                                    autoComplete="off"
                                />
                            </div>

                            <div className="CommandePiece_box_company">
                                <label id="CommandePiece_not_company">{"Société"}</label>
                                <input
                                    className="CommandePiece_input"
                                    type="text"
                                    id="CommandePiece_company"
                                    name="CommandePiece_company"
                                    onChange={(e) => setCompany(e.target.value)}
                                    value={company}
                                    placeholder={"Société *"}
                                    autoComplete="off"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="CommandePiece_container_contact">

                        <div className="CommandePiece_box_email">
                            <label id="CommandePiece_not_email">{"Email"}</label>
                            <input
                                className="CommandePiece_input"
                                type="text"
                                id="CommandePiece_email"
                                name="CommandePiece_email"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                placeholder={"Email *"}
                                autoComplete="off"
                            />
                        </div>

                        <div className="CommandePiece_box_phone">
                            <label id="CommandePiece_not_phone">{"Téléphone"}</label>
                            <input
                                className="CommandePiece_input"
                                type="text"
                                id="CommandePiece_phone"
                                name="CommandePiece_phone"
                                onChange={(e) => setPhone(e.target.value)}
                                value={phone}
                                placeholder={"Téléphone *"}
                                autoComplete="off"
                            />
                        </div>
                    </div>

                    <div className="CommandePiece_container_aboutdevice">

                        <div className="CommandePiece_container_sub_title">
                            <img className="CommandePiece_imgSubtitle" src={imgDevices} alt="Logo devices" />
                            <p className="CommandePiece_p">À propos du périphérique  </p>
                        </div>

                        <div className="CommandePiece_ids">

                            <div className="CommandePiece_box_ref">
                                <label id="CommandePiece_not_ref">{"Modèle"}</label>
                                <input
                                    className="CommandePiece_input"
                                    type="text"
                                    id="CommandePiece_ref"
                                    name="CommandePiece_ref"
                                    onChange={(e) => setReference(e.target.value)}
                                    value={reference}
                                    placeholder={"Modèle * "}
                                    autoComplete="off"
                                />
                            </div>

                            <div className="CommandePiece_box_serialNumber">
                                <label id="CommandePiece_not_serialNumber">{"Numéro de série"}</label>
                                <input
                                    className="CommandePiece_input"
                                    type="text"
                                    id="CommandePiece_serialNumber"
                                    name="CommandePiece_serialNumber"
                                    onChange={(e) => setSerialNumber(e.target.value)}
                                    value={serialNumber}
                                    placeholder={"Numéro de série *"}
                                    autoComplete="off"
                                />
                            </div>
                        </div>

                        <div className="CommandePiece_delivery">
                            <label id="CommandePiece_not_delivery">{"Merci de choisir 1 point de livraison"}</label>

                            <div className="CommandePiece_delivery1">
                                <div className="CommandePiece_delivery1_checkbox_wrapper_22" >
                                    <label className="CommandePiece_delivery1_switch" htmlFor="CommandePiece_delivery1_checkbox">
                                        <input type="checkbox" id="CommandePiece_delivery1_checkbox" onClick={isDeliveryEuro}  />
                                        <div className="CommandePiece_delivery1_slider round"></div>
                                    </label>
                                </div>
                                <div style={{ width: "100%" }} >
                                    <p style={{ fontWeight: "bold" }}> Retrait chez EURO MAINTENANCE </p>
                                    <p style={{ fontSize: "14px", marginLeft: "4%" }}>1 Rue Terre Neuve, Bâtiment F, 91940 Les Ulis</p>
                                </div>

                            </div>

                            <div className="CommandePiece_delivery2">

                                <div className="CommandePiece_delivery2_checkbox">
                                    <div className="CommandePiece_delivery2_checkbox_wrapper_22">
                                        <label className="CommandePiece_delivery2_switch" htmlFor="CommandePiece_delivery2_checkbox">
                                            <input type="checkbox" id="CommandePiece_delivery2_checkbox" onClick={isDeliveryHome} />
                                            <div className="CommandePiece_delivery2_slider round"></div>
                                        </label>
                                    </div>

                                    <p style={{ fontWeight: "bold" }}> Retrait chez vous </p>
                                </div>

                                <div id="CommandePiece_delivery2_adress">
                                    <div className="CommandePsiece_box_deliveryAdress">
                                        <label id="CommandePiece_not_deliveryAdress">{"Adresse de livraison *"}</label>
                                        <input
                                            className="CommandePiece_input"
                                            type="text"
                                            id="CommandePiece_deliveryAdress"
                                            name="CommandePiece_deliveryAdress"
                                            onChange={(e) => setAddress(e.target.value)}
                                            value={address}
                                            placeholder={"Adresse de livraison *"}
                                            autoComplete="off"
                                        />
                                    </div>
                                </div>
                            </div>

                            <table className="CommandePiece_table">
                                <thead>
                                    <tr>
                                        <th className="CommandePiece_th">Pièce</th>
                                        <th className="CommandePiece_th">Quantitée</th>
                                        <th className="CommandePiece_th">Commentaire</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rows.map((row, index) => (
                                        <tr key={index}>
                                            <td className="CommandePiece_td"><input className="CommandePiece_table_input" type="text" name="parts" value={row.parts} placeholder={"Ex : Toner N "} autoComplete="off" onChange={(e) => handleChange(index, e)} /></td>
                                            <td className="CommandePiece_td_quantity"><input className="CommandePiece_Table_input_quantity" type="text" name="quantity" value={row.quantity} placeholder={"Ex : 2 "} autoComplete="off" onChange={(e) => handleChange(index, e)} /></td>
                                            <td className="CommandePiece_td"><input className="CommandePiece_table_input" type="text" name="review" value={row.review} placeholder={"Ex : Panne "} autoComplete="off" onChange={(e) => handleChange(index, e)} /></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            <div className="CommandePiece_container_addLine">
                                <p className="CommandePiece_addLine" onClick={addRow}>Ajouter une ligne</p>
                            </div>
                            
                        </div>

                    </div>

                    <div className="CommandePiece_box_message">
                        <label id="CommandePiece_not_message">{"Message"}</label>
                        <textarea
                            className="CommandePiece_textarea"
                            id="message"
                            name="message"
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder={"Message / Informations supplémentaires"}
                            value={message}
                        />
                    </div>

                    <div className="CommandePiece_SendBox">
                        <input
                            className="CommandePiece_button"
                            type="button"
                            value={"Envoyer"}
                            onClick={checkList}
                        />
                    </div>

                    {/* |=========={ Message de validation / erreur d'envois }==========| */}

                    {resultMailSend === "success" && (

                        <div className="CommandePiece_form_message" style={{ backgroundColor: "#28B463" }}>

                            <p>Votre commande à bien été envoyé ! </p>

                        </div>
                    )}
                    {resultMailSend === "error" && (
                        <div
                            className="CommandePiece_form_message"
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

export default CommandePiece;