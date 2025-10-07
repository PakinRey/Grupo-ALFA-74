// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-next';
import App from './App.jsx';
import './assets/scss/main.scss'

// --- 1. Importa el Proveedor del Contexto ---
import { ConversionProvider } from './context/ConversionContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        {/* --- 2. Envuelve tu App con el Proveedor --- */}
        <ConversionProvider>
          <App />
        </ConversionProvider>
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>,
)

