import React from 'react';
import { motion } from 'framer-motion';
import styles from './HeroSection.module.scss';

// --- Importa el HOC para el seguimiento ---
import { withConversionTracking } from '@/hocs/withConversionTracking.jsx';

// --- Crea versiones "rastreables" de tus elementos clicables ---
const TrackedPrimaryCTA = withConversionTracking('a');
const TrackedSecondaryCTA = withConversionTracking('a');


// --- Variantes de animación para Framer Motion ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Anima los hijos con un retraso de 0.2s
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={`container ${styles.heroContainer}`}>
        <motion.div 
          className={styles.heroContent}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p className={styles.eyebrow} variants={fadeUp}>
            20 Años de Experiencia • 100% de Cumplimiento sin Fallas
          </motion.p>
          
          <motion.h1 className={styles.title} variants={fadeUp}>
            Ingeniería en Estructuras Metálicas en CDMX que Garantiza su Inversión
          </motion.h1>

          <motion.p className={styles.subtitle} variants={fadeUp}>
            Somos el socio estratégico que elimina la incertidumbre de su proyecto, garantizando la entrega a tiempo, la integridad estructural y el menor **Costo Total de Propiedad (TCO)**.
          </motion.p>

          <motion.div className={styles.ctaContainer} variants={fadeUp}>
            {/* --- Usa los componentes rastreables y pasa el tipo de conversión --- */}
            <TrackedPrimaryCTA 
              href="#contacto" 
              className={styles.primaryCta}
              conversionType="Solicitud_Cotizacion_Hero"
            >
              Solicitar Cotización
            </TrackedPrimaryCTA>

            <TrackedSecondaryCTA 
              href="#proyectos" 
              className={styles.secondaryCta}
              conversionType="Ver_Proyectos_Hero"
            >
              Ver Proyectos Destacados
            </TrackedSecondaryCTA>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

