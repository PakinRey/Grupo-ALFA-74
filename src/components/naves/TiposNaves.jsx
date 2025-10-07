// src/components/naves/TiposNaves.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import styles from './TiposNaves.module.scss';

const tabs = [
  {
    id: 'acero',
    label: 'Estructuras de Acero',
    title: 'Máxima flexibilidad y grandes claros',
    text:
      'Soluciones en acero para luces amplias, crecimiento modular, techos insulados y preparación para equipos (sistemas contra incendio, ductería, puentes grúa).',
    image: '/estructura_metalica_1.jpg',
  },
  {
    id: 'tilt',
    label: 'Muros Tilt-Up',
    title: 'Rapidez y durabilidad',
    text:
      'Paneles tilt-up para envolventes robustas, control térmico/acústico y ciclos de obra civil optimizados.',
    image: '/estructura_metalica_vigas_1.jpg',
  },
  {
    id: 'hibridos',
    label: 'Sistemas Híbridos',
    title: 'Lo mejor de ambos mundos',
    text:
      'Combina acero y tilt-up para velocidad de entrega y flexibilidad estructural con TCO competitivo.',
    image: '/estructura_metalica_edificio_1.png',
  },
];

export const TiposNaves = () => {
  const [active, setActive] = useState(tabs[0].id);
  const prefersReducedMotion = useReducedMotion();
  const current = tabs.find((t) => t.id === active);

  return (
    <section className={styles.section} aria-labelledby="tipos-naves-title">
      <div className="container">
        <h2 id="tipos-naves-title" className={styles.title}>
          Tipos de Naves Industriales
        </h2>

        <div
          className={styles.tabs}
          role="tablist"
          aria-label="Selección de tipo de nave"
        >
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
                  <li>Memorias de cálculo y detalles de conexión.</li>
                  <li>Coordinación MEP y andenes/diques.</li>
                  <li>Preparación para certificaciones (FM Global, NFPA, etc.).</li>
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
