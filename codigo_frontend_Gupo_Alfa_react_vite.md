# Compilación de Código del Proyecto: grupo-alfa74-frontend

---

## Archivo: `AXI_marketin.html`

```
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Presentación de Servicios | Axi Marketing</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Montserrat', sans-serif;
            background-color: #f4f4f4; /* Un gris muy claro para contraste */
        }
        .slide {
            display: none;
            animation: fadeIn 0.6s ease-in-out;
        }
        .slide.active {
            display: block;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.98); }
            to { opacity: 1; transform: scale(1); }
        }
        /* Custom brand color from PDF */
        :root {
            --brand-color: #88001b; /* Dark Red */
            --brand-color-dark: #6d0015; /* Darker Red */
            --background-light: #FDFCF9; /* Crema/Off-white */
        }
        .bg-brand { background-color: var(--brand-color); }
        .text-brand { color: var(--brand-color); }
        .border-brand { border-color: var(--brand-color); }
        .hover\:bg-brand-dark:hover { background-color: var(--brand-color-dark); }
        .bg-light { background-color: var(--background-light); }

        /* Estilo del Mockup de Teléfono */
        .phone-mockup {
            position: relative;
            width: 100%;
            max-width: 320px;
            height: 640px;
            margin: auto;
            border: 16px solid #111;
            border-top-width: 60px;
            border-bottom-width: 60px;
            border-radius: 36px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        }
        .phone-mockup:before {
            content: '';
            display: block;
            width: 60px;
            height: 5px;
            position: absolute;
            top: -30px;
            left: 50%;
            transform: translateX(-50%);
            background: #333;
            border-radius: 10px;
        }
        .phone-mockup .screen {
            width: 100%;
            height: 100%;
            background: white;
            overflow-y: auto;
            padding: 4px;
        }
    </style>
</head>
<body class="flex items-center justify-center min-h-screen p-2 sm:p-4">

    <main class="w-full max-w-6xl bg-light rounded-2xl shadow-2xl overflow-hidden flex flex-col" style="height: 800px;">
        
        <div id="presentation-container" class="flex-grow p-6 md:p-12 overflow-y-auto">
            <!-- Las diapositivas se cargarán aquí -->
        </div>

        <!-- Barra de Navegación y Progreso -->
        <footer class="bg-gray-50 border-t border-gray-200 p-4 flex items-center justify-between">
            <div class="text-sm font-medium text-gray-600">
                Diapositiva <span id="current-slide-number">1</span> de <span id="total-slides-number">7</span>
            </div>
            <div class="w-1/3 mx-4">
                <div class="w-full bg-gray-200 rounded-full h-2.5">
                    <div id="progress-bar" class="bg-brand h-2.5 rounded-full transition-all duration-300" style="width: 14%;"></div>
                </div>
            </div>
            <div class="flex gap-3">
                <button id="prev-btn" class="px-5 py-2 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all">
                    Anterior
                </button>
                <button id="next-btn" class="px-5 py-2 text-sm font-semibold text-white bg-brand rounded-lg hover:bg-brand-dark disabled:opacity-50 transition-all">
                    Siguiente
                </button>
            </div>
        </footer>
    </main>

<script>
const slidesData = [
    {
        type: 'title',
        title: 'Axi Marketing',
        subtitle: 'Estrategias Digitales que Construyen Marcas',
        logo: `
            <div class="w-28 h-28 mb-8 bg-brand rounded-full flex items-center justify-center text-white text-4xl font-bold tracking-wider">
                Axi
            </div>`
    },
    {
        type: 'services',
        title: 'Servicios Ofrecidos',
        subtitle: 'Una solución integral para potenciar su presencia digital.',
        items: [
            { title: 'Community Management', description: 'Gestión de redes, interacción y moderación.' },
            { title: 'Estrategia de Contenidos', description: 'Planificación, creación y calendarios editoriales.' },
            { title: 'Publicidad Digital', description: 'Campañas en Redes Sociales y Google Ads.' },
            { title: 'Análisis y Reportes', description: 'Seguimiento de métricas, informes de rendimiento y análisis de ROI.' },
            { title: 'Desarrollo de Marca', description: 'Diseño de identidad visual y estrategias de branding.' },
            { title: 'Gestión de Crisis', description: 'Manejo de reputación en línea y respuesta a comentarios.' }
        ]
    },
    {
        type: 'process',
        title: 'Nuestro Proceso de Trabajo',
        subtitle: 'Un ciclo estratégico enfocado en resultados medibles y transparentes.',
        steps: [
            { name: 'Planificación', description: 'Investigación, análisis de la marca y definición de objetivos.' },
            { name: 'Ejecución', description: 'Creación de contenido y gestión de campañas publicitarias.' },
            { name: 'Monitoreo y Ajuste', description: 'Seguimiento del rendimiento y optimización en tiempo real.' },
            { name: 'Informe y Evaluación', description: 'Presentación de resultados y recomendaciones para el futuro.' }
        ]
    },
    {
        type: 'objectives',
        title: 'Objetivos de la Campaña',
        subtitle: 'Metas claras para un crecimiento tangible.',
        image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop',
        points: [
            '<strong>Posicionar la empresa</strong> como líder en su industria.',
            '<strong>Atraer clientes B2B</strong> de alto valor (constructoras, arquitectos, etc.).',
            '<strong>Aumentar la interacción</strong> y construir una comunidad leal en redes sociales.'
        ]
    },
    {
        type: 'content-visualization',
        title: 'Estrategia y Visualización de Contenido',
        subtitle: 'Así es como damos vida a la marca, combinando formatos estratégicamente.',
        phone_images: [
            'https://placehold.co/400x400/1a2e44/ffffff?text=Proyecto+1',
            'https://placehold.co/400x400/3a5a78/ffffff?text=Detalle',
            'https://placehold.co/400x400/88001b/ffffff?text=Reel',
            'https://placehold.co/400x400/4f6a8a/ffffff?text=Equipo',
            'https://placehold.co/400x400/2c4664/ffffff?text=Proceso',
            'https://placehold.co/400x400/6a89ac/ffffff?text=Testimonio',
            'https://placehold.co/400x400/88001b/ffffff?text=Reel',
            'https://placehold.co/400x400/1f3651/ffffff?text=Infografía',
            'https://placehold.co/400x400/3e6083/ffffff?text=Proyecto+2',
        ],
        plan: {
            title: 'Plan de Contenidos',
            items: [
                '<strong>Posts de Proyectos:</strong> Muestran la calidad y el alcance del trabajo realizado.',
                '<strong>Reels Dinámicos:</strong> Capturan el proceso y la acción para generar mayor engagement.',
                '<strong>Contenido de Valor:</strong> Infografías y carruseles que educan a la audiencia B2B.',
                '<strong>Prueba Social:</strong> Testimonios de clientes satisfechos para generar confianza.'
            ]
        }
    },
    {
        type: 'case-study',
        title: 'Casos de Éxito',
        subtitle: 'Nuestra metodología se traduce en resultados concretos.',
        points: [
            '<strong>Proyectos Anteriores:</strong> Portafolio de trabajos realizados con documentación detallada de los resultados obtenidos.',
            '<strong>Testimonios de Clientes:</strong> Opiniones y experiencias de clientes satisfechos que validan nuestro compromiso y eficacia.'
        ],
        image: 'https://images.unsplash.com/photo-1579532582937-16c108930bf6?q=80&w=1974&auto=format&fit=crop'
    },
    {
        type: 'final',
        title: '¿Listos para empezar?',
        cta: 'Contáctenos para diseñar un paquete personalizado que se ajuste a sus necesidades y objetivos.',
        logo: `
            <div class="w-24 h-24 mb-8 bg-white rounded-full flex items-center justify-center text-brand text-3xl font-bold tracking-wider">
                Axi
            </div>`
    }
];

let currentSlide = 0;
const presentationContainer = document.getElementById('presentation-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const currentSlideEl = document.getElementById('current-slide-number');
const totalSlidesEl = document.getElementById('total-slides-number');
const progressBar = document.getElementById('progress-bar');

function renderSlide() {
    presentationContainer.innerHTML = '';
    const slideData = slidesData[currentSlide];
    const slideElement = document.createElement('div');
    slideElement.className = 'slide active h-full';

    let contentHTML = '';

    switch (slideData.type) {
        case 'title':
            contentHTML = `
                <div class="h-full flex flex-col items-center justify-center text-center p-4">
                    ${slideData.logo}
                    <h1 class="text-5xl md:text-6xl font-extrabold text-gray-800">${slideData.title}</h1>
                    <p class="mt-4 text-xl md:text-2xl text-gray-500">${slideData.subtitle}</p>
                </div>`;
            break;
        case 'services':
            contentHTML = `
                <h2 class="text-4xl font-bold text-gray-800 text-center mb-4">${slideData.title}</h2>
                <p class="text-lg text-gray-500 text-center mb-10">${slideData.subtitle}</p>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    ${slideData.items.map(item => `
                        <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-brand">
                            <h3 class="text-xl font-bold text-gray-900 mb-2">${item.title}</h3>
                            <p class="text-gray-600">${item.description}</p>
                        </div>
                    `).join('')}
                </div>`;
            break;
        case 'process':
            contentHTML = `
                <h2 class="text-4xl font-bold text-gray-800 text-center mb-4">${slideData.title}</h2>
                <p class="text-lg text-gray-500 text-center mb-12">${slideData.subtitle}</p>
                <div class="relative max-w-4xl mx-auto">
                    <div class="absolute left-1/2 w-0.5 h-full bg-gray-200 -translate-x-1/2 hidden md:block"></div>
                    <div class="space-y-12 md:space-y-0">
                    ${slideData.steps.map((step, index) => `
                        <div class="relative md:flex items-center ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}">
                            <div class="md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}">
                                <div class="bg-white p-6 rounded-lg shadow-lg">
                                    <p class="text-brand font-bold text-lg">Fase ${index + 1}</p>
                                    <h3 class="text-xl font-bold text-gray-800">${step.name}</h3>
                                    <p class="text-gray-600 mt-2">${step.description}</p>
                                </div>
                            </div>
                            <div class="absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-brand rounded-full border-4 border-light hidden md:flex items-center justify-center text-white font-bold">${index + 1}</div>
                        </div>
                    `).join('')}
                    </div>
                </div>`;
            break;
        case 'objectives':
             contentHTML = `
                <h2 class="text-4xl font-bold text-gray-800 mb-8">${slideData.title}</h2>
                <div class="grid md:grid-cols-2 gap-10 items-center">
                    <ul class="space-y-6 text-xl text-gray-600">
                        ${slideData.points.map(p => `<li class="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 mr-4 text-brand flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg><span>${p}</span></li>`).join('')}
                    </ul>
                    <div><img src="${slideData.image}" class="rounded-lg shadow-xl aspect-[4/3] object-cover" onerror="this.onerror=null;this.src='https://placehold.co/600x450/cccccc/ffffff?text=Imagen';"></div>
                </div>`;
            break;
        case 'content-visualization':
            contentHTML = `
                <h2 class="text-4xl font-bold text-gray-800 text-center mb-4">${slideData.title}</h2>
                <p class="text-lg text-gray-500 text-center mb-10">${slideData.subtitle}</p>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div class="phone-mockup">
                        <div class="screen">
                            <div class="grid grid-cols-3 gap-1">
                                ${slideData.phone_images.map(img => `<img src="${img}" class="aspect-square object-cover" onerror="this.onerror=null;this.src='https://placehold.co/400x400/cccccc/ffffff?text=Post';">`).join('')}
                            </div>
                        </div>
                    </div>
                    <div class="bg-white p-8 rounded-lg shadow-lg">
                        <h3 class="text-2xl font-bold text-gray-800 mb-5">${slideData.plan.title}</h3>
                        <ul class="space-y-4 text-lg text-gray-600">
                           ${slideData.plan.items.map(i => `<li class="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 text-brand flex-shrink-0 mt-1" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg><span>${i}</span></li>`).join('')}
                        </ul>
                    </div>
                </div>`;
            break;
        case 'case-study':
            contentHTML = `
                <h2 class="text-4xl font-bold text-gray-800 text-center mb-4">${slideData.title}</h2>
                <p class="text-lg text-gray-500 text-center mb-10">${slideData.subtitle}</p>
                <div class="grid md:grid-cols-2 gap-10 items-center">
                    <div><img src="${slideData.image}" class="rounded-lg shadow-xl aspect-[4/3] object-cover" onerror="this.onerror=null;this.src='https://placehold.co/600x450/cccccc/ffffff?text=Imagen';"></div>
                    <ul class="space-y-6 text-xl text-gray-600">
                        ${slideData.points.map(p => `<li class="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 mr-4 text-brand flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg><span>${p}</span></li>`).join('')}
                    </ul>
                </div>`;
            break;
        case 'final':
            contentHTML = `
                <div class="h-full flex flex-col items-center justify-center text-center p-4 bg-brand rounded-2xl">
                    ${slideData.logo}
                    <h2 class="text-5xl font-extrabold text-white">${slideData.title}</h2>
                    <p class="mt-6 text-xl max-w-2xl text-white/90">${slideData.cta}</p>
                    <button class="mt-10 px-8 py-3 bg-white text-brand font-bold rounded-lg text-lg hover:bg-gray-200 transition-colors">
                        Contactar Ahora
                    </button>
                </div>`;
            slideElement.classList.add('p-0');
            break;
    }

    slideElement.innerHTML = contentHTML;
    presentationContainer.appendChild(slideElement);
    updateControls();
}

function updateControls() {
    prevBtn.disabled = currentSlide === 0;
    nextBtn.disabled = currentSlide === slidesData.length - 1;
    currentSlideEl.textContent = currentSlide + 1;
    totalSlidesEl.textContent = slidesData.length;
    progressBar.style.width = `${((currentSlide + 1) / slidesData.length) * 100}%`;
}

prevBtn.addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
        renderSlide();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentSlide < slidesData.length - 1) {
        currentSlide++;
        renderSlide();
    }
});

// Initial render
renderSlide();
</script>

</body>
</html>


```

---

## Archivo: `index.html`

```
<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="es-MX" xml:lang="es-MX">
  <head>
    <!-- español mx  -->
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>grupo-alfa74-react</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>

```

---

## Archivo: `present_agencia.html`

