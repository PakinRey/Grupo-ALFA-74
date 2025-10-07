// src/components/naves/CTAConsultation.jsx
import React from 'react';
import styles from './CTAConsultation.module.scss';
import ContactFormBlock from '../contact/contactFormBlock.jsx';

export const CTAConsultation = () => {
  return (
    <section className={styles.section} aria-labelledby="cta-naves-title">
      <div className="container">
        <h2 id="cta-naves-title" className={styles.title}>
          Hable con un ingeniero de naves industriales
        </h2>
        <p className={styles.subtitle}>
          Compártenos layout, altura libre, claros requeridos y cronograma. Respondemos
          en menos de 24 horas.
        </p>

        <div id="form" className={styles.formWrap}>
          <ContactFormBlock
            title="Solicitud de análisis y cotización"
            subtitle="Indique ubicación del proyecto, m² estimados, alturas, claros y plazo de entrega."
            agreementText='Acepto el <a href="/politica-privacidad">Aviso de Privacidad</a>.'
          />
        </div>
      </div>
    </section>
  );
};
