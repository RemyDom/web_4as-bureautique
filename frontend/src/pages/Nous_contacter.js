// |==== { Imports des composants } ====|
import Bandeau from '../composants/Bandeau.js'
import Pied from '../composants/Pied.js'
import FormulaireContact from '../composants/contact/FormulaireContact.js'

// |==== { Imports des modules + CSS } ====|
import React, { useEffect } from 'react';
import './Nous_contacter.css';



function Contact() {

    useEffect(() => {
        document.title = 'Euro Maintenance - Contact'; // Change le nom d'onglet de la page
    }, []);

    return (
        <div className="contact_container">
            <Bandeau />
            <div className="contact_container_infos">

                <div className="contact_container_maps_info">

                    <div className="contact_container_iframe_maps">
                        <iframe className="contact_iframe" title="Google Maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2633.7884321829197!2d2.1998085775812695!3d48.69040951251198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e5d63ff8321145%3A0x3c97e95b84562324!2sEuro%20Maintenance!5e0!3m2!1sfr!2sfr!4v1707148269322!5m2!1sfr!2sfr"></iframe>
                    </div>

                    <div className="contact_container_text">

                        <div className="contact_part1_text">
                            <table>
                                <thead>
                                    <tr>
                                        <th style={{textAlign:'left'} }> Informations :</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Adresse : 1 Rue Terre Neuve, Bâtiment F, 91940 Les Ulis</td>
                                    </tr>
                                    <tr>
                                        <td>Contact : 01 69 28 50 00 / contact@euromaintenance.fr </td>
                                    </tr>
                                </tbody>

                            </table>
                        </div>

                        <div className="contact_part2_text">

                            <table>
                                <thead>
                                    <tr>
                                        <th>Horaires :</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Lundi</td>
                                        <td>09h - 13h / 14h - 18h </td>
                                    </tr>
                                    <tr>
                                        <td>Mardi</td>
                                        <td>09h - 13h / 14h - 18h </td>
                                    </tr>
                                    <tr>
                                        <td>Mercredi</td>
                                        <td>09h - 13h / 14h - 18h </td>
                                    </tr>
                                    <tr>
                                        <td>Jeudi</td>
                                        <td>09h - 13h / 14h - 18h </td>
                                    </tr>
                                    <tr>
                                        <td>Vendredi</td>
                                        <td>09h - 13h / 14h - 17h </td>
                                    </tr>
                                </tbody>
                            </table>


                        </div>

                    </div>
                </div>

                <div className="contact_container_form">
                    <FormulaireContact />
                </div>
            </div>
            <Pied />
        </div>
    );
}

export default Contact;
