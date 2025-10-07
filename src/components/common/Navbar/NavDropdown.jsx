// src/components/common/Navbar/NavDropdown.jsx
import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import styles from './NavDropdown.module.scss';

export const NavDropdown = ({ link, onLinkClick }) => {
  // Estado para el dropdown (tanto en móvil como en desktop)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // Ref para manejar el retraso al quitar el mouse en desktop
  const timerRef = useRef(null);

  // --- LÓGICA PARA DESKTOP (Hover con retraso) ---
  const handleMouseEnter = () => {
    if (link.children) {
      clearTimeout(timerRef.current);
      setIsDropdownOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (link.children) {
      timerRef.current = setTimeout(() => {
        setIsDropdownOpen(false);
      }, 200); // 200ms de gracia antes de cerrar
    }
  };

  // --- LÓGICA PARA MÓVIL (Click para abrir/cerrar) ---
  const handleLinkClick = (e) => {
    // Si estamos en vista móvil (detectado por el menú principal abierto) y el link tiene hijos
    if (window.innerWidth <= 768 && link.children) {
      e.preventDefault(); // Prevenimos la navegación
      setIsDropdownOpen(!isDropdownOpen); // Solo abrimos/cerramos el submenú
    } else {
      onLinkClick(); // Si no, cerramos el menú principal como antes
    }
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, transition: { duration: 0.2, ease: 'easeOut' } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
  };
  
  const mobileDropdownVariants = {
    hidden: { height: 0, opacity: 0, marginTop: 0 },
    visible: { height: 'auto', opacity: 1, marginTop: '1rem' },
  };

  return (
    <li
      className={styles.navItem}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <NavLink
        to={link.to}
        className={({ isActive }) => `${styles.navLinkItem} ${isActive && !link.children ? styles.activeLink : ''}`}
        onClick={handleLinkClick}
      >
        {link.label}
        {link.children && <FaChevronDown className={`${styles.chevronIcon} ${isDropdownOpen ? styles.open : ''}`} />}
      </NavLink>

      {/* --- RENDERIZADO DEL DROPDOWN --- */}
      {link.children && (
        <AnimatePresence>
          {isDropdownOpen && (
            <motion.div
              className={styles.dropdownMenu}
              variants={window.innerWidth > 768 ? dropdownVariants : mobileDropdownVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {link.children.map(child => (
                <NavLink
                  key={child.label}
                  to={child.to}
                  className={styles.dropdownItem}
                  onClick={() => {
                    setIsDropdownOpen(false);
                    onLinkClick(); // Cierra el menú principal al hacer clic
                  }}
                >
                  <div className={styles.itemContent}>
                    <span className={styles.itemLabel}>{child.label}</span>
                    <span className={styles.itemDescription}>{child.description}</span>
                  </div>
                </NavLink>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </li>
  );
};