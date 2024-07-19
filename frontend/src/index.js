// |==== { Imports des modules } ====|
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// |==== { Imports des composants } ====|
import Home from './pages/Home.js';
import NosServices from './pages/Nos_services.js';
import DemandeIntervention from './pages/Demande_intervention.js';
import CommandePiece from './pages/Commande_de_pieces.js';
import Encres from './pages/Commande_encres.js';
import DocumentTechniqueLogin from './pages/Document_technique_login.js';
import Contact from './pages/Nous_contacter.js';
import CGU from './pages/CGU.js';
import MentionsLegales from './pages/Mentions_Legales.js';
import ErreurLien from './pages/Erreur_lien.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/Nos-Services" element={<NosServices />}></Route>
                <Route path="/Demande-Intervention" element={<DemandeIntervention />}></Route>
                <Route path="/Commande-encres" element={<Encres />}></Route>
                <Route path="/Commande-de-pieces" element={<CommandePiece />}></Route>
                <Route path="/Document-Technique-login" element={<DocumentTechniqueLogin />}></Route>
                <Route path="/Nous-contacter" element={<Contact />}></Route>
                <Route path="/CGU" element={<CGU />}></Route>
                <Route path="/Mentions-Legales" element={<MentionsLegales />}></Route>
                <Route path="/*" element={<ErreurLien />}></Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

