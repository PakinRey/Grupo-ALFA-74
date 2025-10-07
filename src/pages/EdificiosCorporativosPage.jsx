// src/pages/EdificiosCorporativosPage.jsx
import React from 'react';
import { CorporativosHeader } from '../components/corporativos/CorporativosHeader.jsx';
import { ValuePropositionCorporativos } from '../components/corporativos/ValuePropositionCorporativos.jsx';
import { PortafolioSoluciones } from '../components/corporativos/PortafolioSoluciones.jsx';
import { MetodologiaGestion } from '../components/corporativos/MetodologiaGestion.jsx';
import { GaleriaCorporativos } from '../components/corporativos/GaleriaCorporativos.jsx';
// --- ¡CAMBIO AQUÍ! Importamos el nuevo CTA ---
import { CorporativosCTA } from '../components/corporativos/CorporativosCTA.jsx';

export const EdificiosCorporativosPage = () => {
  return (
    <>
      <CorporativosHeader />
      <ValuePropositionCorporativos />
      <PortafolioSoluciones />
      <MetodologiaGestion />
      <GaleriaCorporativos />
      {/* --- ¡Y lo usamos aquí! --- */}
      <CorporativosCTA />
    </>
  );
};

export default EdificiosCorporativosPage;