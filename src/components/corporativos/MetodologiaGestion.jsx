// src/components/corporativos/MetodologiaGestion.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import styles from './MetodologiaGestion.module.scss';

const steps = [
  {
    title: '1) Fase de Pre-Construcción',
    text:
      'Ingeniería de valor, estimaciones, permisos, planeación de compras y cronograma maestro. Definimos riesgos y mitigaciones desde el inicio.',
    image:
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: '2) Fase Estructural',
    text:
      'Cimentación y montaje de estructura (acero/concreto). Control dimensional, trazos y pruebas de calidad por etapa.',
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: '3) Cerramientos y Sistemas',
    text:
      'Ejecución de fachadas, interiores y sistemas MEP coordinados; compatibilización técnica y pruebas de funcionamiento.',
    image:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: '4) Entrega y Cierre',
    text:
      'Acabados finales, comisionamiento, documentación as-built y manuales. Plan de operación y garantías.',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
  },
];

export const MetodologiaGestion = () => {
  const [active, setActive] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className={styles.section} aria-labelledby="metodologia-title">
      <div className="container">
        <h2 id="metodologia-title" className={styles.title}>
          Metodología de Gestión de Proyectos
        </h2>
        <p className={styles.subtitle}>
          Ciclo de vida corporativo con control de costos, tiempos y calidad.
        </p>

        <div className={styles.layout}>
          <nav className={styles.nav} aria-label="Fases de metodología">
            {steps.map((s, i) => (
              <button
                key={s.title}
                type="button"
                className={`${styles.stepBtn} ${active === i ? styles.active : ''}`}
                onClick={() => setActive(i)}
                aria-current={active === i ? 'step' : undefined}
              >
                {s.title}
              </button>
            ))}
          </nav>

          <main className={styles.panel}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={prefersReducedMotion ? {} : { opacity: 0, x: 20 }}
                animate={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
                exit={prefersReducedMotion ? {} : { opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
              >
                <h3 className={styles.stepTitle}>{steps[active].title}</h3>
                <p className={styles.stepText}>{steps[active].text}</p>
                <div className={styles.imageWrap}>
                  <img
                    src={steps[active].image}
                    alt={steps[active].title}
                    loading="lazy"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>
    </section>
  );
};
