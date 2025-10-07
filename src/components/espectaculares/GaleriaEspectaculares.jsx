// src/components/espectaculares/GaleriaEspectaculares.jsx
import React from 'react';
import { motion } from 'framer-motion';
import styles from './GaleriaEspectaculares.module.scss';

const projects = [
    {
        title: 'Estructura de Azotea en Polanco, CDMX',
        image: '/estructura_metalica_casa_1.jpg'
        
    },
    {
        title: 'Cartelera de Gran Formato para Centro Comercial',
        image: '/estructura_metalica_trabajando_2.jpg'
    },
    {
        title: 'Estructura Publicitaria en Zona Industrial',
        image: '/estructura_metalica_trabajando_1.jpg'
    },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const GaleriaEspectaculares = () => {
    return (
        <section className={styles.gallerySection}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={styles.sectionTitle}>Proyectos que Hablan por Sí Mismos</h2>
                    <p className={styles.subtitle}>
                        Un vistazo a la calidad, escala y precisión de nuestras estructuras publicitarias en todo México.
                    </p>
                </motion.div>
                <motion.div 
                    className={styles.galleryGrid}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {projects.map((project, index) => (
                        <motion.div key={index} className={styles.galleryCard} variants={itemVariants}>
                            <img src={project.image} alt={project.title} />
                            <div className={styles.cardOverlay}>
                                <h3>{project.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};