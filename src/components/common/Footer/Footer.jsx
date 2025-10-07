// src/components/common/Footer/Footer.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Footer.module.scss';

// Íconos para redes sociales
const LinkedInIcon = () => <svg viewBox="0 0 24 24"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.85.67-1.48 1.48-1.48s1.48.63 1.48 1.48v4.93h2.82Z"></path></svg>;
const YouTubeIcon = () => <svg viewBox="0 0 24 24"><path fill="currentColor" d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 5.05-.18.83-.55 1.46-1.12 2.03-.57.57-1.2.94-2.03 1.12C17.8 20.84 16.19 21 12 21c-4.19 0-5.8-.16-7.05-.44-.83-.18-1.46-.55-2.03-1.12-.57-.57-.94-1.2-1.12-2.03C1.16 15.8 1 14.19 1 12c0-4.19.16-5.8.44-7.05.18-.83.55-1.46 1.12-2.03.57-.57 1.2-.94 2.03-1.12C5.8 1.16 7.81 1 12 1c4.19 0 5.8.16 7.05.44.83.18 1.46.55 2.03 1.12.57.57.94 1.2 1.12 2.03Z"></path></svg>;


export const Footer = () => {
  const navLinks = [
    { to: '/', label: 'Inicio' },
    { to: '/servicios', label: 'Servicios' },
    { to: '/proyectos', label: 'Proyectos' },
  ];

  const legalLinks = [
    { to: '/politica-privacidad', label: 'Política de Privacidad' },
    { to: '/terminos-uso', label: 'Términos de Uso' },
  ];

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        {/* Columna 1: Marca e Info */}
        <div className={styles.footerColumn}>
          <img 
            src="/logo_grupo_alfa_74.png" 
            alt="Logo Grupo Alfa 74" 
            className={styles.logo}
          />
          <p className={styles.tagline}>
            Ingeniería en Acero que Construye el Futuro.
          </p>
          <div className={styles.socialLinks}>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><YouTubeIcon /></a>
          </div>
        </div>

        {/* Columna 2: Navegación */}
        <div className={styles.footerColumn}>
          <h4 className={styles.columnTitle}>Navegación</h4>
          <ul className={styles.linkList}>
            {navLinks.map(link => <li key={link.label}><NavLink to={link.to}>{link.label}</NavLink></li>)}
          </ul>
        </div>

        {/* Columna 3: Legal */}
        <div className={styles.footerColumn}>
          <h4 className={styles.columnTitle}>Legal</h4>
          <ul className={styles.linkList}>
            {legalLinks.map(link => <li key={link.label}><NavLink to={link.to}>{link.label}</NavLink></li>)}
          </ul>
        </div>

        {/* Columna 4: Calidad y Certificaciones */}
        <div className={styles.footerColumn}>
          <h4 className={styles.columnTitle}>Calidad Certificada</h4>
          {/* Aquí puedes poner tu sello o premio */}
          <img 
            src="cello_imca_instituto_mexicano_de_la_construccion_en_acero.png" 
            alt="Sello de Calidad IMCA" 
            className={styles.qualitySeal}
          />
        </div>
      </div>
      
      {/* Barra de Copyright Inferior */}
      <div className={styles.footerBottomBar}>
        <div className="container">
          &copy; {new Date().getFullYear()} Grupo Alfa 74. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};