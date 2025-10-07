// src/components/corporativos/CorporativosCTA.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaFileSignature, FaUserTie, FaChartLine } from 'react-icons/fa';
import styles from './CorporativosCTA.module.scss';
import ContactFormBlock from "@/components/contact/ContactFormBlock.jsx";

const benefits = [
  { icon: <FaUserTie />, text: 'Asesoría directa con un líder de proyecto.' },
  { icon: <FaFileSignature />, text: 'Análisis de pre-factibilidad sin costo.' },
  { icon: <FaChartLine />, text: 'Estimación de presupuesto y cronograma preliminar.' },
];

export const CorporativosCTA = () => {
  return (
    <section id="form" className={styles.ctaSection} aria-labelledby="cta-corp-title">
      <div className={`container ${styles.ctaGrid}`}>
        <motion.div 
          className={styles.valueColumn}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h2 id="cta-corp-title">Conversemos sobre su Próximo Gran Proyecto</h2>
          <p>
            Permita que nuestra experiencia de 20 años transforme su visión en un activo rentable y duradero.
            Inicie la conversación y obtenga:
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
            title="Solicite Asesoría y Estimación"
            subtitle="Indique ubicación, m², sistema estructural y fecha objetivo."
            agreementText='Acepto el <a href="/politica-privacidad" target="_blank">Aviso de Privacidad</a>.'
          />
        </motion.div>
      </div>
    </section>
  );
};