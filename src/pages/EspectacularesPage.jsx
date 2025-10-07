// src/pages/EspectacularesPage.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

// --- Importar los nuevos componentes especializados ---
import { EspectacularesHeader } from '../components/espectaculares/EspectacularesHeader.jsx';
import { IntroEspectaculares } from '../components/espectaculares/IntroEspectaculares.jsx';
import { TiposEspectaculares } from '../components/espectaculares/TiposEspectaculares.jsx';
import { ProcesoEspectaculares } from '../components/espectaculares/ProcesoEspectaculares.jsx';
import { VentajasTecnicas } from '../components/espectaculares/VentajasTecnicas.jsx';
import { GaleriaEspectaculares } from '../components/espectaculares/GaleriaEspectaculares.jsx';

// --- Reutilizar el componente CTA existente para la conversión final ---
import { CTAConsultation } from '../components/services/CTAConsultation.jsx';

export function EspectacularesPage() {
  return (
    <>
      <Helmet>
        <title>Estructuras para Espectaculares y Unipolares | Grupo Alfa 74</title>
        <meta name="description" content="Diseño, fabricación y montaje de estructuras metálicas para anuncios espectaculares y unipolares. Garantizamos seguridad estructural, cumplimiento normativo y durabilidad." />
        <meta name="keywords" content="estructuras para espectaculares, anuncios unipolares, fabricación de espectaculares, montaje de anuncios, cálculo estructural, Director Responsable de Obra, DRO" />
      </Helmet>

      {/* 1. Encabezado Impactante y Específico */}
      <EspectacularesHeader />

      {/* 2. Introducción que aborda los puntos de dolor del cliente */}
      <IntroEspectaculares />

      {/* 3. Sección detallada de los tipos de estructuras ofrecidas */}
      <TiposEspectaculares />

      {/* 4. Proceso de trabajo que genera confianza y muestra profesionalismo */}
      <ProcesoEspectaculares />

      {/* 5. Diferenciadores clave y ventajas técnicas */}
      <VentajasTecnicas />
      
      {/* 6. Galería de Proyectos como prueba social */}
      <GaleriaEspectaculares />

      {/* 7. Llamada a la acción final y formulario de conversión */}
      <CTAConsultation />
    </>
  );
}

export default EspectacularesPage;