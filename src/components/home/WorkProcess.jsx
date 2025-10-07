// src/components/home/WorkProcess.jsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaClipboardList, FaDraftingCompass, FaCogs, FaHardHat } from 'react-icons/fa';
import { useConversion } from '/src/hooks/useConversion.jsx';
import styles from './WorkProcess.module.scss';

const processSteps = [
  {
    icon: <FaClipboardList />,
    title: '1. Análisis Técnico y Viabilidad',
    description: 'No solo cotizamos, co-creamos. Analizamos sus planos para identificar optimizaciones y garantizar la viabilidad estructural y de cronograma desde el día cero.',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1332&auto=format&fit=crop',
  },
  {
    icon: <FaDraftingCompass />,
    title: '2. Ingeniería de Detalle y Planificación',
    description: 'Transformamos los planos arquitectónicos en órdenes de fabricación precisas. Cada corte, soldadura y unión se planifica para un ensamble perfecto en obra.',
    image: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=1170&auto=format&fit=crop',
  },
  {
    icon: <FaCogs />,
    title: '3. Fabricación de Precisión y Habilitado',
    description: 'En nuestra planta, la tecnología y la experiencia se unen. Fabricamos cada componente bajo estrictos controles de calidad, listos para un montaje sin sorpresas.',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1169&auto=format&fit=crop',
  },
  {
    icon: <FaHardHat />,
    title: '4. Montaje Seguro y Entrega Puntual',
    description: 'Nuestro equipo especializado ejecuta el montaje en sitio con una logística impecable y un enfoque total en la seguridad, cumpliendo el 100% de las veces con el cronograma pactado.',
    image: './estructura-para-techo.jpg',
  },
];

export const WorkProcess = () => {
    const [activeStep, setActiveStep] = useState(0);
    const { logConversion } = useConversion();
    // Ref para asegurar que la conversión solo se registre una vez por visita a la página
    const finalStepConversionLogged = useRef(false);

    // --- LÓGICA DE CONVERSIÓN ---
    // Se activa cada vez que el `activeStep` cambia.
    useEffect(() => {
        const isFinalStep = activeStep === processSteps.length - 1;
        
        // Si el usuario llega al último paso y no hemos registrado la conversión aún...
        if (isFinalStep && !finalStepConversionLogged.current) {
            console.log("CONVERSIÓN: Usuario llegó al final del proceso.");
            logConversion('Process_FinalStep_Reached');
            finalStepConversionLogged.current = true; // Marcamos que ya se registró.
        }
    }, [activeStep, logConversion]);

    return (
        <section className={styles.workProcessSection}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={styles.sectionTitle}>Nuestro Proceso: Certeza en Cada Etapa</h2>
                    <p className={styles.subtitle}>
                        Un método probado que transforma sus planos en estructuras de acero, garantizando calidad, seguridad y cumplimiento. Así es como mitigamos su riesgo.
                    </p>
                </motion.div>
                
                <div className={styles.processLayout}>
                    {/* Columna Izquierda: Navegador de Pasos */}
                    <aside className={styles.stepNavigator}>
                        {processSteps.map((step, index) => (
                            <button
                                key={index}
                                className={`${styles.stepButton} ${activeStep === index ? styles.active : ''}`}
                                onClick={() => setActiveStep(index)}
                            >
                                {activeStep === index && 
                                    <motion.div className={styles.activeBg} layoutId="activeStepBg" />
                                }
                                <span className={styles.stepNumber}>0{index + 1}</span>
                                <span className={styles.stepTitleNav}>{step.title.substring(3)}</span>
                            </button>
                        ))}
                    </aside>

                    {/* Columna Derecha: Contenido del Paso Activo */}
                    <main className={styles.contentPanel}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeStep} // ¡Clave para que AnimatePresence detecte el cambio!
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4, ease: 'easeInOut' }}
                            >
                                <div className={styles.contentHeader}>
                                    <div className={styles.iconWrapper}>
                                        {processSteps[activeStep].icon}
                                    </div>
                                    <h3 className={styles.stepTitle}>{processSteps[activeStep].title}</h3>
                                </div>
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