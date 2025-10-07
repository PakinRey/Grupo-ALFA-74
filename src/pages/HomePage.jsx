// src/pages/HomePage.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { HeroSection } from '../components/home/HeroSection.jsx';
import { TrustBar } from '../components/home/TrustBar.jsx';
import { ServicesOverview } from '../components/home/ServicesOverview.jsx';
import { ValueProposition } from '../components/home/ValueProposition.jsx';
import { ProjectsHighlight } from '../components/home/ProjectsHighlight.jsx';
import { Testimonials } from '../components/home/Testimonials.jsx';
import { FinalCTA } from '../components/home/FinalCTA.jsx';
import { WorkProcess } from '../components/home/WorkProcess.jsx';
import { ClientLogoBar } from '../components/home/ClientLogoBar.jsx';
import { BlogHighlight } from '../components/home/BlogHighlight.jsx';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Estructuras Metálicas en CDMX | Grupo Alfa 74</title>
        <meta name="description" content="Expertos en diseño, fabricación y montaje de estructuras metálicas en CDMX. Garantizamos tu proyecto con 20 años de experiencia. Cero riesgos, entrega a tiempo." />
      </Helmet>

      <HeroSection />
      <TrustBar />
      <ServicesOverview />
      <ValueProposition />
      <WorkProcess />
      <ProjectsHighlight />
      <Testimonials />
      <ClientLogoBar />
      <BlogHighlight />
      <FinalCTA />
    </>
  );
}