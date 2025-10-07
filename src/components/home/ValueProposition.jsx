import React from 'react';
import { motion } from 'framer-motion';
import styles from './ValueProposition.module.scss';

// --- Iconos para cada punto de valor ---
const IconTCO = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
const IconCronograma = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18M12 12.75h.008v.008H12v-.008z" />
  </svg>
);
const IconCerteza = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z" />
  </svg>
);

// --- Datos para mantener el componente limpio ---
const valuePropositions = [
  {
    icon: <IconTCO />,
    title: 'Minimizamos tu Costo Total de Propiedad (TCO)',
    text: 'Nuestra calidad certificada y precisión en el montaje evitan costosos re-trabajos y reducen los gastos de mantenimiento a largo plazo.',
  },
  {
    icon: <IconCronograma />,
    title: 'Garantizamos tu Cronograma',
    text: 'Con 20 años de logística optimizada, eliminamos la variable de riesgo más común: los retrasos por fallas del subcontratista.',
  },
  {
    icon: <IconCerteza />,
    title: 'Somos su Garantía de Certeza',
    text: 'Nuestro historial de 100% de cumplimiento sin fallas es la prueba de que aseguramos el éxito de su proyecto.',
  },
];

// --- Variantes de animación ---
const fromLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};
const fromRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};
const textContainerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
};


export const ValueProposition = () => {
  return (
    <section className={styles.valueSection}>
      <div className="container">
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          ¿Por Qué los Líderes de la Industria Confían en Grupo Alfa 74?
        </motion.h2>

        <div className={styles.gridContainer}>
          <motion.div
            className={styles.imageColumn}
            variants={fromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <img 
              src="estructura_metalica_trabajando_2.jpg" 
              alt="Equipo de ingenieros revisando planos en obra" 
            />
          </motion.div>
          <motion.div
            className={styles.textColumn}
            variants={textContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {valuePropositions.map((item, index) => (
              <motion.div key={index} className={styles.propositionItem} variants={fromRight}>
                <div className={styles.iconWrapper}>{item.icon}</div>
                <div className={styles.textWrapper}>
                  <h3 className={styles.propositionTitle}>{item.title}</h3>
                  <p className={styles.propositionText}>{item.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
