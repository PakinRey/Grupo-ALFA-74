# Compilación de Código del Proyecto: grupo-alfa74-frontend

---

## Archivo: `src\App.css`

```css
#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.react:hover {
  filter: drop-shadow(0 0 2em #61dafbaa);
}

@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: no-preference) {
  a:nth-of-type(2) .logo {
    animation: logo-spin infinite 20s linear;
  }
}

.card {
  padding: 2em;
}

.read-the-docs {
  color: #888;
}

```

---

## Archivo: `src\assets\scss\_theme.scss`

```
// src/assets/scss/_theme.scss

// Importa las variables SASS para usarlas
@use 'variables' as *;
@use 'sass:color';

// Define las variables CSS (Custom Properties) para el tema
:root {
  --bg-primary: #{$brand-gray-light};
  --bg-secondary: #{$brand-white};
  --text-primary: #{$brand-gray-dark};
  --text-secondary: #{color.mix($brand-gray-dark, $brand-white, 70%)}; 
  --border-color: #{$brand-gray-medium};
  --color-accent: #{$brand-green-bright};
  --color-accent-dark: #{$brand-green-medium};
  --text-on-accent: #{$brand-white};
  --shadow: 0 10px 20px rgba(0, 0, 0, 0.07);
  --color-dark-blue: #1a202c;
  --text-secondary-light: #a0aec0;
}

// (Opcional) Si quisiéramos un tema oscuro en el futuro, solo añadiríamos esto:

[data-theme="dark"] {
  --bg-primary: #1a202c;
  --bg-secondary: #2d3748;
  --text-primary: #f7fafc;
  --text-secondary: #a0aec0;
  --border-color: #4a5568;
  --shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

```

---

## Archivo: `src\assets\scss\_variables.scss`

```
// src/assets/scss/_variables.scss

// ----------------------------------------
// Paleta de Colores de la Marca
// ----------------------------------------
$brand-green-bright: #9CCC3C;
$brand-green-medium: #6EB43F;
$brand-green-dark: #3A7D44;
$brand-white: #FFFFFF;
$brand-gray-dark: #1a202c;    // Casi negro
$brand-gray-medium: #e2e8f0; // Bordes
$brand-gray-light: #f7fafc;   // Fondo claro
$brand-text-muted: #a0aec0;   // Texto gris claro

// ----------------------------------------
// Variables Semánticas (El "cerebro" del tema)
// Usamos estas en los componentes para poder cambiar el tema fácilmente.
// ----------------------------------------
$color-primary: $brand-green-bright;
$color-primary-dark: $brand-green-dark;
$color-primary-light: #f0fdf4; // Verde muy pálido para fondos de íconos

$color-text-primary: $brand-gray-dark;
$color-text-secondary: #4b5563; // Un gris intermedio para párrafos
$color-text-on-accent: $brand-gray-dark;
$color-text-light: $brand-white;
$color-text-muted-dark: $brand-text-muted;

$color-background-light: $brand-gray-light;
$color-background-dark: $brand-gray-dark;
$color-background-white: $brand-white;

$color-border: $brand-gray-medium;

// ----------------------------------------
// Layout y UI
// ----------------------------------------
$border-radius: 8px;
$transition-speed: 0.3s;
$breakpoint-md: 768px;
$breakpoint-lg: 992px;

// ----------------------------------------
// Sombras
// ----------------------------------------
$shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
$shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
$shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
```

---

## Archivo: `src\assets\scss\main.scss`

```
// src/assets/scss/main.scss

// Importa las variables y el tema
@use 'variables' as *;
@use 'theme' as *;

// Reseteo básico y estilos globales
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Poppins', sans-serif;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden; 
}

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex-grow: 1;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}
```

---

## Archivo: `src\components\analytics\ConversionAnalytics.module.scss`

```
@use '../../assets/scss/variables' as *;

.floatingButton {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 60px;
    height: 60px;
    background-color: var(--color-accent);
    color: var(--text-on-accent);
    border-radius: 50%;
    border: none;
    box-shadow: 0 8px 25px rgba(0,0,0,0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 1000;
    transition: all $transition-speed ease;

    &:hover {
        transform: scale(1.1);
        background-color: var(--color-accent-dark);
    }

    svg {
        width: 32px;
        height: 32px;
    }
}

.modalOverlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(26, 32, 44, 0.8);
    backdrop-filter: blur(5px);
    z-index: 1050;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity $transition-speed ease;
    
    &.visible {
        opacity: 1;
    }
}

.modalContent {
    background-color: var(--bg-secondary);
    width: 90%;
    max-width: 900px;
    max-height: 90vh;
    border-radius: $border-radius;
    padding: 2.5rem;
    box-shadow: var(--shadow);
    display: flex;
    flex-direction: column;
    transform: scale(0.95);
    transition: transform $transition-speed ease;

    &.visible {
       transform: scale(1);
    }
}

.modalHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 1rem;
    margin-bottom: 2rem;
    
    h2 {
        font-size: 1.8rem;
        font-weight: 700;
    }
    
    button {
        background: none;
        border: none;
        cursor: pointer;
        color: var(--text-secondary);
        &:hover { color: var(--text-primary); }
        svg { width: 28px; height: 28px; }
    }
}

.metricsDashboard {
    flex-grow: 1;
    overflow-y: auto; // Permite scroll si el contenido es muy largo
    display: grid;
    grid-template-columns: 1fr;
    gap: 2.5rem;

    @media (min-width: $breakpoint-lg) {
        grid-template-columns: 1fr 1fr;
    }
}

.summaryCards {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.card {
    background-color: var(--bg-primary);
    padding: 1.5rem;
    border-radius: $border-radius;
    border-left: 5px solid var(--color-accent);

    .label {
        font-size: 1rem;
        font-weight: 600;
        color: var(--text-secondary);
        margin-bottom: 0.5rem;
    }

    .value {
        font-size: 2.5rem;
        font-weight: 700;
        color: var(--text-primary);
    }
}

.chartContainer {
    background-color: var(--bg-primary);
    padding: 1.5rem;
    border-radius: $border-radius;
}

.eventLog {
    grid-column: 1 / -1; // Ocupa todo el ancho en desktop
    
    h3 {
        font-size: 1.4rem;
        font-weight: 600;
        margin-bottom: 1rem;
    }

    ul {
        list-style: none;
        padding: 0;
        max-height: 250px;
        overflow-y: auto;
        border: 1px solid var(--border-color);
        border-radius: $border-radius;
    }

    li {
        padding: 1rem;
        display: flex;
        justify-content: space-between;
        
        &:not(:last-child) {
            border-bottom: 1px solid var(--border-color);
        }

        .eventType { font-weight: 600; }
        .eventTime { font-size: 0.9rem; color: var(--text-secondary); }
    }
}

```

---

## Archivo: `src\components\common\Footer\Footer.module.scss`

```
@use '../../../assets/scss/variables' as *;

.footer {
  background-color: var(--color-dark-blue);
  color: var(--text-light);
  padding-top: 4rem;
}

.footerGrid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  padding-bottom: 4rem;

  @media (min-width: $breakpoint-md) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: $breakpoint-lg) {
    grid-template-columns: 2fr 1fr 1fr 1fr;
  }
}

.footerColumn {
  .logo {
    height: 45px;
    width: auto;
    filter: brightness(0) invert(1);
    margin-bottom: 1.5rem;
  }

  .tagline {
    color: var(--text-secondary-light);
    line-height: 1.6;
    margin-bottom: 1.5rem;
    max-width: 300px;
  }
}

.columnTitle {
  font-size: 1.1rem;
  font-weight: 600;
  color: #FFFFFF;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.linkList {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  a {
    color: var(--text-secondary-light);
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: #FFFFFF;
    }
  }
}

.socialLinks {
  display: flex;
  gap: 1rem;
  
  a {
    color: var(--text-secondary-light);
    transition: color 0.2s ease;
    
    svg {
      width: 24px;
      height: 24px;
    }

    &:hover {
      color: #FFFFFF;
    }
  }
}

.qualitySeal {
  width: 100px;
  height: auto;
  opacity: 0.8;
}

.footerBottomBar {
  padding: 1.5rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  font-size: 0.9rem;
  color: var(--text-secondary-light);
}
```

