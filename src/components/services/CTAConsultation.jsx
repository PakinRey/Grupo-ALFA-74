import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './CTAConsultation.module.scss';

// --- Iconos para estados del formulario ---
const SpinnerIcon = () => (
  <svg className={styles.spinner} viewBox="0 0 50 50"><circle cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle></svg>
);
const SuccessIcon = () => (
    <svg className={styles.successIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
);

export const CTAConsultation = () => {
    const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState('idle'); // idle | submitting | success | error

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Limpia el error cuando el usuario empieza a corregir
        if (errors[name]) {
            setErrors(prev => ({...prev, [name]: null}));
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'El nombre es obligatorio.';
        if (!formData.email.trim()) {
            newErrors.email = 'El email es obligatorio.';
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = 'El formato del email no es válido.';
        }
        if (!formData.company.trim()) newErrors.company = 'El nombre de la empresa es importante.';
        if (!formData.message.trim()) newErrors.message = 'Por favor, detalla tu consulta.';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            setStatus('submitting');
            // Simulación de llamada a API
            await new Promise(resolve => setTimeout(resolve, 1500));
            setStatus('success');
            // Aquí iría la lógica de envío real (fetch, axios, etc.)
        }
    };

    return (
        <section className={styles.ctaSection}>
            <div className={`container ${styles.ctaGrid}`}>
                {/* --- Columna Izquierda: Oferta de Valor --- */}
                <motion.div 
                    className={styles.valueOffer}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                    <h2 className={styles.offerTitle}>¿Listo para Eliminar el Riesgo de su Proyecto?</h2>
                    <p className={styles.offerText}>
                        No se conforme con una cotización. Permítanos ofrecerle un <strong>Análisis Técnico Preliminar sin costo.</strong> Nuestro equipo de expertos puede revisar sus requerimientos para identificar oportunidades de optimización, asegurar el cumplimiento normativo y garantizar la viabilidad de su cronograma.
                    </p>
                    <a href="#form" className={styles.ctaButton}>
                        Solicitar Análisis de Proyecto
                    </a>
                </motion.div>

                {/* --- Columna Derecha: Formulario --- */}
                <motion.div 
                    id="form" 
                    className={styles.formColumn}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
                >
                    <AnimatePresence mode="wait">
                        {status !== 'success' ? (
                            <motion.div
                                key="form"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <h4>O contáctenos directamente</h4>
                                <form onSubmit={handleSubmit} noValidate className={styles.consultationForm}>
                                    <div className={styles.inputGroup}>
                                        <input type="text" name="name" placeholder="Nombre Completo" value={formData.name} onChange={handleChange} className={errors.name ? styles.inputError : ''} />
                                        {errors.name && <span className={styles.errorMessage}>{errors.name}</span>}
                                    </div>
                                    <div className={styles.inputGroup}>
                                        <input type="email" name="email" placeholder="Email Corporativo" value={formData.email} onChange={handleChange} className={errors.email ? styles.inputError : ''} />
                                        {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
                                    </div>
                                    <div className={styles.inputGroup}>
                                        <input type="text" name="company" placeholder="Nombre de la Empresa" value={formData.company} onChange={handleChange} className={errors.company ? styles.inputError : ''} />
                                        {errors.company && <span className={styles.errorMessage}>{errors.company}</span>}
                                    </div>
                                    <div className={styles.inputGroup}>
                                        <textarea name="message" rows="4" placeholder="Describa brevemente su proyecto o consulta..." value={formData.message} onChange={handleChange} className={errors.message ? styles.inputError : ''}></textarea>
                                        {errors.message && <span className={styles.errorMessage}>{errors.message}</span>}
                                    </div>
                                    <button type="submit" className={styles.submitButton} disabled={status === 'submitting'}>
                                        {status === 'submitting' ? <SpinnerIcon /> : 'Enviar Mensaje'}
                                    </button>
                                </form>
                            </motion.div>
                        ) : (
                             <motion.div
                                key="success"
                                className={styles.successMessage}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ type: 'spring' }}
                            >
                                <SuccessIcon />
                                <h3>¡Gracias por su interés!</h3>
                                <p>Hemos recibido su mensaje. Uno de nuestros expertos se pondrá en contacto con usted a la brevedad.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};
