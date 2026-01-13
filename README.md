# 🛡️ Jheremy Sánchez // Cyber Portfolio & Toolkit

![Project Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)
![Security](https://img.shields.io/badge/Theme-Cyber_Security-00ff41?style=for-the-badge)
![Language](https://img.shields.io/badge/Multi_Language-ES_|_EN_|_CA_|_FR_|_DE-blue?style=for-the-badge)

> **"System.Root // Access Granted"**

An immersive, terminal-inspired personal portfolio designed to showcase cybersecurity skills, web development proficiency, and interactive utility tools. Built entirely with **Vanilla JavaScript**, featuring a custom "Scanline" UI and real-time data fetching.

---

## 🖥️ Live Demo

🚀 **[Click here to access the System Terminal](https://tu-usuario.github.io/portfolio/)** *(Replace `tu-usuario` with your GitHub username)*

---

## ⚡ Key Features

### 🎨 Immersive UI/UX
- **Cyberpunk Aesthetic:** Custom CSS variables for neon glows, scanlines, and CRT monitor effects.
- **Theme Switcher:** Toggle between **Dark Mode** (Terminal) and **Light Mode** (Office).
- **Responsive Design:** Fully fluid layout that adapts from Desktop command centers to Mobile devices.
- **Typewriter Effects:** Dynamic text rendering for a realistic terminal experience.

### 🌐 Internationalization (i18n)
- **5 Languages Supported:** English, Spanish, Catalan, French, and German.
- **Hot-Swapping:** Instant language switching without page reloads using a custom JSON dictionary (`data.js`).

### 🛠️ Integrated Cyber Tools (Functional)
The portfolio includes a suite of functional web-based tools for basic security and data analysis:

| Tool | Category | Functionality |
| :--- | :--- | :--- |
| **IP Tracker** | `[NET]` | Fetches public IP, ISP, and Geolocation data using external APIs. |
| **SHA-256 Hasher** | `[CRYPTO]` | Real-time text hashing using the Web Crypto API. |
| **MAC Generator** | `[NET]` | Generates random randomized MAC addresses for testing/spoofing. |
| **Base64 Encoder** | `[CONV]` | Instant String-to-Base64 encoding. |
| **Binary Converter** | `[CONV]` | Translates ASCII text into binary strings. |
| **Morse Code** | `[CONV]` | Converts text to Morse code for signaling. |

---

## 📂 Project Structure

This project follows a clean, modular architecture to separate logic, data, and presentation.

```text
/
├── index.html       # Core DOM structure (Single Page Application feel)
├── favicon.png      # System Icon
├── css/
│   └── style.css    # Custom CSS variables, animations, and responsive rules
└── js/
    ├── data.js      # Localization dictionary (i18n) & Project database
    └── main.js      # Core logic, DOM manipulation, and Tool algorithms
