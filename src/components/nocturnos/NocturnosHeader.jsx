// src/components/nocturnos/NocturnosHeader.jsx
import React from 'react';
import { motion } from 'framer-motion';
import styles from './NocturnosHeader.module.scss';
import { withConversionTracking } from '../../hocs/withConversionTracking.jsx';

const TrackedLink = withConversionTracking('a');

export const NocturnosHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.mediaWrap}>
        <video
          className={styles.bgVideo}
          autoPlay loop muted playsInline
          poster="/path/to/poster_nocturno.jpg" // Cambia por un poster real
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-a-blurry-shot-of-a-dj-at-a-party-4261-large.mp4" type="video/mp4" />
        </video>
        <div className={styles.overlay} />
      </div>

      <div className={`container ${styles.inner}`}>
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Construimos Escenarios para Noches Inolvidables
        </motion.h1>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
        >
          Fusionamos ingeniería de precisión con diseño de vanguardia para materializar bares, antros y centros nocturnos que cautivan, perduran y cumplen con toda la normativa.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <TrackedLink
            href="#form"
            className={styles.cta}
            conversionType="Solicitud_Nocturnos_Hero"
          >
            Iniciar Mi Proyecto
          </TrackedLink>
        </motion.div>
      </div>
    </header>
  );
};