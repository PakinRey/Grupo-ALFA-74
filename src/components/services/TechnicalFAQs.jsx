import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './TechnicalFAQs.module.scss';

// --- Icono de Chevron ---
const ChevronIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
);

// --- Datos de las preguntas y respuestas ---
const faqData = [
    {
        question: '¿Qué normativas de calidad y seguridad siguen en sus montajes?',
        answer: 'Todos nuestros proyectos cumplen con las especificaciones del Instituto Mexicano de la Construcción en Acero (IMCA), así como con las normativas de seguridad laboral vigentes, garantizando la máxima integridad estructural y la seguridad de todo el personal en obra.'
    },
    {
        question: '¿Cómo garantizan el cumplimiento de los plazos de entrega?',
        answer: 'Utilizamos una metodología de planificación avanzada y un proceso de habilitado en taller que nos permite mitigar riesgos y acelerar la ejecución en sitio. Nuestra experiencia de 20 años se traduce en una logística optimizada y una gestión de proyecto proactiva.'
    },
    {
        question: '¿Pueden manejar proyectos con requerimientos de ingeniería complejos?',
        answer: 'Absolutamente. Nuestro equipo de ingenieros y técnicos se especializa en resolver desafíos estructurales complejos, trabajando en sinergia con su equipo de diseño para garantizar la viabilidad, seguridad y optimización de la estructura desde las fases tempranas.'
    }
];

// --- Componente para un solo item del acordeón ---
const FAQItem = ({ item, isOpen, onClick }) => {
    const answerVariants = {
        hidden: { opacity: 0, height: 0, marginTop: 0 },
        visible: {
            opacity: 1,
            height: 'auto',
            marginTop: '1.5rem',
            transition: { duration: 0.4, ease: 'easeInOut' }
        }
    };

    return (
        <div className={styles.faqItem}>
            <button className={styles.questionButton} onClick={onClick}>
                <span className={styles.questionText}>{item.question}</span>
                <motion.div
                    className={styles.iconWrapper}
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <ChevronIcon />
                </motion.div>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        className={styles.answerPanel}
                        variants={answerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >
                        <p>{item.answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};


export const TechnicalFAQs = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className={styles.faqSection}>
            <div className="container">
                <motion.h2
                    className={styles.sectionTitle}
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Preguntas Técnicas Frecuentes
                </motion.h2>

                <div className={styles.faqContainer}>
                    {faqData.map((item, index) => (
                        <FAQItem
                            key={index}
                            item={item}
                            isOpen={activeIndex === index}
                            onClick={() => handleToggle(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
