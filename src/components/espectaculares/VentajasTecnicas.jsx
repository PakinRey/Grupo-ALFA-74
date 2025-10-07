// src/components/espectaculares/VentajasTecnicas.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaCheckDouble, FaFileSignature } from 'react-icons/fa';
import styles from './VentajasTecnicas.module.scss';

const advantages = [
    {
        icon: <FaAward />,
        title: 'Acero Certificado y Soldadura Especializada',
        text: 'Solo utilizamos acero que cumple con las normas ASTM. Nuestros procesos de soldadura son realizados por personal certificado, garantizando uniones que exceden los requerimientos de resistencia.'
    },
    {
        icon: <FaCheckDouble />,
        title: 'Recubrimientos de Alta Durabilidad',
        text: 'Protegemos su inversión con sistemas de recubrimiento industrial (primarios y acabados) que previenen la corrosión y extienden la vida útil de la estructura, incluso en ambientes agresivos.'
    },
    {
        icon: <FaFileSignature />,
        title: 'Responsabilidad y Cumplimiento (DRO)',
        text: 'Cada uno de nuestros proyectos de espectaculares es avalado y firmado por un Director Responsable de Obra, brindándole la máxima certeza legal y de cumplimiento normativo ante las autoridades.'
    }
];

export const VentajasTecnicas = () => {
    return (
        <section className={styles.ventajasSection}>
            <div className={`container ${styles.ventajasGrid}`}>
                <motion.div 
                    className={styles.textColumn}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className={styles.sectionTitle}>Nuestra Ventaja es su Tranquilidad</h2>
                    <p className={styles.subtitle}>
                        En un sector donde no hay margen de error, nuestra ventaja competitiva se basa en una ingeniería rigurosa, materiales de primera y una responsabilidad total sobre nuestro trabajo.
                    </p>
                    <div className={styles.advantagesList}>
                        {advantages.map((adv, index) => (
                            <div key={index} className={styles.advantageItem}>
                                <div className={styles.iconWrapper}>{adv.icon}</div>
                                <div className={styles.itemContent}>
                                    <h3>{adv.title}</h3>
                                    <p>{adv.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
                <motion.div 
                    className={styles.imageColumn}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                >
                    <img src="/estructura_metalica_trabajando_2.jpg" alt="Soldador certificado trabajando en estructura metálica" />
                </motion.div>
            </div>
        </section>
    );
};