---

## Archivo: `src\components\common\Navbar\Navbar.module.scss`

```
// src/components/common/Navbar/Navbar.module.scss
@use '../../../assets/scss/variables' as *;

.header {
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1000;
  background-color: transparent;
  padding: 1rem 0;
  transition: background-color $transition-speed ease, box-shadow $transition-speed ease, padding $transition-speed ease;
  
  &.scrolled {
    background-color: var(--bg-secondary);
    box-shadow: var(--shadow);
    padding: 0.75rem 0;
  }
}

.navContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo img {
  height: 48px;
  width: auto;
  transition: transform $transition-speed ease;
  &:hover {
    transform: scale(1.05);
  }
}

.navLinks {
  ul {
    display: flex;
    align-items: center;
    list-style: none;
    gap: 2rem;
    margin: 0;
    padding: 0;
  }

  @media (max-width: $breakpoint-md) {
    position: fixed;
    top: 0;
    right: -100%;
    width: 80%;
    max-width: 320px;
    height: 100vh;
    background-color: var(--bg-secondary);
    box-shadow: var(--shadow);
    padding: 6rem 2rem 2rem;
    transition: right 0.4s ease-in-out;
    
    &.menuOpen {
      right: 0;
    }

    ul {
      flex-direction: column;
      align-items: flex-start;
      gap: 1.5rem;
      width: 100%; // Asegura que los li ocupen todo el ancho
    }
  }
}

.actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.ctaButton {
  background-color: var(--color-accent);
  color: var(--text-on-accent);
  padding: 0.75rem 1.5rem;
  border-radius: $border-radius;
  font-weight: 700;
  text-decoration: none;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  transition: transform $transition-speed ease, background-color $transition-speed ease;

  &:hover {
    transform: translateY(-3px);
    background-color: var(--color-accent-dark);
  }
}

.mobileCta {
  display: none;
  @media (max-width: $breakpoint-md) {
    display: block;
    width: 100%;
    text-align: center;
    margin-top: 2rem;
  }
}

.desktopCta {
  @media (max-width: $breakpoint-md) {
    display: none;
  }
}

.hamburger {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1001;
  
  .icon {
    width: 28px;
    height: 28px;
    stroke: var(--text-primary);
    stroke-width: 2;
  }
  
  @media (max-width: $breakpoint-md) {
    display: block;
  }
}
```

---

## Archivo: `src\components\common\Navbar\NavDropdown.module.scss`

```
// src/components/common/Navbar/NavDropdown.module.scss
@use '../../../assets/scss/variables' as *;

.navItem {
  position: relative; // Crucial para el posicionamiento del dropdown

  // En móvil, los items ocupan todo el ancho
  @media (max-width: $breakpoint-md) {
    width: 100%;
  }
}

.navLinkItem {
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 600;
  position: relative;
  padding-bottom: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between; // Para separar texto y flecha en móvil
  gap: 0.5rem;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--color-accent);
    transition: width $transition-speed ease;
  }

  &:hover::after, &.activeLink::after {
    width: 100%;
  }
}

.chevronIcon {
  font-size: 0.7rem;
  transition: transform $transition-speed ease;
  &.open {
    transform: rotate(180deg);
  }
}

// --- Estilos del Menú Dropdown ---
.dropdownMenu {
  // Estilos base para ambos (móvil y desktop)
  overflow: hidden;

  // --- ESTILOS DESKTOP ---
  @media (min-width: calc(#{$breakpoint-md} + 1px)) {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    padding: 0.75rem;
    background-color: var(--bg-secondary);
    border-radius: $border-radius;
    box-shadow: var(--shadow-lg);
    border: 1px solid var(--border-color);
    width: 320px;
    margin-top: 0.75rem;
    z-index: 1010;
  }

  // --- ESTILOS MÓVIL ---
  @media (max-width: $breakpoint-md) {
    position: static; // Se muestra en el flujo normal del documento
    width: 100%;
    padding-left: 1.5rem; // Indentación para mostrar jerarquía
    background-color: transparent;
    border-radius: 0;
    box-shadow: none;
    border: none;
  }
}

.dropdownItem {
  display: block;
  text-decoration: none;
  padding: 0.75rem 1rem;
  border-radius: calc(#{$border-radius} - 2px);
  transition: background-color $transition-speed ease;
  
  &:hover {
    background-color: var(--bg-primary);
  }

  @media (max-width: $breakpoint-md) {
    padding: 0.75rem 0;
  }
}

.itemContent {
  display: flex;
  flex-direction: column;
}

.itemLabel {
  font-weight: 600;
  color: var(--text-primary);
  font-size: 0.95rem;
}

.itemDescription {
  font-size: 0.85rem;
  color: var(--text-secondary);
  white-space: normal;
}
```

---

## Archivo: `src\components\Contact\ContactFormBlock.module.scss`

```
// src/components/contact/ContactFormBlock.module.scss

@use '../../assets/scss/variables' as *;

.formSection {
  padding: 5rem 0;
  background-color: var(--bg-primary); // Fondo sutilmente gris
}

.formWrapper {
  max-width: 650px;
  margin: 0 auto;
  padding: 2.5rem;
  background-color: var(--bg-secondary);
  border-radius: $border-radius;
  box-shadow: var(--shadow);
  border: 1px solid var(--border-color);
}

.header {
  text-align: center;
  margin-bottom: 2.5rem;
  h2 {
    font-size: clamp(1.8rem, 4vw, 2.2rem);
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 0.5rem;
  }
  p {
    color: var(--text-secondary);
  }
}

.formGrid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: $breakpoint-md) {
    grid-template-columns: 1fr 1fr;
  }
}

.inputGroup.fullWidth {
  grid-column: 1 / -1;
}

input[type="text"],
input[type="email"],
input[type="tel"],
textarea {
  width: 100%;
  padding: 1rem 1.2rem;
  font-size: 1rem;
  color: var(--text-primary);
  background-color: var(--bg-primary);
  border: 2px solid var(--border-color);
  border-radius: $border-radius;
  transition: border-color $transition-speed ease, box-shadow $transition-speed ease;

  &:focus {
    outline: none;
    border-color: var(--color-accent-dark);
    box-shadow: 0 0 0 1px var(--color-accent-dark);
  }
}

.inputError {
  border-color: #e53e3e; /* Rojo de error */
}

.errorMessage {
  color: #e53e3e;
  font-size: 0.85rem;
  margin-top: 0.4rem;
  display: block;
}

.agreementGroup {
  margin: 1.5rem 0;
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;

  label {
    font-size: 0.9rem;
    color: var(--text-secondary);
    a {
      color: var(--color-accent-dark);
      text-decoration: underline;
      &:hover {
        color: var(--text-primary);
      }
    }
  }
  input[type="checkbox"] {
    flex-shrink: 0;
    width: 18px;
    height: 18px;
    accent-color: var(--color-accent);
  }
}

.submitContainer {
  text-align: center;
  margin-top: 2rem;
}

.submitButton {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem 3rem;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-on-accent);
  background-color: var(--color-accent-dark);
  border: none;
  border-radius: $border-radius;
  cursor: pointer;
  transition: all $transition-speed ease;
  width: 100%;
  
  &:hover:not(:disabled) {
    background-color: #3A7D44; /* Un tono más oscuro del verde principal */
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  }
  
  &:disabled {
    background-color: var(--border-color);
    cursor: not-allowed;
  }
}

.spinner {
    animation: spin 1s linear infinite;
    width: 24px;
    height: 24px;
    circle {
        stroke: var(--bg-primary);
        stroke-linecap: round;
        animation: dash 1.5s ease-in-out infinite;
    }
}
@keyframes spin { 100% { transform: rotate(360deg); } }

.successMessage {
  text-align: center;
  padding: 3rem 0;
  h3 {
    color: var(--color-accent-dark);
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  p {
    color: var(--text-secondary);
  }
}

.successIcon {
    font-size: 3rem;
    color: var(--color-accent);
    margin-bottom: 1rem;
    display: block;
    width: 3rem;
    height: 3rem;
    margin-left: auto;
    margin-right: auto;
}

```

