import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ProjectsGrid.module.scss';

// --- Datos de los proyectos ---
const allProjects = [
  {
    id: 1,
    title: 'Nave Industrial para Sector Automotriz',
    category: 'Naves Industriales',
    image: 'https://constructoramexico.mx/wp-content/uploads/2023/11/constructora-de-naves-industriales-en-cdmx.jpg',
    metric: 'Resultado: Completado 10 días antes del plazo',
    link: '#',
  },
  {
    id: 2,
    title: 'Torre Corporativa en CDMX',
    category: 'Edificios Comerciales',
    image: 'https://gruposacani.com/img/estructuras/edificio-estructuras.jpg',
    metric: 'Resultado: 0% de desviaciones en presupuesto',
    link: '#',
  },
  {
    id: 3,
    title: 'Puente Vehicular Interestatal',
    category: 'Puentes e Infraestructura',
    image: 'https://i0.wp.com/www.revistainfraestructura.com.mx/wp-content/uploads/2022/08/jaguar-6.jpg?resize=1024%2C683&ssl=1',
    metric: 'Resultado: Superó pruebas de carga en un 120%',
    link: '#',
  },
  {
    id: 4,
    title: 'Centro de Distribución Logística',
    category: 'Naves Industriales',
    image: 'https://hermosillo.com/wp-content/uploads/2022/08/mabe-facilities-in-construction-1-1024x536.png',
    metric: 'Resultado: Reducción del 15% en tiempo de montaje',
    link: '#',
  },
  {
    id: 5,
    title: 'Complejo de Oficinas y Retail',
    category: 'Edificios Comerciales',
    image: 'https://havitsteelstructure.com/wp-content/uploads/2020/01/Office-Steel-Building.jpg',
    metric: 'Resultado: Éxito en la primera inspección estructural',
    link: '#',
  },
];

const filterCategories = ['Todos', 'Naves Industriales', 'Edificios Comerciales', 'Puentes e Infraestructura'];

// --- Variantes de animación para las tarjetas ---
const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 12 } },
    exit: { opacity: 0, scale: 0.9, y: -30, transition: { duration: 0.3 } }
};

export const ProjectsGrid = () => {
    const [activeFilter, setActiveFilter] = useState('Todos');
    const [filteredProjects, setFilteredProjects] = useState(allProjects);

    useEffect(() => {
        if (activeFilter === 'Todos') {
            setFilteredProjects(allProjects);
        } else {
            const newFiltered = allProjects.filter(p => p.category === activeFilter);
            setFilteredProjects(newFiltered);
        }
    }, [activeFilter]);

    return (
        <section className={styles.projectsSection}>
            <div className="container">
                {/* --- Filtros --- */}
                <motion.div 
                    className={styles.filterNav}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {filterCategories.map(category => (
                        <button
                            key={category}
                            className={`${styles.filterButton} ${activeFilter === category ? styles.active : ''}`}
                            onClick={() => setActiveFilter(category)}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* --- Galería --- */}
                <motion.div layout className={styles.projectsGrid}>
                    <AnimatePresence>
                        {filteredProjects.map(project => (
                            <motion.div
                                key={project.id}
                                layout
                                variants={cardVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className={styles.projectCard}
                            >
                                <div className={styles.cardImage}>
                                    <img src={project.image} alt={project.title} />
                                </div>
                                <div className={styles.cardContent}>
                                    <span className={styles.cardCategory}>{project.category}</span>
                                    <h3 className={styles.cardTitle}>{project.title}</h3>
                                    <p className={styles.cardMetric}>{project.metric}</p>
                                    <a href={project.link} className={styles.cardCta}>
                                        Ver Caso de Estudio Completo <span>→</span>
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};
