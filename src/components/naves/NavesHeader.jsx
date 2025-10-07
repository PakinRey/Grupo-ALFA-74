// src/components/naves/NavesHeader.jsx
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import styles from './NavesHeader.module.scss';
import { withConversionTracking } from '@/hocs/withConversionTracking.jsx';

const TrackedLink = withConversionTracking('a');

export const NavesHeader = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <header className={styles.header} aria-label="Soluciones en Naves Industriales">
      <div className={styles.mediaWrap} aria-hidden="true">
        <video
          className={styles.bgVideo}
          autoPlay
          loop
          muted
          playsInline
          poster="/nave_hero_poster.jpg"
        >
          <source src="/timelapse_nave.mp4" type="video/mp4" />
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
          Soluciones en Naves Industriales para Operaciones que No se Detienen
        </motion.h1>

        <motion.p
          className={styles.subtitle}
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        >
          Mitigamos riesgo de <strong>tiempo</strong>, <strong>presupuesto</strong> y{' '}
          <strong>seguridad</strong> con ingeniería, habilitado en planta y montaje acelerado.
        </motion.p>

        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <TrackedLink
            href="#form"
            className={styles.cta}
            conversionType="Solicitud_Naves_Hero"
          >
            Solicitar análisis y cotización
          </TrackedLink>
        </motion.div>
      </div>
    </header>
  );
};
