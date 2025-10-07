import React from 'react';
import { motion } from 'framer-motion';
import styles from './ProjectsHighlight.module.scss';

// Datos de los proyectos para mantener el JSX limpio.
const projectsData = [
  {
    image: './estructura_metalica_1.jpg',
    title: 'Nave Industrial para Sector Logístico',
    location: 'Monterrey, Nuevo León',
    description: '<b>Desafío:</b> Montaje en un plazo crítico de 45 días.<br><b>Solución Alfa 74:</b> Habilitado de alta precisión que redujo el tiempo en sitio en un 15%.<br><b>Resultado:</b> Entrega completada 5 días antes de lo previsto.',
    link: '#', // TODO: Enlazar al estudio de caso
  },
  {
    image: './estructura_metalica_edificio_1.png',
    title: 'Estructura para Edificio Corporativo',
    location: 'Ciudad de México',
    description: '<b>Desafío:</b> Alta complejidad en uniones y logística urbana.<br><b>Solución Alfa 74:</b> Ingeniería de montaje y coordinación Just-in-Time.<br><b>Resultado:</b> Cero incidentes y cumplimiento del 100% del cronograma maestro.',
    link: '#',
  },
  {
    image: 'estructura_metalica_vigas_1.jpg',
    title: 'Puente Vehicular Metálico',
    location: 'Querétaro, Querétaro',
    description: '<b>Desafío:</b> Cumplir con normativas sísmicas y de carga exigentes.<br><b>Solución Alfa 74:</b> Fabricación con soldadura certificada y montaje controlado.<br><b>Resultado:</b> Superación de todas las pruebas de carga y durabilidad.',
    link: '#',
  },
];

// Variantes de animación
const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const ProjectsHighlight = () => {
  return (
    <section className={styles.projectsSection}>
      <div className="container">
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Proyectos que Construyen el Futuro de México
        </motion.h2>

        <motion.div
          className={styles.projectsGrid}
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projectsData.map((project, index) => (
            <motion.div key={index} className={styles.projectCard} variants={cardVariants}>
              <div className={styles.cardImage}>
                <img src={project.image} alt={`Imagen del proyecto ${project.title}`} />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardLocation}>{project.location}</p>
                <p 
                  className={styles.cardDescription}
                  dangerouslySetInnerHTML={{ __html: project.description }}
                />
                <a href={project.link} className={styles.cardCta}>
                  Ver Estudio de Caso Completo <span>→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
