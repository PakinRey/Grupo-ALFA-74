import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ServiceDetailTabs.module.scss';

// --- Icono para los beneficios ---
const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

// --- Contenido de cada pestaña ---
const tabsData = [
    {
        id: 'fabricacion',
        label: 'Fabricación de Acero',
        title: 'Fabricación con Precisión Milimétrica',
        text: 'Nuestra planta cuenta con la tecnología para la maquila, armado y ensamblado de estructuras metálicas complejas. Nos especializamos en la calidad de cada corte y soldadura, asegurando que cada componente cumpla con las especificaciones exactas de sus planos para un montaje sin contratiempos.',
        benefits: [
            'Reducción de Defectos: Procesos controlados que minimizan la densidad de defectos (Defect Density).',
            'Integridad Garantizada: Cumplimiento de los más altos estándares de calidad en cada pieza.',
            'Compatibilidad Perfecta: Componentes que encajan a la perfección durante el montaje.'
        ]
    },
    {
        id: 'habilitado',
        label: 'Habilitado de Acero',
        title: 'Habilitado Inteligente para un Montaje Eficiente',
        text: 'Preparamos y acondicionamos todos los materiales y estructuras en nuestro taller. Este proceso de pre-ensamble es crucial para acelerar los tiempos en obra, reducir riesgos y garantizar que el montaje se ejecute de manera fluida y segura.',
        benefits: [
            'Aceleración del Cronograma: El trabajo previo en taller reduce significativamente el tiempo de inactividad (Downtime) en el sitio.',
            'Optimización de Recursos: Menor necesidad de ajustes y re-trabajos en campo.',
            'Seguridad Mejorada: Procesos controlados que minimizan los riesgos durante la fase de montaje.'
        ]
    },
    {
        id: 'montaje',
        label: 'Montaje Industrial',
        title: 'Montaje Seguro, a Tiempo y Dentro del Presupuesto',
        text: 'Nuestro equipo de mano de obra especializada ejecuta el montaje final, adhiriéndose a un estricto plan de seguridad y logística. Con experiencia en los sectores más exigentes como el automotriz, energético y logístico, garantizamos una ejecución impecable que cumple con su cronograma.',
        benefits: [
            'Cumplimiento de Plazos Garantizado: Experiencia en la gestión de proyectos para evitar retrasos.',
            'Experiencia Multisectorial: Conocimiento avanzado para resolver los desafíos únicos de cada industria.',
            'Cero Desviaciones: Un historial probado de éxito en la primera inspección estructural.'
        ]
    }
];

export const ServiceDetailTabs = () => {
    const [activeTab, setActiveTab] = useState(tabsData[0].id);
    const activeTabData = tabsData.find(tab => tab.id === activeTab);

    return (
        <section className={styles.tabsSection}>
            <div className="container">
                <div className={styles.tabsNav}>
                    {tabsData.map(tab => (
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
                            transition={{ duration: 0.4, ease: 'easeInOut' }}
                        >
                            <h3 className={styles.contentTitle}>{activeTabData.title}</h3>
                            <p className={styles.contentText}>{activeTabData.text}</p>
                            <div className={styles.benefits}>
                                <h4>Beneficios Operacionales:</h4>
                                <ul>
                                    {activeTabData.benefits.map((benefit, index) => (
                                        <li key={index}>
                                            <CheckIcon />
                                            <span>{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};
