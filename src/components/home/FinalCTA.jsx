import React from 'react';
import { motion } from 'framer-motion';
import styles from './FinalCTA.module.scss';

// --- Variantes de animación ---
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};

const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            type: 'spring',
            stiffness: 200,
            damping: 10,
            duration: 0.8
        }
    }
}

export const FinalCTA = () => {
  return (
    <section className={styles.ctaSection}>
      <motion.div
        className={`container ${styles.ctaContainer}`}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.h2 className={styles.title} variants={itemVariants}>
          Construyamos Juntos su Próximo Gran Proyecto
        </motion.h2>

        <motion.p className={styles.subtitle} variants={itemVariants}>
          Hable con uno de nuestros expertos para un análisis de riesgo estructural y una cotización sin compromiso.
        </motion.p>

        <motion.div variants={buttonVariants}>
          <a href="#contacto" className={styles.ctaButton}>
            Solicitar Cotización
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};
