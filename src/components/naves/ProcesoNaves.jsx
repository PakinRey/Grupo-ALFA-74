// src/components/naves/ProcesoNaves.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import styles from './ProcesoNaves.module.scss';

const steps = [
  {
    title: '1) Diseño y Cálculo',
    text:
      'Ingeniería de detalle, modelos, memorias de cálculo, compatibilización arquitectura/MEP, criterios IMCA y firma de DRO.',
    image:
      'https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: '2) Habilitado en Planta',
    text:
      'Prefabricación, etiquetado y QA/QC de piezas para ensamblaje preciso y reducción de tiempos en sitio.',
    image:
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: '3) Cimentación',
    text:
      'Coordinación con obra civil, anclas/plantillas y liberación por control de calidad para recibir estructura metálica.',
    image: '/estructura-para-techo.jpg',
  },
  {
    title: '4) Montaje',
    text:
      'Logística JIT, maniobras seguras en altura y cumplimiento estricto del cronograma maestro.',
    image: '/estructura_metalica_trabajando_2.jpg',
  },
  {
    title: '5) Acabados y Entrega',
    text:
      'Protecciones, recubrimientos, pruebas y documentación final para operación estable y de bajo mantenimiento (TCO).',
    image: '/estructura_metalica_edificio_1.png',
  },
];

export const ProcesoNaves = () => {
  const [active, setActive] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className={styles.section} aria-labelledby="proceso-naves-title">
      <div className="container">
        <h2 id="proceso-naves-title" className={styles.title}>
          Nuestro Proceso Constructivo
        </h2>
        <p className={styles.subtitle}>
          Transparencia y control en cada fase para eliminar sorpresas.
        </p>

        <div className={styles.layout}>
          <nav className={styles.nav} aria-label="Fases del proceso">
            {steps.map((s, i) => (
              <button
                key={s.title}
                type="button"
                className={`${styles.stepBtn} ${active === i ? styles.active : ''}`}
                onClick={() => setActive(i)}
                aria-current={active === i ? 'step' : undefined}
              >
                {s.title}
              </button>
            ))}
          </nav>

          <main className={styles.panel}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={prefersReducedMotion ? {} : { opacity: 0, x: 20 }}
                animate={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
                exit={prefersReducedMotion ? {} : { opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
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
