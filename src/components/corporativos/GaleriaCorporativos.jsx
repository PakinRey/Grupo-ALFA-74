// src/components/corporativos/GaleriaCorporativos.jsx
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import styles from './GaleriaCorporativos.module.scss';

const items = [
  { title: 'Torre Corporativa — CDMX', image: '/edificio_corporativo_1.jpg' },
  { title: 'Plaza Comercial — Bajío', image: '/plaza_comercial_1.jpg' },
  { title: 'Uso Mixto — Monterrey', image: '/uso_mixto_1.jpg' },
  { title: 'Campus Corporativo — Querétaro', image: '/edificio_corporativo_2.jpg' },
];

export const GaleriaCorporativos = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className={styles.section} aria-labelledby="galeria-corp-title">
      <div className="container">
        <motion.h2
          id="galeria-corp-title"
          className={styles.title}
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 10 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
        >
          Proyectos Emblemáticos
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
