// |==== { Imports des composants } ====|
import Bandeau from '../composants/Bandeau.js';
import Pied from '../composants/Pied.js';

// |==== { Imports des modules + CSS } ====|
import React, { useEffect } from 'react';
import './Nos_Services.css';

// |==== { Imports des composants } ====|
import imgTechCopieur from '../img/Photocopieur.jpeg';
import imgTechologie from '../img/technologie.jpg';

function NosServices() {

    useEffect(() => {
        document.title = '4AS Bureautique - Nos Services'; // Change le nom d'onglet de la page
    }, []);

    return (
        <div className="Services_global_container">

            <Bandeau />

            <div className="Services_container">
                <div className="Services_container_part1">
                    <h2 className="Services_title">ENTRETIEN ET MAINTENANCE DE VOTRE MATERIEL</h2>

                    <div className="Services_container_block1">
                        <div className="Services_container_text1">
                            <p>En souscrivant aux services 4AS Bureautique lors de l’achat d’un nouveau produit, nos techniciens spécialistes sont là pour vous apporter toutes leurs connaissances et leur savoir-faire. Nos services planifieront avec vous un calendrier d’installation et valideront avec vous toutes les spécificités liées à la livraison.</p>

                            <p>Votre technicien 4AS Bureautique se chargera des tests de bon fonctionnement de la configuration et réalisera tous les réglages nécessaires pour une utilisation optimale du périphérique d’impression.</p>

                            <p>Celui-ci vous délivrera une formation opérateur sur les fonctions les plus courantes de votre système d’impression.</p>

                            <p>Pour une utilisation approfondie de vos solutions d’impressions, des prestations de formations avancées sont disponibles auprès de votre interlocuteur commercial Canon habituel.
                                Afin de garantir la fiabilité et le bon fonctionnement de vos solutions d’impressions 4AS Bureautique, notre service après-vente réalisera l’entretien et la maintenance de vos solutions multifonctions, fax et connexions.</p>

                        </div>

                        <img className="Services_img1" src={imgTechCopieur} alt="Technicien Copieur" />
                    </div>

                    <p>Dans le cas d’une panne inattendue, le Centre d’Assistance Technique mettra tout en œuvre pour organiser et planifier avec vous, la réparation de vos solutions d’impressions, moteurs d’impressions, connexions, fax ou logiciel et leur maintenance.</p>

                    <p>Notre but est de vous assurer un minimum de temps d’immobilisation de vos solutions d’impressions.</p>

                    <div>
                        <p>Selon les produits et les options choisies, Euro-Maintenance a mis en place plusieurs types de contrat appelés « Euro Service Pass » qui définissent les différentes prestations :</p>
                        <ul>
                            <li>Les mises à jour du système des produits d’impressions.</li>
                            <li>Accès au Centre Support Système, pour le diagnostic et la résolution des problèmes liés aux connexions.</li>
                            <li>Garantie de bon fonctionnement de votre connexion.
                                Dans tous les cas, votre satisfaction est pour nous le principal objectif que nous nous fixons.</li>
                        </ul>
                    </div>
                </div>



                <div className="Services_container_part2">
                    <h2 className="Services_title">UN SERVICE TECHNIQUE A LA POINTE DE LA TECHNOLOGIE.</h2>

                    <div className="Services_container_block2">

                        <div className="Services_container_text2">
                            <p>Un système d'impression de haute qualité requiert un service et une assistance de pointe afin de garantir une durée de disponibilité maximale ou, en cas de panne, une interruption minimale de vos activités. Nos techniciens de services, parfaitement formés et équipés, couvrent toute la France.</p>

                            <p>Dans un environnement professionnel actuel, toutes les activités sont interrompues lorsque le système tombe en panne ou si un important composant ne fonctionne pas correctement. Le service et l'assistance 4AS Bureautique vous garantissent une utilisation optimale de vos solutions professionnelles et, par conséquent, une rentabilité maximale de votre investissement.</p>

                            <p>Experts en maintenance et en service sur nos produits, nous sommes également certifiés dans de nombreuses autres marques, si nécessaire.</p>

                            <p>Nous sommes conscients de l'évolution permanente et rapide de nos produits. Nous offrons donc une formation continue à nos techniciens. Elle vous donne accès, par leur intermédiaire, aux réseaux de services les plus performants sur le marché, où que vous soyez en France. Notre gamme flexible d'options d'assistance signifie que vous pouvez trouver le service le mieux adapté à votre entreprise.</p>
                        </div>
                        <img className="Services_img2" src={imgTechologie} alt="Technologie" />

                    </div>
                    <p>Pour l'assistance technique et logicielle, notre centre d'appels se tient à votre disposition et bon nombre de vos problèmes peuvent être résolus rapidement et facilement par téléphone par un professionnel courtois et expérimenté de notre équipe.</p>

                    <p>Notre service de maintenance vous apporte une sérénité inégalée. Un suivi régulier des differents besoins de nos clients nous permet d'anticiper et de répondre rapidement à leurs demandes. Nous portons une attention particuliére à leur satisfaction.</p>



                </div>
            </div>


            <Pied />
        </div>
    );
}

export default NosServices;