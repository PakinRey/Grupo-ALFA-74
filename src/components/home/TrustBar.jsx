import React from 'react';
import { motion } from 'framer-motion';
import styles from './TrustBar.module.scss';

// Datos para la barra de confianza. Así es fácil de modificar.
const trustData = [
  { value: '+20', label: 'Años de Experiencia' },
  { value: '100%', label: 'de Satisfacción' },
  { value: 'Nacional', label: 'Cobertura' },
  { value: 'IMCA', label: 'Certificación' },
];

// Variantes de animación para una aparición sutil
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3, // Pequeño retraso para que aparezca después del Hero
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export const TrustBar = () => {
  return (
    <section className={styles.trustBarSection}>
      <motion.div
        className={`container ${styles.trustBarContainer}`}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible" // La animación se activa cuando el componente es visible
        viewport={{ once: true, amount: 0.5 }} // Se anima solo una vez
      >
        {trustData.map((item, index) => (
          <motion.div key={index} className={styles.trustItem} variants={itemVariants}>
            <span className={styles.value}>{item.value}</span>
            <span className={styles.label}>{item.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