---

## Archivo: `src\components\Contact\ContactPage.module.scss`

```
// src/pages/ContactPage.module.scss
@use '../../assets/scss/variables' as *;

.contactPageContainer {
  display: flex;
  flex-direction: column;
  background-color: var(--bg-primary);
}

// --- Hero de Contacto (Similar al HeroSection, pero más compacto) ---
.contactHero {
  position: relative;
  padding: 6rem 0 4rem 0;
  color: $brand-white;
  text-align: center;
  background-color: var(--color-dark-blue); // Fondo oscuro
  
  // Overlay sutil para asegurar el contraste del texto
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(rgba(26, 32, 44, 0.9), rgba(26, 32, 44, 0.7));
    z-index: 1;
  }
}

.heroContent {
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
}

.heroTitle {
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1rem;
  span {
    color: var(--color-accent); // Resalta el color de la marca
  }
}

.heroSubtitle {
  font-size: clamp(1rem, 2.5vw, 1.15rem);
  opacity: 0.9;
  max-width: 700px;
  margin: 0 auto;
}


// --- Sección de Ubidaciones ---
.locationsSection {
    padding: 5rem 0;
    background-color: var(--bg-secondary);
}

.locationsGrid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2.5rem;

    @media (min-width: $breakpoint-md) {
        // CAMBIO CLAVE: Usamos 2 columnas para equilibrar la UI con dos tarjetas.
        grid-template-columns: repeat(2, 1fr);
    }
}

.locationCard {
    background-color: var(--bg-primary);
    border-radius: $border-radius;
    padding: 2rem;
    box-shadow: 0 4px 15px rgba(0,0,0,0.08);
    border-top: 5px solid var(--border-color);
    transition: all $transition-speed ease;
    cursor: pointer;

    &:hover {
        transform: translateY(-5px);
        box-shadow: var(--shadow);
    }

    // Estilo para la tarjeta activa
    &.activeCard {
        border: 2px solid var(--color-accent-dark);
        border-top: 5px solid var(--color-accent-dark);
        background-color: #f0fff4; // Un tono muy claro de verde/gris
        transform: scale(1.02);
        box-shadow: 0 8px 25px rgba(110, 180, 63, 0.2);
    }


    h3 {
        font-size: 1.3rem;
        font-weight: 700;
        color: var(--color-dark-blue);
        margin-bottom: 0.75rem;
    }

    p {
        color: var(--text-secondary);
        font-size: 0.95rem;
        line-height: 1.6;
    }

    .contactInfo {
        margin-top: 1.25rem;
        font-weight: 600;
        color: var(--text-primary);
        
        a {
            color: var(--color-accent-dark);
            text-decoration: none;
            &:hover {
                text-decoration: underline;
            }
        }
    }
}

.mapPlaceholder {
    margin-top: 1rem;
    padding: 20px;
    background-color: transparent;
    border-radius: $border-radius;
    text-align: center;
    color: var(--text-secondary);
    font-style: italic;
    min-height: 450px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    iframe {
        width: 100%;
        height: 100%;
        border: none;
        border-radius: $border-radius;
    }
}


// --- Sección de Contacto Directo ---
.twoColumnTextSection {
    padding: 5rem 0;
    background-color: var(--bg-primary);
}

.twoColumnGrid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
    align-items: center;

    @media (min-width: $breakpoint-lg) {
        grid-template-columns: 1fr 1.2fr;
    }
}

.textBlock {
    h3 {
        font-size: 2rem;
        font-weight: 700;
        color: var(--text-primary);
        margin-bottom: 1rem;
    }
    p {
        color: var(--text-secondary);
        line-height: 1.7;
        margin-bottom: 1.5rem;
    }
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        li {
            padding: 0.5rem 0;
            strong {
                color: var(--color-dark-blue);
            }
            a {
                color: var(--color-accent-dark);
                text-decoration: none;
                &:hover { text-decoration: underline; }
            }
        }
    }
}

.imageBlock {
    img {
        width: 100%;
        height: auto;
        border-radius: $border-radius;
        box-shadow: var(--shadow);
    }
}

```

---

## Archivo: `src\components\espectaculares\EspectacularesHeader.module.scss`

```
// src/components/espectaculares/EspectacularesHeader.module.scss

// --- Importar variables globales si las tienes ---
// @import '../../assets/scss/variables.scss';

.espectacularesHeader {
    position: relative;
    height: 70vh;
    min-height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-align: center;
    overflow: hidden;
}

.videoOverlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(17, 24, 39, 0.7); // Overlay oscuro
    z-index: 1;
}

.backgroundVideo {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    transform: translate(-50%, -50%);
    z-index: 0;
    object-fit: cover;
}

.headerContainer {
    position: relative;
    z-index: 2;
    max-width: 800px;
}

.title {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 1.5rem;
}

.intro {
    font-size: clamp(1rem, 2.5vw, 1.25rem);
    max-width: 700px;
    margin: 0 auto 2.5rem;
    color: rgba(255, 255, 255, 0.9);
}

.ctaButton {
    display: inline-block;
    background-color: #9CCC3C; // Usando tu color de marca
    color: #1a202c;
    font-weight: 700;
    padding: 0.8rem 2.5rem;
    border-radius: 8px;
    text-decoration: none;
    transition: transform 0.2s ease-out, background-color 0.2s;
    
    &:hover {
        transform: scale(1.05);
        background-color: #8db635;
    }
}
```

---

## Archivo: `src\components\espectaculares\GaleriaEspectaculares.module.scss`

```
// src/components/espectaculares/GaleriaEspectaculares.module.scss
@import '../../assets/scss/variables.scss';

.gallerySection {
    padding: 6rem 0;
    background-color: $color-background-dark;
    color: white;
}

.sectionTitle {
    text-align: center;
    font-size: clamp(1.8rem, 4vw, 2.5rem);
    font-weight: 700;
    margin-bottom: 1rem;
}

.subtitle {
    text-align: center;
    font-size: 1.15rem;
    color: $color-text-muted-dark;
    max-width: 600px;
    margin: 0 auto 4rem;
}

.galleryGrid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 1.5rem;
}

.galleryCard {
    position: relative;
    border-radius: 8px;
    overflow: hidden;
    height: 350px;
    box-shadow: $shadow-lg;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.4s ease-out;
    }

    .cardOverlay {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 2.5rem 1.5rem 1.5rem;
        background: linear-gradient(to top, rgba(0,0,0,0.85), transparent);
        
        h3 {
            font-size: 1.2rem;
            font-weight: 600;
            transform: translateY(20px);
            opacity: 0;
            transition: transform 0.3s ease-out, opacity 0.3s;
        }
    }
    
    &:hover {
        img {
            transform: scale(1.05);
        }
        .cardOverlay h3 {
            transform: translateY(0);
            opacity: 1;
        }
    }
}
```

---

## Archivo: `src\components\espectaculares\IntroEspectaculares.module.scss`

