// src/components/corporativos/ValuePropositionCorporativos.jsx
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FaGem, FaClipboardList, FaShieldAlt } from 'react-icons/fa'; // <-- Íconos!
import styles from './ValuePropositionCorporativos.module.scss';

// Contenido mejorado con iconos
const items = [
  {
    icon: <FaGem />,
    title: 'Ingeniería de Valor',
    text: 'Optimizamos diseños y procesos para reducir costos y plazos, maximizando el retorno de su inversión sin sacrificar la calidad arquitectónica.',
  },
  {
    icon: <FaClipboardList />,
    title: 'Gestión Integral de Proyectos',
    text: 'Actuamos como su único punto de contacto, garantizando una ejecución transparente y coordinada desde la pre-construcción hasta la entrega final.',
  },
  {
    icon: <FaShieldAlt />,
    title: 'Calidad Estructural Garantizada',
    text: 'Aplicamos 20 años de experiencia en acero, concreto y sistemas híbridos para asegurar la longevidad y seguridad de su edificación.',
  },
];

export const ValuePropositionCorporativos = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className={styles.section} aria-labelledby="corp-value-title">
      <div className="container">
        <motion.h2
          id="corp-value-title"
          className={styles.title}
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          Un proyecto ambicioso requiere un socio constructor a la altura
        </motion.h2>

        <div className={styles.grid}>
          {items.map((item, index) => (
            <motion.article
              key={item.title}
              className={styles.card}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
              whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.cardIcon}>{item.icon}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};