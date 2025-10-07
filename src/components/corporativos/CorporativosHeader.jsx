// src/components/corporativos/CorporativosHeader.jsx
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import styles from './CorporativosHeader.module.scss';
import { withConversionTracking } from '@/hocs/withConversionTracking.jsx';

const TrackedLink = withConversionTracking('a');

export const CorporativosHeader = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <header className={styles.header} aria-label="Edificios Comerciales y Corporativos">
      <div className={styles.mediaWrap} aria-hidden="true">
        <video
          className={styles.bgVideo}
          autoPlay
          loop
          muted
          playsInline
          poster="/corporativo_hero_poster.jpg"
        >
          <source src="/timelapse_corporativo.mp4" type="video/mp4" />
        </video>
        <div className={styles.overlay} />
      </div>

      <div className={`container ${styles.inner}`}>
        <motion.h1
          className={styles.title}
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
          animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }} 
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          Construyendo los Futuros Centros de Negocio
        </motion.h1>

        <motion.p
          className={styles.subtitle}
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 }}
        >
          Materializamos visiones arquitectónicas con <strong>ingeniería de valor</strong>,
          <strong> gestión integral</strong> y <strong>certeza en la ejecución</strong>.
        </motion.p>

        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <TrackedLink
            href="#form"
            className={styles.cta}
            conversionType="Solicitud_Corporativos_Hero"
          >
            Solicitar asesoría y estimación
          </TrackedLink>
        </motion.div>
      </div>
    </header>
  );
};
