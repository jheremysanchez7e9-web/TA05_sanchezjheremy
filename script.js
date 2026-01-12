/* =========================================
   FECHA ACTUAL
   ========================================= */
const dateElement = document.getElementById('date');
if (dateElement) {
    dateElement.textContent = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

/* =========================================
   SIDEBAR TOGGLE
   ========================================= */
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.querySelector('.sidebar-overlay');
    if (sidebar && overlay) {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
    }
}

/* =========================================
   TEMA OSCURO / CLARO
   ========================================= */
const toggle = document.getElementById('theme-toggle');
if (toggle) {
    toggle.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        const icon = toggle.querySelector('i');
        if (icon) {
            icon.classList.replace(
                document.body.classList.contains('light-theme') ? 'fa-moon' : 'fa-sun',
                document.body.classList.contains('light-theme') ? 'fa-sun' : 'fa-moon'
            );
        }
    });
}

/* =========================================
   ESTACIONES (BACKGROUND ENGINE)
   ========================================= */
function setSeason(season) {
    document.body.classList.remove('season-winter', 'season-spring', 'season-summer', 'season-autumn');
    if (season) document.body.classList.add('season-' + season);
}
// Inicializar (por defecto winter)
setSeason('winter');

/* =========================================
   BUSCADOR (Solo funciona si existe el input)
   ========================================= */
const searchInput = document.getElementById('search');
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const val = e.target.value.toLowerCase();
        document.querySelectorAll('.card').forEach(card => {
            card.style.display = card.dataset.tags.includes(val) ? 'flex' : 'none';
        });
    });
}

/* =========================================
   TRADUCCIONES
   ========================================= */
const translations = {
    en: {
        nav_home: "Home", nav_proj: "Projects", nav_contact: "Contact",
        hero_title: "Welcome to my Portfolio", hero_desc: "Minimalist interface designed for clarity. Explore my projects below.", hero_btn: "View Projects",
        search_ph: "Search projects...", 
        card1_title: "HTML Structure", card1_desc: "Semantic web layout",
        card2_title: "Python Scripts", card2_desc: "Automation tools", 
        card3_title: "SQL Database", card3_desc: "Data management",
        contact_title: "Ready to start a project?", contact_desc: "I am available for freelance work and collaborations.", contact_btn: "Send Message", rights: "All rights reserved."
    },
    es: {
        nav_home: "Inicio", nav_proj: "Proyectos", nav_contact: "Contacto",
        hero_title: "Bienvenido a mi Portafolio", hero_desc: "Interfaz minimalista diseñada para la claridad.", hero_btn: "Ver Proyectos",
        search_ph: "Buscar proyectos...", 
        card1_title: "Estructura HTML", card1_desc: "Diseño web semántico",
        card2_title: "Scripts Python", card2_desc: "Automatización", 
        card3_title: "Base de Datos SQL", card3_desc: "Gestión de datos",
        contact_title: "¿Listo para empezar?", contact_desc: "Disponible para trabajos freelance.", contact_btn: "Enviar Mensaje", rights: "Todos los derechos reservados."
    },
    fr: {
        nav_home: "Accueil", nav_proj: "Projets", nav_contact: "Contact",
        hero_title: "Bienvenue", hero_desc: "Interface minimaliste.", hero_btn: "Voir Projets",
        search_ph: "Rechercher...", 
        card1_title: "Structure HTML", card1_desc: "Mise en page sémantique",
        card2_title: "Scripts Python", card2_desc: "Outils d'automatisation", 
        card3_title: "SQL", card3_desc: "Gestion de données",
        contact_title: "Prêt à commencer ?", contact_desc: "Disponible pour freelance.", contact_btn: "Envoyer", rights: "Tous droits réservés."
    }
};

function changeLanguage() {
    const langSelect = document.getElementById('langSelect');
    if (langSelect) {
        const lang = langSelect.value;
        const texts = translations[lang];
        
        // Actualizar placeholder si existe
        if (searchInput) searchInput.placeholder = texts.search_ph;

        // Actualizar textos
        document.querySelectorAll('[data-key]').forEach(el => {
            const key = el.getAttribute('data-key');
            if (texts[key]) el.innerText = texts[key];
        });
    }
}
