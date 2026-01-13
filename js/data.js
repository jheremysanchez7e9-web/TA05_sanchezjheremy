/**
 * ------------------------------------------------------------------
 * CONFIGURATION & LOCALIZATION DATABASE
 * ------------------------------------------------------------------
 */
const langDict = {
    es: {
        sub: "ESTUDIANTE DE CIBERSEGURIDAD", h: "[ INICIO ]", p: "[ PROYECTOS ]", c: "[ CONTACTO ]",
        all: "TODOS", func: "FUNCIONALES", cripto: "CRIPTO", net: "REDES", conv: "CONVERSORES",
        cTitle: "CANAL SEGURO // CONTACTO", send: "ENVIAR TRANSMISIÓN",
        back: "< VOLVER", close: "FINALIZAR PROCESO", 
        pName: "Identidad", pDesc: "Detalle de la solicitud...",
        lName: "AGENTE:", 
        labels: { n: "NOMBRE", e: "EMAIL", p: "TELÉFONO", d: "MOTIVO / MENSAJE" },
        sPlaceholder: "BUSCAR_MODULO...",
        wait: "Esperando entrada de datos...", write: "Ingrese datos aquí...", 
        scan: "OBTENER IP PÚBLICA",
        tracking: "INICIANDO HANDSHAKE CON SERVIDOR EXTERNO...", 
        gen: "GENERAR MAC", dev: "ERROR 404: MÓDULO NO ENCONTRADO O EN DESARROLLO",
        spoof_loc: "Barcelona, Cataluña, España",
        selProj: "> PROYECTOS DESTACADOS",
        cat: { Cripto: "CRIPTOGRAFÍA", Net: "REDES", Conv: "CONVERSIÓN", Web: "WEB AUDIT", Data: "DATOS" }
    },
    ca: {
        sub: "ESTUDIANT DE CIBERSEGURETAT", h: "[ INICI ]", p: "[ PROJECTES ]", c: "[ CONTACTE ]",
        all: "TOTS", func: "FUNCIONALS", cripto: "CRIPTO", net: "XARXES", conv: "CONVERTIDORS",
        cTitle: "CANAL SEGUR // CONTACTE", send: "ENVIAR TRANSMISSIÓ",
        back: "< TORNAR", close: "TANCAR PROCÉS", 
        pName: "Identitat", pDesc: "Detalls de la sol·licitud...",
        lName: "AGENT:", 
        labels: { n: "NOM", e: "EMAIL", p: "TELÈFON", d: "MOTIU / MISSATGE" },
        sPlaceholder: "CERCAR_MODUL...",
        wait: "Esperant dades...", write: "Introdueix dades...", 
        scan: "OBTENIR IP PÚBLICA",
        tracking: "INICIANT HANDSHAKE AMB SERVIDOR EXTERN...", 
        gen: "GENERAR MAC", dev: "ERROR 404: MÒDUL NO TROBAT O EN DESENVOLUPAMENT",
        spoof_loc: "Barcelona, Catalunya, Espanya",
        selProj: "> PROJECTES DESTACATS",
        cat: { Cripto: "CRIPTOGRAFIA", Net: "XARXES", Conv: "CONVERSIÓ", Web: "AUDITORIA WEB", Data: "DADES" }
    },
    en: {
        sub: "CYBERSECURITY STUDENT", h: "[ HOME ]", p: "[ PROJECTS ]", c: "[ CONTACT ]",
        all: "ALL", func: "WORKING", cripto: "CRYPTO", net: "NETWORK", conv: "CONVERTERS",
        cTitle: "SECURE_CHANNEL // CONTACT", send: "SEND TRANSMISSION",
        back: "< BACK", close: "KILL PROCESS", 
        pName: "Identity", pDesc: "Request details...",
        lName: "AGENT:", 
        labels: { n: "NAME", e: "EMAIL", p: "PHONE", d: "REASON / MESSAGE" },
        sPlaceholder: "SEARCH_MODULE...",
        wait: "Awaiting data input...", write: "Input data here...", 
        scan: "GET PUBLIC IP",
        tracking: "INITIATING HANDSHAKE WITH EXTERNAL SERVER...", 
        gen: "GENERATE MAC", dev: "ERROR 404: MODULE NOT FOUND OR IN DEV",
        spoof_loc: "Barcelona, Catalonia, Spain",
        selProj: "> SELECTED PROJECTS",
        cat: { Cripto: "CRYPTOGRAPHY", Net: "NETWORK", Conv: "CONVERSION", Web: "WEB AUDIT", Data: "DATA" }
    },
    fr: {
        sub: "ÉTUDIANT EN CYBERSÉCURITÉ", h: "[ ACCUEIL ]", p: "[ PROJETS ]", c: "[ CONTACT ]",
        all: "TOUS", func: "FONCTIONNEL", cripto: "CRYPTO", net: "RÉSEAU", conv: "CONV",
        cTitle: "CANAL_SÉCURISÉ // CONTACT", send: "ENVOYER",
        back: "< RETOUR", close: "TERMINER", 
        pName: "Identité", pDesc: "Détails...",
        lName: "AGENT:", 
        labels: { n: "NOM", e: "EMAIL", p: "TÉLÉPHONE", d: "MOTIF / MESSAGE" },
        sPlaceholder: "CHERCHER...",
        wait: "En attente...", write: "Saisir données...", 
        scan: "OBTENER IP PUBLIQUE",
        tracking: "INITIALISATION DU HANDSHAKE...", 
        gen: "GÉNÉRER MAC", dev: "ERREUR 404: MODULE EN DÉVELOPPEMENT",
        spoof_loc: "Barcelone, Catalogne, Espagne",
        selProj: "> PROJETS SÉLECTIONNÉS",
        cat: { Cripto: "CRYPTOGRAPHIE", Net: "RÉSEAU", Conv: "CONVERSION", Web: "WEB AUDIT", Data: "DONNÉES" }
    },
    de: {
        sub: "IT-SICHERHEIT STUDENT", h: "[ HOME ]", p: "[ PROJEKTE ]", c: "[ KONTAKT ]",
        all: "ALLE", func: "FUNKTIONAL", cripto: "KRYPTO", net: "NETZWERK", conv: "KONV",
        cTitle: "SICHERER_KANAL // KONTAKT", send: "SENDEN",
        back: "< ZURÜCK", close: "BEENDEN", 
        pName: "Identität", pDesc: "Nachricht...",
        lName: "AGENT:", 
        labels: { n: "NAME", e: "EMAIL", p: "TELEFON", d: "GRUND / NACHRICHT" },
        sPlaceholder: "SUCHEN...",
        wait: "Warten auf Eingabe...", write: "Daten eingeben...", 
        scan: "ÖFFENTLICHE IP ABRUFEN",
        tracking: "HANDSHAKE WIRD INITIALISIERT...", 
        gen: "MAC GENERIEREN", dev: "FEHLER 404: MODUL IN ENTWICKLUNG",
        spoof_loc: "Barcelona, Katalonien, Spanien",
        selProj: "> AUSGEWÄHLTE PROJEKTE",
        cat: { Cripto: "KRYPTOGRAPHIE", Net: "NETZWERK", Conv: "KONVERSION", Web: "WEB AUDIT", Data: "DATEN" }
    }
};

/**
 * ------------------------------------------------------------------
 * PROJECT REPOSITORY
 * ------------------------------------------------------------------
 */
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
    {n:"Password Gen", c:"Cripto", f:false},
    {n:"WiFi Deauther", c:"Net", f:false},
    {n:"Keylogger Sim", c:"Data", f:false},
    {n:"Packet Sniffer", c:"Net", f:false},
    {n:"Brute Force Tool", c:"Cripto", f:false},
    {n:"XSS Tester", c:"Web", f:false},
    {n:"Malware Analysis", c:"Data", f:false},
    {n:"VPN Tunnel", c:"Net", f:false},
    {n:"Firewall Rule Gen", c:"Net", f:false},
    {n:"Rootkit Detector", c:"Data", f:false},
    {n:"Social Eng. Toolkit", c:"Web", f:false}
];
