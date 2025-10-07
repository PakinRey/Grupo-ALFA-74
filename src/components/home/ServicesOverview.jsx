import React from 'react';
import { motion } from 'framer-motion';
import styles from './ServicesOverview.module.scss';

// --- Iconos SVG como componentes para mejor rendimiento y control ---
const IconFabricacion = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
  </svg>
);
const IconHabilitado = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
  </svg>
);
const IconMontaje = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6v-.75c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5" />
  </svg>
);


// Datos de los servicios para mantener el código limpio
const servicesData = [
  {
    icon: <IconFabricacion />,
    title: 'Fabricación',
    description: 'Precisión que garantiza el ensamblaje perfecto en obra.',
    link: '#', // TODO: Cambiar por el enlace real
  },
  {
    icon: <IconHabilitado />,
    title: 'Habilitado',
    description: 'Cortes y soldaduras certificadas que cumplen con las normativas más estrictas.',
    link: '#', // TODO: Cambiar por el enlace real
  },
  {
    icon: <IconMontaje />,
    title: 'Montaje Industrial',
    description: 'Ejecución segura, eficiente y en cumplimiento estricto de su cronograma.',
    link: '#', // TODO: Cambiar por el enlace real
  },
];

// Variantes de animación
const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const ServicesOverview = () => {
  return (
    <section className={styles.servicesSection}>
      <div className="container">
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Soluciones Integrales en Acero Estructural
        </motion.h2>

        <p className={styles.cardDescription}>Ofrecemos soluciones integrales en estructuras metálicas en la Ciudad de México. Nuestro proceso abarca desde la fabricación y habilitado de acero de alta precisión hasta el montaje de naves industriales, edificios comerciales y reforzamiento estructural.</p>
        <motion.div
          className={styles.servicesGrid}
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {servicesData.map((service, index) => (
            <motion.div key={index} className={styles.serviceCard} variants={cardVariants}>
              <div className={styles.iconWrapper}>{service.icon}</div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
              <a href={service.link} className={styles.cardCta}>
                Conocer más <span>→</span>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
