/**
 * ------------------------------------------------------------------
 * CONFIGURATION & LOCALIZATION
 * ------------------------------------------------------------------
 */
const langDict = {
    es: {
        sub: "ESPECIALISTA EN CIBERSEGURIDAD", h: "INICIO", p: "PROYECTOS", c: "CONTACTO",
        all: "TODOS", func: "FUNCIONALES", cripto: "CRIPTO", net: "REDES", conv: "TOOLS",
        cTitle: "CONTACTO", send: "ENVIAR MENSAJE", back: "← VOLVER", close: "CERRAR MÓDULO",
        lName: "AGENTE:",
        labels: { n: "Nombre", e: "Email", p: "Teléfono", d: "Mensaje" },
        sPlaceholder: "Buscar proyecto...",
        wait: "Esperando entrada...", write: "Escriba aquí...",
        scan: "INICIAR RASTREO DE IP", tracking: "CONECTANDO CON SATÉLITE...",
        gen: "GENERAR", dev: "ERROR: MÓDULO EN DESARROLLO (NO DISPONIBLE)",
        selProj: "> MÓDULOS DESTACADOS",
        roles: ["ESTUDIANTE", "PENTESTER", "ADMIN DE REDES", "DEV WEB"]
    },
    en: {
        sub: "CYBERSECURITY SPECIALIST", h: "HOME", p: "WORK", c: "CONTACT",
        all: "ALL", func: "WORKING", cripto: "CRYPTO", net: "NETWORK", conv: "TOOLS",
        cTitle: "CONTACT", send: "SEND MESSAGE", back: "← BACK", close: "CLOSE MODULE",
        lName: "AGENT:",
        labels: { n: "Name", e: "Email", p: "Phone", d: "Message" },
        sPlaceholder: "Search project...",
        wait: "Awaiting input...", write: "Type here...",
        scan: "START IP TRACKING", tracking: "CONNECTING TO SATELLITE...",
        gen: "GENERATE", dev: "ERROR: MODULE IN DEVELOPMENT (N/A)",
        selProj: "> FEATURED MODULES",
        roles: ["STUDENT", "PENTESTER", "NETWORK ADMIN", "WEB DEV"]
    },
    ca: {
        sub: "ESPECIALISTA EN CIBERSEGURETAT", h: "INICI", p: "PROJECTES", c: "CONTACTE",
        all: "TOTS", func: "FUNCIONALS", cripto: "CRIPTO", net: "XARXES", conv: "EINES",
        cTitle: "CONTACTE", send: "ENVIAR MISSATGE", back: "← TORNAR", close: "TANCAR MÒDUL",
        lName: "AGENT:",
        labels: { n: "Nom", e: "Email", p: "Telèfon", d: "Missatge" },
        sPlaceholder: "Cercar projecte...",
        wait: "Esperant dades...", write: "Escriu aquí...",
        scan: "INICIAR RASTREIG", tracking: "CONNECTANT AMB SATÈL·LIT...",
        gen: "GENERAR", dev: "ERROR: MÒDUL EN DESENVOLUPAMENT (N/A)",
        selProj: "> MÒDULS DESTACATS",
        roles: ["ESTUDIANT", "PENTESTER", "ADMIN XARXES", "DEV WEB"]
    },
    fr: {
        sub: "SPÉCIALISTE EN CYBERSÉCURITÉ", h: "ACCUEIL", p: "PROJETS", c: "CONTACT",
        all: "TOUS", func: "FONCTIONNEL", cripto: "CRYPTO", net: "RÉSEAU", conv: "OUTILS",
        cTitle: "CONTACT", send: "ENVOYER", back: "← RETOUR", close: "FERMER",
        lName: "AGENT:",
        labels: { n: "Nom", e: "Email", p: "Téléphone", d: "Message" },
        sPlaceholder: "Chercher...",
        wait: "En attente...", write: "Écrire ici...",
        scan: "TRACER IP", tracking: "CONNEXION...",
        gen: "GÉNÉRER", dev: "ERREUR: MODULE EN DÉVELOPPEMENT",
        selProj: "> MODULES EN VEDETTE",
        roles: ["ÉTUDIANT", "PENTESTER", "ADMIN RÉSEAU", "DEV WEB"]
    },
    de: {
        sub: "IT-SICHERHEITSSPEZIALIST", h: "HOME", p: "PROJEKTE", c: "KONTAKT",
        all: "ALLE", func: "LAUFFÄHIG", cripto: "KRYPTO", net: "NETZWERK", conv: "TOOLS",
        cTitle: "KONTAKT", send: "SENDEN", back: "← ZURÜCK", close: "SCHLIESSEN",
        lName: "AGENT:",
        labels: { n: "Name", e: "Email", p: "Telefon", d: "Nachricht" },
        sPlaceholder: "Suche...",
        wait: "Warten...", write: "Hier tippen...",
        scan: "IP TRACKEN", tracking: "VERBINDUNG...",
        gen: "GENERIEREN", dev: "FEHLER: IN ENTWICKLUNG",
        selProj: "> HIGHLIGHTS",
        roles: ["STUDENT", "PENTESTER", "NETZWERK ADMIN", "WEB DEV"]
    }
};

