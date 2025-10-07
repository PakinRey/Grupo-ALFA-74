// src/components/home/BlogHighlight.jsx
import React from 'react';
import { motion } from 'framer-motion';

// --- Usando React Icons para el ícono de "leer más" ---
import { FaArrowRight } from 'react-icons/fa';

import styles from './BlogHighlight.module.scss';

// --- Datos de ejemplo para las entradas del blog ---
// Estos títulos están pensados para atraer a tu cliente ideal y contener palabras clave.
const blogPosts = [
  {
    image: './estructura_metalica_trabajando_1.jpg',
    category: 'Análisis Técnico',
    title: '3 Errores Críticos al Seleccionar un Proveedor de Estructuras Metálicas',
    excerpt: 'Descubra las señales de alerta que pueden comprometer su cronograma, presupuesto y la integridad estructural de su proyecto.',
    link: '#', // TODO: Enlazar a la entrada del blog real
  },
  {
    image: './estructura_metalica_trabajando_2.jpg',
    category: 'Casos de Éxito',
    title: 'Caso de Éxito: Reducción del 20% en Tiempos de Montaje en Nave Industrial',
    excerpt: 'Cómo nuestra fase de habilitado de precisión y logística Just-in-Time optimizaron un proyecto con cronograma crítico.',
    link: '#',
  },
  {
    image: './estructura_metalica_vigas_1.jpg',
    category: 'Ingeniería y Normativa',
    title: 'Acero A-36 vs. A-572: ¿Cuál es el Indicado para su Proyecto?',
    excerpt: 'Un análisis comparativo de las propiedades, aplicaciones y costos de los aceros más comunes en la construcción industrial mexicana.',
    link: '#',
  },
];

// --- Variantes de animación consistentes ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const BlogHighlight = () => {
  return (
    <section className={styles.blogSection}>
      <motion.div
        className="container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.h2 className={styles.sectionTitle} variants={itemVariants}>
          Desde la Mesa de Ingeniería
        </motion.h2>
        <motion.p className={styles.subtitle} variants={itemVariants}>
          Explore nuestros artículos técnicos, casos de estudio y las últimas tendencias en la construcción con acero.
        </motion.p>
        
        <div className={styles.postsGrid}>
          {blogPosts.map((post, index) => (
            <motion.a 
              key={index} 
              href={post.link} 
              className={styles.postCard} 
              variants={itemVariants}
            >
              <div className={styles.cardImage}>
                <img src={post.image} alt={`Imagen del artículo: ${post.title}`} />
              </div>
              <div className={styles.cardContent}>
                <span className={styles.cardCategory}>{post.category}</span>
                <h3 className={styles.cardTitle}>{post.title}</h3>
                <p className={styles.cardExcerpt}>{post.excerpt}</p>
                <div className={styles.cardCta}>
                  Leer artículo completo <FaArrowRight />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};