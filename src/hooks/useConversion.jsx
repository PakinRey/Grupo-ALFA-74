import React, { createContext, useState, useCallback } from 'react';

// 1. Crear el Contexto
export const ConversionContext = createContext(null);

// 2. Crear el Proveedor del Contexto
export const ConversionProvider = ({ children }) => {
  const [conversions, setConversions] = useState([]);

  // Función para registrar un nuevo evento de conversión
  const logConversion = useCallback((type) => {
    // Simulamos el envío de datos a Google Ads (gtag)
    console.log(`%c[Google Ads Simulation] Evento de Conversión Registrado:
- Tipo: ${type}
- Timestamp: ${new Date().toISOString()}`, 'color: #9CCC3C; font-weight: bold;');

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
