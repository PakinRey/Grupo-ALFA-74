import React, { createContext, useState, useCallback, useContext } from 'react'; // <-- Asegúrate que useContext esté aquí

// 1. Crear el Contexto
export const ConversionContext = createContext(null);

// 2. Crear el Proveedor del Contexto
export const ConversionProvider = ({ children }) => {
  const [conversions, setConversions] = useState([]);

  const logConversion = useCallback((type) => {
    console.log(`%c[Google Ads Simulation]...`, 'color: #9CCC3C;');

    const newConversion = {
      type,
      timestamp: new Date(),
      id: `evt_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    };

    setConversions(prevConversions => [...prevConversions, newConversion]);
  }, []);

  const value = {
    conversions,
    logConversion,
  };

  return (
    <ConversionContext.Provider value={value}>
      {children}
    </ConversionContext.Provider>
  );
};

// 3. Crear y Exportar el Hook Personalizado (ESTA ES LA PARTE CLAVE)
export const useConversion = () => {
  const context = useContext(ConversionContext);
  if (!context) {
    throw new Error('useConversion debe ser usado dentro de un ConversionProvider');
  }
  return context;
};