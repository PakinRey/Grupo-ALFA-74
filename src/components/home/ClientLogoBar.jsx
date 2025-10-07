// src/components/home/ClientLogoBar.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaHandshake } from 'react-icons/fa';
import styles from './ClientLogoBar.module.scss';

const LogoPlaceholder1 = () => <img src="./logo_grupo_alfa_74.png" width={80} alt="Logo de un cliente" />;
const LogoPlaceholder2 = () => <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg"><text x="60" y="25" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold">PROYECTOS SIGMA</text></svg>;
const LogoPlaceholder3 = () => <img src="./logo_grupo_alfa_74.png" width={80} alt="Logo de un cliente" />;
const LogoPlaceholder4 = () => <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg"><text x="60" y="25" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold">GRUPO KAPPA</text></svg>;
const LogoPlaceholder5 = () => <img src="./logo_grupo_alfa_74.png" width={80} alt="Logo de un cliente" />;

const clientLogos = [
    { id: 1, component: <LogoPlaceholder1 /> },
    { id: 2, component: <LogoPlaceholder2 /> },
    { id: 3, component: <LogoPlaceholder3 /> },
    { id: 4, component: <LogoPlaceholder4 /> },
    { id: 5, component: <LogoPlaceholder5 /> },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export const ClientLogoBar = () => {
    return (
        <section className={styles.clientLogoSection}>
            <motion.div 
                className="container"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
            >
                <motion.div className={styles.header} variants={itemVariants}>
                    <FaHandshake className={styles.headerIcon} />
                    <h2 className={styles.title}>La Confianza de los Líderes de la Industria</h2>
                </motion.div>

                <motion.div 
                    className={styles.logoGrid}
                    variants={containerVariants} // Re-usamos para stagger dentro del grid
                >
                    {clientLogos.map(logo => (
                        <motion.div key={logo.id} className={styles.logoWrapper} variants={itemVariants}>
                            {logo.component}
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
};