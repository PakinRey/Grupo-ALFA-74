// src/components/espectaculares/EspectacularesHeader.jsx
import React from 'react';
import { motion } from 'framer-motion';
import styles from './EspectacularesHeader.module.scss';
import { withConversionTracking } from '../../hocs/withConversionTracking.jsx'; // Importa el HOC para el seguimiento

const TrackedCTA = withConversionTracking('a');

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export const EspectacularesHeader = () => {
  return (
    <motion.header
      className={styles.espectacularesHeader}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className={styles.videoOverlay}></div>
      <video className={styles.backgroundVideo} autoPlay loop muted playsInline>
        <source src="/Generación_de_Video_Realista.mp4" type="video/mp4" />
        Tu navegador no soporta el video.
      </video>

      <div className={`container ${styles.headerContainer}`}>
        <motion.h1 className={styles.title} variants={itemVariants}>
          Estructuras para Espectaculares que Dominan el Paisaje Urbano
        </motion.h1>
        <motion.p className={styles.intro} variants={itemVariants}>
          Más que acero, construimos puntos de referencia. Diseñamos, fabricamos y montamos estructuras publicitarias que garantizan máxima visibilidad, total seguridad estructural y cumplimiento normativo absoluto.
        </motion.p>
        <motion.div variants={itemVariants}>
           <TrackedCTA 
              href="#form"
              className={styles.ctaButton}
              conversionType="Solicitud_Espectaculares_Hero"
            >
              Iniciar Análisis de Proyecto
            </TrackedCTA>
        </motion.div>
      </div>
    </motion.header>
  );
};