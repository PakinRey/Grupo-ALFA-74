// src/components/nocturnos/ServiciosEspecializados.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaVolumeUp, FaBolt, FaGlassCheers, FaFileContract } from 'react-icons/fa';
import styles from './ServiciosEspecializados.module.scss';

const services = [
    { icon: <FaVolumeUp/>, title: "Ingeniería Acústica", text: "Diseño y construcción de sistemas de aislamiento y acondicionamiento acústico para un sonido impecable y cumplimiento de normativas." },
    { icon: <FaBolt/>, title: "Iluminación y FX", text: "Integramos la infraestructura para sistemas de iluminación escénica, video y efectos especiales desde la fase estructural." },
    { icon: <FaGlassCheers/>, title: "Barras y Mobiliario", text: "Fabricación a medida de barras, booths y elementos fijos de alta durabilidad y diseño, listos para la operación intensiva." },
    { icon: <FaFileContract/>, title: "Gestión de Permisos", text: "Nos encargamos de la complejidad de los permisos de construcción, uso de suelo y protección civil específicos para este giro." }
];

export const ServiciosEspecializados = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                <motion.h2
                    className={styles.title}
                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    Capacidades que Marcan la Diferencia
                </motion.h2>
                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className={styles.cardIcon}>{service.icon}</div>
                            <h3 className={styles.cardTitle}>{service.title}</h3>
                            <p className={styles.cardText}>{service.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};