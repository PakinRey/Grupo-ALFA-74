// src/App.jsx

import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/common/Navbar/Navbar.jsx';
import { Footer } from './components/common/Footer/Footer.jsx';
import { HomePage } from './pages/HomePage.jsx';
import { ServicesPage } from './pages/ServicesPage.jsx';
import { ProjectsPage } from './pages/ProjectsPage.jsx';
import { ContactPage } from './pages/ContactPage.jsx';
import { EspectacularesPage } from './pages/EspectacularesPage.jsx';
import { NavesIndustrialesPage } from './pages/NavesIndustrialesPage.jsx';
import { EdificiosCorporativosPage } from './pages/EdificiosCorporativosPage.jsx';
import { CentrosNocturnosPage } from './pages/CentrosNocturnosPage.jsx';
import { ConversionAnalytics } from './components/analytics/ConversionAnalytics.jsx';

// --- ¡IMPORTA EL NUEVO COMPONENTE AQUÍ! ---
import { ScrollToTop } from './components/common/ScrollToTop.jsx';

function App() {
  return (
    <div className="app-container">
      <ScrollToTop />
      
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/proyectos" element={<ProjectsPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/servicios/estructuras-para-espectaculares" element={<EspectacularesPage />} />
          <Route path="/servicios/naves-industriales" element={<NavesIndustrialesPage />} />
          <Route path="/servicios/edificios-corporativos" element={<EdificiosCorporativosPage />} />
          <Route path="/servicios/construccion-de-bares-y-centros-nocturnos" element={<CentrosNocturnosPage />} />
        </Routes>
      </main>
      <Footer />

      <ConversionAnalytics />
    </div>
  )
}

export default App;