const projects = [
    {n:"SHA-256 Hasher", c:"Cripto", f:true},
    {n:"Base64 Encoder", c:"Conv", f:true},
    {n:"IP Tracker", c:"Net", f:true},
    {n:"Binary Converter", c:"Conv", f:true},
    {n:"Morse Code", c:"Conv", f:true},
    {n:"HEX Viewer", c:"Conv", f:true},
    {n:"MAC Generator", c:"Net", f:true},
    {n:"Subnet Calc", c:"Net", f:false},
    {n:"Port Scanner", c:"Net", f:false},
    {n:"SQL Injector", c:"Web", f:false},
    {n:"Steganography", c:"Cripto", f:false},
    {n:"Password Gen", c:"Cripto", f:false}
];

let currentAppIndex = -1;
let activeFilter = 'all';
let typeWriterInterval;
let typeWriterTimeout;

/**
 * ------------------------------------------------------------------
 * DYNAMIC ROLE TYPING EFFECT (BUG FREE)
 * ------------------------------------------------------------------
 */
function initTypeWriter(roles) {
    const el = document.getElementById('dynamic-role');
    if(!el) return;
    
    // 1. Limpiar cualquier proceso anterior
    clearTimeout(typeWriterTimeout);
    el.innerText = "";
    
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function type() {
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            el.innerText = "> " + currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            el.innerText = "> " + currentRole.substring(0, charIndex + 1);
            charIndex++;
        }

        let speed = isDeleting ? 30 : 100;

        if (!isDeleting && charIndex === currentRole.length) {
            speed = 2000; // Pausa al final de la palabra
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            speed = 500;
        }

        typeWriterTimeout = setTimeout(type, speed);
    }
    type();
}

/**
 * ------------------------------------------------------------------
 * UI FUNCTIONS
 * ------------------------------------------------------------------
 */
function hideAll() {
    ["home-view", "projects-view", "contact-view", "app-view"].forEach(id => {
        document.getElementById(id).style.display = "none";
    });
}

function showHome() { currentAppIndex = -1; hideAll(); document.getElementById("home-view").style.display = "flex"; }
function showProjects() { currentAppIndex = -1; hideAll(); document.getElementById("projects-view").style.display = "flex"; applyFilters(); }
function showContact() { currentAppIndex = -1; hideAll(); document.getElementById("contact-view").style.display = "flex"; }

