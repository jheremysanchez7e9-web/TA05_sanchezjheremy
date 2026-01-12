/* =========================================
   1. ELEMENTOS GLOBALES
   ========================================= */
const seasonalBg = document.getElementById('seasonal-bg');
const seasonalParticles = document.getElementById('seasonal-particles');
const themeToggle = document.getElementById('theme-toggle');
const langSelect = document.getElementById('langSelect');
const searchInput = document.getElementById('search');

/* =========================================
   2. TEMA OSCURO / CLARO (CORREGIDO)
   ========================================= */
// Función para actualizar el icono
function updateThemeIcon(isLight) {
    if (!themeToggle) return;
    const icon = themeToggle.querySelector('i');
    if (icon) {
        if (isLight) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }
}

// Evento Click
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        const isLight = document.body.classList.contains('light-theme');
        
        // Guardar preferencia
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
        updateThemeIcon(isLight);
    });
}

// Cargar tema guardado al iniciar
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
    updateThemeIcon(true);
} else {
    updateThemeIcon(false);
}

/* =========================================
   3. SISTEMA DE ESTACIONES
   ========================================= */
const seasons = {
    winter: { bg: 'radial-gradient(circle at 50% 120%, rgba(255, 255, 255, 0.1) 0%, transparent 60%), linear-gradient(to bottom, #0a0f1e 0%, #0b1224 100%)' },
    spring: { bg: 'linear-gradient(120deg, #1a2a1a 0%, #25332a 100%)' },
    summer: { bg: 'linear-gradient(to bottom, #102a3a, #1b3b4d)' },
    autumn: { bg: 'linear-gradient(to bottom, #2a1a11, #1f120d)' }
};

function setSeason(seasonName) {
    if (!seasonalBg) return;
    
    // 1. Cambiar Fondo
    const season = seasons[seasonName] || seasons['winter'];
    seasonalBg.style.background = season.bg;
    
    // 2. Cambiar Clases del Body (para efectos CSS de partículas)
    document.body.classList.remove('season-winter', 'season-spring', 'season-summer', 'season-autumn');
    document.body.classList.add('season-' + seasonName);

    // 3. Guardar y actualizar selectores
    localStorage.setItem('season', seasonName);
    const selectors = document.querySelectorAll('#seasonSelect');
    selectors.forEach(sel => sel.value = seasonName);
}

// Cargar estación guardada
const savedSeason = localStorage.getItem('season') || 'winter';
setSeason(savedSeason);


/* =========================================
   4. IDIOMAS (CORREGIDO Y AMPLIADO)
   ========================================= */
const translations = {
    en: {
        // Menú
        nav_home: "Home",
        nav_proj: "Projects",
        nav_contact: "Contact",
        // Home
        hero_title: "Welcome to my Portfolio",
        hero_desc: "Minimalist interface designed for clarity. Explore my projects below.",
        hero_btn: "View Projects",
        // Projects
        search_ph: "Search projects...", 
        card1_title: "HTML Structure", card1_desc: "Semantic web layout",
        card2_title: "Python Scripts", card2_desc: "Automation tools", 
        card3_title: "SQL Database", card3_desc: "Data management",
        // Contact
        contact_title: "Ready to start a project?",
        contact_desc: "I am available for freelance work and collaborations.",
        contact_btn: "Send Message",
        rights: "All rights reserved.",
        contact_header_title: "Let's Talk",
        contact_header_desc: "Have a project in mind? Ask me anything."
    },
    es: {
        // Menú
        nav_home: "Inicio",
        nav_proj: "Proyectos",
        nav_contact: "Contacto",
        // Home
        hero_title: "Bienvenido a mi Portafolio",
        hero_desc: "Interfaz minimalista diseñada para la claridad.",
        hero_btn: "Ver Proyectos",
        // Projects
        search_ph: "Buscar proyectos...", 
        card1_title: "Estructura HTML", card1_desc: "Diseño web semántico",
        card2_title: "Scripts Python", card2_desc: "Automatización", 
        card3_title: "Base de Datos SQL", card3_desc: "Gestión de datos",
        // Contact
        contact_title: "¿Listo para empezar?",
        contact_desc: "Disponible para trabajos freelance.",
        contact_btn: "Enviar Mensaje",
        rights: "Todos los derechos reservados.",
        contact_header_title: "Hablemos",
        contact_header_desc: "¿Tienes un proyecto en mente? Pregúntame lo que sea."
    },
    fr: {
        // Menú
        nav_home: "Accueil",
        nav_proj: "Projets",
        nav_contact: "Contact",
        // Home
        hero_title: "Bienvenue sur mon Portfolio",
        hero_desc: "Interface minimaliste conçue pour la clarté.",
        hero_btn: "Voir Projets",
        // Projects
        search_ph: "Rechercher...", 
        card1_title: "Structure HTML", card1_desc: "Mise en page sémantique",
        card2_title: "Scripts Python", card2_desc: "Outils d'automatisation", 
        card3_title: "Base de données SQL", card3_desc: "Gestion de données",
        // Contact
        contact_title: "Prêt à commencer ?",
        contact_desc: "Disponible pour freelance.",
        contact_btn: "Envoyer Message",
        rights: "Tous droits réservés.",
        contact_header_title: "Parlons-en",
        contact_header_desc: "Vous avez un projet ? Demandez-moi n'importe quoi."
    }
};

function changeLanguage() {
    if (!langSelect) return;
    
    const lang = langSelect.value;
    const texts = translations[lang];
    
    if (texts) {
        // 1. Traducir textos normales (data-key)
        document.querySelectorAll('[data-key]').forEach(elem => {
            const key = elem.getAttribute('data-key');
            if (texts[key]) elem.innerText = texts[key];
        });

        // 2. Traducir Placeholders (Inputs)
        if (searchInput && texts.search_ph) {
            searchInput.placeholder = texts.search_ph;
        }
    }
}


/* =========================================
   5. OTRAS FUNCIONES (Sidebar, Fecha, Buscador)
   ========================================= */

// Toggle Sidebar
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.querySelector('.sidebar-overlay');
    if (sidebar && overlay) {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
    }
}

// Fecha Actual
const dateElement = document.getElementById('date');
if (dateElement) {
    dateElement.textContent = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

// Buscador (Solo ejecuta si existe el input)
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const val = e.target.value.toLowerCase();
        // Busca tanto en .card como en los enlaces .card-link que envuelven cards
        document.querySelectorAll('.card').forEach(card => {
            // Si la tarjeta está dentro de un enlace <a>, ocultamos el enlace, no la tarjeta
            const container = card.closest('a') || card; 
            const tags = card.getAttribute('data-tags') || '';
            const title = card.querySelector('h3')?.innerText.toLowerCase() || '';
            
            if (tags.includes(val) || title.includes(val)) {
                container.style.display = 'flex'; // o block
            } else {
                container.style.display = 'none';
            }
        });
    });
}
