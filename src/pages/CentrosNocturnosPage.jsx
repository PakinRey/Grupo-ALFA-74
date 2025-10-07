// src/pages/CentrosNocturnosPage.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

// --- Importar los nuevos componentes especializados ---
import { NocturnosHeader } from '../components/nocturnos/NocturnosHeader.jsx';
import { ValuePropositionNocturnos } from '../components/nocturnos/ValuePropositionNocturnos.jsx';
import { ServiciosEspecializados } from '../components/nocturnos/ServiciosEspecializados.jsx';
import { MetodologiaNocturnos } from '../components/nocturnos/MetodologiaNocturnos.jsx';
import { GaleriaNocturnos } from '../components/nocturnos/GaleriaNocturnos.jsx';
import { NocturnosCTA } from '../components/nocturnos/NocturnosCTA.jsx';

export const CentrosNocturnosPage = () => {
  return (
    <>
      <Helmet>
        <title>Construcción de Bares y Centros Nocturnos | Grupo Alfa 74</title>
        <meta name="description" content="Especialistas en la construcción y remodelación de bares, antros y centros nocturnos. Integramos diseño, acústica, iluminación y construcción para crear experiencias inolvidables." />
        <meta name="keywords" content="construcción de bares, construcción de antros, remodelación de centros nocturnos, ingeniería acústica, diseño de iluminación para bares" />
      </Helmet>

      <NocturnosHeader />
      <ValuePropositionNocturnos />
      <ServiciosEspecializados />
      <MetodologiaNocturnos />
      <GaleriaNocturnos />
      <NocturnosCTA />
    </>
  );
};

export default CentrosNocturnosPage;