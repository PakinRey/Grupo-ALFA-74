// src/pages/ContactPage.jsx
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-next';
import { motion } from 'framer-motion';
import styles from './ContactPage.module.scss';
import { Link } from 'react-router-dom';

// Componentes reutilizables que usarás
import { TechnicalFAQs } from '../components/services/TechnicalFAQs.jsx';
import { CTAConsultation } from '../components/services/CTAConsultation.jsx'; 
import ContactFormBlock from '/src/components/contact/ContactFormBlock.jsx';

// --- Datos Estáticos para la Página de Contacto con URLs de Mapas Reales ---
const locationsData = [
    {
        id: "loc_oficina",
        name: "Oficinas Corporativas (Huixquilucan)",
        address: "Francisco I. Madero, No. 30-A, Col. Jesús del Monte, C.P. 52764, Huixquilucan, Edo. Méx.",
        phone: "26-50-44-31, 26-50-78-32, 70-30-92-68",
        email: "estructuras@alfa74.com.mx",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.862026967427!2d-99.29499168577506!3d19.37512598691699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d20726fddce195%3A0x48caabaa187620b3!2sAlfa74+Estructuras+Met%C3%A1licas+S.A.+DE+C.V.!5e0!3m2!1ses!2sco!4v1474927490135"
    },
    {
        id: "loc_planta",
        name: "Planta de Fabricación (Tianguistenco)",
        address: "Av. Emiliano Zapata, No. 57, Esq. Cuauhtémoc, Col. Mirasol, C.P 52654, Santiago Tianguistenco, Edo. Méx.",
        phone: "26-50-44-31, 26-50-78-32, 70-30-92-68",
        email: "estructuras@alfa74.com.mx",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.87551889641!2d-99.42438988577851!3d19.200638587016513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cdf11a02c3eb7f%3A0x88564ce7474e43d5!2sM%C3%A1quilas+Alfa+74+S.A.+de+C.V.!5e0!3m2!1ses!2sco!4v1474927656827"
    }
];

export function ContactPage() {
    // Estado para saber qué mapa mostrar (por defecto, el primero)
    const [activeMapUrl, setActiveMapUrl] = useState(locationsData[0].mapUrl);
    const [activeLocationId, setActiveLocationId] = useState(locationsData[0].id);

    return (
        <div className={styles.contactPageContainer}>
            <Helmet>
                <title>Contacto y Ubicaciones | Grupo Alfa 74</title>
                <meta name="description" content="Contáctanos para solicitar una cotización o un análisis de tu proyecto. Oficinas en Huixquilucan y planta de fabricación en Santiago Tianguistenco." />
            </Helmet>

            {/* 1. Hero Section */}
            <section className={styles.contactHero}>
                <div className={`container ${styles.heroContent}`}>
                    <motion.h1 
                        className={styles.heroTitle}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Contacto y <span>Ubicaciones</span>
                    </motion.h1>
                    <motion.p 
                        className={styles.heroSubtitle}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Estamos listos para analizar su proyecto. Encuentre la unidad de Grupo Alfa 74 más cercana o complete el formulario para iniciar una conversación.
                    </motion.p>
                </div>
            </section>

            {/* 2. Interactive Location Block con Mapas Reales */}
            <section className={styles.locationsSection}>
                <div className="container">
                    <h2 className="text-center text-3xl font-bold text-gray-900 mb-10">
                        Nuestras Unidades Estratégicas
                    </h2>

                    <motion.div 
                        className={styles.locationsGrid}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ staggerChildren: 0.2 }}
                    >
                        {locationsData.map((location, index) => (
                            <motion.div 
                                key={location.id} 
                                className={`${styles.locationCard} ${activeLocationId === location.id ? styles.activeCard : ''}`}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                onClick={() => {
                                    setActiveMapUrl(location.mapUrl);
                                    setActiveLocationId(location.id);
                                }}
                            >
                                <h3>{location.name}</h3>
                                <p>{location.address}</p>
                                <div className={styles.contactInfo}>
                                    <p>Teléfono: <a href={`tel:${location.phone.replace(/[^0-9+]/g, '').split(',')[0].trim()}`}>{location.phone}</a></p>
                                    <p>Email: <a href={`mailto:${location.email}`}>{location.email}</a></p>
                                    <p>Horario: Lun-Vier 8:00-18:00</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                    
                    {/* Mapa de Google Maps Activo */}
                    <motion.div 
                        key={activeMapUrl} // Key para forzar la re-renderización y animación en cambio de mapa
                        className={styles.mapPlaceholder} 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <iframe 
                            src={activeMapUrl} 
                            width="100%" 
                            height="450" 
                            frameBorder="0" 
                            style={{ border: 0, borderRadius: '8px' }} 
                            allowFullScreen="" 
                            loading="lazy"
                            aria-label={`Ubicación de ${locationsData.find(l => l.id === activeLocationId)?.name || 'Oficina'}`}
                        ></iframe>
                    </motion.div>
                </div>
            </section>

            {/* 3. Contact Form Block (Reutiliza el componente modular) */}
            <ContactFormBlock
                title="Inicie su Cotización sin Compromiso"
                subtitle="Complete el formulario y adjunte sus planos o requerimientos. Nuestro equipo técnico responderá en 24 horas."
                agreementText="Acepto el tratamiento de mis datos personales según el <a href='/politica-privacidad' target='_blank'>Aviso de Privacidad</a>."
            />

            {/* 4. Two-Column Text (Otras Formas de Contacto) */}
            <section className={styles.twoColumnTextSection}>
                <div className="container">
                    <div className={styles.twoColumnGrid}>
                        {/* Columna de Texto */}
                        <motion.div 
                            className={styles.textBlock}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.7 }}
                        >
                            <h3 className="text-3xl font-bold mb-4">Atención Personalizada y Soporte Técnico</h3>
                            <p>Si prefiere una comunicación directa para preguntas técnicas o logísticas, use nuestras líneas principales. Nuestro compromiso es la **Certeza** y la **Transparencia** en todo lo que hacemos.</p>
                            <ul className="space-y-2 mt-4 text-lg">
                                <li><strong>Teléfono Central:</strong> <a href='tel:5550007474'>+52 55-5000-7474</a></li>
                                <li><strong>Email General:</strong> <a href='mailto:info@alfa74.com.mx'>info@alfa74.com.mx</a></li>
                                <li><strong>Horario de Atención:</strong> Lunes a Viernes de 8:00 a 18:00 hrs (GMT-6).</li>
                            </ul>
                            
                        </motion.div>
                        
                        {/* Columna de Imagen (Orden 2 en Desktop) */}
                        <motion.div 
                            className={`${styles.imageBlock}`} // Eliminamos md:order-2 ya que no hay imagen en el prompt
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                        >
                            <img 
                                src="https://images.unsplash.com/photo-1587560699334-cc4ff634909a?q=80&w=2070&auto=format&fit=crop" 
                                alt="Equipo de atención al cliente de Grupo Alfa 74" 
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 5. FAQ Block (Usando el componente ya existente) */}
            <TechnicalFAQs />
            
            {/* 6. CTA final reutilizando el componente CTAConsultation */}
            <CTAConsultation />
            
        </div>
    );
};

export default ContactPage;
