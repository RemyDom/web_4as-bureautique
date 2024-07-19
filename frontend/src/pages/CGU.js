// |==== { Imports des composants } ====|
import Bandeau from '../composants/Bandeau.js';
import Pied from '../composants/Pied.js';

// |==== { Imports CSS } ====|
import React, { useEffect } from 'react';
import './Home.css';

function CGU() {

    useEffect(() => {
        document.title = 'Euro Maintenance - GCU' // Change le nom d'onglet de la page
    }, []);

    return (
        <div className="CGU_container">

        <Bandeau />


            <ul>
                <ol className="CGU_ol">1. DEFINITIONS</ol>
                <p>Contenu Editorial : désigne l'ensemble des informations mises à la disposition des Utilisateurs par Euro Maintenance.</p>
                <p>Données Personnelles : désigne les informations personnelles que l'Utilisateur a enregistrées lors de son inscription au Service Spécifique proposés par Euro Maintenance (à savoir l'accès à des documents de type .pdf) et/ou fournies dans le cadre de l'utilisation des Services.</p>
                <p>Droits de Propriété Intellectuelle : désignent les marques, les noms de domaine, les droits d'auteur, copyrights, les dessins et modèles, brevets, droits sur les Bases de Données ou tous autres droits de propriété intellectuelle exploités par Euro Maintenance et nécessaires à ses activités de prestataire de Services.</p>
                <p>Formulaire : désigne le formulaire de commande ou de demande d'informations que l'Utilisateur peut compléter pour pouvoir bénéficier de certains services de Euro Maintenance après avoir pris connaissance des présentes Conditions Générales d'Utilisation.</p>
                <p>Lien Hypertexte : désigne le système de référencement matérialisé par un mot, une icône ou un logo qui permet par un clic de souris de passer d'un document à un autre sur un même site web ou d'une page d'un site web à la page d'un autre site web.</p>
                <p>Services : désigne l'ensemble des services, y inclus les Services Spécifiques, offerts par Euro Maintenance aux Utilisateurs par l'intermédiaire de son site web www.euromaintenance.fr.</p>
                <p>Site Web : désigne le site Internet mis à la disposition du public par le biais d'Internet aux adresses URL http://www.euromaintenance.fr
                    Utilisateur : désigne la personne physique, majeure et capable, utilisant les Services offerts par Euro Maintenance.</p>
                <ol className="CGU_ol">2. OBJET</ol>
                <p>Les présentes Conditions Générales d'Utilisation ont pour objet de définir les termes et conditions dans lesquelles Euro Maintenance fournit les Services aux Utilisateurs. Toute utilisation de l'un des Services offerts par Euro Maintenance se fera dans le respect des présentes Conditions Générales d'Utilisation.</p>
                <ol className="CGU_ol">3. ACCEPTATION DES PRESENTES CONDITIONS GENERALES D'UTILISATION</ol>
                <p>L'Utilisateur, déclare avoir pris connaissance et avoir accepté expressément et de manière inconditionnelle les présentes Conditions Générales d'Utilisation en vigueur au jour de l'accès à son site web et à la souscription aux Services offerts par Euro Maintenance.
                    Euro Maintenance se réserve le droit de modifier tout ou partie et à tout moment les présentes Conditions Générales d'Utilisation. Il appartient en conséquence à l'Utilisateur de se référer régulièrement à la dernière version des Conditions Générales d'Utilisation disponible en permanence sur le Site www.euromaintenance.fr Tout usage des Services après modification des Conditions Générales d'Utilisation, vaut acceptation pure et simple par l'Utilisateur des nouvelles Conditions Générales d'Utilisation.</p>
                <ol className="CGU_ol">4. DROITS DE PROPRIETE INTELLECTUELLE</ol>
                <p>L'Utilisateur reconnaît que Euro Maintenance est seule propriétaire des Droits de Propriété Intellectuelle afférents au Site www.euromaintenance.frt au Contenu Editorial.</p>
                <p>Aucune disposition des présentes Conditions Générales d'Utilisation ne pourra être interprétée comme conférant à l'Utilisateur une licence sur les Droits de Propriété Intellectuelle, dont Euro Maintenance pourra avoir la propriété ou le droit exclusif d'exploitation.</p>
                <p>Euro Maintenance ne concède qu'une autorisation de visualisation de son Contenu Editorial à titre personnel et privé, à l'exclusion de toute visualisation ou diffusion publique.</p>
                <p>Par conséquent, toute représentation, reproduction ou extraction non autorisée par Euro Maintenance du Contenu Editorial ou de son site web ainsi que tout autre Droit de Propriété Intellectuelle est strictement interdite sous peine de poursuites judiciaires. Le contrevenant s'expose à des sanctions civiles et pénales et notamment aux peines prévues aux articles L. 335.2 et L. 343.1 du Code de la Propriété Intellectuelle.</p>
                <ol className="CGU_ol">5. RESPONSABILITE</ol>
                <p>L'Utilisateur reconnaît expressément qu'il doit faire preuve de discernement dans l'utilisation du Contenu Editorial et supporter tous les risques y afférents, et notamment lorsqu'il se fie à l'opportunité, l'utilité ou le caractère complet de ce Contenu Editorial, et procéder à toute vérification sous sa responsabilité.</p>
                <p>L'équipe de Euro Maintenance apporte tout le soin qu'elle estime nécessaire à la constitution du Contenu Editorial. Toutefois Euro Maintenance n'assure aucune garantie quant à la fiabilité des informations du Contenu Editorial. A ce titre, Euro Maintenance ne saurait être tenue responsable des dommages résultant de l'utilisation par l'Utilisateur à quelque fin que ce soit, des informations constituant le Contenu Editorial.</p>
                <p>Le Site www.euromaintenance.fr contient des Liens Hypertextes vers des sites web gérés par des tiers. Euro Maintenance ne peut exercer aucun contrôle sur ces sites ni assumer aucune responsabilité quant à leur contenu. L'insertion de ces liens ne signifie pas que Euro Maintenance approuve les éléments contenus sur ces sites. Euro Maintenance ne peut être tenue responsable du contenu de ces sites, et le fait que ces sites soient référencés sur le Site www.euromaintenance.fr n'engage en aucun cas la responsabilité de Euro Maintenance.</p>
                <ul>
                    <p>Euro Maintenance ne donne donc aucune garantie concernant :</p>
                    <li>la véracité, l'actualité, la qualité, la complétude et l'exhaustivité du contenu des sites Web indexés</li>
                    <li>la pertinence et l'exhaustivité des sites web indexés</li>
                    <li>les difficultés d'accès et de fonctionnement de ces sites web</li>
                </ul>

                <ul>
                    <p>L'Utilisateur reconnaît que :</p>
                    <li>L'utilisation des Services se fait à ses risques et périls notamment en ce qui concerne le téléchargement de données, de fichiers ou de logiciels qui pourraient endommager son ordinateur. La responsabilité de Euro Maintenance ne peut en particulier être engagée pour toute perte de données, virus, bogues informatiques ou dommage affectant son ordinateur</li>
                    <li>Euro Maintenance ne garantit pas l'adéquation entre les Services Proposés et les attentes de l'Utilisateur</li>
                    <li>Euro Maintenance ne garantit pas la qualité et/ou la licéité ou la conformité à la loi du contenu non créé par Euro Maintenance notamment du contenu et des opinions émises par l'Utilisateur ou diffuser sur les sites extérieurs accessibles par le biais d'un Lien Hypertexte</li>
                    <li>Euro Maintenance ne saurait être tenue responsable de la diffusion des données par l'Utilisateur en violation de droits, notamment privatifs, détenus par des tiers</li>
                    <li>Euro Maintenance ne saurait être tenue pour responsable en cas de dommage résultant de causes techniques et notamment de l'indisponibilité de son Site web et de tout défaut affectant le fonctionnement de celui-ci</li>
                    <li>Euro Maintenance ne pourra être tenue responsable de dommages directs ou indirects tels que pertes financières, manque à gagner, trouble de quelque nature que ce soit qui pourraient résulter de l'utilisation ou de l'impossibilité d'utilisation des Services proposés.</li>
                   
                </ul>
                <p>En outre, l'Utilisateur garantit Euro Maintenance contre tout recours ou action que pourrait lui intenter à titre quelconque et pour quelque raison que ce soit, et plus généralement à l'occasion de la saisie de données ou informations, toute personne qui s'estimerait lésée par la mise en ligne de ces données ou informations sur le Site web et s'engagent à la tenir indemne contre tous frais judiciaires et extra judiciaires qui pourraient en résulter.</p>
                <ol className="CGU_ol"> 6. ACCEPTATION DES RISQUES DE L'INTERNET</ol>
                <ul>
                    <p>L'Utilisateur déclare bien connaître Internet, ses caractéristiques et ses limites et en particulier reconnaît :</p>
                    <li>Que l'Internet est un réseau ouvert non maîtrisable par Euro Maintenance et que les échanges de données circulant sur Internet ne bénéficient que d'une fiabilité relative, et ne sont protégées notamment contre les risques de détournements ou de piratages éventuels</li>
                    <li>Que la communication par l'Utilisateur d'informations à caractère sensible est donc effectuée à ses risques et périls</li>
                    <li>Avoir connaissance de la nature du réseau Internet et en particulier de ses performances techniques et des temps de réponse, pour consulter, interroger ou transférer les données d'informations</li>
                </ul>
                <p>Euro Maintenance ne peut garantir que les informations échangées ne seront pas interceptées par des tiers, et que la confidentialité des échanges sera garantie.</p>
                <p>Euro Maintenance informe l'Utilisateur de l'existence de règles et d'usage en vigueur sur Internet connus sous le nom de Netiquette ainsi que de différents codes de déontologie et notamment la Charte Internet accessibles sur Internet.</p>
                <ol className="CGU_ol">7. ACCESSIBILITE AUX SERVICES</ol>
                <p>Euro Maintenance s'efforce dans la mesure du possible de maintenir accessible son site web 7 jours sur 7 et 24 heures sur 24 mais peut interrompre l'accès, notamment pour des raisons de maintenance et de mises à niveau ou pour toute autre raison notamment technique. Euro Maintenance n'est en aucun cas responsable de ces interruptions et des conséquences qui peuvent en découler pour l'Utilisateur.</p>
                <p>Euro Maintenance se réserve le droit de refuser à tout Utilisateur l'accès à tout ou partie du Site www.euromaintenance.fr unilatéralement et sans notification préalable, notamment en cas de violation manifeste des présentes Conditions Générales d'Utilisation.</p>
                <p>L'Utilisateur reconnaît que Euro Maintenance ne pourra être tenue responsable de tout dommage direct ou indirect survenu à raison de la suppression de l'accès de l'Utilisateur au Site www.euromaintenance.fr.</p>
                <ol className="CGU_ol"> 8.0 CONDITIONS D'ACCES AUX SERVICES</ol><br />
                <ol className="CGU_ol"> 8.1 CONDITIONS D'ACCES AUX SERVICES LIBRES</ol>
                <p>L'accès au Contenu Editorial du Site www.euromaintenance.fr est totalement libre et gratuit.</p>
                <ol className="CGU_ol">8.2 CONDITIONS D'ACCES AUX SERVICES SPECIFIQUES GRATUITS</ol>
                <p>L'utilisation des Services Spécifiques suppose le respect par l'Utilisateur d'une procédure d'inscription par laquelle ce dernier doit founir ses coordonnées. L'Utilisateur s'engage à ce que les informations communiquées, notamment les informations personnelles, soient exactes, complètes et à jour et à effectuer les modifications nécessaires à cette fin.</p>
                <p>Dans le cadre de cette procédure, l'Utilisateur déclare avoir pris connaissance et avoir accepté expressément les présentes Conditions Générales d'Utilisation en vigueur au jour de la souscription aux Services Spécifiques par un clic sur l'icône intitulée "j'accepte les Conditions Générales d'Utilisation : envoi des données". Toute acceptation exprimée par l'Utilisateur par un clic vaut signature au même titre que sa signature manuscrite. Par la réalisation de ce clic l'Utilisateur est réputé avoir donné son accord irrévocablement.</p>
                <ol className="CGU_ol">9. DONNEES PERSONNELLES - CONFIDENTIALITE DES DONNEES RECUEILLIES</ol>
                <ul>
                    <p>Euro Maintenance collecte des informations fournies par les Utilisateurs :</p>
                    <li>Par le biais d'un Formulaire ou directement envoyées par les Utilisateurs pour mieux les connaître et les faire bénéficier des Services Spécifiques de Euro Maintenance</li>
             
                </ul>
                <p>Conscient de ce que la collecte et le traitement des Données Personnelles sur Internet, doivent respecter les droits fondamentaux des personnes, Euro Maintenance s'engage à ce que tout traitement de données nominatives sur le Site euromaintenance.fr soit conforme à la loi n°78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés.</p>
                <p>L'Utilisateur dispose d'un droit d'accès (article 34 à 38 de la loi de 1978) et d'un droit de rectification (article 36 de la loi de 1978) aux Données Personnelles le concernant.</p>
                <p>L'Utilisateur peut exercer ce droit à tout moment par l'envoi d'un email à la rubrique contact de notre site Internet à savoir rectifier, compléter, clarifier, mettre à jour ou effacer les informations les concernant qui seraient inexactes, incomplètes ou périmées. Il est demandé un délai de 15 jours maximum avant la prise en compte de la demande de l'Utilisateur.</p>
                <p>Euro Maintenance s'engage à faire ses meilleurs efforts pour protéger les Données Personnelles, afin d'empêcher qu'elles ne soient déformées, endommagées ou communiquées à des tiers non autorisés conformément à l'article 29 de la loi du 6 janvier 1978.</p>
                <ol className="CGU_ol">10. EDITEUR DU SITE</ol>
                <p>Euro Maintenance, inscrite au registre du commerce et des sociétés d'Evry sous le n° 2001 B 01443, SAS au capital de 45000€ et ayant son  siège social à : 1 rue Terre Neuve, bâtiment F, Mini Parc du Verger, 91940 Les Ulis, France.</p>
                <ol className="CGU_ol">11. HEBERGEUR DU SITE</ol>
                <p>1 ET 1 SARL , Unetun - un et un - 1et1, Intergest sa, 7 pl de la gare, 57200 sarreguemines, France</p>
            </ul>

            <Pied/>
        </div>
    );
}

export default CGU;
