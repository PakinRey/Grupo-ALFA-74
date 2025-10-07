// src/components/nocturnos/GaleriaNocturnos.jsx
import React from 'react';
import { motion } from 'framer-motion';
import styles from './GaleriaNocturnos.module.scss';

const projects = [
  { title: 'Bar de Autor - Polanco, CDMX', image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Club Nocturno - Monterrey', image: 'https://images.unsplash.com/photo-1578736649624-1283a0050853?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Lounge & Terraza - Tulum', image: 'https://images.unsplash.com/photo-1571268684239-3d91de25b593?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Remodelación de Antro - Guadalajara', image: 'https://images.unsplash.com/photo-1598488581381-20a2e5d710b0?q=80&w=1200&auto=format&fit=crop' },
];

export const GaleriaNocturnos = () => {
  return (
    <section className={styles.section} aria-labelledby="galeria-nocturnos-title">
      <div className="container">
        <motion.h2
          id="galeria-nocturnos-title"
          className={styles.title}
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Proyectos que Marcan la Noche
        </motion.h2>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <motion.article 
              key={index} 
              className={styles.card}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className={styles.image}
              />
              <div className={styles.overlay}>
                <h3 className={styles.caption}>{project.title}</h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};