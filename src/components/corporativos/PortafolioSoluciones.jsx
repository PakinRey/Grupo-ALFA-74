// src/components/corporativos/PortafolioSoluciones.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import styles from './PortafolioSoluciones.module.scss';

const tabs = [
  {
    id: 'oficinas',
    label: 'Oficinas Corporativas',
    title: 'Espacios de trabajo modernos y eficientes',
    text:
      'Estructuras y sistemas que favorecen plantas abiertas, núcleos eficientes, acústica y confort ambiental con consumos optimizados.',
    bullets: [
      'Coordinación integral MEP, IT y sistemas de seguridad.',
      'Fachadas de alto desempeño térmico/acústico.',
      'Core & Shell y Fit-Out con control de calidad documentado.',
    ],
    image: '/edificio_corporativo_1.jpg',
  },
  {
    id: 'retail',
    label: 'Plazas Comerciales (Retail)',
    title: 'Experiencia del visitante y durabilidad',
    text:
      'Soluciones para grandes claros, circulaciones, cubiertas y acabados de alto tráfico con mantenimiento contenido.',
    bullets: [
      'Planeación de anclas y locales con accesos y andenes.',
      'Sistemas contra incendio, evacuación y señalética.',
      'Acabados y paisajismo resilientes al uso intensivo.',
    ],
    image: '/plaza_comercial_1.jpg',
  },
  {
    id: 'mixto',
    label: 'Proyectos de Uso Mixto',
    title: 'Integración de residencial, comercial y oficinas',
    text:
      'Interfaz técnica y constructiva entre usos con zonificación, aislación acústica y logística de obra secuenciada.',
    bullets: [
      'Gestión de interferencias y fases por torre/volumen.',
      'Sistemas híbridos (acero + concreto) según programa.',
      'Coordinación de accesos, estacionamientos y servicios.',
    ],
    image: '/uso_mixto_1.jpg',
  },
];

export const PortafolioSoluciones = () => {
  const [active, setActive] = useState(tabs[0].id);
  const prefersReducedMotion = useReducedMotion();
  const current = tabs.find((t) => t.id === active);

  return (
    <section className={styles.section} aria-labelledby="portafolio-title">
      <div className="container">
        <h2 id="portafolio-title" className={styles.title}>
          Portafolio de Soluciones
        </h2>

        <div className={styles.tabs} role="tablist" aria-label="Tipos de proyectos">
          {tabs.map((tb) => (
            <button
              key={tb.id}
              className={`${styles.tab} ${active === tb.id ? styles.active : ''}`}
              onClick={() => setActive(tb.id)}
              role="tab"
              aria-selected={active === tb.id}
              aria-controls={`panel-${tb.id}`}
              id={`tab-${tb.id}`}
              type="button"
            >
              {tb.label}
            </button>
          ))}
        </div>

        <div className={styles.contentWrap}>
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              className={styles.content}
              role="tabpanel"
              id={`panel-${current.id}`}
              aria-labelledby={`tab-${current.id}`}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
              animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? {} : { opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
            >
              <div className={styles.textCol}>
                <h3 className={styles.heading}>{current.title}</h3>
                <p className={styles.paragraph}>{current.text}</p>
                <ul className={styles.list}>
                  {current.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.imageCol}>
                <img
                  src={current.image}
                  alt={current.title}
                  loading="lazy"
                  className={styles.image}
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