function changeLang() {
    const l = document.getElementById('lang-select').value;
    const d = langDict[l] || langDict['en'];

    // UI Estática
    document.getElementById('hero-sub').innerText = d.sub;
    document.getElementById('nav-h').innerText = d.h;
    document.getElementById('nav-p').innerText = d.p;
    document.getElementById('nav-c').innerText = d.c;
    document.getElementById('sel-label').innerText = d.selProj;
    
    // Filtros
    document.getElementById('f-all').innerText = d.all;
    document.getElementById('f-func').innerText = d.func;
    document.getElementById('f-cripto').innerText = d.cripto;
    document.getElementById('f-net').innerText = d.net;
    document.getElementById('f-conv').innerText = d.conv;

    // Contacto
    document.getElementById('c-title').innerText = d.cTitle;
    document.getElementById('c-btn-send').innerText = d.send;
    document.getElementById('c-back').innerText = d.back;
    document.getElementById('l-name').innerText = d.lName;
    document.getElementById('form-name').placeholder = d.labels.n;
    document.getElementById('form-email').placeholder = d.labels.e;
    document.getElementById('form-phone').placeholder = d.labels.p;
    document.getElementById('form-desc').placeholder = d.labels.d;

    // App
    document.getElementById('app-close-btn').innerText = d.close;
    document.getElementById('search-input').placeholder = d.sPlaceholder;

    // Reiniciar TypeWriter
    initTypeWriter(d.roles);

    // Actualizar filtros y fecha
    applyFilters();
    if(typeof updateDate === "function") updateDate();
}

function applyFilters() {
    const search = document.getElementById("search-input").value.toLowerCase();
    const grid = document.getElementById("grid-container");
    const l = document.getElementById('lang-select').value;
    
    const filtered = projects.filter(p => {
        return p.n.toLowerCase().includes(search) &&
               (activeFilter === 'all' || (activeFilter === 'func' && p.f) || p.c === activeFilter);
    });

    grid.innerHTML = filtered.map(p => {
        const originalIndex = projects.indexOf(p);
        const color = p.f ? 'var(--text)' : '#555';
        return `
            <div class="card" onclick="launch(${originalIndex})">
                ${!p.f ? '<span class="badge">DEV</span>' : ''}
                <div style="color:${color}; font-weight:600; margin-bottom:5px;">${p.n}</div>
                <div style="font-size:10px; opacity:0.6">[ ${p.c} ]</div>
            </div>`;
    }).join('');
}

function setFilter(f) {
    activeFilter = f;
    document.querySelectorAll('.filter-btns .btn').forEach(b => b.classList.remove('active'));
    document.getElementById('f-' + f.toLowerCase()).classList.add('active');
    applyFilters();
}

function toggleTheme() {
    document.body.classList.toggle('light-mode');
    const btn = document.getElementById('theme-btn');
    btn.innerText = document.body.classList.contains('light-mode') ? '☾' : '☀';
}

function sendContact() {
    const name = document.getElementById('form-name').value;
    if(name) alert(`OK: Message from ${name} queued for transmission.`);
    else alert("ERROR: Name required.");
}

/**
 * ------------------------------------------------------------------
 * APP LOGIC ENGINE
 * ------------------------------------------------------------------
 */
