// src/pages/ServicesPage.jsx
import React from 'react';

// --- Componentes de la página de Servicios ---
import { ServicesHeader } from '../components/services/ServicesHeader.jsx';
import { ServiceDetailTabs } from '../components/services/ServiceDetailTabs.jsx'; // Componente interactivo
import { TechnicalFAQs } from '../components/services/TechnicalFAQs.jsx';
import { CTAConsultation } from '../components/services/CTAConsultation.jsx';

export function ServicesPage() {
  return (
    <>
      <ServicesHeader />
      <ServiceDetailTabs />
      <TechnicalFAQs />
      <CTAConsultation />
    </>
  );
}