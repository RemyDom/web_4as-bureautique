// |==== { Imports des composants } ====|
import Bandeau from '../composants/Bandeau.js'
import Pied from '../composants/Pied.js'

// |==== { Imports CSS } ====|
import React, { useEffect } from 'react';
import './Home.css';

function MentionLegales() {

    useEffect(() => {
        document.title = 'Euro Maintenance - Mentions Légales'; // Change le nom d'onglet de la page
    }, []);

    return (
        <div className="MentionLegales_container">
            <Bandeau />

            <div className="MentionLegales_text">
                <h2 className="MentionLegales_h2">Publication</h2>
                <p>Le site www.euromaintenance.fr, représente la société Euro Maintenance, vente et maintenance de matériels bureautiques pour le compte de partenaires revendeurs.
                    www.euromaintenance.fr est édité par euromaintenance et hébergé chez 1&1.</p>
                <p>Euro Maintenance <br />
                    SAS au capital de 45000€ <br />
                    Siège social : 1 rue Terre Neuve Bât. F, Mini parc du Verger - 91940 Les Ulis <br />
                    RCS Evry 2001 B 01443 <br />
                    N° TVA : FR04378602411 <br />
                    SIRET :378 602 411 00035 - APE 466 Z</p>

                <h2 className="MentionLegales_h2">Directeur de la publication - Création du site</h2>
                <p>C'Web</p>

                <h2 className="MentionLegales_h2">Hébergement</h2>
                <p>1&1 - 1 et 1 Internet (SARL) <br />
                    7 Place de la Gare, 57200 Sarreguemines</p>

                <h2 className="MentionLegales_h2">Propriété intellectuelle</h2>
                <p>L'intégralité du site est la propriété exclusive de Euro Maintenance. Aucune reproduction ou représentation ne peut avoir lieu sans le consentement écrit et préalable de Euro Maintenance. Malgré tous les soins d'usage apportés à la réalisation de ce site et à son actualisation régulière, des erreurs peuvent s'être glissées dans les informations et/ou documents présentés. Si vous en constatez, merci de nous les signaler afin que nous procédions aux rectifications correspondantes. Euro Maintenance se réserve le droit de corriger, à tout moment et sans préavis, le contenu.</p>

                <h2 className="MentionLegales_h2">Données nominatives</h2>
                <p>Les données nominatives enregistrées sur ce site seront stockées et utilisées conformément à la loi du 6 janvier 1978 relative à l'informatique et aux libertés. Les utilisateurs de ce site disposent d'un droit d'accès, de rectification et de suppression des données les concernant, qu'ils peuvent exercer auprès de : Euro Maintenance, 1 rue Terre Neuve, 91940 Les Ulis.</p>
                <p>Les liens hypertexte présents sur ce site et aiguillant les utilisateurs vers d'autres sites Internet n'engagent pas la responsabilité de Euro Maintenance ni de son directeur de publication, quant au contenu de ces sites.</p>

            </div>
            
            <Pied />
        </div>
    );
}

export default MentionLegales;
