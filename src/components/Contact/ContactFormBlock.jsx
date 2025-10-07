import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ContactFormBlock.module.scss';
import { useConversion } from '/src/hooks/useConversion.js'; // Asegúrate de que esta ruta sea correcta

// --- Iconos SVG ---
const PaperPlaneIcon = () => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"></path></svg>
);
const SpinnerIcon = () => (
    <svg className={styles.spinner} viewBox="0 0 50 50"><circle cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle></svg>
);
const CheckCircleIcon = () => (
    <svg className={styles.successIcon} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628 0z"></path></svg>
);
const ExclamationTriangleIcon = () => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path></svg>
);


const ContactFormBlock = ({ title, subtitle, agreementText }) => {
    const { logConversion } = useConversion();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
    });
    const [errors, setErrors] = useState({});
    const [isAgreed, setIsAgreed] = useState(false);
    const [status, setStatus] = useState('idle'); // idle | submitting | success | error

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'El nombre completo es obligatorio.';
        if (!formData.email.trim()) {
            newErrors.email = 'El correo electrónico es obligatorio.';
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = 'El formato del correo no es válido.';
        }
        if (!formData.phone.trim()) newErrors.phone = 'El teléfono es obligatorio.';
        if (!formData.company.trim()) newErrors.company = 'El nombre de la empresa es obligatorio.';
        if (!formData.message.trim()) newErrors.message = 'El mensaje es obligatorio.';
        if (agreementText && !isAgreed) newErrors.agreement = 'Debes aceptar el aviso de privacidad.';
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({...prev, [name]: null}));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            setStatus('submitting');
            try {
                // Simulación de una API real. En tu proyecto, esta sería la llamada a tu backend.
                await new Promise(resolve => setTimeout(resolve, 1500)); 
                
                // Registro de conversión exitoso
                logConversion("Formulario_Contacto_Enviado");
                
                setStatus('success');
                // Limpiar el formulario después del éxito (opcional)
                setFormData({ name: '', email: '', phone: '', company: '', message: '' });
                setIsAgreed(false);

            } catch (error) {
                console.error('Error al enviar formulario (simulación):', error);
                setStatus('error');
            } 
        }
    };

    const formVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
        exit: { opacity: 0, y: -20, transition: { duration: 0.4, ease: 'easeIn' } },
    };

    return (
        <section className={styles.formSection}>
            <div className="container">
                <div className={styles.formWrapper}>
                    <AnimatePresence mode="wait">
                        {status !== 'success' ? (
                            <motion.div
                                key="form"
                                variants={formVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                            >
                                <div className={styles.header}>
                                    <h2>{title}</h2>
                                    <p>{subtitle}</p>
                                </div>
                                <form onSubmit={handleSubmit} noValidate>
                                    <div className={styles.formGrid}>
                                        <div className={styles.inputGroup}>
                                            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Nombre Completo" className={errors.name ? styles.inputError : ''} />
                                            {errors.name && <span className={styles.errorMessage}>{errors.name}</span>}
                                        </div>
                                        <div className={styles.inputGroup}>
                                            <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Nombre de la Empresa" className={errors.company ? styles.inputError : ''} />
                                            {errors.company && <span className={styles.errorMessage}>{errors.company}</span>}
                                        </div>
                                        <div className={styles.inputGroup}>
                                            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Correo Electrónico" className={errors.email ? styles.inputError : ''} />
                                            {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
                                        </div>
                                        <div className={styles.inputGroup}>
                                            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Teléfono" className={errors.phone ? styles.inputError : ''} />
                                            {errors.phone && <span className={styles.errorMessage}>{errors.phone}</span>}
                                        </div>
                                        <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                                            <textarea name="message" rows="5" value={formData.message} onChange={handleChange} placeholder="Describa brevemente su proyecto y sus necesidades..." className={errors.message ? styles.inputError : ''}></textarea>
                                            {errors.message && <span className={styles.errorMessage}>{errors.message}</span>}
                                        </div>
                                    </div>
                                    
                                    {agreementText && (
                                        <div className={styles.agreementGroup}>
                                            <input 
                                                type="checkbox"
                                                id="agreement"
                                                checked={isAgreed}
                                                onChange={(e) => setIsAgreed(e.target.checked)}
                                            />
                                            <label htmlFor="agreement" dangerouslySetInnerHTML={{ __html: agreementText }} />
                                            {errors.agreement && <span className={styles.errorMessage}>{errors.agreement}</span>}
                                        </div>
                                    )}

                                    <div className={styles.submitContainer}>
                                        <motion.button 
                                            type="submit" 
                                            className={styles.submitButton} 
                                            disabled={status === 'submitting'}
                                            whileHover={{ scale: 1.01 }}
                                            whileTap={{ scale: 0.99 }}
                                        >
                                            {status === 'submitting' ? <SpinnerIcon /> : <PaperPlaneIcon />}
                                            {status === 'submitting' ? 'Enviando Solicitud...' : 'Solicitar Cotización'}
                                        </motion.button>
                                        {status === 'error' && (
                                            <div className={styles.generalErrorMessage}>
                                                <ExclamationTriangleIcon/> Hubo un error al enviar el formulario.
                                            </div>
                                        )}
                                    </div>
                                </form>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="success"
                                className={styles.successMessage}
                                variants={formVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                            >
                                <CheckCircleIcon />
                                <h3>¡Solicitud Enviada con Éxito!</h3>
                                <p>Gracias por contactar a Grupo Alfa 74. Hemos recibido su proyecto y un experto se comunicará contigo en menos de 24 horas.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default ContactFormBlock;
