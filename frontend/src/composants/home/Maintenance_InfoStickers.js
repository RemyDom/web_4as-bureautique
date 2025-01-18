// |==== { Imports des composants } ====|
import MaintenanceSticker from "./Maintenance_Sticker.js";

// |==== { Imports du CSS + img } ====|
import "../../pages/Home.css";
import img_copie from '../../img/copie.png';

function Maintenance_InfoSticker(props) {
    
    const stickerListMaintenance = [ // Si besoin d'ajouter des vignettes aller à la suite et remplir avec les informations souhaités
        {
            key: 1,
            icons: img_copie,
            title: "Relevé copie trimestriel",
            price: "15.0697€ / mois",
            more: "En savoir plus",
            popupContent: (
                <>
                    <div>
                        <table className="Maintenance_InfoStickers_table">
                            <tbody>
                                <tr className="Maintenance_InfoStickers_tr">
                                    <td> - Relevé Noir : 0.0064€ (P.U HT)</td>
                                    <td> - Relevé couleur  : 0.0633€ (P.U HT)</td>
                                    <td> - KPAX 1.25€ (P.U HT) </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </>
            ),
        },
        {
            key: 2,
            icons: img_copie,
            title: "Tranche copie trimestrielle",
            price: "1 382.00€ / tranche",
            more: "En savoir plus",
            popupContent: (
                <>
                    <div>
                        <table className="Maintenance_InfoStickers_table">
                            <tbody>
                                <tr className="Maintenance_InfoStickers_tr"> 
                                    <td> - Relevé Noir : 4 000 Copies 18.80€ (HT)</td>
                                    <td> - Relevé Couleur : 18 000 Copies 846.00€ (HT)</td>
                                    <td> - KPAX 0.44€ (P.U HT)</td>
                                    <td> - LOC03 500€</td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                </>
            ),
        }
    ];

    return (
        <div className="Maintenance_InfoStickers_container">
            <div className="Home_container_all_Maintenance_Stickers_choice1">
                {stickerListMaintenance.map((StickerMaintenance) => (
                    <MaintenanceSticker
                        key={StickerMaintenance.key}
                        id={StickerMaintenance.key}
                        icons={StickerMaintenance.icons}
                        title={StickerMaintenance.title}
                        price={StickerMaintenance.price}
                        more={StickerMaintenance.more}
                        popupContent={StickerMaintenance.popupContent}
                    />
                ))}
            </div>
        </div>
    );
}

export default Maintenance_InfoSticker;