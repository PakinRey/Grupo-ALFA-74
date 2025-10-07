// src/components/common/Navbar/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.scss';

// --- Importamos el nuevo componente ---
import { NavDropdown } from './NavDropdown.jsx';

const MenuIcon = () => <svg className={styles.icon} viewBox="0 0 24 24"><path d="M4 6h16M4 12h16m-7 6h7"></path></svg>;
const CloseIcon = () => <svg className={styles.icon} viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"></path></svg>;

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { 
      label: 'Servicios',
      to: '/servicios',
      children: [
        { 
          label: 'Estructuras para Espectaculares', 
          to: '/servicios/estructuras-para-espectaculares',
          description: 'Soluciones de alto impacto visual y seguridad.'
        },
        {
          label: 'Naves Industriales', 
          to: '/servicios/naves-industriales',
          description: 'Construcción de Naves Industriales.'
        },
        {
          label: 'Edificios Comerciales y Corporativos', 
          to: '/servicios/edificios-corporativos',
          description: 'Planes de uso mixto, edificios corporativos y plazas comerciales.'
        },
        {
          label: 'Construcción de Bares y Centros Nocturnos', 
          to: '/servicios/construccion-de-bares-y-centros-nocturnos',
          description: 'Proyectos Bares, Antros y Centros Nocturnos.'
        }
        // { label: 'Naves Industriales', to: '/servicios/naves-industriales', description: '...' }
      ]
    },
    { to: '/proyectos', label: 'Proyectos' },
    { to: '/contacto', label: 'Contacto' },
  ];
  
  const headerClasses = `${styles.header} ${isScrolled ? styles.scrolled : ''}`;

  return (
    <header className={headerClasses}>
      <div className={`container ${styles.navContainer}`}>
        <NavLink to="/" className={styles.logo} onClick={() => setIsOpen(false)}>
          <img src="/logo_grupo_alfa_74.png" alt="Logo Grupo Alfa 74" />
        </NavLink>

        <nav className={`${styles.navLinks} ${isOpen ? styles.menuOpen : ''}`}>
          <ul>
            {/* --- Lógica simplificada: Mapeamos al nuevo componente --- */}
            {navLinks.map((link) => (
              <NavDropdown 
                key={link.label} 
                link={link} 
                onLinkClick={() => setIsOpen(false)} 
              />
            ))}
          </ul>
          <NavLink to="/contacto" onClick={() => setIsOpen(false)} className={`${styles.ctaButton} ${styles.mobileCta}`}>
            Solicitar Cotización
          </NavLink>
        </nav>

        <div className={styles.actions}>
          <NavLink to="/contacto" className={`${styles.ctaButton} ${styles.desktopCta}`}>
            Solicitar Cotización
          </NavLink>
          <button onClick={() => setIsOpen(!isOpen)} className={styles.hamburger}>
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
    </header>
  );
};