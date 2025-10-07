import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from './Testimonials.module.scss';

// --- Datos de los testimonios ---
const testimonialsData = [
  {
    quote: "El cumplimiento y la calidad de Grupo Alfa 74 fueron clave para mantener nuestro proyecto en tiempo y presupuesto. Su profesionalismo es inigualable.",
    name: "Carlos Hernández",
    title: "Director de Proyecto, Conjunto Calakmul Santa Fe",
    image: "https://placehold.co/100x100/e2e8f0/1a202c?text=CH"
  },
  {
    quote: "Su capacidad para resolver desafíos complejos en sitio y su estricto apego a las normativas nos dieron la certeza que necesitábamos. Son más que un proveedor, son un socio estratégico.",
    name: "Laura Jiménez",
    title: "Gerente de Construcción, K+O INGENIERÍA",
    image: "https://placehold.co/100x100/e2e8f0/1a202c?text=LJ"
  },
  {
    quote: "La precisión en la fabricación de sus estructuras se tradujo en un montaje rápido y sin contratiempos, optimizando todo nuestro cronograma. Altamente recomendados.",
    name: "Miguel Torres",
    title: "CEO, Desarrolladora Maritima Oceano",
    image: "https://placehold.co/100x100/e2e8f0/1a202c?text=MT"
  }
];

export const Testimonials = () => {
  // --- Configuración del carrusel ---
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 7000,
    adaptiveHeight: true,
    appendDots: dots => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <section className={styles.testimonialsSection}>
      <div className="container">
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Lo que Nuestros Socios Comerciales Dicen
        </motion.h2>
        
        <motion.div
          className={styles.carouselContainer}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Slider {...settings}>
            {testimonialsData.map((testimonial, index) => (
              <div key={index} className={styles.testimonialCard}>
                <p className={styles.quote}>“{testimonial.quote}”</p>
                <div className={styles.authorInfo}>
                  <img src={testimonial.image} alt={`Foto de ${testimonial.name}`} className={styles.authorImage} />
                  <div className={styles.authorDetails}>
                    <span className={styles.authorName}>{testimonial.name}</span>
                    <span className={styles.authorTitle}>{testimonial.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
};
