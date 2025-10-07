// src/components/espectaculares/TiposEspectaculares.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './TiposEspectaculares.module.scss';

const tiposData = [
    {
        id: 'unipolares',
        label: 'Unipolares de Gran Formato',
        title: 'Estructuras Unipolares: Impacto Monumental',
        description: 'Diseñamos y construimos espectaculares unipolares que se convierten en hitos visuales. Nuestro enfoque en la ingeniería de cimentación y el cálculo de cargas de viento garantiza una estructura robusta y segura, capaz de soportar las vallas publicitarias más grandes en las ubicaciones de mayor tráfico.',
        image: 'https://publiper.com.mx/wp-content/uploads/2025/01/4-1024x768.png',
        specs: ['Cálculo estructural para cargas de viento', 'Diseño de cimentación profunda', 'Montaje con grúas de alta capacidad', 'Ideal para carreteras y avenidas principales']
    },
    {
        id: 'azotea',
        label: 'Estructuras de Azotea',
        title: 'Espectaculares de Azotea: Visibilidad Elevada',
        description: 'Maximizamos la visibilidad de su marca aprovechando los espacios elevados. Realizamos un análisis de cargas exhaustivo del edificio existente para diseñar una estructura ligera, segura y perfectamente anclada, que se integra a la arquitectura existente sin comprometer su integridad.',
        image: 'https://naranti-main.s3.amazonaws.com/media/posts/2024-05-07/171512168331kyAMUw6DXgWdliPGJKQnm9Bx0zCZfEsqe2j8utNTb5RSAOVo7FcLYrvHpI4h_posts.jpeg',
        specs: ['Análisis de cargas sobre edificaciones', 'Anclajes químicos y mecánicos seguros', 'Diseño ligero y de bajo perfil de viento', 'Cumplimiento con reglamentos urbanos']
    }
];

export const TiposEspectaculares = () => {
    const [activeTab, setActiveTab] = useState(tiposData[0].id);
    const activeTabData = tiposData.find(tab => tab.id === activeTab);

    return (
        <section className={styles.tiposSection}>
            <div className="container">
                <div className={styles.tabsNav}>
                    {tiposData.map(tab => (
                        <button
                            key={tab.id}
                            className={`${styles.tabButton} ${activeTab === tab.id ? styles.active : ''}`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                <div className={styles.tabsContent}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                            className={styles.contentGrid}
                        >
                            <div className={styles.textContainer}>
                                <h3>{activeTabData.title}</h3>
                                <p>{activeTabData.description}</p>
                                <ul>
                                    {activeTabData.specs.map((spec, index) => <li key={index}>{spec}</li>)}
                                </ul>
                            </div>
                            <div className={styles.imageContainer}>
                                <img src={activeTabData.image} alt={activeTabData.title} />
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};