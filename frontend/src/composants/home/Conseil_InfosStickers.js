// |==== { Imports des composants } ====|
import ConseilSticker from "./Conseil_Sticker.js";

// |==== { Imports du CSS } ====|
import "../../pages/Home.css";

// |==== { Imports des images } ====|
import AuditIcon from "../../img/audit.png";
import ChercherIcon from "../../img/chercher.png";
import DocumentaireIcon from "../../img/documentaire.png";
import OeilIcon from "../../img/oeil.png";

function Conseil_InfosStickers(props) {

    const stickerList = [ // Si besoin d'ajouter des vignettes aller à la suite et remplir avec les informations souhaités
        {
            key: 1, 
            icons: AuditIcon,
            title: "Audit d'impression",
            summary: "Expertise à l'instant présent de votre parc d'impression.",
            more: OeilIcon,
            popupContent: (
                <>
                    <h2 style={{width:"50%"} }>Audit de votre parc d'impression</h2>
                    <p>L'audit est une expertise aboutissant à un rapport de situation de l'instant présent de votre parc d'impression. <br />
                        Un audit permet d'avoir une visibilité réelle des coûts de votre parc d'impression, de ses fonctionnalités et des axes d'améliorations possibles en fonction des besoins utilisateurs.
                    </p>

                    <h3>Les objectifs de l'audit</h3>
                    <ul>

                        <li>Connaitre la globalité des coûts
                            de votre parc d'impression.</li>
                        <li>Évaluer en amont les besoins
                            des utilisateurs.</li>
                        <li>Mettre en place la politique
                            d'impression (optimiser -
                            économiser - améliorer).</li>
                        <li>Optimiser et maîtriser son futur
                            budget d'impression.</li>
                        <li>Évoluer vers une performance
                            optimale de votre parc
                            d'impression.</li>
                        <li>Maîtriser et surveiller le budget
                            d'impression.</li>
                    </ul>

                    <h3>Phases types d'un audit</h3>

                    <ul>
                        <li>1 - Quantités et caractéristiques des matériels existants afin d'optimiser leur nombre en fonction des besoins de votre entreprise. La connaissance des caractéristiques permet une meilleure interprétation des données puisque l'usage de consommables ou la performance de l'exploitation dépend aussi de ses propriétés.</li>
                        <li>2 - Détails de la volumétrie des impressions, numérisations, photocopies et fax. Ces données sont indispensables pour la conception de votre futur parc d'impression puisqu'elles apportent les informations concernant l'usage et le comportement actuel de vos utilisateurs.</li>
                        <li>3 - Répartition de la volumétrie de travail par périphérique afin d'adapter la performance des futurs matériels aux besoins des utilisateurs.</li>
                        <li>4 - Typologie des impressions A4 et A3, NB, couleur, facilite la mise en œuvre de la politique d'impression et le choix des périphériques les plus adaptés.</li>
                        <li>5 - L'étude des pratiques du traitement des documents, nombre de scans et de fax permet d'affiner le choix de votre futur parc d'impression.</li>
                        <li>6 - Problèmes techniques récurrents afin de vous proposer les options de maintenance adaptées (hotline, réparation sur site, maintenance préventive).</li>
                    </ul>

                    <h3>Les enjeux de ces analyses
                        et de ces préconisations</h3>

                    <ul>
                        <li>Réduction des coûts</li>
                        <li>Meilleure performance</li>
                        <li>Renforcement de la sécurité des données</li>
                        <li>Amélioration d'accessibilité et d'efficacité de l'impression</li>
                        <li>Gain de temps et d'espace</li>
                        <li>Augmentation du confort de travail</li>
                        <li>Usage écoresponsable</li>
                        <li>Diminution du TCO global</li>
                        <li>Économie d'énergie</li>
                        <li>Réduction de l'empreinte carbone</li>
                    </ul>
                </>
            ),
        },
        {
            key: 2,
            icons: ChercherIcon,
            title: "Contrôle & Sécurisation d'impression",
            summary: "Logiciel intelligent simplifiant la gestion de parc. ",
            more: OeilIcon,
            popupContent: (
                <>
                    <h2 style={{ width: "50%" }}>Une sécurité d’impression avec suivi et contrôle</h2>
                </>
            ),
        },
        {
            key: 3,
            icons: DocumentaireIcon,
            title: "Gestion Documentaire",
            summary: "Solution de GED tel que Zeendoc, Therefore.",
            more: OeilIcon,
            popupContent: (
                <>
                    <h2 style={{ width: "50%" }}>Gestion documentaire</h2>
                </>
            ),
        },
    ];

    return (
        <div className="Conseil_InfosStickers_container">
            <div className="Home_container_all_Conseil_Stickers_choice2">
                {stickerList.map((sticker) => (
                    <ConseilSticker
                        popupContent={sticker.popupContent}
                        key={sticker.key}
                        id={sticker.key}
                        title={sticker.title}
                        icons={sticker.icons}
                        summary={sticker.summary}
                        more={sticker.more}
                    />
                ))}
            </div>
        </div>
    );
}

export default Conseil_InfosStickers;