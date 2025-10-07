import React from 'react';
import { useConversion } from "@/hooks/useConversion.jsx";

/**
 * Un Componente de Orden Superior (HOC) que envuelve un componente (ej. un botón o enlace)
 * y le añade la capacidad de registrar una conversión al hacer clic.
 * @param {React.ComponentType} WrappedComponent - El componente a envolver.
 */
export const withConversionTracking = (WrappedComponent) => {
  // Retorna un nuevo componente
  return ({ conversionType, onClick, ...props }) => {
    const { logConversion } = useConversion();

    const handleClick = (e) => {
      // 1. Registra el evento de conversión con el tipo especificado
      if (conversionType) {
        logConversion(conversionType);
      }

      // 2. Si hay una función onClick original, la ejecuta
      if (onClick) {
        onClick(e);
      }
    };

    // Renderiza el componente original con la nueva lógica de clic
    return <WrappedComponent onClick={handleClick} {...props} />;
  };
};

