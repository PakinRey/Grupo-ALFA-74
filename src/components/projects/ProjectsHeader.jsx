// src/components/projects/ProjectsHeader.jsx

import React from 'react';
import { motion } from 'framer-motion';
import styles from './ProjectsHeader.module.scss';

// --- Variantes de animación (sin cambios) ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

export const ProjectsHeader = () => {
  return (
    <motion.header
      className={styles.projectsHeader}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* --- INICIO: Video de Fondo --- */}
      <div className={styles.videoOverlay}></div>
      <video
        className={styles.backgroundVideo}
        autoPlay
        loop
        muted
        playsInline // Importante para iOS
      >
        <source src="http://alfa74.com.mx/wp-content/uploads/2016/01/video.mp4" type="video/mp4" />
        Tu navegador no soporta el video.
      </video>
      {/* --- FIN: Video de Fondo --- */}

      {/* El contenedor del texto ahora necesita un z-index para estar por encima */}
      <div className={`container ${styles.headerContainer}`}>
        <motion.h1 className={styles.title} variants={itemVariants}>
          Proyectos que Definen Nuestra Capacidad y Precisión
        </motion.h1>
        <motion.p className={styles.intro} variants={itemVariants}>
          Nuestro portafolio es más que una galería; es la prueba de nuestro compromiso con la calidad y la puntualidad. Cada proyecto representa un desafío de ingeniería superado y un cliente 100% satisfecho. Explore nuestros casos de estudio para ver cómo transformamos planos complejos en estructuras duraderas y eficientes.
        </motion.p>
      </div>
    </motion.header>
  );
};