// src/components/nocturnos/ValuePropositionNocturnos.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaTheaterMasks, FaClock, FaShieldAlt } from 'react-icons/fa';
import styles from './ValuePropositionNocturnos.module.scss';

const items = [
  {
    icon: <FaTheaterMasks />,
    title: 'Diseño que Cautiva',
    text: 'Traducimos la visión de arquitectos y diseñadores en espacios funcionales con acabados, iluminación y acústica que crean atmósferas únicas.',
  },
  {
    icon: <FaClock />,
    title: 'Construcción Acelerada',
    text: 'Entendemos el costo de oportunidad. Nuestro proceso optimizado y la pre-fabricación aseguran una apertura en tiempo récord.',
  },
  {
    icon: <FaShieldAlt />,
    title: 'Durabilidad a Toda Prueba',
    text: 'Construimos para el alto tráfico. Seleccionamos materiales y aplicamos técnicas que garantizan la longevidad de su inversión, reduciendo el mantenimiento.',
  },
];

export const ValuePropositionNocturnos = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          La Experiencia lo es Todo. La Construcción la Hace Posible.
        </motion.h2>

        <div className={styles.grid}>
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className={styles.cardIcon}>{item.icon}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};