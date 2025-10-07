// src/pages/ProjectsPage.jsx
import React from 'react';

// --- Componentes de la página de Proyectos ---
import { ProjectsHeader } from '../components/projects/ProjectsHeader.jsx';
import { ProjectsGrid } from '../components/projects/ProjectsGrid.jsx';
import { CTAConsultation } from '../components/services/CTAConsultation.jsx';

export function ProjectsPage() {
  return (
    <>
      <ProjectsHeader />
      <ProjectsGrid />
      <CTAConsultation /> 
    </>
  );
}