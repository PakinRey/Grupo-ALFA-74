import React from 'react';
import { motion } from 'framer-motion';
import styles from './ServicesHeader.module.scss';

// --- Iconos como componentes ---
const IconNormativo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
  </svg>
);
const IconEquipo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.228a4.5 4.5 0 00-1.002-3.032M18 18.72v-2.228m2.164.921a3.375 3.375 0 01-4.474-4.474M4.5 21.75A2.25 2.25 0 012.25 19.5v-1.125c0-1.581.7-2.992 1.815-3.896m1.815-3.896a4.5 4.5 0 00-1.002-3.032A4.5 4.5 0 012.25 6.75v-1.125a2.25 2.25 0 012.25-2.25h1.522c1.238 0 2.362.43 3.298 1.168m-5.498 3.556A4.5 4.5 0 008.25 9.75a4.5 4.5 0 00-4.498-3.032m4.498 3.032a4.5 4.5 0 004.498-3.032M12 21a2.25 2.25 0 01-2.25-2.25v-1.125c0-1.581.7-2.992 1.815-3.896m1.815-3.896A4.5 4.5 0 0015.75 9.75a4.5 4.5 0 00-4.498-3.032m4.498 3.032A4.5 4.5 0 0013.5 6.75v-1.125a2.25 2.25 0 012.25-2.25h1.522c1.238 0 2.362.43 3.298 1.168m-5.498 3.556a4.5 4.5 0 004.498-3.032" />
  </svg>
);
const IconTecnologia = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
  </svg>
);

// --- Datos para las señales de confianza ---
const trustSignals = [
  { icon: <IconNormativo />, text: 'Adherencia estricta a las normativas del IMCA y estándares de la industria.' },
  { icon: <IconEquipo />, text: 'Más de 20 años de experiencia ejecutando proyectos en los sectores más exigentes.' },
  { icon: <IconTecnologia />, text: 'Uso de maquinaria de precisión para garantizar la calidad en cada componente.' },
];

// --- Variantes de animación ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const ServicesHeader = () => {
  return (
    <motion.section
      className={styles.servicesHeader}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className={styles.headerOverlay}></div>
      <div className={`container ${styles.headerGrid}`}>
        {/* Columna Izquierda: Título y Descripción */}
        <div className={styles.mainContent}>
          <motion.h1 className={styles.title} variants={itemVariants}>
            Ingeniería, Precisión y Montaje: Soluciones Integrales para Proyectos de Alta Complejidad
          </motion.h1>
          <motion.p className={styles.intro} variants={itemVariants}>
            En Grupo Alfa 74, cada fase de su proyecto es ejecutada por especialistas. Integramos procesos certificados para garantizar la integridad estructural, el cumplimiento de su cronograma y la optimización de su inversión.
          </motion.p>
        </div>
        
        {/* Columna Derecha: Señales de Confianza */}
        <motion.aside className={styles.trustSignals} variants={itemVariants}>
          {trustSignals.map((signal, index) => (
            <div key={index} className={styles.signalItem}>
              <div className={styles.iconWrapper}>{signal.icon}</div>
              <p>{signal.text}</p>
            </div>
          ))}
        </motion.aside>
      </div>
    </motion.section>
  );
};