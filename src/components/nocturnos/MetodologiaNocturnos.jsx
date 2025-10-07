// src/components/nocturnos/MetodologiaNocturnos.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLightbulb, FaFileContract, FaHammer, FaPlug } from 'react-icons/fa';
import styles from './MetodologiaNocturnos.module.scss';

const steps = [
  {
    icon: <FaLightbulb />,
    title: '1. Conceptualización y Diseño',
    text: 'Colaboramos con tus arquitectos y diseñadores para traducir la visión creativa en planos constructivos viables, optimizando flujos, acústica y puntos de experiencia.',
    image: 'https://images.unsplash.com/photo-1578662996442-af74a86e3a83?q=80&w=1200&auto=format&fit=crop',
  },
  {
    icon: <FaFileContract />,
    title: '2. Ingeniería y Permisos',
    text: 'Realizamos la ingeniería de detalle, cálculos estructurales y gestionamos los permisos específicos de uso de suelo, protección civil y normativas de sonido.',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200&auto=format&fit=crop',
  },
  {
    icon: <FaHammer />,
    title: '3. Construcción y Acabados',
    text: 'Ejecutamos la obra con un enfoque en la calidad de los acabados, la durabilidad de los materiales y el cumplimiento estricto del cronograma para acelerar tu apertura.',
    image: 'https://images.unsplash.com/photo-1599691880946-f9435b6a38a7?q=80&w=1200&auto=format&fit=crop',
  },
  {
    icon: <FaPlug />,
    title: '4. Integración Tecnológica',
    text: 'Coordinamos la instalación de sistemas de audio, video, iluminación, seguridad y puntos de venta, asegurando una infraestructura tecnológica impecable y lista para operar.',
    image: 'https://images.unsplash.com/photo-1516956907223-3f43b35435ed?q=80&w=1200&auto=format&fit=crop',
  },
];

export const MetodologiaNocturnos = () => {
  const [active, setActive] = useState(0);

  return (
    <section className={styles.section} aria-labelledby="metodologia-title">
      <div className="container">
        <motion.h2
          id="metodologia-title"
          className={styles.title}
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Nuestra Metodología: Del Concepto a la Gran Apertura
        </motion.h2>
        
        <div className={styles.layout}>
          <nav className={styles.nav} aria-label="Fases de metodología">
            {steps.map((s, i) => (
              <button
                key={s.title}
                type="button"
                className={`${styles.stepBtn} ${active === i ? styles.active : ''}`}
                onClick={() => setActive(i)}
                aria-current={active === i ? 'step' : undefined}
              >
                <span className={styles.btnIcon}>{s.icon}</span>
                <span className={styles.btnText}>{s.title.substring(3)}</span>
              </button>
            ))}
          </nav>

          <main className={styles.panel}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className={styles.stepTitle}>{steps[active].title}</h3>
                <p className={styles.stepText}>{steps[active].text}</p>
                <div className={styles.imageWrap}>
                  <img
                    src={steps[active].image}
                    alt={steps[active].title}
                    loading="lazy"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>
    </section>
  );
};