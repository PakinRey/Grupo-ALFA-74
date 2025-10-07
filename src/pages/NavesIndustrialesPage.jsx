// src/pages/NavesIndustrialesPage.jsx
import React from 'react';
import { NavesHeader } from '../components/naves/NavesHeader.jsx';
import { ValuePropositionNaves } from '../components/naves/ValuePropositionNaves.jsx';
import { TiposNaves } from '../components/naves/TiposNaves.jsx';
import { ProcesoNaves } from '../components/naves/ProcesoNaves.jsx';
import { GaleriaNaves } from '../components/naves/GaleriaNaves.jsx';
import { NavesCTA } from '../components/naves/NavesCTA.jsx';

export const NavesIndustrialesPage = () => {
  return (
    <>
      <NavesHeader />
      <ValuePropositionNaves />
      <TiposNaves />
      <ProcesoNaves />
      <GaleriaNaves />
      <NavesCTA />
    </>
  );
};

export default NavesIndustrialesPage;
