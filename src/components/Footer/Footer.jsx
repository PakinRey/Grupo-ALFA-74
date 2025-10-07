import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-8 text-center">
        {/* --- MEJORA: El estilo en línea se convierte a un objeto de React --- */}
        <img 
          src="/Logo2.png" 
          alt="Logo Grupo Alfa 74" 
          className="h-12 w-auto mx-auto mb-4" 
          style={{ filter: 'brightness(0) invert(1)' }}
        />
        <p>&copy; {new Date().getFullYear()} Grupo Alfa 74. Todos los derechos reservados.</p>
        <p className="text-gray-400 text-sm mt-2">
          Construyendo el presente y futuro de la industria.
        </p>
      </div>
    </footer>
  );
};