```
// src/components/espectaculares/IntroEspectaculares.module.scss

.introSection {
    padding: 6rem 0;
    background-color: #f9fafb; // Un gris muy claro
}

.sectionTitle {
    text-align: center;
    font-size: clamp(1.8rem, 4vw, 2.5rem);
    font-weight: 700;
    max-width: 750px;
    margin: 0 auto 4rem;
    line-height: 1.3;
}

.pointsGrid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.pointCard {
    background-color: #ffffff;
    padding: 2.5rem 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1);
    text-align: center;

    h3 {
        font-size: 1.25rem;
        font-weight: 600;
        margin-bottom: 1rem;
    }

    p {
        color: #4b5563; // Gris oscuro
        line-height: 1.6;
    }
}

.iconWrapper {
    font-size: 2.5rem;
    color: #9CCC3C; // Color de marca
    margin: 0 auto 1.5rem;
    width: 60px;
    height: 60px;
    background-color: #f0fdf4; // Verde muy claro
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}
```

---

## Archivo: `src\components\espectaculares\ProcesoEspectaculares.module.scss`

```
// src/components/espectaculares/ProcesoEspectaculares.module.scss
@import '../../assets/scss/variables.scss'; // Asegúrate de que esta ruta sea correcta

.workProcessSection {
    padding: 6rem 0;
    background-color: $color-background-light; // Usando tus variables de color
}

.sectionTitle {
    text-align: center;
    font-size: clamp(1.8rem, 4vw, 2.5rem);
    font-weight: 700;
    max-width: 750px;
    margin: 0 auto 1rem;
}

.subtitle {
    text-align: center;
    font-size: 1.15rem;
    color: $color-text-secondary;
    max-width: 800px;
    margin: 0 auto 4rem;
}

.processLayout {
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 3rem;
    background-color: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: $shadow-lg;

    @media (max-width: 992px) {
        grid-template-columns: 1fr;
    }
}

.stepNavigator {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.stepButton {
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    padding: 1.25rem;
    border-radius: 8px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    text-align: left;
    position: relative;
    transition: background-color 0.2s ease-in-out;
    
    &:hover:not(.active) {
        background-color: $color-background-light;
    }

    &.active {
        color: $color-text-primary;
    }
}

.activeBg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: $color-primary-light;
    border-radius: 8px;
    z-index: 0;
}

.stepIcon, .stepTitleNav {
    position: relative;
    z-index: 1;
}

.stepIcon {
    font-size: 1.5rem;
    color: $color-primary;
}

.stepTitleNav {
    font-size: 1rem;
    font-weight: 600;
}

.contentPanel {
    min-height: 450px;
    overflow: hidden;
    position: relative;
}

.stepTitle {
    font-size: 1.75rem;
    font-weight: 700;
    margin-bottom: 1rem;
}

.stepDescription {
    font-size: 1.1rem;
    line-height: 1.7;
    color: $color-text-secondary;
    margin-bottom: 2rem;
    max-width: 90%;
}

.imageWrapper {
    width: 100%;
    height: 250px;
    border-radius: 8px;
    overflow: hidden;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
```

---

## Archivo: `src\components\espectaculares\TiposEspectaculares.module.scss`

```
// src/components/espectaculares/TiposEspectaculares.module.scss

.tiposSection {
    padding: 6rem 0;
}

.tabsNav {
    display: flex;
    justify-content: center;
    border-bottom: 2px solid #e5e7eb;
    margin-bottom: 4rem;
}

.tabButton {
    padding: 1rem 2rem;
    border: none;
    background: none;
    cursor: pointer;
    font-size: 1.1rem;
    font-weight: 600;
    color: #6b7280;
    position: relative;
    transition: color 0.3s;

    &:hover {
        color: #111827;
    }

    &.active {
        color: #111827;
        &::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: #9CCC3C; // Color de marca
        }
    }
}

.contentGrid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
}

.textContainer {
    h3 {
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 1.5rem;
    }
    p {
        line-height: 1.7;
        color: #374151;
        margin-bottom: 2rem;
    }
    ul {
        list-style: none;
        padding: 0;
        li {
            padding-left: 2rem;
            position: relative;
            margin-bottom: 1rem;
            &::before {
                content: '✔';
                position: absolute;
                left: 0;
                color: #9CCC3C; // Color de marca
                font-weight: bold;
            }
        }
    }
}

.imageContainer {
    img {
        width: 100%;
        height: 400px;
        object-fit: cover;
        border-radius: 12px;
        box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1);
    }
    @media (max-width: 768px) {
        order: -1; // Imagen arriba en móvil
        margin-bottom: 2rem;
    }
}
```

---

## Archivo: `src\components\espectaculares\VentajasTecnicas.module.scss`

```
// src/components/espectaculares/VentajasTecnicas.module.scss
@import '../../assets/scss/variables.scss';

.ventajasSection {
    padding: 6rem 0;
}

.ventajasGrid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    gap: 4rem;

    @media (max-width: 992px) {
        grid-template-columns: 1fr;
    }
}

.textColumn {
    @media (max-width: 992px) {
        order: 2;
    }
}

.sectionTitle {
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
}

.subtitle {
    font-size: 1.15rem;
    color: $color-text-secondary;
    margin-bottom: 3rem;
}

.advantagesList {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.advantageItem {
    display: flex;
    gap: 1.5rem;
    align-items: flex-start;
}

.iconWrapper {
    flex-shrink: 0;
    font-size: 1.5rem;
    color: $color-primary;
    background-color: $color-primary-light;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.itemContent {
    h3 {
        font-size: 1.2rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
    }
    p {
        color: $color-text-secondary;
        line-height: 1.6;
    }
}

.imageColumn {
    img {
        width: 100%;
        height: 100%;
        max-height: 500px;
        object-fit: cover;
        border-radius: 12px;
        box-shadow: $shadow-xl;
    }
    @media (max-width: 992px) {
        order: 1;
        margin-bottom: 3rem;
    }
}
```

---

## Archivo: `src\components\home\BlogHighlight.module.scss`

```
// src/components/home/BlogHighlight.module.scss

@use '../../assets/scss/variables' as *;

.blogSection {
    padding: 6rem 0;
    background-color: $brand-white; // Fondo blanco para contrastar
}

.sectionTitle {
    text-align: center;
    font-size: 2.5rem;
    font-weight: 800;
    color: $brand-gray-dark;
    margin-bottom: 1rem;
}

.subtitle {
    text-align: center;
    font-size: 1.1rem;
    color: lighten($brand-gray-dark, 40%);
    max-width: 600px;
    margin: 0 auto 4rem;
}

.postsGrid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2.5rem;
}

.postCard {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    background-color: $brand-white;
    border-radius: $border-radius;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
    border: 1px solid $brand-gray-medium;
    overflow: hidden;
    transition: transform $transition-speed ease, box-shadow $transition-speed ease;

    &:hover {
        transform: translateY(-8px);
        box-shadow: 0 12px 20px rgba(0,0,0,0.08);

        .cardCta {
            color: $brand-green-bright; // CTA más brillante en hover
        }
    }
}

.cardImage {
    img {
        width: 100%;
        height: 220px;
        object-fit: cover;
    }
}

.cardContent {
    padding: 1.75rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1; // Asegura que el contenido llene el espacio
}

.cardCategory {
    display: inline-block;
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
    color: $brand-green-dark;
    margin-bottom: 0.75rem;
}

.cardTitle {
    font-size: 1.3rem;
    font-weight: 700;
    color: $brand-gray-dark;
    line-height: 1.4;
    margin-bottom: 0.75rem;
    // Evita que el título se estire demasiado
    flex-grow: 1; 
}

.cardExcerpt {
    font-size: 1rem;
    line-height: 1.6;
    color: lighten($brand-gray-dark, 30%);
    margin-bottom: 1.5rem;
}

.cardCta {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 600;
    color: $brand-green-medium;
    margin-top: auto; // Empuja el CTA al final de la tarjeta
    transition: color $transition-speed ease;

    svg {
        transition: transform $transition-speed ease;
    }

    &:hover svg {
        transform: translateX(4px);
    }
}


// --- Media Queries ---
@media (max-width: $breakpoint-md) {
    .blogSection {
        padding: 4rem 0;
    }
    .sectionTitle {
        font-size: 2rem;
    }
    .postsGrid {
        grid-template-columns: 1fr; // Una sola columna en móvil
        gap: 2rem;
    }
}
```

