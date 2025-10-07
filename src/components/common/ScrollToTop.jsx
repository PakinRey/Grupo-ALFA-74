// src/components/common/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Este componente no renderiza nada visualmente.
// Su único propósito es ejecutar un efecto cuando cambia la ruta.
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // "Escucha" los cambios en el pathname (la URL)
    // Cada vez que cambia, ejecuta esta función.
    window.scrollTo(0, 0);
  }, [pathname]); // El array de dependencias asegura que el efecto solo se ejecute cuando el pathname cambie.

  return null; // No necesita renderizar nada.
}