async function launch(i) {
    hideAll();
    currentAppIndex = i;
    const l = document.getElementById('lang-select').value;
    const d = langDict[l] || langDict['en'];
    const p = projects[i];
    
    document.getElementById("app-view").style.display = "flex";
    document.getElementById("app-header").innerText = p.n;
    document.getElementById("app-desc").innerText = p.f ? "// STATUS: ACTIVE" : "// STATUS: OFFLINE";

    const ui = document.getElementById("ui");
    ui.innerHTML = "";

    if(!p.f) {
        ui.innerHTML = `<div class="terminal-output" style="color:var(--alert)">${d.dev}</div>`;
        return;
    }

    // --- FUNCTIONAL PROJECTS ---
    
    if(p.n === "IP Tracker") {
        ui.innerHTML = `
            <button class="btn action-btn" onclick="runIpScan()">${d.scan}</button>
            <div style="margin-top:10px; height:2px; background:var(--border); width:100%"><div id="load-bar" style="height:100%; width:0%; background:var(--accent); transition:width 1s"></div></div>
            <div class="terminal-output" id="out">${d.wait}</div>
        `;
    } 
    
    else if (p.n === "SHA-256 Hasher") {
        ui.innerHTML = `<textarea id="i-text" rows="3" placeholder="${d.write}"></textarea><div class="terminal-output" id="r-out">${d.wait}</div>`;
        document.getElementById('i-text').addEventListener('input', async function() {
            if(!this.value) { document.getElementById('r-out').innerText = d.wait; return; }
            const msgBuffer = new TextEncoder().encode(this.value);
            const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
            const hashArray = Array.from(new Uint8Array(hashBuffer));
            document.getElementById('r-out').innerText = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        });
    }

    else if (p.n === "Base64 Encoder") {
        ui.innerHTML = `<textarea id="i-text" rows="3" placeholder="${d.write}"></textarea><div class="terminal-output" id="r-out">${d.wait}</div>`;
        document.getElementById('i-text').addEventListener('input', function() {
            try {
                document.getElementById('r-out').innerText = btoa(this.value);
            } catch(e) {
                document.getElementById('r-out').innerText = "Typing...";
            }
        });
    }

    else if (p.n === "Binary Converter") {
        ui.innerHTML = `<input type="text" id="i-text" placeholder="${d.write}"><div class="terminal-output" id="r-out">${d.wait}</div>`;
        document.getElementById('i-text').addEventListener('input', function() {
            document.getElementById('r-out').innerText = this.value.split('').map(c=>c.charCodeAt(0).toString(2).padStart(8,'0')).join(' ');
        });
    }
    
    else if (p.n === "MAC Generator") {
        ui.innerHTML = `<button class="btn action-btn" id="gen-mac">${d.gen}</button><div class="terminal-output" id="r-out">${d.wait}</div>`;
        document.getElementById('gen-mac').onclick = function() {
            const hex = "0123456789ABCDEF";
            let mac = "XX:XX:XX:XX:XX:XX".replace(/X/g, () => hex.charAt(Math.floor(Math.random()*16)));
            document.getElementById('r-out').innerText = `MAC ADDRESS:\n${mac}`;
        };
    }

    else if (p.n === "Morse Code") {
        ui.innerHTML = `<input id="i-text" placeholder="${d.write}"><div class="terminal-output" id="r-out">${d.wait}</div>`;
        const m = {'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..', '1':'.----', '2':'..---', '3':'...--', '4':'....-', '5':'.....', '0':'-----', ' ': '/'};
        document.getElementById('i-text').addEventListener('input', function() {
            document.getElementById('r-out').innerText = this.value.toUpperCase().split('').map(c => m[c] || '?').join(' ');
        });
    }

    else if (p.n === "HEX Viewer") {
        ui.innerHTML = `<input id="i-text" placeholder="${d.write}"><div class="terminal-output" id="r-out">${d.wait}</div>`;
        document.getElementById('i-text').addEventListener('input', function() {
            document.getElementById('r-out').innerText = this.value.split('').map(c => "0x" + c.charCodeAt(0).toString(16).toUpperCase()).join(' ');
        });
    }
}

/**
 * ------------------------------------------------------------------
 * EXTERNAL API LOGIC (IP SCANNER)
 * ------------------------------------------------------------------
 */
window.runIpScan = async function() {
    const l = document.getElementById('lang-select').value;
    const d = langDict[l] || langDict['en'];
    const out = document.getElementById('out');
    const bar = document.getElementById('load-bar');
    
    out.innerText = d.tracking;
    bar.style.width = "50%";
    
    try {
        // Intentar obtener IP real
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        
        bar.style.width = "100%";
        setTimeout(() => {
            out.innerHTML = `
<span style="color:var(--text)">TARGET IDENTIFIED:</span>
IP ADDR : ${data.ip}
LOC     : Barcelona, Spain (Simulated)
ISP     : ITB Secure Network
STATUS  : EXPOSED
            `;
        }, 800);
    } catch (e) {
        // Fallback si falla (ej. AdBlock)
        bar.style.width = "100%";
        setTimeout(() => {
            out.innerText = "CONNECTION ERROR: FIREWALL DETECTED.\nDISPLAYING LOCALHOST INFO.\n\nIP: 127.0.0.1";
        }, 800);
    }
}

// Inicialización
changeLang();
showHome();
