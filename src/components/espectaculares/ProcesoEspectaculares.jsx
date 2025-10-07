// src/components/espectaculares/ProcesoEspectaculares.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearchLocation, FaRulerCombined, FaTruckLoading, FaHardHat } from 'react-icons/fa';
import styles from './ProcesoEspectaculares.module.scss';

const processSteps = [
  {
    icon: <FaSearchLocation />,
    title: '1. Análisis de Sitio y Normativa',
    description: 'Nuestro primer paso es crítico: realizamos un análisis de viabilidad en sitio, estudiamos la mecánica de suelos y revisamos la normativa municipal y de protección civil aplicable para garantizar que el proyecto es 100% factible y legal.',
    image: 'https://img.freepik.com/fotos-premium/arquitecto-ingeniero-construccion-plan-proyecto-dificil-trabajo_928131-7726.jpg',
  },
  {
    icon: <FaRulerCombined />,
    title: '2. Ingeniería de Detalle y Cálculo Estructural',
    description: 'Con los datos del sitio, nuestro equipo de ingeniería realiza el cálculo estructural, considerando cargas de viento, sismo y peso propio. Generamos los planos de fabricación y montaje con firma de nuestro Director Responsable de Obra (DRO).',
    image: 'https://albagsamx.com/wp-content/uploads/2025/08/Calculo-estructural-en-mexico.jpg',
  },
  {
    icon: <FaTruckLoading />,
    title: '3. Fabricación de Precisión y Logística',
    description: 'En planta, fabricamos cada componente con acero certificado y soldadura de alta penetración. Cada pieza es codificada y preparada para una logística de transporte eficiente, minimizando el tiempo y el riesgo en el sitio de montaje.',
    image: '/estructura_metalica_trabajando_1.jpg',
  },
  {
    icon: <FaHardHat />,
    title: '4. Montaje Seguro y de Alto Riesgo',
    description: 'Nuestro equipo especializado, equipado con la maquinaria y grúas adecuadas, ejecuta el montaje bajo los más estrictos protocolos de seguridad para trabajos en altura. Garantizamos una instalación precisa, segura y en estricto cumplimiento del cronograma.',
    image: '/estructura_metalica_edificio_1.png',
  },
];

export const ProcesoEspectaculares = () => {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <section className={styles.workProcessSection}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={styles.sectionTitle}>Nuestro Proceso: Ingeniería y Certeza de Principio a Fin</h2>
                    <p className={styles.subtitle}>
                        Un método riguroso que transforma una ubicación estratégica en un punto de referencia publicitario, garantizando seguridad, legalidad y durabilidad.
                    </p>
                </motion.div>
                
                <div className={styles.processLayout}>
                    <aside className={styles.stepNavigator}>
                        {processSteps.map((step, index) => (
                            <button
                                key={index}
                                className={`${styles.stepButton} ${activeStep === index ? styles.active : ''}`}
                                onClick={() => setActiveStep(index)}
                            >
                                {activeStep === index && 
                                    <motion.div className={styles.activeBg} layoutId="activeEspectacularesBg" />
                                }
                                <span className={styles.stepIcon}>{step.icon}</span>
                                <span className={styles.stepTitleNav}>{step.title.substring(3)}</span>
                            </button>
                        ))}
                    </aside>

                    <main className={styles.contentPanel}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeStep}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4, ease: 'easeInOut' }}
                            >
                                <h3 className={styles.stepTitle}>{processSteps[activeStep].title}</h3>
                                <p className={styles.stepDescription}>{processSteps[activeStep].description}</p>
                                <div className={styles.imageWrapper}>
                                    <img src={processSteps[activeStep].image} alt={processSteps[activeStep].title} />
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </main>
                </div>
            </div>
        </section>
    );
};