```
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Propuesta Digital para Constructora | AXI Marketing</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Poppins', sans-serif;
            background-color: #f8f9fa;
        }
        .slide {
            display: none;
            animation: fadeIn 0.6s ease-in-out;
        }
        .slide.active {
            display: block;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        /* Custom brand color */
        :root {
            --brand-color: #D97706; /* Amber-600 */
            --brand-color-dark: #B45309; /* Amber-700 */
        }
        .bg-brand { background-color: var(--brand-color); }
        .text-brand { color: var(--brand-color); }
        .border-brand { border-color: var(--brand-color); }
        .hover\:bg-brand-dark:hover { background-color: var(--brand-color-dark); }
        
        .glass-effect {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }
    </style>
</head>
<body class="flex items-center justify-center min-h-screen p-2 sm:p-4">

    <main class="w-full max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col" style="height: 800px;">
        
        <div id="presentation-container" class="flex-grow p-6 md:p-12 overflow-y-auto">
            <!-- Las diapositivas se cargarán aquí -->
        </div>

        <!-- Barra de Navegación y Progreso -->
        <footer class="bg-gray-50 border-t border-gray-200 p-4 flex items-center justify-between">
            <div class="text-sm font-medium text-gray-600">
                Diapositiva <span id="current-slide-number">1</span> de <span id="total-slides-number">9</span>
            </div>
            <div class="w-1/3 mx-4">
                <div class="w-full bg-gray-200 rounded-full h-2.5">
                    <div id="progress-bar" class="bg-brand h-2.5 rounded-full transition-all duration-300" style="width: 11%;"></div>
                </div>
            </div>
            <div class="flex gap-3">
                <button id="prev-btn" class="px-5 py-2 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all">
                    Anterior
                </button>
                <button id="next-btn" class="px-5 py-2 text-sm font-semibold text-white bg-brand rounded-lg hover:bg-brand-dark disabled:opacity-50 transition-all">
                    Siguiente
                </button>
            </div>
        </footer>
    </main>

<script>
const slidesData = [
    {
        type: 'title',
        title: 'Una Solución Digital Integral para el Sector Construcción',
        subtitle: 'Propuesta de Colaboración Estratégica',
        authors: [
            { name: 'Karla Montiel', role: 'Dirección de Marca y Contenido (MBA)' },
            { name: 'Francisco Reyes', role: 'Arquitectura Digital y Desarrollo Full-Stack' }
        ],
        logo: `
            <div class="w-24 h-24 mb-8 bg-brand rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547a2 2 0 00-.547 1.806l.477 2.387a6 6 0 00.517 3.86l.158.318a6 6 0 00.517 3.86l2.387.477a2 2 0 001.806-.547a2 2 0 00.547-1.806l-.477-2.387a6 6 0 00-.517-3.86l-.158-.318a6 6 0 01-.517-3.86l-2.387-.477a2 2 0 01-.547-1.806a2 2 0 011.806-.547l2.387.477a6 6 0 013.86-.517l.318-.158a6 6 0 003.86-.517l-.477-2.387a2 2 0 01.547-1.806a2 2 0 011.806.547l.477 2.387a6 6 0 003.86.517l.318.158a6 6 0 003.86.517l2.387-.477a2 2 0 001.022.547z" /></svg>
            </div>`
    },
    {
        type: 'content',
        title: 'Entendemos su Mundo',
        image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop',
        points: [
            'El sector de la construcción no vende productos, vende <strong>confianza, calidad y visión a largo plazo</strong>.',
            'La comunicación digital debe reflejar la <strong>precisión de la ingeniería</strong> y la <strong>estética de la arquitectura</strong>.',
            'Nuestra experiencia en el sector industrial con <strong>AMPIP</strong> nos ha enseñado a hablar el lenguaje B2B, conectando con arquitectos, ingenieros y clientes corporativos.'
        ]
    },
    {
        type: 'side-by-side-team',
        title: 'Nuestra Dupla Estratégica: La Fusión Perfecta',
        members: [
            {
                name: 'Estratega de Marca y Contenido',
                role: 'Visión de Negocio (MBA)',
                icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 012-2h2a2 2 0 012 2v6m-6 0h6M9 19a2 2 0 002 2h2a2 2 0 002-2M9 19a2 2 0 01-2-2v-6a2 2 0 012-2h2a2 2 0 012 2v6a2 2 0 01-2 2m-6 0h6" /></svg>`,
                skills: ['Branding y Posicionamiento', 'Planificación de Contenido Mensual', 'Gestión de Comunidad (RRSS)', 'Copywriting Persuasivo', 'Análisis de Resultados']
            },
            {
                name: 'Francisco Reyes: Arquitecto Digital',
                role: 'Soluciones Tecnológicas',
                icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>`,
                skills: ['Desarrollo Web Full-Stack', 'Optimización SEO/SEM', 'Arquitectura de Datos Segura', 'Producción Audiovisual en Obra', 'Identidad Digital Técnica']
            }
        ]
    },
    {
        type: 'value-proposition',
        title: 'Propuesta de Valor: Una Solución 360°',
        items: [
            { icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>`, title: 'Gestión de Redes Sociales', description: 'Manejo experto de Instagram, TikTok y Facebook con contenido enfocado en la grandeza de sus proyectos.' },
            { icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>`, title: 'Producción en Obra', description: 'Capturamos la esencia de su trabajo con fotografía y video profesional directamente en sus proyectos.' },
            { icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>`, title: 'Planificación Estratégica', description: 'Reuniones mensuales para definir un calendario de contenido que cumpla objetivos medibles y muestre resultados.' },
            { icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>`, title: 'Arquitectura de Marca', description: 'Unificamos su identidad corporativa en todos los puntos de contacto: web, uniformes, firmas, etc.' }
        ]
    },
    {
        type: 'process',
        title: 'Nuestro Proceso de Colaboración',
        steps: [
            { stage: 1, name: 'Inmersión y Diagnóstico', description: 'Entendemos sus objetivos, su marca y su audiencia para definir el plan de acción.' },
            { stage: 2, name: 'Planificación Mensual', description: 'Reunión estratégica para calendarizar contenido y alinear metas.' },
            { stage: 3, name: 'Producción y Ejecución', description: 'Creación de contenido, gestión de campañas y optimización técnica.' },
            { stage: 4, name: 'Análisis y Reporte', description: 'Visita mensual para presentar resultados claros y proponer mejoras continuas.' }
        ]
    },
    {
        type: 'portfolio',
        title: 'Un Vistazo a Nuestro Estilo',
        description: 'Imaginamos una identidad visual que proyecta solidez, modernidad y atención al detalle.',
        images: [
            'https://placehold.co/600x400/1F2937/FFFFFF?text=Fotografía+de+Obra',
            'https://placehold.co/600x400/D97706/FFFFFF?text=Post+Informativo',
            'https://placehold.co/600x400/374151/FFFFFF?text=Reel+Dinámico',
            'https://placehold.co/600x400/111827/FFFFFF?text=Diseño+Corporativo'
        ]
    },
    {
        type: 'case-study',
        title: 'Caso de Éxito: Atlas AMPIP',
        subtitle: 'Nominado a los Premios DEVA 2025 en "Gestión Estratégica de Datos"',
        description: 'Lideramos el desarrollo técnico integral de una plataforma de inteligencia de negocios geoespacial. Transformamos datos complejos en una ventaja competitiva tangible para el sector industrial.',
        image: 'https://placehold.co/1200x600/1F2937/D97706?text=ATLAS+AMPIP+DEMO',
        key_results: [
            'Diseño de arquitectura full-stack escalable y segura.',
            'Desarrollo de API RESTful para datos geoespaciales.',
            'Interfaz de visualización interactiva para +460 parques industriales.'
        ]
    },
    {
        type: 'results',
        title: 'Resultados que Construyen Valor',
        subtitle: 'No solo gestionamos, generamos crecimiento. Nuestra experiencia se traduce en:',
        metrics: [
            { value: '+80%', label: 'Incremento en Captación de Clientes' },
            { value: 'Top 5', label: 'Posicionamiento Orgánico (SEO)' },
            { value: '+20%', label: 'Crecimiento Mensual de Tráfico Sostenido' }
        ]
    },
    {
        type: 'final',
        title: 'Construyamos Juntos su Presencia Digital',
        cta: 'Agendemos una reunión para explorar cómo nuestra dupla estratégica puede potenciar el crecimiento de su constructora.',
        contact: {
            name: 'Axis Marketing',
            phone: '+52 55-3813-9033',
            email: 'axismarketing@gmail.com',
            // linkedin: 'LinkedIn'
        }
    }
];

let currentSlide = 0;
const presentationContainer = document.getElementById('presentation-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const currentSlideEl = document.getElementById('current-slide-number');
const totalSlidesEl = document.getElementById('total-slides-number');
const progressBar = document.getElementById('progress-bar');

function renderSlide() {
    presentationContainer.innerHTML = '';
    const slideData = slidesData[currentSlide];
    const slideElement = document.createElement('div');
    slideElement.className = 'slide active h-full';

    let contentHTML = '';

    switch (slideData.type) {
        case 'title':
            contentHTML = `
                <div class="h-full flex flex-col items-center justify-center text-center p-4">
                    ${slideData.logo}
                    <h1 class="text-4xl md:text-5xl font-extrabold text-gray-800">${slideData.title}</h1>
                    <p class="mt-4 text-xl md:text-2xl text-gray-500">${slideData.subtitle}</p>
                    <div class="mt-12 w-full max-w-3xl mx-auto border-t border-gray-200 pt-8">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                            ${slideData.authors.map(author => `
                                <div class="bg-gray-50 rounded-lg p-4 text-left">
                                    <p class="text-lg font-bold text-gray-800">${author.name}</p>
                                    <p class="text-md text-brand font-semibold">${author.role}</p>
                                </div>`).join('')}
                        </div>
                    </div>
                </div>`;
            break;
        case 'content':
            contentHTML = `
                <h2 class="text-4xl font-bold text-gray-800 mb-8">${slideData.title}</h2>
                <div class="grid md:grid-cols-2 gap-10 items-center">
                    <ul class="space-y-6 text-lg text-gray-600">
                        ${slideData.points.map(p => `<li class="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 mr-4 text-brand flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg><span>${p}</span></li>`).join('')}
                    </ul>
                    <div><img src="${slideData.image}" class="rounded-lg shadow-lg aspect-video object-cover" onerror="this.onerror=null;this.src='https://placehold.co/600x400/cccccc/ffffff?text=Imagen+de+Construcción';"></div>
                </div>`;
            break;
        case 'side-by-side-team':
            contentHTML = `
                <h2 class="text-4xl font-bold text-gray-800 text-center mb-10">${slideData.title}</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    ${slideData.members.map(member => `
                        <div class="bg-gray-50 p-8 rounded-xl border-t-4 border-brand">
                            <div class="flex items-center text-brand mb-4">
                                ${member.icon}
                                <h3 class="ml-3 text-2xl font-semibold text-gray-800">${member.name}</h3>
                            </div>
                            <p class="font-medium text-gray-500 mb-5">${member.role}</p>
                            <ul class="space-y-3 text-gray-600">
                               ${member.skills.map(skill => `<li class="flex items-center"><svg class="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>${skill}</li>`).join('')}
                            </ul>
                        </div>
                    `).join('')}
                </div>`;
            break;
        case 'value-proposition':
            contentHTML = `
                <h2 class="text-4xl font-bold text-gray-800 text-center mb-12">${slideData.title}</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    ${slideData.items.map(item => `
                        <div class="bg-gray-50 p-6 rounded-lg text-center hover:shadow-xl hover:-translate-y-2 transition-transform duration-300">
                            <div class="text-brand inline-block p-4 bg-amber-100 rounded-full mb-4">
                                ${item.icon}
                            </div>
                            <h3 class="text-xl font-bold text-gray-800 mb-2">${item.title}</h3>
                            <p class="text-gray-600">${item.description}</p>
                        </div>
                    `).join('')}
                </div>`;
            break;
        case 'process':
            contentHTML = `
                <h2 class="text-4xl font-bold text-gray-800 text-center mb-12">${slideData.title}</h2>
                <div class="relative max-w-4xl mx-auto">
                    <div class="absolute left-1/2 w-0.5 h-full bg-gray-200 -translate-x-1/2"></div>
                    ${slideData.steps.map((step, index) => `
                        <div class="relative mb-12 flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}">
                            <div class="w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}">
                                <div class="bg-white p-6 rounded-lg shadow-md">
                                    <p class="text-brand font-bold text-lg">Paso ${step.stage}</p>
                                    <h3 class="text-xl font-bold text-gray-800">${step.name}</h3>
                                    <p class="text-gray-600 mt-2">${step.description}</p>
                                </div>
                            </div>
                            <div class="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-brand rounded-full border-4 border-white flex items-center justify-center text-white font-bold">${step.stage}</div>
                        </div>
                    `).join('')}
                </div>`;
            break;
        case 'portfolio':
             contentHTML = `
                <h2 class="text-4xl font-bold text-gray-800 text-center mb-4">${slideData.title}</h2>
                <p class="text-lg text-gray-500 text-center mb-8">${slideData.description}</p>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    ${slideData.images.map(img => `<div class="aspect-w-1 aspect-h-1"><img src="${img}" class="rounded-lg shadow-md object-cover w-full h-full"></div>`).join('')}
                </div>`;
            break;
        case 'case-study':
            contentHTML = `
                 <div class="text-center">
                    <h2 class="text-4xl font-bold text-gray-800">${slideData.title}</h2>
                    <p class="text-lg font-semibold text-brand mt-2">${slideData.subtitle}</p>
                </div>
                <div class="grid md:grid-cols-2 gap-8 items-center mt-8">
                    <div>
                        <p class="text-lg text-gray-600 mb-6">${slideData.description}</p>
                        <h3 class="font-bold text-xl text-gray-800 mb-3">Logros Clave:</h3>
                        <ul class="space-y-3 text-gray-600">
                           ${slideData.key_results.map(i => `<li class="flex items-center"><svg class="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>${i}</li>`).join('')}
                        </ul>
                    </div>
                    <img src="${slideData.image}" class="rounded-lg shadow-2xl" onerror="this.onerror=null;this.src='https://placehold.co/600x300/1F2937/D97706?text=Caso+de+Exito';">
                </div>`;
            break;
        case 'results':
            contentHTML = `
                <div class="h-full flex flex-col items-center justify-center text-center p-4">
                    <h2 class="text-4xl md:text-5xl font-extrabold text-gray-800">${slideData.title}</h2>
                    <p class="mt-4 text-xl text-gray-500 max-w-3xl">${slideData.subtitle}</p>
                    <div class="mt-12 w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8">
                        ${slideData.metrics.map(metric => `
                            <div class="bg-gray-50 p-8 rounded-xl">
                                <p class="text-6xl font-bold text-brand">${metric.value}</p>
                                <p class="mt-2 text-lg font-semibold text-gray-600">${metric.label}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
            break;
        case 'final':
            contentHTML = `
                <div class="h-full flex flex-col items-center justify-center text-center" style="background-image: url('https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?q=80&w=2071&auto=format&fit=crop'); background-size: cover; background-position: center;">
                    <div class="w-full h-full flex flex-col items-center justify-center p-8 rounded-2xl glass-effect text-white">
                        <h2 class="text-5xl font-extrabold">${slideData.title}</h2>
                        <p class="mt-6 text-xl max-w-2xl">${slideData.cta}</p>
                        <div class="mt-10 border-t-2 border-amber-300 pt-8">
                             <p class="text-lg font-bold">${slideData.contact.name}</p>
                             <p class="mt-2">${slideData.contact.phone} | ${slideData.contact.email}</p>

                        </div>
                    </div>
                </div>`;
            slideElement.classList.add('p-0');
            break;
    }

    slideElement.innerHTML = contentHTML;
    presentationContainer.appendChild(slideElement);
    updateControls();
}

function updateControls() {
    prevBtn.disabled = currentSlide === 0;
    nextBtn.disabled = currentSlide === slidesData.length - 1;
    currentSlideEl.textContent = currentSlide + 1;
    totalSlidesEl.textContent = slidesData.length;
    progressBar.style.width = `${((currentSlide + 1) / slidesData.length) * 100}%`;
}

prevBtn.addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
        renderSlide();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentSlide < slidesData.length - 1) {
        currentSlide++;
        renderSlide();
    }
});

// Initial render
renderSlide();
</script>

</body>
</html>

```

---

## Archivo: `src\App.jsx`

```
// src/App.jsx

import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/common/Navbar/Navbar.jsx';
import { Footer } from './components/common/Footer/Footer.jsx';
import { HomePage } from './pages/HomePage.jsx';
import { ServicesPage } from './pages/ServicesPage.jsx';
import { ProjectsPage } from './pages/ProjectsPage.jsx';
import { ContactPage } from './pages/ContactPage.jsx';
import { EspectacularesPage } from './pages/EspectacularesPage.jsx';
import { NavesIndustrialesPage } from './pages/NavesIndustrialesPage.jsx';
import { EdificiosCorporativosPage } from './pages/EdificiosCorporativosPage.jsx';
import { CentrosNocturnosPage } from './pages/CentrosNocturnosPage.jsx';
import { ConversionAnalytics } from './components/analytics/ConversionAnalytics.jsx';

// --- ¡IMPORTA EL NUEVO COMPONENTE AQUÍ! ---
import { ScrollToTop } from './components/common/ScrollToTop.jsx';

function App() {
  return (
    <div className="app-container">
      <ScrollToTop />
      
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/proyectos" element={<ProjectsPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/servicios/estructuras-para-espectaculares" element={<EspectacularesPage />} />
          <Route path="/servicios/naves-industriales" element={<NavesIndustrialesPage />} />
          <Route path="/servicios/edificios-corporativos" element={<EdificiosCorporativosPage />} />
          <Route path="/servicios/construccion-de-bares-y-centros-nocturnos" element={<CentrosNocturnosPage />} />
        </Routes>
      </main>
      <Footer />

      <ConversionAnalytics />
    </div>
  )
}

export default App;
```

---

## Archivo: `src\components\analytics\ConversionAnalytics.jsx`

```
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Chart from 'chart.js/auto';
// npm install chart.js
import { useConversion } from '/src/hooks/useConversion.js';
import styles from './ConversionAnalytics.module.scss';

// --- Iconos ---
const AnalyticsIcon = () => <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>;
const CloseIcon = () => <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>;

export const ConversionAnalytics = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { conversions } = useConversion();
    const chartRef = useRef(null); // Ref para el elemento <canvas>
    const chartInstanceRef = useRef(null); // Ref para guardar la instancia del gráfico

    const dateTimeFormatter = new Intl.DateTimeFormat('es-MX', {
        dateStyle: 'medium',
        timeStyle: 'medium',
    });

    useEffect(() => {
        // --- Lógica mejorada para el gráfico ---
        if (isModalOpen && chartRef.current) {
            // Procesa los datos para agruparlos por tipo y contarlos
            const conversionCounts = conversions.reduce((acc, conv) => {
                acc[conv.type] = (acc[conv.type] || 0) + 1;
                return acc;
            }, {});

            // Destruye cualquier gráfico anterior para evitar errores
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }

            // Crea la nueva instancia del gráfico
            const ctx = chartRef.current.getContext('2d');
            chartInstanceRef.current = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: Object.keys(conversionCounts),
                    datasets: [{
                        label: 'Número de Conversiones',
                        data: Object.values(conversionCounts),
                        backgroundColor: 'rgba(156, 204, 60, 0.6)',
                        borderColor: 'rgba(110, 180, 63, 1)',
                        borderWidth: 2,
                        borderRadius: 5,
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false },
                        title: {
                            display: true,
                            text: 'Conversiones por Tipo de Evento',
                            font: { size: 16 }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: { stepSize: 1 }
                        }
                    }
                }
            });
        }

        // --- Función de limpieza ---
        // Se ejecuta cuando el modal se cierra, destruyendo el gráfico para liberar memoria.
        return () => {
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
                chartInstanceRef.current = null;
            }
        };
    }, [isModalOpen, conversions]); // Se actualiza solo cuando cambia el estado del modal o los datos.

    const totalConversions = conversions.length;
    const uniqueConversionTypes = new Set(conversions.map(c => c.type)).size;

    return (
        <>
            <motion.button
                className={styles.floatingButton}
                onClick={() => setIsModalOpen(true)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Mostrar analíticas de conversión"
            >
                <AnalyticsIcon />
            </motion.button>

            <AnimatePresence>
                {isModalOpen && (
                    <div className={`${styles.modalOverlay} ${styles.visible}`}>
                         <motion.div
                            className={`${styles.modalContent} ${styles.visible}`}
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 50, scale: 0.9 }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                        >
                            <header className={styles.modalHeader}>
                                <h2>Panel de Conversiones (Simulación)</h2>
                                <button onClick={() => setIsModalOpen(false)}><CloseIcon /></button>
                            </header>
                            
                            <div className={styles.metricsDashboard}>
                                <aside className={styles.summaryCards}>
                                    <div className={styles.card}>
                                        <p className={styles.label}>Conversiones Totales</p>
                                        <p className={styles.value}>{totalConversions}</p>
                                    </div>
                                    <div className={styles.card}>
                                        <p className={styles.label}>Tipos de Evento Únicos</p>
                                        <p className={styles.value}>{uniqueConversionTypes}</p>
                                    </div>
                                </aside>

                                <div className={styles.chartContainer}>
                                    <canvas ref={chartRef}></canvas>
                                </div>
                                
                                <div className={styles.eventLog}>
                                    <h3>Registro de Eventos Recientes</h3>
                                    <ul>
                                        {[...conversions].reverse().slice(0, 10).map(conv => (
                                            <li key={conv.id}>
                                                <span className={styles.eventType}>{conv.type}</span>
                                                <span className={styles.eventTime}>{dateTimeFormatter.format(conv.timestamp)}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};
```

---

## Archivo: `src\components\common\Footer\Footer.jsx`

```
// src/components/common/Footer/Footer.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Footer.module.scss';

// Íconos para redes sociales
const LinkedInIcon = () => <svg viewBox="0 0 24 24"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.85.67-1.48 1.48-1.48s1.48.63 1.48 1.48v4.93h2.82Z"></path></svg>;
const YouTubeIcon = () => <svg viewBox="0 0 24 24"><path fill="currentColor" d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 5.05-.18.83-.55 1.46-1.12 2.03-.57.57-1.2.94-2.03 1.12C17.8 20.84 16.19 21 12 21c-4.19 0-5.8-.16-7.05-.44-.83-.18-1.46-.55-2.03-1.12-.57-.57-.94-1.2-1.12-2.03C1.16 15.8 1 14.19 1 12c0-4.19.16-5.8.44-7.05.18-.83.55-1.46 1.12-2.03.57-.57 1.2-.94 2.03-1.12C5.8 1.16 7.81 1 12 1c4.19 0 5.8.16 7.05.44.83.18 1.46.55 2.03 1.12.57.57.94 1.2 1.12 2.03Z"></path></svg>;


export const Footer = () => {
  const navLinks = [
    { to: '/', label: 'Inicio' },
    { to: '/servicios', label: 'Servicios' },
    { to: '/proyectos', label: 'Proyectos' },
  ];

  const legalLinks = [
    { to: '/politica-privacidad', label: 'Política de Privacidad' },
    { to: '/terminos-uso', label: 'Términos de Uso' },
  ];

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        {/* Columna 1: Marca e Info */}
        <div className={styles.footerColumn}>
          <img 
            src="/logo_grupo_alfa_74.png" 
            alt="Logo Grupo Alfa 74" 
            className={styles.logo}
          />
          <p className={styles.tagline}>
            Ingeniería en Acero que Construye el Futuro.
          </p>
          <div className={styles.socialLinks}>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><YouTubeIcon /></a>
          </div>
        </div>

        {/* Columna 2: Navegación */}
        <div className={styles.footerColumn}>
          <h4 className={styles.columnTitle}>Navegación</h4>
          <ul className={styles.linkList}>
            {navLinks.map(link => <li key={link.label}><NavLink to={link.to}>{link.label}</NavLink></li>)}
          </ul>
        </div>

        {/* Columna 3: Legal */}
        <div className={styles.footerColumn}>
          <h4 className={styles.columnTitle}>Legal</h4>
          <ul className={styles.linkList}>
            {legalLinks.map(link => <li key={link.label}><NavLink to={link.to}>{link.label}</NavLink></li>)}
          </ul>
        </div>

        {/* Columna 4: Calidad y Certificaciones */}
        <div className={styles.footerColumn}>
          <h4 className={styles.columnTitle}>Calidad Certificada</h4>
          {/* Aquí puedes poner tu sello o premio */}
          <img 
            src="cello_imca_instituto_mexicano_de_la_construccion_en_acero.png" 
            alt="Sello de Calidad IMCA" 
            className={styles.qualitySeal}
          />
        </div>
      </div>
      
      {/* Barra de Copyright Inferior */}
      <div className={styles.footerBottomBar}>
        <div className="container">
          &copy; {new Date().getFullYear()} Grupo Alfa 74. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};
```

---

## Archivo: `src\components\common\Navbar\Navbar.jsx`

```
// src/components/common/Navbar/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.scss';

// --- Importamos el nuevo componente ---
import { NavDropdown } from './NavDropdown.jsx';

const MenuIcon = () => <svg className={styles.icon} viewBox="0 0 24 24"><path d="M4 6h16M4 12h16m-7 6h7"></path></svg>;
const CloseIcon = () => <svg className={styles.icon} viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"></path></svg>;

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { 
      label: 'Servicios',
      to: '/servicios',
      children: [
        { 
          label: 'Estructuras para Espectaculares', 
          to: '/servicios/estructuras-para-espectaculares',
          description: 'Soluciones de alto impacto visual y seguridad.'
        },
        {
          label: 'Naves Industriales', 
          to: '/servicios/naves-industriales',
          description: 'Construcción de Naves Industriales.'
        },
        {
          label: 'Edificios Comerciales y Corporativos', 
          to: '/servicios/edificios-corporativos',
          description: 'Planes de uso mixto, edificios corporativos y plazas comerciales.'
        },
        {
          label: 'Construcción de Bares y Centros Nocturnos', 
          to: '/servicios/construccion-de-bares-y-centros-nocturnos',
          description: 'Proyectos Bares, Antros y Centros Nocturnos.'
        }
        // { label: 'Naves Industriales', to: '/servicios/naves-industriales', description: '...' }
      ]
    },
    { to: '/proyectos', label: 'Proyectos' },
    { to: '/contacto', label: 'Contacto' },
  ];
  
  const headerClasses = `${styles.header} ${isScrolled ? styles.scrolled : ''}`;

  return (
    <header className={headerClasses}>
      <div className={`container ${styles.navContainer}`}>
        <NavLink to="/" className={styles.logo} onClick={() => setIsOpen(false)}>
          <img src="/logo_grupo_alfa_74.png" alt="Logo Grupo Alfa 74" />
        </NavLink>

        <nav className={`${styles.navLinks} ${isOpen ? styles.menuOpen : ''}`}>
          <ul>
            {/* --- Lógica simplificada: Mapeamos al nuevo componente --- */}
            {navLinks.map((link) => (
              <NavDropdown 
                key={link.label} 
                link={link} 
                onLinkClick={() => setIsOpen(false)} 
              />
            ))}
          </ul>
          <NavLink to="/contacto" onClick={() => setIsOpen(false)} className={`${styles.ctaButton} ${styles.mobileCta}`}>
            Solicitar Cotización
          </NavLink>
        </nav>

        <div className={styles.actions}>
          <NavLink to="/contacto" className={`${styles.ctaButton} ${styles.desktopCta}`}>
            Solicitar Cotización
          </NavLink>
          <button onClick={() => setIsOpen(!isOpen)} className={styles.hamburger}>
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
    </header>
  );
};
```

---

## Archivo: `src\components\common\Navbar\NavDropdown.jsx`

```
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
```

---

## Archivo: `src\components\common\ScrollToTop.jsx`

```
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
```

---

## Archivo: `src\components\contact\ContactFormBlock.jsx`

```
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ContactFormBlock.module.scss';
import { useConversion } from '/src/hooks/useConversion.js';

// --- Iconos SVG ---
const PaperPlaneIcon = () => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"></path></svg>
);
const SpinnerIcon = () => (
    <svg className={styles.spinner} viewBox="0 0 50 50"><circle cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle></svg>
);
const CheckCircleIcon = () => (
    <svg className={styles.successIcon} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628 0z"></path></svg>
);
const ExclamationTriangleIcon = () => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path></svg>
);


const ContactFormBlock = ({ title, subtitle, agreementText }) => {
    const { logConversion } = useConversion();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
    });
    const [errors, setErrors] = useState({});
    const [isAgreed, setIsAgreed] = useState(false);
    const [status, setStatus] = useState('idle'); // idle | submitting | success | error

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'El nombre completo es obligatorio.';
        if (!formData.email.trim()) {
            newErrors.email = 'El correo electrónico es obligatorio.';
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = 'El formato del correo no es válido.';
        }
        if (!formData.phone.trim()) newErrors.phone = 'El teléfono es obligatorio.';
        if (!formData.company.trim()) newErrors.company = 'El nombre de la empresa es obligatorio.';
        if (!formData.message.trim()) newErrors.message = 'El mensaje es obligatorio.';
        if (agreementText && !isAgreed) newErrors.agreement = 'Debes aceptar el aviso de privacidad.';
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({...prev, [name]: null}));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            setStatus('submitting');
            try {
                // Simulación de una API real. En tu proyecto, esta sería la llamada a tu backend.
                await new Promise(resolve => setTimeout(resolve, 1500)); 
                
                // Registro de conversión exitoso
                logConversion("Formulario_Contacto_Enviado");
                
                setStatus('success');
                // Limpiar el formulario después del éxito (opcional)
                setFormData({ name: '', email: '', phone: '', company: '', message: '' });
                setIsAgreed(false);

            } catch (error) {
                console.error('Error al enviar formulario (simulación):', error);
                setStatus('error');
            } 
        }
    };

    const formVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
        exit: { opacity: 0, y: -20, transition: { duration: 0.4, ease: 'easeIn' } },
    };

    return (
        <section className={styles.formSection}>
            <div className="container">
                <div className={styles.formWrapper}>
                    <AnimatePresence mode="wait">
                        {status !== 'success' ? (
                            <motion.div
                                key="form"
                                variants={formVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                            >
                                <div className={styles.header}>
                                    <h2>{title}</h2>
                                    <p>{subtitle}</p>
                                </div>
                                <form onSubmit={handleSubmit} noValidate>
                                    <div className={styles.formGrid}>
                                        <div className={styles.inputGroup}>
                                            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Nombre Completo" className={errors.name ? styles.inputError : ''} />
                                            {errors.name && <span className={styles.errorMessage}>{errors.name}</span>}
                                        </div>
                                        <div className={styles.inputGroup}>
                                            <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Nombre de la Empresa" className={errors.company ? styles.inputError : ''} />
                                            {errors.company && <span className={styles.errorMessage}>{errors.company}</span>}
                                        </div>
                                        <div className={styles.inputGroup}>
                                            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Correo Electrónico" className={errors.email ? styles.inputError : ''} />
                                            {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
                                        </div>
                                        <div className={styles.inputGroup}>
                                            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Teléfono" className={errors.phone ? styles.inputError : ''} />
                                            {errors.phone && <span className={styles.errorMessage}>{errors.phone}</span>}
                                        </div>
                                        <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                                            <textarea name="message" rows="5" value={formData.message} onChange={handleChange} placeholder="Describa brevemente su proyecto y sus necesidades..." className={errors.message ? styles.inputError : ''}></textarea>
                                            {errors.message && <span className={styles.errorMessage}>{errors.message}</span>}
                                        </div>
                                    </div>
                                    
                                    {agreementText && (
                                        <div className={styles.agreementGroup}>
                                            <input 
                                                type="checkbox"
                                                id="agreement"
                                                checked={isAgreed}
                                                onChange={(e) => setIsAgreed(e.target.checked)}
                                            />
                                            <label htmlFor="agreement" dangerouslySetInnerHTML={{ __html: agreementText }} />
                                            {errors.agreement && <span className={styles.errorMessage}>{errors.agreement}</span>}
                                        </div>
                                    )}

                                    <div className={styles.submitContainer}>
                                        <motion.button 
                                            type="submit" 
                                            className={styles.submitButton} 
                                            disabled={status === 'submitting'}
                                            whileHover={{ scale: 1.01 }}
                                            whileTap={{ scale: 0.99 }}
                                        >
                                            {status === 'submitting' ? <SpinnerIcon /> : <PaperPlaneIcon />}
                                            {status === 'submitting' ? 'Enviando Solicitud...' : 'Solicitar Cotización'}
                                        </motion.button>
                                        {status === 'error' && (
                                            <div className={styles.generalErrorMessage}>
                                                <ExclamationTriangleIcon/> Hubo un error al enviar el formulario.
                                            </div>
                                        )}
                                    </div>
                                </form>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="success"
                                className={styles.successMessage}
                                variants={formVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                            >
                                <CheckCircleIcon />
                                <h3>¡Solicitud Enviada con Éxito!</h3>
                                <p>Gracias por contactar a Grupo Alfa 74. Hemos recibido su proyecto y un experto se comunicará contigo en menos de 24 horas.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default ContactFormBlock;

```

---

## Archivo: `src\components\corporativos\CorporativosCTA.jsx`

```
// src/components/corporativos/CorporativosCTA.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaFileSignature, FaUserTie, FaChartLine } from 'react-icons/fa';
import styles from './CorporativosCTA.module.scss';
import ContactFormBlock from "@/components/contact/ContactFormBlock.jsx";

const benefits = [
  { icon: <FaUserTie />, text: 'Asesoría directa con un líder de proyecto.' },
  { icon: <FaFileSignature />, text: 'Análisis de pre-factibilidad sin costo.' },
  { icon: <FaChartLine />, text: 'Estimación de presupuesto y cronograma preliminar.' },
];

export const CorporativosCTA = () => {
  return (
    <section id="form" className={styles.ctaSection} aria-labelledby="cta-corp-title">
      <div className={`container ${styles.ctaGrid}`}>
        <motion.div 
          className={styles.valueColumn}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h2 id="cta-corp-title">Conversemos sobre su Próximo Gran Proyecto</h2>
          <p>
            Permita que nuestra experiencia de 20 años transforme su visión en un activo rentable y duradero.
            Inicie la conversación y obtenga:
          </p>
          <ul className={styles.benefitsList}>
            {benefits.map((benefit, index) => (
              <li key={index}>
                <div className={styles.benefitIcon}>{benefit.icon}</div>
                <span>{benefit.text}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className={styles.formColumn}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        >
          <ContactFormBlock
            title="Solicite Asesoría y Estimación"
            subtitle="Indique ubicación, m², sistema estructural y fecha objetivo."
            agreementText='Acepto el <a href="/politica-privacidad" target="_blank">Aviso de Privacidad</a>.'
          />
        </motion.div>
      </div>
    </section>
  );
};
```

---

## Archivo: `src\components\corporativos\CorporativosHeader.jsx`

```
// src/components/corporativos/CorporativosHeader.jsx
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import styles from './CorporativosHeader.module.scss';
import { withConversionTracking } from '../../hocs/withConversionTracking.jsx';

const TrackedLink = withConversionTracking('a');

export const CorporativosHeader = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <header className={styles.header} aria-label="Edificios Comerciales y Corporativos">
      <div className={styles.mediaWrap} aria-hidden="true">
        <video
          className={styles.bgVideo}
          autoPlay
          loop
          muted
          playsInline
          poster="/corporativo_hero_poster.jpg"
        >
          <source src="/timelapse_corporativo.mp4" type="video/mp4" />
        </video>
        <div className={styles.overlay} />
      </div>

      <div className={`container ${styles.inner}`}>
        <motion.h1
          className={styles.title}
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
          animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }} 
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          Construyendo los Futuros Centros de Negocio
        </motion.h1>

        <motion.p
          className={styles.subtitle}
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 }}
        >
          Materializamos visiones arquitectónicas con <strong>ingeniería de valor</strong>,
          <strong> gestión integral</strong> y <strong>certeza en la ejecución</strong>.
        </motion.p>

        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <TrackedLink
            href="#form"
            className={styles.cta}
            conversionType="Solicitud_Corporativos_Hero"
          >
            Solicitar asesoría y estimación
          </TrackedLink>
        </motion.div>
      </div>
    </header>
  );
};

```

---

## Archivo: `src\components\corporativos\GaleriaCorporativos.jsx`

```
// src/components/corporativos/GaleriaCorporativos.jsx
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import styles from './GaleriaCorporativos.module.scss';

const items = [
  { title: 'Torre Corporativa — CDMX', image: '/edificio_corporativo_1.jpg' },
  { title: 'Plaza Comercial — Bajío', image: '/plaza_comercial_1.jpg' },
  { title: 'Uso Mixto — Monterrey', image: '/uso_mixto_1.jpg' },
  { title: 'Campus Corporativo — Querétaro', image: '/edificio_corporativo_2.jpg' },
];

export const GaleriaCorporativos = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className={styles.section} aria-labelledby="galeria-corp-title">
      <div className="container">
        <motion.h2
          id="galeria-corp-title"
          className={styles.title}
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 10 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
        >
          Proyectos Emblemáticos
        </motion.h2>

        <div className={styles.grid}>
          {items.map((it) => (
            <article key={it.title} className={styles.card}>
              <img
                src={it.image}
                alt={it.title}
                loading="lazy"
                className={styles.image}
              />
              <div className={styles.caption}>{it.title}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

```

---

## Archivo: `src\components\corporativos\MetodologiaGestion.jsx`

```
// src/components/corporativos/MetodologiaGestion.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import styles from './MetodologiaGestion.module.scss';

const steps = [
  {
    title: '1) Fase de Pre-Construcción',
    text:
      'Ingeniería de valor, estimaciones, permisos, planeación de compras y cronograma maestro. Definimos riesgos y mitigaciones desde el inicio.',
    image:
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: '2) Fase Estructural',
    text:
      'Cimentación y montaje de estructura (acero/concreto). Control dimensional, trazos y pruebas de calidad por etapa.',
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: '3) Cerramientos y Sistemas',
    text:
      'Ejecución de fachadas, interiores y sistemas MEP coordinados; compatibilización técnica y pruebas de funcionamiento.',
    image:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: '4) Entrega y Cierre',
    text:
      'Acabados finales, comisionamiento, documentación as-built y manuales. Plan de operación y garantías.',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
  },
];

export const MetodologiaGestion = () => {
  const [active, setActive] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className={styles.section} aria-labelledby="metodologia-title">
      <div className="container">
        <h2 id="metodologia-title" className={styles.title}>
          Metodología de Gestión de Proyectos
        </h2>
        <p className={styles.subtitle}>
          Ciclo de vida corporativo con control de costos, tiempos y calidad.
        </p>

        <div className={styles.layout}>
          <nav className={styles.nav} aria-label="Fases de metodología">
            {steps.map((s, i) => (
              <button
                key={s.title}
                type="button"
                className={`${styles.stepBtn} ${active === i ? styles.active : ''}`}
                onClick={() => setActive(i)}
                aria-current={active === i ? 'step' : undefined}
              >
                {s.title}
              </button>
            ))}
          </nav>

          <main className={styles.panel}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={prefersReducedMotion ? {} : { opacity: 0, x: 20 }}
                animate={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
                exit={prefersReducedMotion ? {} : { opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
              >
                <h3 className={styles.stepTitle}>{steps[active].title}</h3>
                <p className={styles.stepText}>{steps[active].text}</p>
                <div className={styles.imageWrap}>
                  <img
                    src={steps[active].image}
                    alt={steps[active].title}
                    loading="lazy"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>
    </section>
  );
};

```

---

## Archivo: `src\components\corporativos\PortafolioSoluciones.jsx`

```
// src/components/corporativos/PortafolioSoluciones.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import styles from './PortafolioSoluciones.module.scss';

const tabs = [
  {
    id: 'oficinas',
    label: 'Oficinas Corporativas',
    title: 'Espacios de trabajo modernos y eficientes',
    text:
      'Estructuras y sistemas que favorecen plantas abiertas, núcleos eficientes, acústica y confort ambiental con consumos optimizados.',
    bullets: [
      'Coordinación integral MEP, IT y sistemas de seguridad.',
      'Fachadas de alto desempeño térmico/acústico.',
      'Core & Shell y Fit-Out con control de calidad documentado.',
    ],
    image: '/edificio_corporativo_1.jpg',
  },
  {
    id: 'retail',
    label: 'Plazas Comerciales (Retail)',
    title: 'Experiencia del visitante y durabilidad',
    text:
      'Soluciones para grandes claros, circulaciones, cubiertas y acabados de alto tráfico con mantenimiento contenido.',
    bullets: [
      'Planeación de anclas y locales con accesos y andenes.',
      'Sistemas contra incendio, evacuación y señalética.',
      'Acabados y paisajismo resilientes al uso intensivo.',
    ],
    image: '/plaza_comercial_1.jpg',
  },
  {
    id: 'mixto',
    label: 'Proyectos de Uso Mixto',
    title: 'Integración de residencial, comercial y oficinas',
    text:
      'Interfaz técnica y constructiva entre usos con zonificación, aislación acústica y logística de obra secuenciada.',
    bullets: [
      'Gestión de interferencias y fases por torre/volumen.',
      'Sistemas híbridos (acero + concreto) según programa.',
      'Coordinación de accesos, estacionamientos y servicios.',
    ],
    image: '/uso_mixto_1.jpg',
  },
];

export const PortafolioSoluciones = () => {
  const [active, setActive] = useState(tabs[0].id);
  const prefersReducedMotion = useReducedMotion();
  const current = tabs.find((t) => t.id === active);

  return (
    <section className={styles.section} aria-labelledby="portafolio-title">
      <div className="container">
        <h2 id="portafolio-title" className={styles.title}>
          Portafolio de Soluciones
        </h2>

        <div className={styles.tabs} role="tablist" aria-label="Tipos de proyectos">
          {tabs.map((tb) => (
            <button
              key={tb.id}
              className={`${styles.tab} ${active === tb.id ? styles.active : ''}`}
              onClick={() => setActive(tb.id)}
              role="tab"
              aria-selected={active === tb.id}
              aria-controls={`panel-${tb.id}`}
              id={`tab-${tb.id}`}
              type="button"
            >
              {tb.label}
            </button>
          ))}
        </div>

        <div className={styles.contentWrap}>
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              className={styles.content}
              role="tabpanel"
              id={`panel-${current.id}`}
              aria-labelledby={`tab-${current.id}`}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
              animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? {} : { opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
            >
              <div className={styles.textCol}>
                <h3 className={styles.heading}>{current.title}</h3>
                <p className={styles.paragraph}>{current.text}</p>
                <ul className={styles.list}>
                  {current.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.imageCol}>
                <img
                  src={current.image}
                  alt={current.title}
                  loading="lazy"
                  className={styles.image}
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

```

---

## Archivo: `src\components\corporativos\ValuePropositionCorporativos.jsx`

```
// src/components/corporativos/ValuePropositionCorporativos.jsx
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FaGem, FaClipboardList, FaShieldAlt } from 'react-icons/fa'; // <-- Íconos!
import styles from './ValuePropositionCorporativos.module.scss';

// Contenido mejorado con iconos
const items = [
  {
    icon: <FaGem />,
    title: 'Ingeniería de Valor',
    text: 'Optimizamos diseños y procesos para reducir costos y plazos, maximizando el retorno de su inversión sin sacrificar la calidad arquitectónica.',
  },
  {
    icon: <FaClipboardList />,
    title: 'Gestión Integral de Proyectos',
    text: 'Actuamos como su único punto de contacto, garantizando una ejecución transparente y coordinada desde la pre-construcción hasta la entrega final.',
  },
  {
    icon: <FaShieldAlt />,
    title: 'Calidad Estructural Garantizada',
    text: 'Aplicamos 20 años de experiencia en acero, concreto y sistemas híbridos para asegurar la longevidad y seguridad de su edificación.',
  },
];

export const ValuePropositionCorporativos = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className={styles.section} aria-labelledby="corp-value-title">
      <div className="container">
        <motion.h2
          id="corp-value-title"
          className={styles.title}
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          Un proyecto ambicioso requiere un socio constructor a la altura
        </motion.h2>

        <div className={styles.grid}>
          {items.map((item, index) => (
            <motion.article
              key={item.title}
              className={styles.card}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
              whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.cardIcon}>{item.icon}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
```

---

## Archivo: `src\components\espectaculares\EspectacularesHeader.jsx`

```
// src/components/espectaculares/EspectacularesHeader.jsx
import React from 'react';
import { motion } from 'framer-motion';
import styles from './EspectacularesHeader.module.scss';
import { withConversionTracking } from '../../hocs/withConversionTracking.jsx'; // Importa el HOC para el seguimiento

const TrackedCTA = withConversionTracking('a');

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export const EspectacularesHeader = () => {
  return (
    <motion.header
      className={styles.espectacularesHeader}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className={styles.videoOverlay}></div>
      <video className={styles.backgroundVideo} autoPlay loop muted playsInline>
        <source src="/Generación_de_Video_Realista.mp4" type="video/mp4" />
        Tu navegador no soporta el video.
      </video>

      <div className={`container ${styles.headerContainer}`}>
        <motion.h1 className={styles.title} variants={itemVariants}>
          Estructuras para Espectaculares que Dominan el Paisaje Urbano
        </motion.h1>
        <motion.p className={styles.intro} variants={itemVariants}>
          Más que acero, construimos puntos de referencia. Diseñamos, fabricamos y montamos estructuras publicitarias que garantizan máxima visibilidad, total seguridad estructural y cumplimiento normativo absoluto.
        </motion.p>
        <motion.div variants={itemVariants}>
           <TrackedCTA 
              href="#form"
              className={styles.ctaButton}
              conversionType="Solicitud_Espectaculares_Hero"
            >
              Iniciar Análisis de Proyecto
            </TrackedCTA>
        </motion.div>
      </div>
    </motion.header>
  );
};
```

---

## Archivo: `src\components\espectaculares\GaleriaEspectaculares.jsx`

```
// src/components/espectaculares/GaleriaEspectaculares.jsx
import React from 'react';
import { motion } from 'framer-motion';
import styles from './GaleriaEspectaculares.module.scss';

const projects = [
    {
        title: 'Estructura de Azotea en Polanco, CDMX',
        image: '/estructura_metalica_casa_1.jpg'
        
    },
    {
        title: 'Cartelera de Gran Formato para Centro Comercial',
        image: '/estructura_metalica_trabajando_2.jpg'
    },
    {
        title: 'Estructura Publicitaria en Zona Industrial',
        image: '/estructura_metalica_trabajando_1.jpg'
    },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const GaleriaEspectaculares = () => {
    return (
        <section className={styles.gallerySection}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={styles.sectionTitle}>Proyectos que Hablan por Sí Mismos</h2>
                    <p className={styles.subtitle}>
                        Un vistazo a la calidad, escala y precisión de nuestras estructuras publicitarias en todo México.
                    </p>
                </motion.div>
                <motion.div 
                    className={styles.galleryGrid}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {projects.map((project, index) => (
                        <motion.div key={index} className={styles.galleryCard} variants={itemVariants}>
                            <img src={project.image} alt={project.title} />
                            <div className={styles.cardOverlay}>
                                <h3>{project.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
```

---

## Archivo: `src\components\espectaculares\IntroEspectaculares.jsx`

```
// src/components/espectaculares/IntroEspectaculares.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaBalanceScale, FaWind } from 'react-icons/fa';
import styles from './IntroEspectaculares.module.scss';

const points = [
    {
        icon: <FaShieldAlt />,
        title: 'Seguridad Estructural Innegociable',
        text: 'Cada estructura es calculada por nuestros ingenieros para soportar las condiciones más adversas, garantizando la seguridad del público y la integridad de su inversión.'
    },
    {
        icon: <FaBalanceScale />,
        title: 'Gestión Normativa y de Permisos',
        text: 'Navegamos la complejidad de los reglamentos de construcción y anuncios. Nos aseguramos que su proyecto cuente con la firma de un Director Responsable de Obra (DRO) y cumpla con toda la normativa local.'
    },
    {
        icon: <FaWind />,
        title: 'Durabilidad y Mínimo Mantenimiento',
        text: 'Utilizamos acero de la más alta calidad y recubrimientos protectores para asegurar una vida útil prolongada, minimizando su Costo Total de Propiedad (TCO).'
    }
];

export const IntroEspectaculares = () => {
    return (
        <section className={styles.introSection}>
            <div className="container">
                <motion.h2
                    className={styles.sectionTitle}
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Su Anuncio es una Inversión. Su Estructura es Nuestra Responsabilidad.
                </motion.h2>
                <div className={styles.pointsGrid}>
                    {points.map((point, index) => (
                        <motion.div
                            key={index}
                            className={styles.pointCard}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <div className={styles.iconWrapper}>{point.icon}</div>
                            <h3>{point.title}</h3>
                            <p>{point.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
```

---

## Archivo: `src\components\espectaculares\ProcesoEspectaculares.jsx`

```
// src/components/espectaculares/ProcesoEspectaculares.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearchLocation, FaRulerCombined, FaTruckLoading, FaHardHat } from 'react-icons/fa';
import styles from './ProcesoEspectaculares.module.scss';

const processSteps = [
  {
    icon: <FaSearchLocation />,
    title: '1. Análisis de Sitio y Normativa',
    description: 'Nuestro primer paso es crítico: realizamos un análisis de viabilidad en sitio, estudiamos la mecánica de suelos y revisamos la normativa municipal y de protección civil aplicable para garantizar que el proyecto es 100% factible y legal.',
    image: 'https://img.freepik.com/fotos-premium/arquitecto-ingeniero-construccion-plan-proyecto-dificil-trabajo_928131-7726.jpg',
  },
  {
    icon: <FaRulerCombined />,
    title: '2. Ingeniería de Detalle y Cálculo Estructural',
    description: 'Con los datos del sitio, nuestro equipo de ingeniería realiza el cálculo estructural, considerando cargas de viento, sismo y peso propio. Generamos los planos de fabricación y montaje con firma de nuestro Director Responsable de Obra (DRO).',
    image: 'https://albagsamx.com/wp-content/uploads/2025/08/Calculo-estructural-en-mexico.jpg',
  },
  {
    icon: <FaTruckLoading />,
    title: '3. Fabricación de Precisión y Logística',
    description: 'En planta, fabricamos cada componente con acero certificado y soldadura de alta penetración. Cada pieza es codificada y preparada para una logística de transporte eficiente, minimizando el tiempo y el riesgo en el sitio de montaje.',
    image: '/estructura_metalica_trabajando_1.jpg',
  },
  {
    icon: <FaHardHat />,
    title: '4. Montaje Seguro y de Alto Riesgo',
    description: 'Nuestro equipo especializado, equipado con la maquinaria y grúas adecuadas, ejecuta el montaje bajo los más estrictos protocolos de seguridad para trabajos en altura. Garantizamos una instalación precisa, segura y en estricto cumplimiento del cronograma.',
    image: '/estructura_metalica_edificio_1.png',
  },
];

export const ProcesoEspectaculares = () => {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <section className={styles.workProcessSection}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={styles.sectionTitle}>Nuestro Proceso: Ingeniería y Certeza de Principio a Fin</h2>
                    <p className={styles.subtitle}>
                        Un método riguroso que transforma una ubicación estratégica en un punto de referencia publicitario, garantizando seguridad, legalidad y durabilidad.
                    </p>
                </motion.div>
                
                <div className={styles.processLayout}>
                    <aside className={styles.stepNavigator}>
                        {processSteps.map((step, index) => (
                            <button
                                key={index}
                                className={`${styles.stepButton} ${activeStep === index ? styles.active : ''}`}
                                onClick={() => setActiveStep(index)}
                            >
                                {activeStep === index && 
                                    <motion.div className={styles.activeBg} layoutId="activeEspectacularesBg" />
                                }
                                <span className={styles.stepIcon}>{step.icon}</span>
                                <span className={styles.stepTitleNav}>{step.title.substring(3)}</span>
                            </button>
                        ))}
                    </aside>

                    <main className={styles.contentPanel}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeStep}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4, ease: 'easeInOut' }}
                            >
                                <h3 className={styles.stepTitle}>{processSteps[activeStep].title}</h3>
                                <p className={styles.stepDescription}>{processSteps[activeStep].description}</p>
                                <div className={styles.imageWrapper}>
                                    <img src={processSteps[activeStep].image} alt={processSteps[activeStep].title} />
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </main>
                </div>
            </div>
        </section>
    );
};
```

---

## Archivo: `src\components\espectaculares\TiposEspectaculares.jsx`

```
// src/components/espectaculares/TiposEspectaculares.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './TiposEspectaculares.module.scss';

const tiposData = [
    {
        id: 'unipolares',
        label: 'Unipolares de Gran Formato',
        title: 'Estructuras Unipolares: Impacto Monumental',
        description: 'Diseñamos y construimos espectaculares unipolares que se convierten en hitos visuales. Nuestro enfoque en la ingeniería de cimentación y el cálculo de cargas de viento garantiza una estructura robusta y segura, capaz de soportar las vallas publicitarias más grandes en las ubicaciones de mayor tráfico.',
        image: 'https://publiper.com.mx/wp-content/uploads/2025/01/4-1024x768.png',
        specs: ['Cálculo estructural para cargas de viento', 'Diseño de cimentación profunda', 'Montaje con grúas de alta capacidad', 'Ideal para carreteras y avenidas principales']
    },
    {
        id: 'azotea',
        label: 'Estructuras de Azotea',
        title: 'Espectaculares de Azotea: Visibilidad Elevada',
        description: 'Maximizamos la visibilidad de su marca aprovechando los espacios elevados. Realizamos un análisis de cargas exhaustivo del edificio existente para diseñar una estructura ligera, segura y perfectamente anclada, que se integra a la arquitectura existente sin comprometer su integridad.',
        image: 'https://naranti-main.s3.amazonaws.com/media/posts/2024-05-07/171512168331kyAMUw6DXgWdliPGJKQnm9Bx0zCZfEsqe2j8utNTb5RSAOVo7FcLYrvHpI4h_posts.jpeg',
        specs: ['Análisis de cargas sobre edificaciones', 'Anclajes químicos y mecánicos seguros', 'Diseño ligero y de bajo perfil de viento', 'Cumplimiento con reglamentos urbanos']
    }
];

export const TiposEspectaculares = () => {
    const [activeTab, setActiveTab] = useState(tiposData[0].id);
    const activeTabData = tiposData.find(tab => tab.id === activeTab);

    return (
        <section className={styles.tiposSection}>
            <div className="container">
                <div className={styles.tabsNav}>
                    {tiposData.map(tab => (
                        <button
                            key={tab.id}
                            className={`${styles.tabButton} ${activeTab === tab.id ? styles.active : ''}`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                <div className={styles.tabsContent}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                            className={styles.contentGrid}
                        >
                            <div className={styles.textContainer}>
                                <h3>{activeTabData.title}</h3>
                                <p>{activeTabData.description}</p>
                                <ul>
                                    {activeTabData.specs.map((spec, index) => <li key={index}>{spec}</li>)}
                                </ul>
                            </div>
                            <div className={styles.imageContainer}>
                                <img src={activeTabData.image} alt={activeTabData.title} />
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};
```

---

## Archivo: `src\components\espectaculares\VentajasTecnicas.jsx`

```
// src/components/espectaculares/VentajasTecnicas.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaCheckDouble, FaFileSignature } from 'react-icons/fa';
import styles from './VentajasTecnicas.module.scss';

const advantages = [
    {
        icon: <FaAward />,
        title: 'Acero Certificado y Soldadura Especializada',
        text: 'Solo utilizamos acero que cumple con las normas ASTM. Nuestros procesos de soldadura son realizados por personal certificado, garantizando uniones que exceden los requerimientos de resistencia.'
    },
    {
        icon: <FaCheckDouble />,
        title: 'Recubrimientos de Alta Durabilidad',
        text: 'Protegemos su inversión con sistemas de recubrimiento industrial (primarios y acabados) que previenen la corrosión y extienden la vida útil de la estructura, incluso en ambientes agresivos.'
    },
    {
        icon: <FaFileSignature />,
        title: 'Responsabilidad y Cumplimiento (DRO)',
        text: 'Cada uno de nuestros proyectos de espectaculares es avalado y firmado por un Director Responsable de Obra, brindándole la máxima certeza legal y de cumplimiento normativo ante las autoridades.'
    }
];

export const VentajasTecnicas = () => {
    return (
        <section className={styles.ventajasSection}>
            <div className={`container ${styles.ventajasGrid}`}>
                <motion.div 
                    className={styles.textColumn}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className={styles.sectionTitle}>Nuestra Ventaja es su Tranquilidad</h2>
                    <p className={styles.subtitle}>
                        En un sector donde no hay margen de error, nuestra ventaja competitiva se basa en una ingeniería rigurosa, materiales de primera y una responsabilidad total sobre nuestro trabajo.
                    </p>
                    <div className={styles.advantagesList}>
                        {advantages.map((adv, index) => (
                            <div key={index} className={styles.advantageItem}>
                                <div className={styles.iconWrapper}>{adv.icon}</div>
                                <div className={styles.itemContent}>
                                    <h3>{adv.title}</h3>
                                    <p>{adv.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
                <motion.div 
                    className={styles.imageColumn}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                >
                    <img src="/estructura_metalica_trabajando_2.jpg" alt="Soldador certificado trabajando en estructura metálica" />
                </motion.div>
            </div>
        </section>
    );
};
```

---

## Archivo: `src\components\Footer\Footer.jsx`

```
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
```

---

## Archivo: `src\components\home\BlogHighlight.jsx`

```
// src/components/home/BlogHighlight.jsx
import React from 'react';
import { motion } from 'framer-motion';

// --- Usando React Icons para el ícono de "leer más" ---
import { FaArrowRight } from 'react-icons/fa';

import styles from './BlogHighlight.module.scss';

// --- Datos de ejemplo para las entradas del blog ---
// Estos títulos están pensados para atraer a tu cliente ideal y contener palabras clave.
const blogPosts = [
  {
    image: './estructura_metalica_trabajando_1.jpg',
    category: 'Análisis Técnico',
    title: '3 Errores Críticos al Seleccionar un Proveedor de Estructuras Metálicas',
    excerpt: 'Descubra las señales de alerta que pueden comprometer su cronograma, presupuesto y la integridad estructural de su proyecto.',
    link: '#', // TODO: Enlazar a la entrada del blog real
  },
  {
    image: './estructura_metalica_trabajando_2.jpg',
    category: 'Casos de Éxito',
    title: 'Caso de Éxito: Reducción del 20% en Tiempos de Montaje en Nave Industrial',
    excerpt: 'Cómo nuestra fase de habilitado de precisión y logística Just-in-Time optimizaron un proyecto con cronograma crítico.',
    link: '#',
  },
  {
    image: './estructura_metalica_vigas_1.jpg',
    category: 'Ingeniería y Normativa',
    title: 'Acero A-36 vs. A-572: ¿Cuál es el Indicado para su Proyecto?',
    excerpt: 'Un análisis comparativo de las propiedades, aplicaciones y costos de los aceros más comunes en la construcción industrial mexicana.',
    link: '#',
  },
];

// --- Variantes de animación consistentes ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const BlogHighlight = () => {
  return (
    <section className={styles.blogSection}>
      <motion.div
        className="container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.h2 className={styles.sectionTitle} variants={itemVariants}>
          Desde la Mesa de Ingeniería
        </motion.h2>
        <motion.p className={styles.subtitle} variants={itemVariants}>
          Explore nuestros artículos técnicos, casos de estudio y las últimas tendencias en la construcción con acero.
        </motion.p>
        
        <div className={styles.postsGrid}>
          {blogPosts.map((post, index) => (
            <motion.a 
              key={index} 
              href={post.link} 
              className={styles.postCard} 
              variants={itemVariants}
            >
              <div className={styles.cardImage}>
                <img src={post.image} alt={`Imagen del artículo: ${post.title}`} />
              </div>
              <div className={styles.cardContent}>
                <span className={styles.cardCategory}>{post.category}</span>
                <h3 className={styles.cardTitle}>{post.title}</h3>
                <p className={styles.cardExcerpt}>{post.excerpt}</p>
                <div className={styles.cardCta}>
                  Leer artículo completo <FaArrowRight />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
```

---

## Archivo: `src\components\home\ClientLogoBar.jsx`

```
// src/components/home/ClientLogoBar.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaHandshake } from 'react-icons/fa';
import styles from './ClientLogoBar.module.scss';

const LogoPlaceholder1 = () => <img src="./logo_grupo_alfa_74.png" width={80} alt="Logo de un cliente" />;
const LogoPlaceholder2 = () => <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg"><text x="60" y="25" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold">PROYECTOS SIGMA</text></svg>;
const LogoPlaceholder3 = () => <img src="./logo_grupo_alfa_74.png" width={80} alt="Logo de un cliente" />;
const LogoPlaceholder4 = () => <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg"><text x="60" y="25" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold">GRUPO KAPPA</text></svg>;
const LogoPlaceholder5 = () => <img src="./logo_grupo_alfa_74.png" width={80} alt="Logo de un cliente" />;

const clientLogos = [
    { id: 1, component: <LogoPlaceholder1 /> },
    { id: 2, component: <LogoPlaceholder2 /> },
    { id: 3, component: <LogoPlaceholder3 /> },
    { id: 4, component: <LogoPlaceholder4 /> },
    { id: 5, component: <LogoPlaceholder5 /> },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export const ClientLogoBar = () => {
    return (
        <section className={styles.clientLogoSection}>
            <motion.div 
                className="container"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
            >
                <motion.div className={styles.header} variants={itemVariants}>
                    <FaHandshake className={styles.headerIcon} />
                    <h2 className={styles.title}>La Confianza de los Líderes de la Industria</h2>
                </motion.div>

                <motion.div 
                    className={styles.logoGrid}
                    variants={containerVariants} // Re-usamos para stagger dentro del grid
                >
                    {clientLogos.map(logo => (
                        <motion.div key={logo.id} className={styles.logoWrapper} variants={itemVariants}>
                            {logo.component}
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
};
```

---

## Archivo: `src\components\home\FinalCTA.jsx`

```
import React from 'react';
import { motion } from 'framer-motion';
import styles from './FinalCTA.module.scss';

// --- Variantes de animación ---
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};

const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            type: 'spring',
            stiffness: 200,
            damping: 10,
            duration: 0.8
        }
    }
}

export const FinalCTA = () => {
  return (
    <section className={styles.ctaSection}>
      <motion.div
        className={`container ${styles.ctaContainer}`}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.h2 className={styles.title} variants={itemVariants}>
          Construyamos Juntos su Próximo Gran Proyecto
        </motion.h2>

        <motion.p className={styles.subtitle} variants={itemVariants}>
          Hable con uno de nuestros expertos para un análisis de riesgo estructural y una cotización sin compromiso.
        </motion.p>

        <motion.div variants={buttonVariants}>
          <a href="#contacto" className={styles.ctaButton}>
            Solicitar Cotización
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

```

---

## Archivo: `src\components\home\HeroSection.jsx`

```
import React from 'react';
import { motion } from 'framer-motion';
import styles from './HeroSection.module.scss';

// --- Importa el HOC para el seguimiento ---
import { withConversionTracking } from '../../hocs/withConversionTracking.jsx';

// --- Crea versiones "rastreables" de tus elementos clicables ---
const TrackedPrimaryCTA = withConversionTracking('a');
const TrackedSecondaryCTA = withConversionTracking('a');


// --- Variantes de animación para Framer Motion ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Anima los hijos con un retraso de 0.2s
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={`container ${styles.heroContainer}`}>
        <motion.div 
          className={styles.heroContent}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p className={styles.eyebrow} variants={fadeUp}>
            20 Años de Experiencia • 100% de Cumplimiento sin Fallas
          </motion.p>
          
          <motion.h1 className={styles.title} variants={fadeUp}>
            Ingeniería en Estructuras Metálicas en CDMX que Garantiza su Inversión
          </motion.h1>

          <motion.p className={styles.subtitle} variants={fadeUp}>
            Somos el socio estratégico que elimina la incertidumbre de su proyecto, garantizando la entrega a tiempo, la integridad estructural y el menor **Costo Total de Propiedad (TCO)**.
          </motion.p>

          <motion.div className={styles.ctaContainer} variants={fadeUp}>
            {/* --- Usa los componentes rastreables y pasa el tipo de conversión --- */}
            <TrackedPrimaryCTA 
              href="#contacto" 
              className={styles.primaryCta}
              conversionType="Solicitud_Cotizacion_Hero"
            >
              Solicitar Cotización
            </TrackedPrimaryCTA>

            <TrackedSecondaryCTA 
              href="#proyectos" 
              className={styles.secondaryCta}
              conversionType="Ver_Proyectos_Hero"
            >
              Ver Proyectos Destacados
            </TrackedSecondaryCTA>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};


```

---

## Archivo: `src\components\home\ProjectsHighlight.jsx`

```
import React from 'react';
import { motion } from 'framer-motion';
import styles from './ProjectsHighlight.module.scss';

// Datos de los proyectos para mantener el JSX limpio.
const projectsData = [
  {
    image: './estructura_metalica_1.jpg',
    title: 'Nave Industrial para Sector Logístico',
    location: 'Monterrey, Nuevo León',
    description: '<b>Desafío:</b> Montaje en un plazo crítico de 45 días.<br><b>Solución Alfa 74:</b> Habilitado de alta precisión que redujo el tiempo en sitio en un 15%.<br><b>Resultado:</b> Entrega completada 5 días antes de lo previsto.',
    link: '#', // TODO: Enlazar al estudio de caso
  },
  {
    image: './estructura_metalica_edificio_1.png',
    title: 'Estructura para Edificio Corporativo',
    location: 'Ciudad de México',
    description: '<b>Desafío:</b> Alta complejidad en uniones y logística urbana.<br><b>Solución Alfa 74:</b> Ingeniería de montaje y coordinación Just-in-Time.<br><b>Resultado:</b> Cero incidentes y cumplimiento del 100% del cronograma maestro.',
    link: '#',
  },
  {
    image: 'estructura_metalica_vigas_1.jpg',
    title: 'Puente Vehicular Metálico',
    location: 'Querétaro, Querétaro',
    description: '<b>Desafío:</b> Cumplir con normativas sísmicas y de carga exigentes.<br><b>Solución Alfa 74:</b> Fabricación con soldadura certificada y montaje controlado.<br><b>Resultado:</b> Superación de todas las pruebas de carga y durabilidad.',
    link: '#',
  },
];

// Variantes de animación
const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const ProjectsHighlight = () => {
  return (
    <section className={styles.projectsSection}>
      <div className="container">
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Proyectos que Construyen el Futuro de México
        </motion.h2>

        <motion.div
          className={styles.projectsGrid}
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projectsData.map((project, index) => (
            <motion.div key={index} className={styles.projectCard} variants={cardVariants}>
              <div className={styles.cardImage}>
                <img src={project.image} alt={`Imagen del proyecto ${project.title}`} />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardLocation}>{project.location}</p>
                <p 
                  className={styles.cardDescription}
                  dangerouslySetInnerHTML={{ __html: project.description }}
                />
                <a href={project.link} className={styles.cardCta}>
                  Ver Estudio de Caso Completo <span>→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

```

---

## Archivo: `src\components\home\ServicesOverview.jsx`

```
import React from 'react';
import { motion } from 'framer-motion';
import styles from './ServicesOverview.module.scss';

// --- Iconos SVG como componentes para mejor rendimiento y control ---
const IconFabricacion = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
  </svg>
);
const IconHabilitado = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
  </svg>
);
const IconMontaje = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6v-.75c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5" />
  </svg>
);


// Datos de los servicios para mantener el código limpio
const servicesData = [
  {
    icon: <IconFabricacion />,
    title: 'Fabricación',
    description: 'Precisión que garantiza el ensamblaje perfecto en obra.',
    link: '#', // TODO: Cambiar por el enlace real
  },
  {
    icon: <IconHabilitado />,
    title: 'Habilitado',
    description: 'Cortes y soldaduras certificadas que cumplen con las normativas más estrictas.',
    link: '#', // TODO: Cambiar por el enlace real
  },
  {
    icon: <IconMontaje />,
    title: 'Montaje Industrial',
    description: 'Ejecución segura, eficiente y en cumplimiento estricto de su cronograma.',
    link: '#', // TODO: Cambiar por el enlace real
  },
];

// Variantes de animación
const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const ServicesOverview = () => {
  return (
    <section className={styles.servicesSection}>
      <div className="container">
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Soluciones Integrales en Acero Estructural
        </motion.h2>

        <p className={styles.cardDescription}>Ofrecemos soluciones integrales en estructuras metálicas en la Ciudad de México. Nuestro proceso abarca desde la fabricación y habilitado de acero de alta precisión hasta el montaje de naves industriales, edificios comerciales y reforzamiento estructural.</p>
        <motion.div
          className={styles.servicesGrid}
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {servicesData.map((service, index) => (
            <motion.div key={index} className={styles.serviceCard} variants={cardVariants}>
              <div className={styles.iconWrapper}>{service.icon}</div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
              <a href={service.link} className={styles.cardCta}>
                Conocer más <span>→</span>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

```

---

## Archivo: `src\components\home\Testimonials.jsx`

```
import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from './Testimonials.module.scss';

// --- Datos de los testimonios ---
const testimonialsData = [
  {
    quote: "El cumplimiento y la calidad de Grupo Alfa 74 fueron clave para mantener nuestro proyecto en tiempo y presupuesto. Su profesionalismo es inigualable.",
    name: "Carlos Hernández",
    title: "Director de Proyecto, Conjunto Calakmul Santa Fe",
    image: "https://placehold.co/100x100/e2e8f0/1a202c?text=CH"
  },
  {
    quote: "Su capacidad para resolver desafíos complejos en sitio y su estricto apego a las normativas nos dieron la certeza que necesitábamos. Son más que un proveedor, son un socio estratégico.",
    name: "Laura Jiménez",
    title: "Gerente de Construcción, K+O INGENIERÍA",
    image: "https://placehold.co/100x100/e2e8f0/1a202c?text=LJ"
  },
  {
    quote: "La precisión en la fabricación de sus estructuras se tradujo en un montaje rápido y sin contratiempos, optimizando todo nuestro cronograma. Altamente recomendados.",
    name: "Miguel Torres",
    title: "CEO, Desarrolladora Maritima Oceano",
    image: "https://placehold.co/100x100/e2e8f0/1a202c?text=MT"
  }
];

export const Testimonials = () => {
  // --- Configuración del carrusel ---
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 7000,
    adaptiveHeight: true,
    appendDots: dots => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <section className={styles.testimonialsSection}>
      <div className="container">
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Lo que Nuestros Socios Comerciales Dicen
        </motion.h2>
        
        <motion.div
          className={styles.carouselContainer}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Slider {...settings}>
            {testimonialsData.map((testimonial, index) => (
              <div key={index} className={styles.testimonialCard}>
                <p className={styles.quote}>“{testimonial.quote}”</p>
                <div className={styles.authorInfo}>
                  <img src={testimonial.image} alt={`Foto de ${testimonial.name}`} className={styles.authorImage} />
                  <div className={styles.authorDetails}>
                    <span className={styles.authorName}>{testimonial.name}</span>
                    <span className={styles.authorTitle}>{testimonial.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
};

```

---

## Archivo: `src\components\home\TrustBar.jsx`

```
import React from 'react';
import { motion } from 'framer-motion';
import styles from './TrustBar.module.scss';

// Datos para la barra de confianza. Así es fácil de modificar.
const trustData = [
  { value: '+20', label: 'Años de Experiencia' },
  { value: '100%', label: 'de Satisfacción' },
  { value: 'Nacional', label: 'Cobertura' },
  { value: 'IMCA', label: 'Certificación' },
];

// Variantes de animación para una aparición sutil
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3, // Pequeño retraso para que aparezca después del Hero
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export const TrustBar = () => {
  return (
    <section className={styles.trustBarSection}>
      <motion.div
        className={`container ${styles.trustBarContainer}`}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible" // La animación se activa cuando el componente es visible
        viewport={{ once: true, amount: 0.5 }} // Se anima solo una vez
      >
        {trustData.map((item, index) => (
          <motion.div key={index} className={styles.trustItem} variants={itemVariants}>
            <span className={styles.value}>{item.value}</span>
            <span className={styles.label}>{item.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

```

---

## Archivo: `src\components\home\ValueProposition.jsx`

```
import React from 'react';
import { motion } from 'framer-motion';
import styles from './ValueProposition.module.scss';

// --- Iconos para cada punto de valor ---
const IconTCO = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
const IconCronograma = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18M12 12.75h.008v.008H12v-.008z" />
  </svg>
);
const IconCerteza = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z" />
  </svg>
);

// --- Datos para mantener el componente limpio ---
const valuePropositions = [
  {
    icon: <IconTCO />,
    title: 'Minimizamos tu Costo Total de Propiedad (TCO)',
    text: 'Nuestra calidad certificada y precisión en el montaje evitan costosos re-trabajos y reducen los gastos de mantenimiento a largo plazo.',
  },
  {
    icon: <IconCronograma />,
    title: 'Garantizamos tu Cronograma',
    text: 'Con 20 años de logística optimizada, eliminamos la variable de riesgo más común: los retrasos por fallas del subcontratista.',
  },
  {
    icon: <IconCerteza />,
    title: 'Somos su Garantía de Certeza',
    text: 'Nuestro historial de 100% de cumplimiento sin fallas es la prueba de que aseguramos el éxito de su proyecto.',
  },
];

// --- Variantes de animación ---
const fromLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};
const fromRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};
const textContainerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
};


export const ValueProposition = () => {
  return (
    <section className={styles.valueSection}>
      <div className="container">
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          ¿Por Qué los Líderes de la Industria Confían en Grupo Alfa 74?
        </motion.h2>

        <div className={styles.gridContainer}>
          <motion.div
            className={styles.imageColumn}
            variants={fromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <img 
              src="estructura_metalica_trabajando_2.jpg" 
              alt="Equipo de ingenieros revisando planos en obra" 
            />
          </motion.div>
          <motion.div
            className={styles.textColumn}
            variants={textContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {valuePropositions.map((item, index) => (
              <motion.div key={index} className={styles.propositionItem} variants={fromRight}>
                <div className={styles.iconWrapper}>{item.icon}</div>
                <div className={styles.textWrapper}>
                  <h3 className={styles.propositionTitle}>{item.title}</h3>
                  <p className={styles.propositionText}>{item.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

```

---

## Archivo: `src\components\home\WorkProcess.jsx`

```
// src/components/home/WorkProcess.jsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaClipboardList, FaDraftingCompass, FaCogs, FaHardHat } from 'react-icons/fa';
import { useConversion } from '/src/hooks/useConversion.js';
import styles from './WorkProcess.module.scss';

const processSteps = [
  {
    icon: <FaClipboardList />,
    title: '1. Análisis Técnico y Viabilidad',
    description: 'No solo cotizamos, co-creamos. Analizamos sus planos para identificar optimizaciones y garantizar la viabilidad estructural y de cronograma desde el día cero.',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1332&auto=format&fit=crop',
  },
  {
    icon: <FaDraftingCompass />,
    title: '2. Ingeniería de Detalle y Planificación',
    description: 'Transformamos los planos arquitectónicos en órdenes de fabricación precisas. Cada corte, soldadura y unión se planifica para un ensamble perfecto en obra.',
    image: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=1170&auto=format&fit=crop',
  },
  {
    icon: <FaCogs />,
    title: '3. Fabricación de Precisión y Habilitado',
    description: 'En nuestra planta, la tecnología y la experiencia se unen. Fabricamos cada componente bajo estrictos controles de calidad, listos para un montaje sin sorpresas.',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1169&auto=format&fit=crop',
  },
  {
    icon: <FaHardHat />,
    title: '4. Montaje Seguro y Entrega Puntual',
    description: 'Nuestro equipo especializado ejecuta el montaje en sitio con una logística impecable y un enfoque total en la seguridad, cumpliendo el 100% de las veces con el cronograma pactado.',
    image: './estructura-para-techo.jpg',
  },
];

export const WorkProcess = () => {
    const [activeStep, setActiveStep] = useState(0);
    const { logConversion } = useConversion();
    // Ref para asegurar que la conversión solo se registre una vez por visita a la página
    const finalStepConversionLogged = useRef(false);

    // --- LÓGICA DE CONVERSIÓN ---
    // Se activa cada vez que el `activeStep` cambia.
    useEffect(() => {
        const isFinalStep = activeStep === processSteps.length - 1;
        
        // Si el usuario llega al último paso y no hemos registrado la conversión aún...
        if (isFinalStep && !finalStepConversionLogged.current) {
            console.log("CONVERSIÓN: Usuario llegó al final del proceso.");
            logConversion('Process_FinalStep_Reached');
            finalStepConversionLogged.current = true; // Marcamos que ya se registró.
        }
    }, [activeStep, logConversion]);

    return (
        <section className={styles.workProcessSection}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={styles.sectionTitle}>Nuestro Proceso: Certeza en Cada Etapa</h2>
                    <p className={styles.subtitle}>
                        Un método probado que transforma sus planos en estructuras de acero, garantizando calidad, seguridad y cumplimiento. Así es como mitigamos su riesgo.
                    </p>
                </motion.div>
                
                <div className={styles.processLayout}>
                    {/* Columna Izquierda: Navegador de Pasos */}
                    <aside className={styles.stepNavigator}>
                        {processSteps.map((step, index) => (
                            <button
                                key={index}
                                className={`${styles.stepButton} ${activeStep === index ? styles.active : ''}`}
                                onClick={() => setActiveStep(index)}
                            >
                                {activeStep === index && 
                                    <motion.div className={styles.activeBg} layoutId="activeStepBg" />
                                }
                                <span className={styles.stepNumber}>0{index + 1}</span>
                                <span className={styles.stepTitleNav}>{step.title.substring(3)}</span>
                            </button>
                        ))}
                    </aside>

                    {/* Columna Derecha: Contenido del Paso Activo */}
                    <main className={styles.contentPanel}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeStep} // ¡Clave para que AnimatePresence detecte el cambio!
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4, ease: 'easeInOut' }}
                            >
                                <div className={styles.contentHeader}>
                                    <div className={styles.iconWrapper}>
                                        {processSteps[activeStep].icon}
                                    </div>
                                    <h3 className={styles.stepTitle}>{processSteps[activeStep].title}</h3>
                                </div>
                                <p className={styles.stepDescription}>{processSteps[activeStep].description}</p>
                                <div className={styles.imageWrapper}>
                                    <img src={processSteps[activeStep].image} alt={processSteps[activeStep].title} />
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </main>
                </div>
            </div>
        </section>
    );
};
```

---

## Archivo: `src\components\Navbar\Navbar.jsx`

```
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
```

---

## Archivo: `src\components\naves\CTAConsultation.jsx`

```
// src/components/naves/CTAConsultation.jsx
import React from 'react';
import styles from './CTAConsultation.module.scss';
import ContactFormBlock from '../contact/ContactFormBlock.jsx';

export const CTAConsultation = () => {
  return (
    <section className={styles.section} aria-labelledby="cta-naves-title">
      <div className="container">
        <h2 id="cta-naves-title" className={styles.title}>
          Hable con un ingeniero de naves industriales
        </h2>
        <p className={styles.subtitle}>
          Compártenos layout, altura libre, claros requeridos y cronograma. Respondemos
          en menos de 24 horas.
        </p>

        <div id="form" className={styles.formWrap}>
          <ContactFormBlock
            title="Solicitud de análisis y cotización"
            subtitle="Indique ubicación del proyecto, m² estimados, alturas, claros y plazo de entrega."
            agreementText='Acepto el <a href="/politica-privacidad">Aviso de Privacidad</a>.'
          />
        </div>
      </div>
    </section>
  );
};

```

---

## Archivo: `src\components\naves\GaleriaNaves.jsx`

```
// src/components/naves/GaleriaNaves.jsx
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import styles from './GaleriaNaves.module.scss';

const items = [
  { title: 'Nave logística — Monterrey', image: '/estructura_metalica_1.jpg' },
  { title: 'CEDIS — Bajío', image: '/estructura_metalica_trabajando_1.jpg' },
  { title: 'Bodega — CDMX', image: '/estructura_metalica_vigas_1.jpg' },
  { title: 'Manufactura — Querétaro', image: '/estructura_metalica_edificio_1.png' },
];

export const GaleriaNaves = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className={styles.section} aria-labelledby="galeria-naves-title">
      <div className="container">
        <motion.h2
          id="galeria-naves-title"
          className={styles.title}
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 10 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
        >
          Proyectos que Validan la Ejecución
        </motion.h2>

        <div className={styles.grid}>
          {items.map((it) => (
            <article key={it.title} className={styles.card}>
              <img
                src={it.image}
                alt={it.title}
                loading="lazy"
                className={styles.image}
              />
              <div className={styles.caption}>{it.title}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

```

---

## Archivo: `src\components\naves\NavesCTA.jsx`

```
// src/components/naves/NavesCTA.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import styles from './NavesCTA.module.scss';
import ContactFormBlock from "@/components/contact/ContactFormBlock.jsx";

const benefits = [
  'Análisis técnico preliminar sin costo.',
  'Ingeniería de valor para optimizar su inversión.',
  'Ejecución garantizada en tiempo y presupuesto.',
];

export const NavesCTA = () => {
  return (
    <section id="form" className={styles.ctaSection} aria-labelledby="cta-naves-title">
      <div className={`container ${styles.ctaGrid}`}>
        {/* Columna Izquierda: Propuesta de Valor */}
        <motion.div 
          className={styles.valueColumn}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h2 id="cta-naves-title">Listo para Iniciar su Próximo Proyecto Industrial?</h2>
          <p>
            Nuestro equipo está preparado para transformar sus requerimientos en una estructura funcional y rentable.
            Hable con un experto y obtenga:
          </p>
          <ul className={styles.benefitsList}>
            {benefits.map((benefit, index) => (
              <li key={index}>
                <FaCheckCircle className={styles.benefitIcon} />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Columna Derecha: Formulario */}
        <motion.div
          className={styles.formColumn}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        >
          <ContactFormBlock
            title="Solicite su Análisis y Cotización"
            subtitle="Compártenos tu layout, m², ubicación y cronograma."
            agreementText='Acepto el <a href="/politica-privacidad" target="_blank">Aviso de Privacidad</a>.'
          />
        </motion.div>
      </div>
    </section>
  );
};
```

---

## Archivo: `src\components\naves\NavesHeader.jsx`

```
// src/components/naves/NavesHeader.jsx
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import styles from './NavesHeader.module.scss';
import { withConversionTracking } from '../../hocs/withConversionTracking.jsx';

const TrackedLink = withConversionTracking('a');

export const NavesHeader = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <header className={styles.header} aria-label="Soluciones en Naves Industriales">
      <div className={styles.mediaWrap} aria-hidden="true">
        <video
          className={styles.bgVideo}
          autoPlay
          loop
          muted
          playsInline
          poster="/nave_hero_poster.jpg"
        >
          <source src="/timelapse_nave.mp4" type="video/mp4" />
        </video>
        <div className={styles.overlay} />
      </div>

      <div className={`container ${styles.inner}`}>
        <motion.h1
          className={styles.title}
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
          animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }} 
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          Soluciones en Naves Industriales para Operaciones que No se Detienen
        </motion.h1>

        <motion.p
          className={styles.subtitle}
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        >
          Mitigamos riesgo de <strong>tiempo</strong>, <strong>presupuesto</strong> y{' '}
          <strong>seguridad</strong> con ingeniería, habilitado en planta y montaje acelerado.
        </motion.p>

        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <TrackedLink
            href="#form"
            className={styles.cta}
            conversionType="Solicitud_Naves_Hero"
          >
            Solicitar análisis y cotización
          </TrackedLink>
        </motion.div>
      </div>
    </header>
  );
};

```

---

## Archivo: `src\components\naves\ProcesoNaves.jsx`

```
// src/components/naves/ProcesoNaves.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import styles from './ProcesoNaves.module.scss';

const steps = [
  {
    title: '1) Diseño y Cálculo',
    text:
      'Ingeniería de detalle, modelos, memorias de cálculo, compatibilización arquitectura/MEP, criterios IMCA y firma de DRO.',
    image:
      'https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: '2) Habilitado en Planta',
    text:
      'Prefabricación, etiquetado y QA/QC de piezas para ensamblaje preciso y reducción de tiempos en sitio.',
    image:
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: '3) Cimentación',
    text:
      'Coordinación con obra civil, anclas/plantillas y liberación por control de calidad para recibir estructura metálica.',
    image: '/estructura-para-techo.jpg',
  },
  {
    title: '4) Montaje',
    text:
      'Logística JIT, maniobras seguras en altura y cumplimiento estricto del cronograma maestro.',
    image: '/estructura_metalica_trabajando_2.jpg',
  },
  {
    title: '5) Acabados y Entrega',
    text:
      'Protecciones, recubrimientos, pruebas y documentación final para operación estable y de bajo mantenimiento (TCO).',
    image: '/estructura_metalica_edificio_1.png',
  },
];

export const ProcesoNaves = () => {
  const [active, setActive] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className={styles.section} aria-labelledby="proceso-naves-title">
      <div className="container">
        <h2 id="proceso-naves-title" className={styles.title}>
          Nuestro Proceso Constructivo
        </h2>
        <p className={styles.subtitle}>
          Transparencia y control en cada fase para eliminar sorpresas.
        </p>

        <div className={styles.layout}>
          <nav className={styles.nav} aria-label="Fases del proceso">
            {steps.map((s, i) => (
              <button
                key={s.title}
                type="button"
                className={`${styles.stepBtn} ${active === i ? styles.active : ''}`}
                onClick={() => setActive(i)}
                aria-current={active === i ? 'step' : undefined}
              >
                {s.title}
              </button>
            ))}
          </nav>

          <main className={styles.panel}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={prefersReducedMotion ? {} : { opacity: 0, x: 20 }}
                animate={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
                exit={prefersReducedMotion ? {} : { opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
              >
                <h3 className={styles.stepTitle}>{steps[active].title}</h3>
                <p className={styles.stepText}>{steps[active].text}</p>
                <div className={styles.imageWrap}>
                  <img
                    src={steps[active].image}
                    alt={steps[active].title}
                    loading="lazy"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>
    </section>
  );
};

```

---

## Archivo: `src\components\naves\TiposNaves.jsx`

```
// src/components/naves/TiposNaves.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import styles from './TiposNaves.module.scss';

const tabs = [
  {
    id: 'acero',
    label: 'Estructuras de Acero',
    title: 'Máxima flexibilidad y grandes claros',
    text:
      'Soluciones en acero para luces amplias, crecimiento modular, techos insulados y preparación para equipos (sistemas contra incendio, ductería, puentes grúa).',
    image: '/estructura_metalica_1.jpg',
  },
  {
    id: 'tilt',
    label: 'Muros Tilt-Up',
    title: 'Rapidez y durabilidad',
    text:
      'Paneles tilt-up para envolventes robustas, control térmico/acústico y ciclos de obra civil optimizados.',
    image: '/estructura_metalica_vigas_1.jpg',
  },
  {
    id: 'hibridos',
    label: 'Sistemas Híbridos',
    title: 'Lo mejor de ambos mundos',
    text:
      'Combina acero y tilt-up para velocidad de entrega y flexibilidad estructural con TCO competitivo.',
    image: '/estructura_metalica_edificio_1.png',
  },
];

export const TiposNaves = () => {
  const [active, setActive] = useState(tabs[0].id);
  const prefersReducedMotion = useReducedMotion();
  const current = tabs.find((t) => t.id === active);

  return (
    <section className={styles.section} aria-labelledby="tipos-naves-title">
      <div className="container">
        <h2 id="tipos-naves-title" className={styles.title}>
          Tipos de Naves Industriales
        </h2>

        <div
          className={styles.tabs}
          role="tablist"
          aria-label="Selección de tipo de nave"
        >
          {tabs.map((tb) => (
            <button
              key={tb.id}
              className={`${styles.tab} ${active === tb.id ? styles.active : ''}`}
              onClick={() => setActive(tb.id)}
              role="tab"
              aria-selected={active === tb.id}
              aria-controls={`panel-${tb.id}`}
              id={`tab-${tb.id}`}
              type="button"
            >
              {tb.label}
            </button>
          ))}
        </div>

        <div className={styles.contentWrap}>
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              className={styles.content}
              role="tabpanel"
              id={`panel-${current.id}`}
              aria-labelledby={`tab-${current.id}`}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
              animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? {} : { opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
            >
              <div className={styles.textCol}>
                <h3 className={styles.heading}>{current.title}</h3>
                <p className={styles.paragraph}>{current.text}</p>
                <ul className={styles.list}>
                  <li>Memorias de cálculo y detalles de conexión.</li>
                  <li>Coordinación MEP y andenes/diques.</li>
                  <li>Preparación para certificaciones (FM Global, NFPA, etc.).</li>
                </ul>
              </div>

              <div className={styles.imageCol}>
                <img
                  src={current.image}
                  alt={current.title}
                  loading="lazy"
                  className={styles.image}
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

```

---

## Archivo: `src\components\naves\ValuePropositionNaves.jsx`

```
// src/components/naves/ValuePropositionNaves.jsx
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import styles from './ValuePropositionNaves.module.scss';

const items = [
  {
    title: 'Optimización de Espacio (Grandes Claros)',
    text:
      'Estructuras de acero con claros máximos para flujo de materiales y layouts flexibles — ideal para CEDIS y manufactura.',
  },
  {
    title: 'Rapidez de Construcción',
    text:
      'Habilitado en planta + logística JIT minimizan tiempo en sitio y riesgos de clima y obra civil.',
  },
  {
    title: 'Retorno de Inversión y TCO',
    text:
      'Ingeniería certificada IMCA, firma de DRO y durabilidad que reducen re-trabajos, paros y mantenimiento a lo largo del ciclo de vida.',
  },
];

export const ValuePropositionNaves = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className={styles.section} aria-labelledby="naves-value-title">
      <div className="container">
        <motion.h2
          id="naves-value-title"
          className={styles.title}
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 10 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45 }}
        >
          El éxito de tu operación depende de una infraestructura eficiente y confiable
        </motion.h2>

        <div className={styles.grid}>
          {items.map((i) => (
            <motion.article
              key={i.title}
              className={styles.card}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
              whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className={styles.cardTitle}>{i.title}</h3>
              <p className={styles.cardText}>{i.text}</p>
            </motion.article>
          ))}
        </div>

        <ul className={styles.bullets}>
          <li>
            <strong>Velocidad y precisión:</strong> montaje acelerado gracias a
            prefabricado/habilitado en planta.
          </li>
          <li>
            <strong>Flexibilidad estructural:</strong> grandes claros, alturas libres y
            preparación para racks/sprinklers.
          </li>
          <li>
            <strong>Certeza y normatividad:</strong> IMCA, firma de DRO, memoria de
            cálculo y QA/QC documentado.
          </li>
          <li>
            <strong>Experiencia comprobada:</strong> 20 años de ejecución sin
            sorpresas.
          </li>
        </ul>
      </div>
    </section>
  );
};

```

---

## Archivo: `src\components\nocturnos\GaleriaNocturnos.jsx`

```
// src/components/nocturnos/GaleriaNocturnos.jsx
import React from 'react';
import { motion } from 'framer-motion';
import styles from './GaleriaNocturnos.module.scss';

const projects = [
  { title: 'Bar de Autor - Polanco, CDMX', image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Club Nocturno - Monterrey', image: 'https://images.unsplash.com/photo-1578736649624-1283a0050853?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Lounge & Terraza - Tulum', image: 'https://images.unsplash.com/photo-1571268684239-3d91de25b593?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Remodelación de Antro - Guadalajara', image: 'https://images.unsplash.com/photo-1598488581381-20a2e5d710b0?q=80&w=1200&auto=format&fit=crop' },
];

export const GaleriaNocturnos = () => {
  return (
    <section className={styles.section} aria-labelledby="galeria-nocturnos-title">
      <div className="container">
        <motion.h2
          id="galeria-nocturnos-title"
          className={styles.title}
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Proyectos que Marcan la Noche
        </motion.h2>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <motion.article 
              key={index} 
              className={styles.card}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className={styles.image}
              />
              <div className={styles.overlay}>
                <h3 className={styles.caption}>{project.title}</h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
```

---

## Archivo: `src\components\nocturnos\MetodologiaNocturnos.jsx`

```
// src/components/nocturnos/MetodologiaNocturnos.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLightbulb, FaFileContract, FaHammer, FaPlug } from 'react-icons/fa';
import styles from './MetodologiaNocturnos.module.scss';

const steps = [
  {
    icon: <FaLightbulb />,
    title: '1. Conceptualización y Diseño',
    text: 'Colaboramos con tus arquitectos y diseñadores para traducir la visión creativa en planos constructivos viables, optimizando flujos, acústica y puntos de experiencia.',
    image: 'https://images.unsplash.com/photo-1578662996442-af74a86e3a83?q=80&w=1200&auto=format&fit=crop',
  },
  {
    icon: <FaFileContract />,
    title: '2. Ingeniería y Permisos',
    text: 'Realizamos la ingeniería de detalle, cálculos estructurales y gestionamos los permisos específicos de uso de suelo, protección civil y normativas de sonido.',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200&auto=format&fit=crop',
  },
  {
    icon: <FaHammer />,
    title: '3. Construcción y Acabados',
    text: 'Ejecutamos la obra con un enfoque en la calidad de los acabados, la durabilidad de los materiales y el cumplimiento estricto del cronograma para acelerar tu apertura.',
    image: 'https://images.unsplash.com/photo-1599691880946-f9435b6a38a7?q=80&w=1200&auto=format&fit=crop',
  },
  {
    icon: <FaPlug />,
    title: '4. Integración Tecnológica',
    text: 'Coordinamos la instalación de sistemas de audio, video, iluminación, seguridad y puntos de venta, asegurando una infraestructura tecnológica impecable y lista para operar.',
    image: 'https://images.unsplash.com/photo-1516956907223-3f43b35435ed?q=80&w=1200&auto=format&fit=crop',
  },
];

export const MetodologiaNocturnos = () => {
  const [active, setActive] = useState(0);

  return (
    <section className={styles.section} aria-labelledby="metodologia-title">
      <div className="container">
        <motion.h2
          id="metodologia-title"
          className={styles.title}
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Nuestra Metodología: Del Concepto a la Gran Apertura
        </motion.h2>
        
        <div className={styles.layout}>
          <nav className={styles.nav} aria-label="Fases de metodología">
            {steps.map((s, i) => (
              <button
                key={s.title}
                type="button"
                className={`${styles.stepBtn} ${active === i ? styles.active : ''}`}
                onClick={() => setActive(i)}
                aria-current={active === i ? 'step' : undefined}
              >
                <span className={styles.btnIcon}>{s.icon}</span>
                <span className={styles.btnText}>{s.title.substring(3)}</span>
              </button>
            ))}
          </nav>

          <main className={styles.panel}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className={styles.stepTitle}>{steps[active].title}</h3>
                <p className={styles.stepText}>{steps[active].text}</p>
                <div className={styles.imageWrap}>
                  <img
                    src={steps[active].image}
                    alt={steps[active].title}
                    loading="lazy"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>
    </section>
  );
};
```

---

## Archivo: `src\components\nocturnos\NocturnosCTA.jsx`

```
// src/components/nocturnos/NocturnosCTA.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaUserTie, FaFileSignature, FaRocket } from 'react-icons/fa';
import styles from './NocturnosCTA.module.scss';
import ContactFormBlock from "@/components/contact/ContactFormBlock.jsx";

const benefits = [
  { icon: <FaUserTie />, text: 'Asesoría con un experto en tu proyecto.' },
//   { icon: <FaFileSignature />, text: 'Análisis de viabilidad y normatividad sin costo.' },
  { icon: <FaRocket />, text: 'Estimación de cronograma para una apertura acelerada.' },
];

export const NocturnosCTA = () => {
  return (
    <section id="form" className={styles.ctaSection} aria-labelledby="cta-nocturnos-title">
      <div className={`container ${styles.ctaGrid}`}>
        <motion.div 
          className={styles.valueColumn}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h2 id="cta-nocturnos-title">Tu Visión. Nuestra Ejecución. Noches Legendarias.</h2>
          <p>
            Transformamos conceptos audaces en los destinos nocturnos más icónicos y rentables.
            Contáctanos y demos el primer paso:
          </p>
          <ul className={styles.benefitsList}>
            {benefits.map((benefit, index) => (
              <li key={index}>
                <div className={styles.benefitIcon}>{benefit.icon}</div>
                <span>{benefit.text}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className={styles.formColumn}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        >
          <ContactFormBlock
            title="Inicia tu Proyecto"
            subtitle="Indícanos el concepto, m², ubicación y fecha de apertura deseada."
            agreementText='Acepto el <a href="/politica-privacidad" target="_blank">Aviso de Privacidad</a>.'
          />
        </motion.div>
      </div>
    </section>
  );
};
```

---

## Archivo: `src\components\nocturnos\NocturnosHeader.jsx`

```
// src/components/nocturnos/NocturnosHeader.jsx
import React from 'react';
import { motion } from 'framer-motion';
import styles from './NocturnosHeader.module.scss';
import { withConversionTracking } from '../../hocs/withConversionTracking.jsx';

const TrackedLink = withConversionTracking('a');

export const NocturnosHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.mediaWrap}>
        <video
          className={styles.bgVideo}
          autoPlay loop muted playsInline
          poster="/path/to/poster_nocturno.jpg" // Cambia por un poster real
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-a-blurry-shot-of-a-dj-at-a-party-4261-large.mp4" type="video/mp4" />
        </video>
        <div className={styles.overlay} />
      </div>

      <div className={`container ${styles.inner}`}>
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Construimos Escenarios para Noches Inolvidables
        </motion.h1>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
        >
          Fusionamos ingeniería de precisión con diseño de vanguardia para materializar bares, antros y centros nocturnos que cautivan, perduran y cumplen con toda la normativa.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <TrackedLink
            href="#form"
            className={styles.cta}
            conversionType="Solicitud_Nocturnos_Hero"
          >
            Iniciar Mi Proyecto
          </TrackedLink>
        </motion.div>
      </div>
    </header>
  );
};
```

---

## Archivo: `src\components\nocturnos\ServiciosEspecializados.jsx`

```
// src/components/nocturnos/ServiciosEspecializados.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaVolumeUp, FaBolt, FaGlassCheers, FaFileContract } from 'react-icons/fa';
import styles from './ServiciosEspecializados.module.scss';

const services = [
    { icon: <FaVolumeUp/>, title: "Ingeniería Acústica", text: "Diseño y construcción de sistemas de aislamiento y acondicionamiento acústico para un sonido impecable y cumplimiento de normativas." },
    { icon: <FaBolt/>, title: "Iluminación y FX", text: "Integramos la infraestructura para sistemas de iluminación escénica, video y efectos especiales desde la fase estructural." },
    { icon: <FaGlassCheers/>, title: "Barras y Mobiliario", text: "Fabricación a medida de barras, booths y elementos fijos de alta durabilidad y diseño, listos para la operación intensiva." },
    { icon: <FaFileContract/>, title: "Gestión de Permisos", text: "Nos encargamos de la complejidad de los permisos de construcción, uso de suelo y protección civil específicos para este giro." }
];

export const ServiciosEspecializados = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                <motion.h2
                    className={styles.title}
                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    Capacidades que Marcan la Diferencia
                </motion.h2>
                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className={styles.cardIcon}>{service.icon}</div>
                            <h3 className={styles.cardTitle}>{service.title}</h3>
                            <p className={styles.cardText}>{service.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
```

---

## Archivo: `src\components\nocturnos\ValuePropositionNocturnos.jsx`

```
// src/components/nocturnos/ValuePropositionNocturnos.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaTheaterMasks, FaClock, FaShieldAlt } from 'react-icons/fa';
import styles from './ValuePropositionNocturnos.module.scss';

const items = [
  {
    icon: <FaTheaterMasks />,
    title: 'Diseño que Cautiva',
    text: 'Traducimos la visión de arquitectos y diseñadores en espacios funcionales con acabados, iluminación y acústica que crean atmósferas únicas.',
  },
  {
    icon: <FaClock />,
    title: 'Construcción Acelerada',
    text: 'Entendemos el costo de oportunidad. Nuestro proceso optimizado y la pre-fabricación aseguran una apertura en tiempo récord.',
  },
  {
    icon: <FaShieldAlt />,
    title: 'Durabilidad a Toda Prueba',
    text: 'Construimos para el alto tráfico. Seleccionamos materiales y aplicamos técnicas que garantizan la longevidad de su inversión, reduciendo el mantenimiento.',
  },
];

export const ValuePropositionNocturnos = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          La Experiencia lo es Todo. La Construcción la Hace Posible.
        </motion.h2>

        <div className={styles.grid}>
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className={styles.cardIcon}>{item.icon}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
```

---

## Archivo: `src\components\projects\ProjectsGrid.jsx`

```
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ProjectsGrid.module.scss';

// --- Datos de los proyectos ---
const allProjects = [
  {
    id: 1,
    title: 'Nave Industrial para Sector Automotriz',
    category: 'Naves Industriales',
    image: 'https://constructoramexico.mx/wp-content/uploads/2023/11/constructora-de-naves-industriales-en-cdmx.jpg',
    metric: 'Resultado: Completado 10 días antes del plazo',
    link: '#',
  },
  {
    id: 2,
    title: 'Torre Corporativa en CDMX',
    category: 'Edificios Comerciales',
    image: 'https://gruposacani.com/img/estructuras/edificio-estructuras.jpg',
    metric: 'Resultado: 0% de desviaciones en presupuesto',
    link: '#',
  },
  {
    id: 3,
    title: 'Puente Vehicular Interestatal',
    category: 'Puentes e Infraestructura',
    image: 'https://i0.wp.com/www.revistainfraestructura.com.mx/wp-content/uploads/2022/08/jaguar-6.jpg?resize=1024%2C683&ssl=1',
    metric: 'Resultado: Superó pruebas de carga en un 120%',
    link: '#',
  },
  {
    id: 4,
    title: 'Centro de Distribución Logística',
    category: 'Naves Industriales',
    image: 'https://hermosillo.com/wp-content/uploads/2022/08/mabe-facilities-in-construction-1-1024x536.png',
    metric: 'Resultado: Reducción del 15% en tiempo de montaje',
    link: '#',
  },
  {
    id: 5,
    title: 'Complejo de Oficinas y Retail',
    category: 'Edificios Comerciales',
    image: 'https://havitsteelstructure.com/wp-content/uploads/2020/01/Office-Steel-Building.jpg',
    metric: 'Resultado: Éxito en la primera inspección estructural',
    link: '#',
  },
];

const filterCategories = ['Todos', 'Naves Industriales', 'Edificios Comerciales', 'Puentes e Infraestructura'];

// --- Variantes de animación para las tarjetas ---
const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 12 } },
    exit: { opacity: 0, scale: 0.9, y: -30, transition: { duration: 0.3 } }
};

export const ProjectsGrid = () => {
    const [activeFilter, setActiveFilter] = useState('Todos');
    const [filteredProjects, setFilteredProjects] = useState(allProjects);

    useEffect(() => {
        if (activeFilter === 'Todos') {
            setFilteredProjects(allProjects);
        } else {
            const newFiltered = allProjects.filter(p => p.category === activeFilter);
            setFilteredProjects(newFiltered);
        }
    }, [activeFilter]);

    return (
        <section className={styles.projectsSection}>
            <div className="container">
                {/* --- Filtros --- */}
                <motion.div 
                    className={styles.filterNav}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {filterCategories.map(category => (
                        <button
                            key={category}
                            className={`${styles.filterButton} ${activeFilter === category ? styles.active : ''}`}
                            onClick={() => setActiveFilter(category)}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* --- Galería --- */}
                <motion.div layout className={styles.projectsGrid}>
                    <AnimatePresence>
                        {filteredProjects.map(project => (
                            <motion.div
                                key={project.id}
                                layout
                                variants={cardVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className={styles.projectCard}
                            >
                                <div className={styles.cardImage}>
                                    <img src={project.image} alt={project.title} />
                                </div>
                                <div className={styles.cardContent}>
                                    <span className={styles.cardCategory}>{project.category}</span>
                                    <h3 className={styles.cardTitle}>{project.title}</h3>
                                    <p className={styles.cardMetric}>{project.metric}</p>
                                    <a href={project.link} className={styles.cardCta}>
                                        Ver Caso de Estudio Completo <span>→</span>
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

```

---

## Archivo: `src\components\projects\ProjectsHeader.jsx`

```
// src/components/projects/ProjectsHeader.jsx

import React from 'react';
import { motion } from 'framer-motion';
import styles from './ProjectsHeader.module.scss';

// --- Variantes de animación (sin cambios) ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

export const ProjectsHeader = () => {
  return (
    <motion.header
      className={styles.projectsHeader}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* --- INICIO: Video de Fondo --- */}
      <div className={styles.videoOverlay}></div>
      <video
        className={styles.backgroundVideo}
        autoPlay
        loop
        muted
        playsInline // Importante para iOS
      >
        <source src="http://alfa74.com.mx/wp-content/uploads/2016/01/video.mp4" type="video/mp4" />
        Tu navegador no soporta el video.
      </video>
      {/* --- FIN: Video de Fondo --- */}

      {/* El contenedor del texto ahora necesita un z-index para estar por encima */}
      <div className={`container ${styles.headerContainer}`}>
        <motion.h1 className={styles.title} variants={itemVariants}>
          Proyectos que Definen Nuestra Capacidad y Precisión
        </motion.h1>
        <motion.p className={styles.intro} variants={itemVariants}>
          Nuestro portafolio es más que una galería; es la prueba de nuestro compromiso con la calidad y la puntualidad. Cada proyecto representa un desafío de ingeniería superado y un cliente 100% satisfecho. Explore nuestros casos de estudio para ver cómo transformamos planos complejos en estructuras duraderas y eficientes.
        </motion.p>
      </div>
    </motion.header>
  );
};
```

---

## Archivo: `src\components\services\CTAConsultation.jsx`

```
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './CTAConsultation.module.scss';

// --- Iconos para estados del formulario ---
const SpinnerIcon = () => (
  <svg className={styles.spinner} viewBox="0 0 50 50"><circle cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle></svg>
);
const SuccessIcon = () => (
    <svg className={styles.successIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
);

export const CTAConsultation = () => {
    const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState('idle'); // idle | submitting | success | error

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Limpia el error cuando el usuario empieza a corregir
        if (errors[name]) {
            setErrors(prev => ({...prev, [name]: null}));
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'El nombre es obligatorio.';
        if (!formData.email.trim()) {
            newErrors.email = 'El email es obligatorio.';
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = 'El formato del email no es válido.';
        }
        if (!formData.company.trim()) newErrors.company = 'El nombre de la empresa es importante.';
        if (!formData.message.trim()) newErrors.message = 'Por favor, detalla tu consulta.';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            setStatus('submitting');
            // Simulación de llamada a API
            await new Promise(resolve => setTimeout(resolve, 1500));
            setStatus('success');
            // Aquí iría la lógica de envío real (fetch, axios, etc.)
        }
    };

    return (
        <section className={styles.ctaSection}>
            <div className={`container ${styles.ctaGrid}`}>
                {/* --- Columna Izquierda: Oferta de Valor --- */}
                <motion.div 
                    className={styles.valueOffer}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                    <h2 className={styles.offerTitle}>¿Listo para Eliminar el Riesgo de su Proyecto?</h2>
                    <p className={styles.offerText}>
                        No se conforme con una cotización. Permítanos ofrecerle un <strong>Análisis Técnico Preliminar sin costo.</strong> Nuestro equipo de expertos puede revisar sus requerimientos para identificar oportunidades de optimización, asegurar el cumplimiento normativo y garantizar la viabilidad de su cronograma.
                    </p>
                    <a href="#form" className={styles.ctaButton}>
                        Solicitar Análisis de Proyecto
                    </a>
                </motion.div>

                {/* --- Columna Derecha: Formulario --- */}
                <motion.div 
                    id="form" 
                    className={styles.formColumn}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
                >
                    <AnimatePresence mode="wait">
                        {status !== 'success' ? (
                            <motion.div
                                key="form"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <h4>O contáctenos directamente</h4>
                                <form onSubmit={handleSubmit} noValidate className={styles.consultationForm}>
                                    <div className={styles.inputGroup}>
                                        <input type="text" name="name" placeholder="Nombre Completo" value={formData.name} onChange={handleChange} className={errors.name ? styles.inputError : ''} />
                                        {errors.name && <span className={styles.errorMessage}>{errors.name}</span>}
                                    </div>
                                    <div className={styles.inputGroup}>
                                        <input type="email" name="email" placeholder="Email Corporativo" value={formData.email} onChange={handleChange} className={errors.email ? styles.inputError : ''} />
                                        {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
                                    </div>
                                    <div className={styles.inputGroup}>
                                        <input type="text" name="company" placeholder="Nombre de la Empresa" value={formData.company} onChange={handleChange} className={errors.company ? styles.inputError : ''} />
                                        {errors.company && <span className={styles.errorMessage}>{errors.company}</span>}
                                    </div>
                                    <div className={styles.inputGroup}>
                                        <textarea name="message" rows="4" placeholder="Describa brevemente su proyecto o consulta..." value={formData.message} onChange={handleChange} className={errors.message ? styles.inputError : ''}></textarea>
                                        {errors.message && <span className={styles.errorMessage}>{errors.message}</span>}
                                    </div>
                                    <button type="submit" className={styles.submitButton} disabled={status === 'submitting'}>
                                        {status === 'submitting' ? <SpinnerIcon /> : 'Enviar Mensaje'}
                                    </button>
                                </form>
                            </motion.div>
                        ) : (
                             <motion.div
                                key="success"
                                className={styles.successMessage}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ type: 'spring' }}
                            >
                                <SuccessIcon />
                                <h3>¡Gracias por su interés!</h3>
                                <p>Hemos recibido su mensaje. Uno de nuestros expertos se pondrá en contacto con usted a la brevedad.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

```

---

## Archivo: `src\components\services\ServiceDetailTabs.jsx`

```
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ServiceDetailTabs.module.scss';

// --- Icono para los beneficios ---
const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

// --- Contenido de cada pestaña ---
const tabsData = [
    {
        id: 'fabricacion',
        label: 'Fabricación de Acero',
        title: 'Fabricación con Precisión Milimétrica',
        text: 'Nuestra planta cuenta con la tecnología para la maquila, armado y ensamblado de estructuras metálicas complejas. Nos especializamos en la calidad de cada corte y soldadura, asegurando que cada componente cumpla con las especificaciones exactas de sus planos para un montaje sin contratiempos.',
        benefits: [
            'Reducción de Defectos: Procesos controlados que minimizan la densidad de defectos (Defect Density).',
            'Integridad Garantizada: Cumplimiento de los más altos estándares de calidad en cada pieza.',
            'Compatibilidad Perfecta: Componentes que encajan a la perfección durante el montaje.'
        ]
    },
    {
        id: 'habilitado',
        label: 'Habilitado de Acero',
        title: 'Habilitado Inteligente para un Montaje Eficiente',
        text: 'Preparamos y acondicionamos todos los materiales y estructuras en nuestro taller. Este proceso de pre-ensamble es crucial para acelerar los tiempos en obra, reducir riesgos y garantizar que el montaje se ejecute de manera fluida y segura.',
        benefits: [
            'Aceleración del Cronograma: El trabajo previo en taller reduce significativamente el tiempo de inactividad (Downtime) en el sitio.',
            'Optimización de Recursos: Menor necesidad de ajustes y re-trabajos en campo.',
            'Seguridad Mejorada: Procesos controlados que minimizan los riesgos durante la fase de montaje.'
        ]
    },
    {
        id: 'montaje',
        label: 'Montaje Industrial',
        title: 'Montaje Seguro, a Tiempo y Dentro del Presupuesto',
        text: 'Nuestro equipo de mano de obra especializada ejecuta el montaje final, adhiriéndose a un estricto plan de seguridad y logística. Con experiencia en los sectores más exigentes como el automotriz, energético y logístico, garantizamos una ejecución impecable que cumple con su cronograma.',
        benefits: [
            'Cumplimiento de Plazos Garantizado: Experiencia en la gestión de proyectos para evitar retrasos.',
            'Experiencia Multisectorial: Conocimiento avanzado para resolver los desafíos únicos de cada industria.',
            'Cero Desviaciones: Un historial probado de éxito en la primera inspección estructural.'
        ]
    }
];

export const ServiceDetailTabs = () => {
    const [activeTab, setActiveTab] = useState(tabsData[0].id);
    const activeTabData = tabsData.find(tab => tab.id === activeTab);

    return (
        <section className={styles.tabsSection}>
            <div className="container">
                <div className={styles.tabsNav}>
                    {tabsData.map(tab => (
                        <button
                            key={tab.id}
                            className={`${styles.tabButton} ${activeTab === tab.id ? styles.active : ''}`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                <div className={styles.tabsContent}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4, ease: 'easeInOut' }}
                        >
                            <h3 className={styles.contentTitle}>{activeTabData.title}</h3>
                            <p className={styles.contentText}>{activeTabData.text}</p>
                            <div className={styles.benefits}>
                                <h4>Beneficios Operacionales:</h4>
                                <ul>
                                    {activeTabData.benefits.map((benefit, index) => (
                                        <li key={index}>
                                            <CheckIcon />
                                            <span>{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

```

---

## Archivo: `src\components\services\ServicesHeader.jsx`

```
import React from 'react';
import { motion } from 'framer-motion';
import styles from './ServicesHeader.module.scss';

// --- Iconos como componentes ---
const IconNormativo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
  </svg>
);
const IconEquipo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.228a4.5 4.5 0 00-1.002-3.032M18 18.72v-2.228m2.164.921a3.375 3.375 0 01-4.474-4.474M4.5 21.75A2.25 2.25 0 012.25 19.5v-1.125c0-1.581.7-2.992 1.815-3.896m1.815-3.896a4.5 4.5 0 00-1.002-3.032A4.5 4.5 0 012.25 6.75v-1.125a2.25 2.25 0 012.25-2.25h1.522c1.238 0 2.362.43 3.298 1.168m-5.498 3.556A4.5 4.5 0 008.25 9.75a4.5 4.5 0 00-4.498-3.032m4.498 3.032a4.5 4.5 0 004.498-3.032M12 21a2.25 2.25 0 01-2.25-2.25v-1.125c0-1.581.7-2.992 1.815-3.896m1.815-3.896A4.5 4.5 0 0015.75 9.75a4.5 4.5 0 00-4.498-3.032m4.498 3.032A4.5 4.5 0 0013.5 6.75v-1.125a2.25 2.25 0 012.25-2.25h1.522c1.238 0 2.362.43 3.298 1.168m-5.498 3.556a4.5 4.5 0 004.498-3.032" />
  </svg>
);
const IconTecnologia = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
  </svg>
);

// --- Datos para las señales de confianza ---
const trustSignals = [
  { icon: <IconNormativo />, text: 'Adherencia estricta a las normativas del IMCA y estándares de la industria.' },
  { icon: <IconEquipo />, text: 'Más de 20 años de experiencia ejecutando proyectos en los sectores más exigentes.' },
  { icon: <IconTecnologia />, text: 'Uso de maquinaria de precisión para garantizar la calidad en cada componente.' },
];

// --- Variantes de animación ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const ServicesHeader = () => {
  return (
    <motion.section
      className={styles.servicesHeader}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className={styles.headerOverlay}></div>
      <div className={`container ${styles.headerGrid}`}>
        {/* Columna Izquierda: Título y Descripción */}
        <div className={styles.mainContent}>
          <motion.h1 className={styles.title} variants={itemVariants}>
            Ingeniería, Precisión y Montaje: Soluciones Integrales para Proyectos de Alta Complejidad
          </motion.h1>
          <motion.p className={styles.intro} variants={itemVariants}>
            En Grupo Alfa 74, cada fase de su proyecto es ejecutada por especialistas. Integramos procesos certificados para garantizar la integridad estructural, el cumplimiento de su cronograma y la optimización de su inversión.
          </motion.p>
        </div>
        
        {/* Columna Derecha: Señales de Confianza */}
        <motion.aside className={styles.trustSignals} variants={itemVariants}>
          {trustSignals.map((signal, index) => (
            <div key={index} className={styles.signalItem}>
              <div className={styles.iconWrapper}>{signal.icon}</div>
              <p>{signal.text}</p>
            </div>
          ))}
        </motion.aside>
      </div>
    </motion.section>
  );
};
```

---

## Archivo: `src\components\services\TechnicalFAQs.jsx`

```
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './TechnicalFAQs.module.scss';

// --- Icono de Chevron ---
const ChevronIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
);

// --- Datos de las preguntas y respuestas ---
const faqData = [
    {
        question: '¿Qué normativas de calidad y seguridad siguen en sus montajes?',
        answer: 'Todos nuestros proyectos cumplen con las especificaciones del Instituto Mexicano de la Construcción en Acero (IMCA), así como con las normativas de seguridad laboral vigentes, garantizando la máxima integridad estructural y la seguridad de todo el personal en obra.'
    },
    {
        question: '¿Cómo garantizan el cumplimiento de los plazos de entrega?',
        answer: 'Utilizamos una metodología de planificación avanzada y un proceso de habilitado en taller que nos permite mitigar riesgos y acelerar la ejecución en sitio. Nuestra experiencia de 20 años se traduce en una logística optimizada y una gestión de proyecto proactiva.'
    },
    {
        question: '¿Pueden manejar proyectos con requerimientos de ingeniería complejos?',
        answer: 'Absolutamente. Nuestro equipo de ingenieros y técnicos se especializa en resolver desafíos estructurales complejos, trabajando en sinergia con su equipo de diseño para garantizar la viabilidad, seguridad y optimización de la estructura desde las fases tempranas.'
    }
];

// --- Componente para un solo item del acordeón ---
const FAQItem = ({ item, isOpen, onClick }) => {
    const answerVariants = {
        hidden: { opacity: 0, height: 0, marginTop: 0 },
        visible: {
            opacity: 1,
            height: 'auto',
            marginTop: '1.5rem',
            transition: { duration: 0.4, ease: 'easeInOut' }
        }
    };

    return (
        <div className={styles.faqItem}>
            <button className={styles.questionButton} onClick={onClick}>
                <span className={styles.questionText}>{item.question}</span>
                <motion.div
                    className={styles.iconWrapper}
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <ChevronIcon />
                </motion.div>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        className={styles.answerPanel}
                        variants={answerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >
                        <p>{item.answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};


export const TechnicalFAQs = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className={styles.faqSection}>
            <div className="container">
                <motion.h2
                    className={styles.sectionTitle}
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Preguntas Técnicas Frecuentes
                </motion.h2>

                <div className={styles.faqContainer}>
                    {faqData.map((item, index) => (
                        <FAQItem
                            key={index}
                            item={item}
                            isOpen={activeIndex === index}
                            onClick={() => handleToggle(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

```

---

## Archivo: `src\context\ConversionContext.jsx`

```
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

```

---

## Archivo: `src\hocs\withConversionTracking.jsx`

```
import React from 'react';
import { useConversion } from '/src/hooks/useConversion.js';

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


```

---

## Archivo: `src\main.jsx`

```
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


```

---

## Archivo: `src\pages\CentrosNocturnosPage.jsx`

```
// src/pages/CentrosNocturnosPage.jsx
import React from 'react';
import { Helmet } from 'react-helmet-next';

// --- Importar los nuevos componentes especializados ---
import { NocturnosHeader } from '../components/nocturnos/NocturnosHeader.jsx';
import { ValuePropositionNocturnos } from '../components/nocturnos/ValuePropositionNocturnos.jsx';
import { ServiciosEspecializados } from '../components/nocturnos/ServiciosEspecializados.jsx';
import { MetodologiaNocturnos } from '../components/nocturnos/MetodologiaNocturnos.jsx';
import { GaleriaNocturnos } from '../components/nocturnos/GaleriaNocturnos.jsx';
import { NocturnosCTA } from '../components/nocturnos/NocturnosCTA.jsx';

export const CentrosNocturnosPage = () => {
  return (
    <>
      <Helmet>
        <title>Construcción de Bares y Centros Nocturnos | Grupo Alfa 74</title>
        <meta name="description" content="Especialistas en la construcción y remodelación de bares, antros y centros nocturnos. Integramos diseño, acústica, iluminación y construcción para crear experiencias inolvidables." />
        <meta name="keywords" content="construcción de bares, construcción de antros, remodelación de centros nocturnos, ingeniería acústica, diseño de iluminación para bares" />
      </Helmet>

      <NocturnosHeader />
      <ValuePropositionNocturnos />
      <ServiciosEspecializados />
      <MetodologiaNocturnos />
      <GaleriaNocturnos />
      <NocturnosCTA />
    </>
  );
};

export default CentrosNocturnosPage;
```

---

## Archivo: `src\pages\ContactPage.jsx`

```
// src/pages/ContactPage.jsx
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-next';
import { motion } from 'framer-motion';
import styles from './ContactPage.module.scss';
import { Link } from 'react-router-dom';

// Componentes reutilizables que usarás
import { TechnicalFAQs } from '../components/services/TechnicalFAQs.jsx';
import { CTAConsultation } from '../components/services/CTAConsultation.jsx'; 
import ContactFormBlock from "@/components/contact/ContactFormBlock.jsx";

// --- Datos Estáticos para la Página de Contacto con URLs de Mapas Reales ---
const locationsData = [
    {
        id: "loc_oficina",
        name: "Oficinas Corporativas (Huixquilucan)",
        address: "Francisco I. Madero, No. 30-A, Col. Jesús del Monte, C.P. 52764, Huixquilucan, Edo. Méx.",
        phone: "26-50-44-31, 26-50-78-32, 70-30-92-68",
        email: "estructuras@alfa74.com.mx",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.862026967427!2d-99.29499168577506!3d19.37512598691699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d20726fddce195%3A0x48caabaa187620b3!2sAlfa74+Estructuras+Met%C3%A1licas+S.A.+DE+C.V.!5e0!3m2!1ses!2sco!4v1474927490135"
    },
    {
        id: "loc_planta",
        name: "Planta de Fabricación (Tianguistenco)",
        address: "Av. Emiliano Zapata, No. 57, Esq. Cuauhtémoc, Col. Mirasol, C.P 52654, Santiago Tianguistenco, Edo. Méx.",
        phone: "26-50-44-31, 26-50-78-32, 70-30-92-68",
        email: "estructuras@alfa74.com.mx",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.87551889641!2d-99.42438988577851!3d19.200638587016513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cdf11a02c3eb7f%3A0x88564ce7474e43d5!2sM%C3%A1quilas+Alfa+74+S.A.+de+C.V.!5e0!3m2!1ses!2sco!4v1474927656827"
    }
];

export function ContactPage() {
    // Estado para saber qué mapa mostrar (por defecto, el primero)
    const [activeMapUrl, setActiveMapUrl] = useState(locationsData[0].mapUrl);
    const [activeLocationId, setActiveLocationId] = useState(locationsData[0].id);

    return (
        <div className={styles.contactPageContainer}>
            <Helmet>
                <title>Contacto y Ubicaciones | Grupo Alfa 74</title>
                <meta name="description" content="Contáctanos para solicitar una cotización o un análisis de tu proyecto. Oficinas en Huixquilucan y planta de fabricación en Santiago Tianguistenco." />
            </Helmet>

            {/* 1. Hero Section */}
            <section className={styles.contactHero}>
                <div className={`container ${styles.heroContent}`}>
                    <motion.h1 
                        className={styles.heroTitle}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Contacto y <span>Ubicaciones</span>
                    </motion.h1>
                    <motion.p 
                        className={styles.heroSubtitle}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Estamos listos para analizar su proyecto. Encuentre la unidad de Grupo Alfa 74 más cercana o complete el formulario para iniciar una conversación.
                    </motion.p>
                </div>
            </section>

            {/* 2. Interactive Location Block con Mapas Reales */}
            <section className={styles.locationsSection}>
                <div className="container">
                    <h2 className="text-center text-3xl font-bold text-gray-900 mb-10">
                        Nuestras Unidades Estratégicas
                    </h2>

                    <motion.div 
                        className={styles.locationsGrid}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ staggerChildren: 0.2 }}
                    >
                        {locationsData.map((location, index) => (
                            <motion.div 
                                key={location.id} 
                                className={`${styles.locationCard} ${activeLocationId === location.id ? styles.activeCard : ''}`}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                onClick={() => {
                                    setActiveMapUrl(location.mapUrl);
                                    setActiveLocationId(location.id);
                                }}
                            >
                                <h3>{location.name}</h3>
                                <p>{location.address}</p>
                                <div className={styles.contactInfo}>
                                    <p>Teléfono: <a href={`tel:${location.phone.replace(/[^0-9+]/g, '').split(',')[0].trim()}`}>{location.phone}</a></p>
                                    <p>Email: <a href={`mailto:${location.email}`}>{location.email}</a></p>
                                    <p>Horario: Lun-Vier 8:00-18:00</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                    
                    {/* Mapa de Google Maps Activo */}
                    <motion.div 
                        key={activeMapUrl} // Key para forzar la re-renderización y animación en cambio de mapa
                        className={styles.mapPlaceholder} 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <iframe 
                            src={activeMapUrl} 
                            width="100%" 
                            height="450" 
                            frameBorder="0" 
                            style={{ border: 0, borderRadius: '8px' }} 
                            allowFullScreen="" 
                            loading="lazy"
                            aria-label={`Ubicación de ${locationsData.find(l => l.id === activeLocationId)?.name || 'Oficina'}`}
                        ></iframe>
                    </motion.div>
                </div>
            </section>

            {/* 3. Contact Form Block (Reutiliza el componente modular) */}
            <ContactFormBlock
                title="Inicie su Cotización sin Compromiso"
                subtitle="Complete el formulario y adjunte sus planos o requerimientos. Nuestro equipo técnico responderá en 24 horas."
                agreementText="Acepto el tratamiento de mis datos personales según el <a href='/politica-privacidad' target='_blank'>Aviso de Privacidad</a>."
            />

            {/* 4. Two-Column Text (Otras Formas de Contacto) */}
            <section className={styles.twoColumnTextSection}>
                <div className="container">
                    <div className={styles.twoColumnGrid}>
                        {/* Columna de Texto */}
                        <motion.div 
                            className={styles.textBlock}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.7 }}
                        >
                            <h3 className="text-3xl font-bold mb-4">Atención Personalizada y Soporte Técnico</h3>
                            <p>Si prefiere una comunicación directa para preguntas técnicas o logísticas, use nuestras líneas principales. Nuestro compromiso es la **Certeza** y la **Transparencia** en todo lo que hacemos.</p>
                            <ul className="space-y-2 mt-4 text-lg">
                                <li><strong>Teléfono Central:</strong> <a href='tel:5550007474'>+52 55-5000-7474</a></li>
                                <li><strong>Email General:</strong> <a href='mailto:info@alfa74.com.mx'>info@alfa74.com.mx</a></li>
                                <li><strong>Horario de Atención:</strong> Lunes a Viernes de 8:00 a 18:00 hrs (GMT-6).</li>
                            </ul>
                            
                        </motion.div>
                        
                        {/* Columna de Imagen (Orden 2 en Desktop) */}
                        <motion.div 
                            className={`${styles.imageBlock}`} // Eliminamos md:order-2 ya que no hay imagen en el prompt
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                        >
                            <img 
                                src="https://images.unsplash.com/photo-1587560699334-cc4ff634909a?q=80&w=2070&auto=format&fit=crop" 
                                alt="Equipo de atención al cliente de Grupo Alfa 74" 
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 5. FAQ Block (Usando el componente ya existente) */}
            <TechnicalFAQs />
            
            {/* 6. CTA final reutilizando el componente CTAConsultation */}
            <CTAConsultation />
            
        </div>
    );
};

export default ContactPage;

```

---

## Archivo: `src\pages\EdificiosCorporativosPage.jsx`

```
// src/pages/EdificiosCorporativosPage.jsx
import React from 'react';
import { CorporativosHeader } from '../components/corporativos/CorporativosHeader.jsx';
import { ValuePropositionCorporativos } from '../components/corporativos/ValuePropositionCorporativos.jsx';
import { PortafolioSoluciones } from '../components/corporativos/PortafolioSoluciones.jsx';
import { MetodologiaGestion } from '../components/corporativos/MetodologiaGestion.jsx';
import { GaleriaCorporativos } from '../components/corporativos/GaleriaCorporativos.jsx';
// --- ¡CAMBIO AQUÍ! Importamos el nuevo CTA ---
import { CorporativosCTA } from '../components/corporativos/CorporativosCTA.jsx';

export const EdificiosCorporativosPage = () => {
  return (
    <>
      <CorporativosHeader />
      <ValuePropositionCorporativos />
      <PortafolioSoluciones />
      <MetodologiaGestion />
      <GaleriaCorporativos />
      {/* --- ¡Y lo usamos aquí! --- */}
      <CorporativosCTA />
    </>
  );
};

export default EdificiosCorporativosPage;
```

---

## Archivo: `src\pages\EspectacularesPage.jsx`

```
// src/pages/EspectacularesPage.jsx
import React from 'react';
import { Helmet } from 'react-helmet-next';

// --- Importar los nuevos componentes especializados ---
import { EspectacularesHeader } from '../components/espectaculares/EspectacularesHeader.jsx';
import { IntroEspectaculares } from '../components/espectaculares/IntroEspectaculares.jsx';
import { TiposEspectaculares } from '../components/espectaculares/TiposEspectaculares.jsx';
import { ProcesoEspectaculares } from '../components/espectaculares/ProcesoEspectaculares.jsx';
import { VentajasTecnicas } from '../components/espectaculares/VentajasTecnicas.jsx';
import { GaleriaEspectaculares } from '../components/espectaculares/GaleriaEspectaculares.jsx';

// --- Reutilizar el componente CTA existente para la conversión final ---
import { CTAConsultation } from '../components/services/CTAConsultation.jsx';

export function EspectacularesPage() {
  return (
    <>
      <Helmet>
        <title>Estructuras para Espectaculares y Unipolares | Grupo Alfa 74</title>
        <meta name="description" content="Diseño, fabricación y montaje de estructuras metálicas para anuncios espectaculares y unipolares. Garantizamos seguridad estructural, cumplimiento normativo y durabilidad." />
        <meta name="keywords" content="estructuras para espectaculares, anuncios unipolares, fabricación de espectaculares, montaje de anuncios, cálculo estructural, Director Responsable de Obra, DRO" />
      </Helmet>

      {/* 1. Encabezado Impactante y Específico */}
      <EspectacularesHeader />

      {/* 2. Introducción que aborda los puntos de dolor del cliente */}
      <IntroEspectaculares />

      {/* 3. Sección detallada de los tipos de estructuras ofrecidas */}
      <TiposEspectaculares />

      {/* 4. Proceso de trabajo que genera confianza y muestra profesionalismo */}
      <ProcesoEspectaculares />

      {/* 5. Diferenciadores clave y ventajas técnicas */}
      <VentajasTecnicas />
      
      {/* 6. Galería de Proyectos como prueba social */}
      <GaleriaEspectaculares />

      {/* 7. Llamada a la acción final y formulario de conversión */}
      <CTAConsultation />
    </>
  );
}

export default EspectacularesPage;
```

---

## Archivo: `src\pages\HomePage.jsx`

```
// src/pages/HomePage.jsx
import React from 'react';
import { Helmet } from 'react-helmet-next';
import { HeroSection } from '../components/home/HeroSection.jsx';
import { TrustBar } from '../components/home/TrustBar.jsx';
import { ServicesOverview } from '../components/home/ServicesOverview.jsx';
import { ValueProposition } from '../components/home/ValueProposition.jsx';
import { ProjectsHighlight } from '../components/home/ProjectsHighlight.jsx';
import { Testimonials } from '../components/home/Testimonials.jsx';
import { FinalCTA } from '../components/home/FinalCTA.jsx';
import { WorkProcess } from '../components/home/WorkProcess.jsx';
import { ClientLogoBar } from '../components/home/ClientLogoBar.jsx';
import { BlogHighlight } from '../components/home/BlogHighlight.jsx';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Estructuras Metálicas en CDMX | Grupo Alfa 74</title>
        <meta name="description" content="Expertos en diseño, fabricación y montaje de estructuras metálicas en CDMX. Garantizamos tu proyecto con 20 años de experiencia. Cero riesgos, entrega a tiempo." />
      </Helmet>

      <HeroSection />
      <TrustBar />
      <ServicesOverview />
      <ValueProposition />
      <WorkProcess />
      <ProjectsHighlight />
      <Testimonials />
      <ClientLogoBar />
      <BlogHighlight />
      <FinalCTA />
    </>
  );
}
```

---

## Archivo: `src\pages\NavesIndustrialesPage.jsx`

```
// src/pages/NavesIndustrialesPage.jsx
import React from 'react';
import { NavesHeader } from '../components/naves/NavesHeader.jsx';
import { ValuePropositionNaves } from '../components/naves/ValuePropositionNaves.jsx';
import { TiposNaves } from '../components/naves/TiposNaves.jsx';
import { ProcesoNaves } from '../components/naves/ProcesoNaves.jsx';
import { GaleriaNaves } from '../components/naves/GaleriaNaves.jsx';
import { NavesCTA } from '../components/naves/NavesCTA.jsx';

export const NavesIndustrialesPage = () => {
  return (
    <>
      <NavesHeader />
      <ValuePropositionNaves />
      <TiposNaves />
      <ProcesoNaves />
      <GaleriaNaves />
      <NavesCTA />
    </>
  );
};

export default NavesIndustrialesPage;

```

---

## Archivo: `src\pages\ProjectsPage.jsx`

```
// src/pages/ProjectsPage.jsx
import React from 'react';

// --- Componentes de la página de Proyectos ---
import { ProjectsHeader } from '../components/projects/ProjectsHeader.jsx';
import { ProjectsGrid } from '../components/projects/ProjectsGrid.jsx';
import { CTAConsultation } from '../components/services/CTAConsultation.jsx';

export function ProjectsPage() {
  return (
    <>
      <ProjectsHeader />
      <ProjectsGrid />
      <CTAConsultation /> 
    </>
  );
}
```

---

## Archivo: `src\pages\ServicesPage.jsx`

```
// src/pages/ServicesPage.jsx
import React from 'react';

// --- Componentes de la página de Servicios ---
import { ServicesHeader } from '../components/services/ServicesHeader.jsx';
import { ServiceDetailTabs } from '../components/services/ServiceDetailTabs.jsx'; // Componente interactivo
import { TechnicalFAQs } from '../components/services/TechnicalFAQs.jsx';
import { CTAConsultation } from '../components/services/CTAConsultation.jsx';

export function ServicesPage() {
  return (
    <>
      <ServicesHeader />
      <ServiceDetailTabs />
      <TechnicalFAQs />
      <CTAConsultation />
    </>
  );
}
```