---

## Archivo: `src\components\home\ClientLogoBar.module.scss`

```
// src/components/home/ClientLogoBar.module.scss

// --- ¡Importando tus variables globales como solicitaste! ---
@use '../../assets/scss/variables' as *;

.clientLogoSection {
    padding: 5rem 0;
    background-color: $brand-gray-light; // Usando tu variable de color de fondo
}

.header {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 3.5rem;
}

.headerIcon {
    font-size: 2.5rem;
    color: $brand-green-dark; // Usando tu variable de color
}

.title {
    font-size: 1.8rem;
    font-weight: 700;
    color: $brand-gray-dark; // Usando tu variable para texto oscuro
    text-align: center;
}

.logoGrid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 4rem; // Espacio generoso entre logos
}

.logoWrapper {
    // Estilos para el contenedor de cada logo
    svg {
        height: 40px;
        width: auto;
        fill: #9ca3af; // Un gris neutro para el estado inicial
        transition: fill $transition-speed ease-in-out; // Usando tu variable de transición
    }

    &:hover {
        svg {
            fill: $brand-gray-dark; // Se oscurece al pasar el mouse, usando tu variable
        }
    }
}

// --- Media Queries usando tus breakpoints ---
@media (max-width: $breakpoint-md) {
    .clientLogoSection {
        padding: 4rem 0;
    }

    .header {
        flex-direction: column;
        gap: 0.5rem;
        margin-bottom: 3rem;
    }

    .title {
        font-size: 1.5rem;
    }

    .logoGrid {
        gap: 3rem 2rem; // Menos espacio en pantallas pequeñas
    }

    .logoWrapper svg {
        height: 35px;
    }
}
```

---

## Archivo: `src\components\home\FinalCTA.module.scss`

```
@use '../../assets/scss/variables' as *;

.ctaSection {
  padding: 6rem 1.5rem;
  background-color: var(--text-primary); // Fondo oscuro para alto contraste
  color: var(--bg-primary); // Texto claro
  text-align: center;
  margin-top: 4rem; // Separador de la sección anterior
}

.ctaContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  line-height: 1.2;
  max-width: 700px;
  margin-bottom: 1.5rem;
}

.subtitle {
  font-size: clamp(1rem, 2.5vw, 1.15rem);
  max-width: 600px;
  margin-bottom: 2.5rem;
  color: var(--bg-primary);
  opacity: 0.9;
}

.ctaButton {
  display: inline-block;
  background-color: var(--color-accent);
  color: var(--text-on-accent);
  padding: 1.2rem 3.5rem; // Botón grande y notable
  border-radius: $border-radius;
  font-weight: 700;
  font-size: 1.1rem;
  text-decoration: none;
  border: 2px solid var(--color-accent);
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  transition: all $transition-speed ease-in-out;

  &:hover {
    background-color: var(--color-accent-dark);
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 15px 35px rgba(0,0,0,0.35);
  }
}

```

---

## Archivo: `src\components\home\HeroSection.module.scss`

```
@use '../../assets/scss/variables' as *;

.heroSection {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 90vh; // Más imponente
  padding: 6rem 0;
  color: $brand-white;
  text-align: center;
  background-image: url('./estructura-para-techo.jpg');
  background-size: cover;
  background-position: center;
  
  // Overlay oscuro para contraste
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(rgba(26, 32, 44, 0.7), rgba(26, 32, 44, 0.7));
  }
}

.heroContainer {
  position: relative; // Para que esté sobre el overlay
  z-index: 2;
}

.heroContent {
  max-width: 850px;
  margin: 0 auto;
}

.title {
  font-family: 'Poppins', sans-serif; // O la fuente que elijas para títulos
  font-size: clamp(2.2rem, 5vw, 3.5rem); // Título grande y responsivo
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  text-shadow: 0 2px 10px rgba(0,0,0,0.5);
}

.subtitle {
  font-size: clamp(1rem, 2.5vw, 1.15rem);
  max-width: 700px;
  margin: 0 auto 2.5rem auto;
  line-height: 1.7;
  opacity: 0.9;
}

.ctaContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.primaryCta,
.secondaryCta {
  padding: 0.9rem 2.5rem;
  border-radius: $border-radius;
  font-weight: 700;
  font-size: 1rem;
  text-decoration: none;
  transition: all $transition-speed ease;
  border: 2px solid transparent;
  width: 100%;
  max-width: 300px; // Ancho máximo en móvil
}

.primaryCta {
  background-color: var(--color-accent);
  color: var(--text-on-accent);
  box-shadow: 0 5px 20px rgba(0,0,0,0.2);

  &:hover {
    background-color: var(--color-accent-dark);
    transform: translateY(-3px);
  }
}

.secondaryCta {
  background-color: transparent;
  color: $brand-white;
  border-color: $brand-white;

  &:hover {
    background-color: $brand-white;
    color: var(--text-primary);
    transform: translateY(-3px);
  }
}
.eyebrow {
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--color-accent); // Usa tu color de acento
  margin-bottom: 1rem;
}


// --- Media Query para Desktop (Mobile-First) ---
@media (min-width: $breakpoint-md) {
  .heroSection {
    text-align: left;
  }
  
  .heroContent {
    margin: 0;
  }

  .subtitle {
    margin: 0 0 2.5rem 0;
  }

  .ctaContainer {
    flex-direction: row;
    justify-content: flex-start;
  }
  
  .primaryCta,
  .secondaryCta {
    width: auto;
  }
}

```

---

## Archivo: `src\components\home\ProjectsHighlight.module.scss`

```
@use '../../assets/scss/variables' as *;

.projectsSection {
  padding: 5rem 0;
  background-color: var(--bg-primary);
}

.sectionTitle {
  text-align: center;
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 3.5rem;
}

.projectsGrid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;

  @media (min-width: 900px) { // Un breakpoint intermedio para 2 columnas
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) { // 3 columnas solo en pantallas grandes
    grid-template-columns: repeat(3, 1fr);
  }
}

.projectCard {
  background-color: var(--bg-secondary);
  border-radius: $border-radius;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0,0,0,0.06);
  border: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  transition: transform $transition-speed ease, box-shadow $transition-speed ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow);
  }
}

.cardImage {
  width: 100%;
  aspect-ratio: 4 / 3; // Proporción de imagen consistente

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.cardContent {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1; // Asegura que el contenido llene el espacio
}

.cardTitle {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
}

.cardLocation {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
}

.cardDescription {
  color: var(--text-secondary);
  line-height: 1.7;
  flex-grow: 1; // Empuja el CTA al fondo
  margin-bottom: 1.5rem;

  b { // Estiliza las etiquetas <b> inyectadas
    color: var(--text-primary);
    font-weight: 600;
  }
}

.cardCta {
  color: var(--color-accent-dark);
  font-weight: 700;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  align-self: flex-start; // Alinea el CTA a la izquierda
  
  span {
    transition: transform $transition-speed ease;
  }
  
  &:hover span {
    transform: translateX(5px);
  }
}

```

---

## Archivo: `src\components\home\ServicesOverview.module.scss`

```
@use '../../assets/scss/variables' as *;

.servicesSection {
  padding: 5rem 0;
  background-color: var(--bg-primary);
}

.sectionTitle {
  text-align: center;
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 3.5rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.servicesGrid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: $breakpoint-md) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.serviceCard {
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: $border-radius;
  padding: 2.5rem 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  transition: transform $transition-speed ease, box-shadow $transition-speed ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow);
  }
}

.iconWrapper {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(110, 180, 63, 0.1); // Usando un color RGB del verde
  
  svg {
    width: 32px;
    height: 32px;
    color: var(--color-accent-dark);
  }
}

.cardTitle {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
}

.cardDescription {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex-grow: 1; // Empuja el CTA hacia abajo
}

.cardCta {
  color: var(--color-accent-dark);
  font-weight: 700;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  
  span {
    transition: transform $transition-speed ease;
  }
  
  &:hover span {
    transform: translateX(5px);
  }
}

```

