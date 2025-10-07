// src/components/naves/NavesCTA.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import styles from './NavesCTA.module.scss';
import ContactFormBlock from '@/components/contact/ContactFormBlock.jsx';

const benefits = [
  'Análisis técnico preliminar sin costo.',
  'Ingeniería de valor para optimizar su inversión.',
  'Ejecución garantizada en tiempo y presupuesto.',
];

export const NavesCTA = () => {
  return (
    <section id="form" className={styles.ctaSection} aria-labelledby="cta-naves-title">
      <div className={`container ${styles.ctaGrid}`}>
        {/* Columna Izquierda: Propuesta de Valor */}
        <motion.div 
          className={styles.valueColumn}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h2 id="cta-naves-title">Listo para Iniciar su Próximo Proyecto Industrial?</h2>
          <p>
            Nuestro equipo está preparado para transformar sus requerimientos en una estructura funcional y rentable.
            Hable con un experto y obtenga:
          </p>
          <ul className={styles.benefitsList}>
            {benefits.map((benefit, index) => (
              <li key={index}>
                <FaCheckCircle className={styles.benefitIcon} />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Columna Derecha: Formulario */}
        <motion.div
          className={styles.formColumn}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        >
          <ContactFormBlock
            title="Solicite su Análisis y Cotización"
            subtitle="Compártenos tu layout, m², ubicación y cronograma."
            agreementText='Acepto el <a href="/politica-privacidad" target="_blank">Aviso de Privacidad</a>.'
          />
        </motion.div>
      </div>
    </section>
  );
};