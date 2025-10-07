// src/components/nocturnos/NocturnosCTA.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaUserTie, FaFileSignature, FaRocket } from 'react-icons/fa';
import styles from './NocturnosCTA.module.scss';
import ContactFormBlock from "@/components/contact/ContactFormBlock.jsx";

const benefits = [
  { icon: <FaUserTie />, text: 'Asesoría con un experto en tu proyecto.' },
//   { icon: <FaFileSignature />, text: 'Análisis de viabilidad y normatividad sin costo.' },
  { icon: <FaRocket />, text: 'Estimación de cronograma para una apertura acelerada.' },
];

export const NocturnosCTA = () => {
  return (
    <section id="form" className={styles.ctaSection} aria-labelledby="cta-nocturnos-title">
      <div className={`container ${styles.ctaGrid}`}>
        <motion.div 
          className={styles.valueColumn}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h2 id="cta-nocturnos-title">Tu Visión. Nuestra Ejecución. Noches Legendarias.</h2>
          <p>
            Transformamos conceptos audaces en los destinos nocturnos más icónicos y rentables.
            Contáctanos y demos el primer paso:
          </p>
          <ul className={styles.benefitsList}>
            {benefits.map((benefit, index) => (
              <li key={index}>
                <div className={styles.benefitIcon}>{benefit.icon}</div>
                <span>{benefit.text}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className={styles.formColumn}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        >
          <ContactFormBlock
            title="Inicia tu Proyecto"
            subtitle="Indícanos el concepto, m², ubicación y fecha de apertura deseada."
            agreementText='Acepto el <a href="/politica-privacidad" target="_blank">Aviso de Privacidad</a>.'
          />
        </motion.div>
      </div>
    </section>
  );
};