---

## Archivo: `src\components\home\Testimonials.module.scss`

```
@use '../../assets/scss/variables' as *;

.testimonialsSection {
  padding: 5rem 0;
  background-color: var(--bg-secondary);
}

.sectionTitle {
  text-align: center;
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 3.5rem;
}

.carouselContainer {
  max-width: 800px;
  margin: 0 auto;
}

.testimonialCard {
  text-align: center;
  padding: 2rem;
  display: flex !important; // Important to override slick styles
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.quote {
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  font-style: italic;
  font-weight: 500;
  color: var(--text-primary);
  line-height: 1.6;
  max-width: 650px;
  margin-bottom: 2.5rem;
}

.authorInfo {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.authorImage {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--border-color);
}

.authorDetails {
  display: flex;
  flex-direction: column;
}

.authorName {
  font-weight: 700;
  font-size: 1.1rem;
  color: var(--text-primary);
}

.authorTitle {
  font-size: 0.9rem;
  color: var(--text-secondary);
}


// --- Estilos Globales para personalizar el carrusel ---
// Usamos :global() para que SCSS Modules no modifique estos selectores
:global(.slick-dots li button:before) {
  font-size: 12px;
  color: var(--border-color);
  opacity: 1;
  transition: color $transition-speed ease;
}

:global(.slick-dots li.slick-active button:before) {
  color: var(--color-accent) !important;
}

:global(.slick-dots li button:hover:before) {
  color: var(--color-accent-dark);
}

```

---

## Archivo: `src\components\home\TrustBar.module.scss`

```
@use '../../assets/scss/variables' as *;

.trustBarSection {
  // Un fondo sutilmente diferente para separar del resto
  background-color: var(--bg-secondary);
  padding: 2.5rem 0;
  border-bottom: 1px solid var(--border-color);
  box-shadow: 0 5px 15px rgba(0,0,0,0.03);
}

.trustBarContainer {
  display: grid;
  // Mobile-first: 2 columnas para no ocupar demasiado espacio vertical
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  text-align: center;
}

.trustItem {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.value {
  font-size: clamp(2rem, 6vw, 2.8rem);
  font-weight: 700;
  color: var(--color-accent);
  line-height: 1.1;
}

.label {
  font-size: clamp(0.9rem, 2.5vw, 1rem);
  font-weight: 500;
  color: var(--text-secondary);
  margin-top: 0.25rem;
}

// Media Query para Desktop
@media (min-width: $breakpoint-md) {
  .trustBarContainer {
    // 4 columnas en pantallas más grandes
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem; // Reducimos el espacio para un look más compacto
  }

  .trustItem {
    position: relative;
    
    // Añadimos una línea separadora sutil en desktop
    &:not(:last-child)::after {
      content: '';
      position: absolute;
      top: 10%;
      right: -0.5rem;
      height: 80%;
      width: 1px;
      background-color: var(--border-color);
      opacity: 0.7;
    }
  }
}

```

---

## Archivo: `src\components\home\ValueProposition.module.scss`

```
@use '../../assets/scss/variables' as *;

.valueSection {
  padding: 5rem 0;
  background-color: var(--bg-secondary);
}

.sectionTitle {
  text-align: center;
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 4rem;
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;
}

.gridContainer {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;

  @media (min-width: $breakpoint-md) {
    grid-template-columns: repeat(2, 1fr);
    gap: 4rem;
  }
}

.imageColumn {
  img {
    width: 100%;
    height: auto;
    max-height: 500px;
    object-fit: cover;
    border-radius: $border-radius;
    box-shadow: var(--shadow);
  }
}

.textColumn {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.propositionItem {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
}

.iconWrapper {
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(110, 180, 63, 0.1);

  svg {
    width: 28px;
    height: 28px;
    color: var(--color-accent-dark);
  }
}

.propositionTitle {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.propositionText {
  color: var(--text-secondary);
  line-height: 1.6;
}

```

---

## Archivo: `src\components\home\WorkProcess.module.scss`

```
// src/components/home/WorkProcess.module.scss
@use 'sass:color';
@use '../../assets/scss/variables' as *;

.workProcessSection {
    padding: 6rem 0;
    background-color: $brand-gray-light;
}

.sectionTitle, .subtitle {
    text-align: center;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
}

.sectionTitle {
    font-size: 2.5rem;
    font-weight: 800;
    color: $brand-gray-dark;
    margin-bottom: 1rem;
}

.subtitle {
    font-size: 1.1rem;
    color: lighten($brand-gray-dark, 40%);
    margin-bottom: 4rem;
}

.processLayout {
    display: grid;
    grid-template-columns: 1fr 2.5fr; // Ratio para las columnas
    gap: 3rem;
    align-items: flex-start;
}

// --- Columna Izquierda: Navegador ---
.stepNavigator {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: sticky;
    top: 120px;
}

.stepButton {
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    padding: 1.25rem 1.5rem;
    background-color: transparent;
    border: 1px solid $brand-gray-medium;
    border-radius: $border-radius;
    cursor: pointer;
    text-align: left;
    position: relative;
    transition: background-color $transition-speed ease;

    &:hover:not(.active) {
        background-color: $brand-white;
    }
}

.activeBg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: $brand-white;
    border-radius: $border-radius;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.07);
    z-index: 1;
}

.stepNumber, .stepTitleNav {
    position: relative;
    z-index: 2;
    transition: color $transition-speed ease;
}

.stepNumber {
    font-size: 1rem;
    font-weight: 700;
    color: $brand-green-dark;
}

.stepTitleNav {
    font-size: 1.1rem;
    font-weight: 600;
    color: lighten($brand-gray-dark, 20%);
}

.stepButton.active {
    border-color: transparent;
    .stepTitleNav {
        color: $brand-gray-dark;
    }
}

// --- Columna Derecha: Contenido ---
.contentPanel {
    background-color: $brand-white;
    border-radius: $border-radius;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.07);
    padding: 2.5rem;
    border: 1px solid $brand-gray-medium;
}

.contentHeader {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
}

.iconWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 60px;
    height: 60px;
    background-color: lighten($brand-green-bright, 35%);
    color: $brand-green-dark;
    border-radius: 50%;
    
    svg {
        width: 28px;
        height: 28px;
    }
}

.stepTitle {
    font-size: 1.8rem;
    font-weight: 700;
    color: $brand-gray-dark;
}

.stepDescription {
    font-size: 1.1rem;
    line-height: 1.7;
    color: lighten($brand-gray-dark, 30%);
    margin-bottom: 2rem;
}

.imageWrapper {
    img {
        width: 100%;
        height: 300px;
        object-fit: cover;
        border-radius: $border-radius;
    }
}


// --- Media Queries para responsividad ---
@media (max-width: $breakpoint-lg) {
    .processLayout {
        grid-template-columns: 1fr;
    }
    .stepNavigator {
        position: static;
        flex-direction: row; // Los botones se ponen en horizontal
        overflow-x: auto;   // Y se pueden scrollear
        padding-bottom: 1rem;
    }
    .stepButton {
        flex-shrink: 0;
    }
}

@media (max-width: $breakpoint-md) {
    .sectionTitle {
        font-size: 2rem;
    }
    .contentPanel {
        padding: 1.5rem;
    }
    .stepTitle {
        font-size: 1.5rem;
    }
}
```

---

## Archivo: `src\components\projects\ProjectsGrid.module.scss`

