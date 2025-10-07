// src/components/naves/GaleriaNaves.jsx
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import styles from './GaleriaNaves.module.scss';

const items = [
  { title: 'Nave logística — Monterrey', image: '/estructura_metalica_1.jpg' },
  { title: 'CEDIS — Bajío', image: '/estructura_metalica_trabajando_1.jpg' },
  { title: 'Bodega — CDMX', image: '/estructura_metalica_vigas_1.jpg' },
  { title: 'Manufactura — Querétaro', image: '/estructura_metalica_edificio_1.png' },
];

export const GaleriaNaves = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className={styles.section} aria-labelledby="galeria-naves-title">
      <div className="container">
        <motion.h2
          id="galeria-naves-title"
          className={styles.title}
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 10 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
        >
          Proyectos que Validan la Ejecución
        </motion.h2>

        <div className={styles.grid}>
          {items.map((it) => (
            <article key={it.title} className={styles.card}>
              <img
                src={it.image}
                alt={it.title}
                loading="lazy"
                className={styles.image}
              />
              <div className={styles.caption}>{it.title}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
