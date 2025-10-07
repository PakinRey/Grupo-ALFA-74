// src/components/corporativos/CTAConsultation.jsx
import React from 'react';
import styles from './CTAConsultation.module.scss';
import ContactFormBlock from '../Contact/ContactFormBlock.jsx';

export const CTAConsultation = () => {
  return (
    <section className={styles.section} aria-labelledby="cta-corp-title">
      <div className="container">
        <h2 id="cta-corp-title" className={styles.title}>
          Conversemos sobre tu proyecto corporativo o comercial
        </h2>
        <p className={styles.subtitle}>
          Cuéntanos programa arquitectónico, superficie, sistemas de fachada/MEP y
          cronograma. Respondemos en menos de 24 horas.
        </p>

        <div id="form" className={styles.formWrap}>
          <ContactFormBlock
            title="Solicitud de asesoría y estimación"
            subtitle="Indica ubicación, m² por uso, sistema estructural preferido y fecha objetivo de apertura."
            agreementText='Acepto el <a href="/politica-privacidad">Aviso de Privacidad</a>.'
          />
        </div>
      </div>
    </section>
  );
};
