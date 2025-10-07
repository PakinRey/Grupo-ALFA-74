// src/components/naves/ValuePropositionNaves.jsx
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import styles from './ValuePropositionNaves.module.scss';

const items = [
  {
    title: 'Optimización de Espacio (Grandes Claros)',
    text:
      'Estructuras de acero con claros máximos para flujo de materiales y layouts flexibles — ideal para CEDIS y manufactura.',
  },
  {
    title: 'Rapidez de Construcción',
    text:
      'Habilitado en planta + logística JIT minimizan tiempo en sitio y riesgos de clima y obra civil.',
  },
  {
    title: 'Retorno de Inversión y TCO',
    text:
      'Ingeniería certificada IMCA, firma de DRO y durabilidad que reducen re-trabajos, paros y mantenimiento a lo largo del ciclo de vida.',
  },
];

export const ValuePropositionNaves = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className={styles.section} aria-labelledby="naves-value-title">
      <div className="container">
        <motion.h2
          id="naves-value-title"
          className={styles.title}
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 10 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45 }}
        >
          El éxito de tu operación depende de una infraestructura eficiente y confiable
        </motion.h2>

        <div className={styles.grid}>
          {items.map((i) => (
            <motion.article
              key={i.title}
              className={styles.card}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
              whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className={styles.cardTitle}>{i.title}</h3>
              <p className={styles.cardText}>{i.text}</p>
            </motion.article>
          ))}
        </div>

        <ul className={styles.bullets}>
          <li>
            <strong>Velocidad y precisión:</strong> montaje acelerado gracias a
            prefabricado/habilitado en planta.
          </li>
          <li>
            <strong>Flexibilidad estructural:</strong> grandes claros, alturas libres y
            preparación para racks/sprinklers.
          </li>
          <li>
            <strong>Certeza y normatividad:</strong> IMCA, firma de DRO, memoria de
            cálculo y QA/QC documentado.
          </li>
          <li>
            <strong>Experiencia comprobada:</strong> 20 años de ejecución sin
            sorpresas.
          </li>
        </ul>
      </div>
    </section>
  );
};