```
@use '../../assets/scss/variables' as *;

.projectsSection {
    padding: 5rem 0 6rem 0;
    background-color: var(--bg-primary);
}

// --- Filtros ---
.filterNav {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 3.5rem;
}

.filterButton {
    padding: 0.75rem 1.75rem;
    font-size: 1rem;
    font-weight: 600;
    color: var(--text-secondary);
    background-color: transparent;
    border: 2px solid var(--border-color);
    border-radius: 50px;
    cursor: pointer;
    transition: all $transition-speed ease;

    &:hover {
        background-color: var(--bg-secondary);
        color: var(--text-primary);
        border-color: var(--color-accent-dark);
    }

    &.active {
        background-color: var(--color-accent-dark);
        color: var(--text-on-accent);
        border-color: var(--color-accent-dark);
    }
}

// --- Galería ---
.projectsGrid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2.5rem;

    @media (min-width: 700px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
    }
}

.projectCard {
    background-color: var(--bg-secondary);
    border-radius: $border-radius;
    overflow: hidden;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
}

.cardImage {
    width: 100%;
    aspect-ratio: 16 / 10;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

.cardContent {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}

.cardCategory {
    font-size: 0.8rem;
    font-weight: 700;
    color: var(--color-accent);
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 0.5rem;
}

.cardTitle {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 1rem;
    line-height: 1.4;
}

.cardMetric {
    background-color: var(--bg-primary);
    border-left: 3px solid var(--color-accent);
    padding: 0.75rem 1rem;
    margin-bottom: 1.5rem;
    font-weight: 600;
    color: var(--text-secondary);
    font-style: italic;
    flex-grow: 1;
}

.cardCta {
    color: var(--color-accent-dark);
    font-weight: 700;
    text-decoration: none;
    align-self: flex-start;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    
    span {
        transition: transform $transition-speed ease;
    }
    
    &:hover span {
        transform: translateX(5px);
    }
}

```

---

## Archivo: `src\components\projects\ProjectsHeader.module.scss`

```
// src/components/projects/ProjectsHeader.module.scss

@use '../../assets/scss/variables' as *;

.projectsHeader {
  padding: 8rem 0; // Aumentamos el padding para que el video se vea mejor
  position: relative; // Necesario para posicionar el video y el overlay
  overflow: hidden; // Oculta cualquier parte del video que se desborde
  text-align: center;
}

.videoOverlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(10, 25, 41, 0.6); // Overlay oscuro semitransparente
  z-index: 1; // Se coloca entre el video y el texto
}

.backgroundVideo {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover; // Cubre todo el espacio sin deformarse
  transform: translate(-50%, -50%);
  z-index: 0; // Se coloca en el fondo
}

.headerContainer {
  position: relative; // Necesario para que el texto se coloque sobre el overlay
  z-index: 2; // El z-index más alto para que el texto esté al frente
  max-width: 900px;
  margin: 0 auto;
}

.title {
  font-size: clamp(2.2rem, 5vw, 3.2rem);
  font-weight: 700;
  color: #FFFFFF; // Cambiamos el color del texto a blanco para que contraste
  line-height: 1.2;
  margin-bottom: 1.5rem;
}

.intro {
  font-size: 1.15rem;
  color: #FFFFFF;
  // color: var(--text-light);
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto;
}
```

---

## Archivo: `src\components\services\CTAConsultation.module.scss`

```
@use '../../assets/scss/variables' as *;

.ctaSection {
    padding: 6rem 0;
    background-color: var(--bg-primary);
}

.ctaGrid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 4rem;
    align-items: center;

    @media (min-width: 992px) {
        grid-template-columns: 1fr 1fr;
    }
}

// --- Columna Izquierda: Oferta de Valor ---
.valueOffer {
    text-align: center;
    @media (min-width: 992px) {
        text-align: left;
    }
}

.offerTitle {
    font-size: clamp(2rem, 5vw, 2.8rem);
    font-weight: 700;
    line-height: 1.2;
    color: var(--text-primary);
    margin-bottom: 1.5rem;
}

.offerText {
    font-size: 1.1rem;
    color: var(--text-secondary);
    line-height: 1.8;
    margin-bottom: 2.5rem;
    
    strong {
        color: var(--color-accent-dark);
    }
}

.ctaButton {
    display: inline-block;
    background-color: var(--color-accent);
    color: var(--text-on-accent);
    padding: 1.1rem 3rem;
    border-radius: $border-radius;
    font-weight: 700;
    font-size: 1.1rem;
    text-decoration: none;
    box-shadow: 0 8px 25px rgba(0,0,0,0.1);
    transition: all $transition-speed ease;

    &:hover {
        background-color: var(--color-accent-dark);
        transform: translateY(-4px) scale(1.03);
        box-shadow: var(--shadow);
    }
}

// --- Columna Derecha: Formulario ---
.formColumn {
    background-color: var(--bg-secondary);
    padding: 2.5rem;
    border-radius: $border-radius;
    box-shadow: var(--shadow);
    border: 1px solid var(--border-color);
    min-height: 450px; // Evita saltos de layout al mostrar el mensaje de éxito

    h4 {
        font-size: 1.4rem;
        font-weight: 700;
        text-align: center;
        margin-bottom: 2rem;
    }
}

.consultationForm {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
}

.inputGroup {
    position: relative;
}

input, textarea {
    width: 100%;
    padding: 1rem 1.2rem;
    font-size: 1rem;
    color: var(--text-primary);
    background-color: var(--bg-primary);
    border: 2px solid var(--border-color);
    border-radius: $border-radius;
    transition: border-color $transition-speed ease;

    &:focus {
        outline: none;
        border-color: var(--color-accent);
    }
}

textarea {
    resize: vertical;
    min-height: 100px;
}

.inputError {
    border-color: #e53e3e; // Color de error
}

.errorMessage {
    color: #e53e3e;
    font-size: 0.85rem;
    margin-top: 0.25rem;
    font-weight: 500;
}

.submitButton {
    background-color: var(--color-accent-dark);
    color: var(--text-on-accent);
    padding: 1rem;
    border: none;
    border-radius: $border-radius;
    font-size: 1.1rem;
    font-weight: 700;
    cursor: pointer;
    transition: background-color $transition-speed ease;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;

    &:hover:not(:disabled) {
        background-color: #315b37; // Un verde más oscuro
    }

    &:disabled {
        background-color: var(--text-secondary);
        cursor: not-allowed;
    }
}

// --- Estados del Formulario ---
.spinner {
    animation: spin 1s linear infinite;
    width: 24px;
    height: 24px;
    circle {
        stroke: var(--bg-primary);
        stroke-linecap: round;
        animation: dash 1.5s ease-in-out infinite;
    }
}
@keyframes spin { 100% { transform: rotate(360deg); } }
@keyframes dash {
  0% { stroke-dasharray: 1, 150; stroke-dashoffset: 0; }
  50% { stroke-dasharray: 90, 150; stroke-dashoffset: -35; }
  100% { stroke-dasharray: 90, 150; stroke-dashoffset: -124; }
}

.successMessage {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100%;
    min-height: 400px;

    .successIcon {
        width: 80px;
        height: 80px;
        color: var(--color-accent);
        margin-bottom: 1.5rem;
    }

    h3 {
        font-size: 1.8rem;
        color: var(--text-primary);
        margin-bottom: 0.5rem;
    }

    p {
        color: var(--text-secondary);
        max-width: 350px;
    }
}

```

---

## Archivo: `src\components\services\ServiceDetailTabs.module.scss`

