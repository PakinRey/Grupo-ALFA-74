import { useContext } from 'react';
// Corrección: Se utiliza una ruta absoluta desde la raíz del proyecto para evitar errores de resolución.
import { ConversionContext } from './../context/ConversionContext.jsx';

export const useConversion = () => {
  const context = useContext(ConversionContext);
  if (!context) {
    throw new Error('useConversion debe ser usado dentro de un ConversionProvider');
  }
  return context;
};

