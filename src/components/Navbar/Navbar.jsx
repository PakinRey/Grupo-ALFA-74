import React, { useState } from 'react';

// Icono para el menú hamburguesa (puedes usar una librería de iconos o un SVG como este)
const MenuIcon = () => (
  <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M4 6h16M4 12h16m-7 6h7"></path>
  </svg>
);

const CloseIcon = () => (
  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
  </svg>
);


export const Navbar = () => {
  // --- MEJORA #1: Usamos el estado de React para manejar el menú móvil ---
  const [isOpen, setIsOpen] = useState(false);

  // --- MEJORA #2: Creamos un array de links para no repetir código ---
  const navLinks = [
    { href: '#servicios', label: 'Servicios' },
    { href: '#proyectos', label: 'Proyectos' },
    { href: '#contacto', label: 'Contacto' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 shadow-md backdrop-blur-md">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div>
          <a href="#">
            <img src="/Logo2.png" alt="Logo Grupo Alfa 74" className="h-12 w-auto" />
          </a>
        </div>

        {/* Links de Navegación para Desktop */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-gray-600 font-medium hover:text-green-600 transition-colors duration-300">
              {link.label}
            </a>
          ))}
        </div>

        {/* Botón CTA para Desktop */}
        <div className="hidden md:block">
          <a href="#contacto" className="bg-green-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105">
            Solicitar Cotización
          </a>
        </div>

        {/* Botón del Menú Móvil */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none">
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* --- MEJORA #3: El menú móvil se muestra/oculta basado en el estado 'isOpen' --- */}
      {/* Contenido del Menú Móvil */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <div className="px-6 pt-2 pb-4 flex flex-col space-y-3">
          {navLinks.map((link) => (
             <a key={link.label} href={link.href} onClick={() => setIsOpen(false)} className="block py-2 text-gray-600 font-medium hover:text-green-600">
              {link.label}
            </a>
          ))}
          <a href="#contacto" onClick={() => setIsOpen(false)} className="bg-green-500 text-white text-center font-bold mt-2 py-3 px-6 rounded-lg shadow-lg">
            Solicitar Cotización
          </a>
        </div>
      </div>
    </header>
  );
};