```
@use '../../assets/scss/variables' as *;

.tabsSection {
    padding: 5rem 0;
    background-color: var(--bg-primary);
}

.tabsNav {
    display: flex;
    justify-content: center;
    border-bottom: 2px solid var(--border-color);
    margin-bottom: 3rem;
    flex-wrap: wrap;
    gap: 1rem;
}

.tabButton {
    padding: 1rem 2rem;
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--text-secondary);
    background-color: transparent;
    border: none;
    border-bottom: 4px solid transparent;
    cursor: pointer;
    position: relative;
    top: 2px; // Alinea el borde inferior con el borde del nav
    transition: color $transition-speed ease, border-color $transition-speed ease;

    &:hover {
        color: var(--text-primary);
    }

    &.active {
        color: var(--color-accent-dark);
        border-color: var(--color-accent-dark);
    }
}

.tabsContent {
    max-width: 850px;
    margin: 0 auto;
}

.contentTitle {
    font-size: clamp(1.6rem, 4vw, 2.2rem);
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 1.5rem;
}

.contentText {
    font-size: 1.1rem;
    color: var(--text-secondary);
    line-height: 1.8;
    margin-bottom: 2.5rem;
}

.benefits {
    background-color: var(--bg-secondary);
    border-radius: $border-radius;
    padding: 2rem;
    border: 1px solid var(--border-color);

    h4 {
        font-size: 1.2rem;
        font-weight: 700;
        color: var(--text-primary);
        margin-bottom: 1.5rem;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    li {
        display: flex;
        align-items: flex-start;
        gap: 1rem;
        color: var(--text-secondary);

        svg {
            flex-shrink: 0;
            width: 24px;
            height: 24px;
            color: var(--color-accent);
            margin-top: 2px;
        }
    }
}

```

---

## Archivo: `src\components\services\ServicesHeader.module.scss`

```
@use '../../assets/scss/variables' as *;

.servicesHeader {
  padding: 6rem 0;
  position: relative;
  background-image: url('http://alfa74.com.mx/wp-content/uploads/2016/01/iberespacio.jpg');
  background-size: cover;
  background-position: center;
  color: #FFFFFF;
}

.headerOverlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(10, 25, 41, 0.9) 0%, rgba(10, 25, 41, 0.6) 100%);
  z-index: 1;
}

.headerGrid {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  gap: 3rem;

  @media (min-width: $breakpoint-lg) {
    grid-template-columns: 2fr 1fr;
    gap: 4rem;
  }
}

.mainContent {
  text-align: left;
}

.title {
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
}

.intro {
  font-size: 1.15rem;
  color: var(--text-light);
  line-height: 1.7;
  max-width: 650px;
}

.trustSignals {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 12px;
  backdrop-filter: blur(5px);
}

.signalItem {
  display: flex;
  align-items: center;
  text-align: left;
  gap: 1.5rem;
  
  p {
    color: var(--text-light);
    line-height: 1.6;
    margin: 0;
  }
}

.iconWrapper {
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);

  svg {
    width: 26px;
    height: 26px;
    color: var(--color-accent);
  }
}
```

---

## Archivo: `src\components\services\TechnicalFAQs.module.scss`

```
@use '../../assets/scss/variables' as *;

.faqSection {
    padding: 5rem 0;
    background-color: var(--bg-secondary);
}

.sectionTitle {
    text-align: center;
    font-size: clamp(1.8rem, 4vw, 2.5rem);
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 3.5rem;
}

.faqContainer {
    max-width: 850px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.faqItem {
    background-color: var(--bg-primary);
    border: 1px solid var(--border-color);
    border-radius: $border-radius;
    padding: 1.5rem 2rem;
    transition: background-color $transition-speed ease;

    &:hover {
        background-color: var(--bg-secondary);
    }
}

.questionButton {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background: none;
    border: none;
    cursor: pointer;
    text-align: left;
    gap: 1.5rem;
}

.questionText {
    font-size: 1.15rem;
    font-weight: 600;
    color: var(--text-primary);
    line-height: 1.5;
}

.iconWrapper {
    flex-shrink: 0;
    color: var(--color-accent-dark);

    svg {
        width: 20px;
        height: 20px;
    }
}

.answerPanel {
    overflow: hidden;

    p {
        color: var(--text-secondary);
        line-height: 1.8;
        padding-right: 2rem; // Espacio para que no se pegue al borde
    }
}

```

---

## Archivo: `src\index.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## Archivo: `src\pages\ContactPage.module.scss`

```
// src/pages/ContactPage.module.scss
@use '../assets/scss/variables' as *;

.contactPageContainer {
  display: flex;
  flex-direction: column;
  background-color: var(--bg-primary);
}

// --- Hero de Contacto (Similar al HeroSection, pero más compacto) ---
.contactHero {
  position: relative;
  padding: 6rem 0 4rem 0;
  color: $brand-white;
  text-align: center;
  background-color: var(--color-dark-blue); // Fondo oscuro
  
  // Overlay sutil para asegurar el contraste del texto
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(rgba(26, 32, 44, 0.9), rgba(26, 32, 44, 0.7));
    z-index: 1;
  }
}

.heroContent {
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
}

.heroTitle {
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1rem;
  span {
    color: var(--color-accent); // Resalta el color de la marca
  }
}

.heroSubtitle {
  font-size: clamp(1rem, 2.5vw, 1.15rem);
  opacity: 0.9;
  max-width: 700px;
  margin: 0 auto;
}


// --- Sección de Ubidaciones ---
.locationsSection {
    padding: 5rem 0;
    background-color: var(--bg-secondary);
}

.locationsGrid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2.5rem;

    @media (min-width: $breakpoint-md) {
        grid-template-columns: repeat(2, 1fr);
    }
}

.locationCard {
    background-color: var(--bg-primary);
    border-radius: $border-radius;
    padding: 2rem;
    box-shadow: 0 4px 15px rgba(0,0,0,0.08);
    border-top: 5px solid var(--border-color);
    transition: all $transition-speed ease;
    cursor: pointer;

    &:hover {
        transform: translateY(-5px);
        box-shadow: var(--shadow);
    }

    // Estilo para la tarjeta activa
    &.activeCard {
        border: 2px solid var(--color-accent-dark);
        border-top: 5px solid var(--color-accent-dark);
        background-color: #f0fff4; // Un tono muy claro de verde/gris
        transform: scale(1.02);
        box-shadow: 0 8px 25px rgba(110, 180, 63, 0.2);
    }


    h3 {
        font-size: 1.3rem;
        font-weight: 700;
        color: var(--color-dark-blue);
        margin-bottom: 0.75rem;
    }

    p {
        color: var(--text-secondary);
        font-size: 0.95rem;
        line-height: 1.6;
    }

    .contactInfo {
        margin-top: 1.25rem;
        font-weight: 600;
        color: var(--text-primary);
        
        a {
            color: var(--color-accent-dark);
            text-decoration: none;
            &:hover {
                text-decoration: underline;
            }
        }
    }
}

.mapPlaceholder {
    margin-top: 3rem;
    padding: 20px;
    background-color: transparent;
    border-radius: $border-radius;
    text-align: center;
    color: var(--text-secondary);
    font-style: italic;
    min-height: 450px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    iframe {
        width: 100%;
        height: 450px;
        border: none;
        border-radius: $border-radius;
    }
}


// --- Sección de Contacto Directo ---
.twoColumnTextSection {
    padding: 5rem 0;
    background-color: var(--bg-primary);
}

.twoColumnGrid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
    align-items: center;

    @media (min-width: $breakpoint-lg) {
        grid-template-columns: 1fr 1.2fr;
    }
}

.textBlock {
    h3 {
        font-size: 2rem;
        font-weight: 700;
        color: var(--text-primary);
        margin-bottom: 1rem;
    }
    p {
        color: var(--text-secondary);
        line-height: 1.7;
        margin-bottom: 1.5rem;
    }
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        li {
            padding: 0.5rem 0;
            strong {
                color: var(--color-dark-blue);
            }
            a {
                color: var(--color-accent-dark);
                text-decoration: none;
                &:hover { text-decoration: underline; }
            }
        }
    }
}

.imageBlock {
    img {
        width: 100%;
        height: auto;
        border-radius: $border-radius;
        box-shadow: var(--shadow);
    }
}

```

