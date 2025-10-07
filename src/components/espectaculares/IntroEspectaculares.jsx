// src/components/espectaculares/IntroEspectaculares.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaBalanceScale, FaWind } from 'react-icons/fa';
import styles from './IntroEspectaculares.module.scss';

const points = [
    {
        icon: <FaShieldAlt />,
        title: 'Seguridad Estructural Innegociable',
        text: 'Cada estructura es calculada por nuestros ingenieros para soportar las condiciones más adversas, garantizando la seguridad del público y la integridad de su inversión.'
    },
    {
        icon: <FaBalanceScale />,
        title: 'Gestión Normativa y de Permisos',
        text: 'Navegamos la complejidad de los reglamentos de construcción y anuncios. Nos aseguramos que su proyecto cuente con la firma de un Director Responsable de Obra (DRO) y cumpla con toda la normativa local.'
    },
    {
        icon: <FaWind />,
        title: 'Durabilidad y Mínimo Mantenimiento',
        text: 'Utilizamos acero de la más alta calidad y recubrimientos protectores para asegurar una vida útil prolongada, minimizando su Costo Total de Propiedad (TCO).'
    }
];

export const IntroEspectaculares = () => {
    return (
        <section className={styles.introSection}>
            <div className="container">
                <motion.h2
                    className={styles.sectionTitle}
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Su Anuncio es una Inversión. Su Estructura es Nuestra Responsabilidad.
                </motion.h2>
                <div className={styles.pointsGrid}>
                    {points.map((point, index) => (
                        <motion.div
                            key={index}
                            className={styles.pointCard}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <div className={styles.iconWrapper}>{point.icon}</div>
                            <h3>{point.title}</h3>
                            <p>{point.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};