# 🛡️ Jheremy Sánchez // Cyber Portfolio & Toolkit

![Project Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge&logo=git)
![Security](https://img.shields.io/badge/Theme-Cyber_Security-00ff41?style=for-the-badge&logo=kalilinux&logoColor=black)
![Core](https://img.shields.io/badge/Tech-Vanilla_JS-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

> **"System.Root // Access Granted"**

An immersive, terminal-inspired personal portfolio designed to showcase cybersecurity skills, frontend engineering proficiency, and interactive utility tools. The project simulates a command-line environment within a modern web browser, built entirely with **Vanilla JavaScript** to ensure high performance and zero dependencies.

---

## ⚡ Project Overview

This repository hosts a Single Page Application (SPA) that functions as both a professional portfolio and a suite of usable cybersecurity tools. The architecture focuses on modularity, clean code practices, and a distinctive "Cyberpunk/InfoSec" aesthetic.

### Key Features

* **🖥️ Immersive UI/UX:** Custom implementation of CRT scanlines, neon glows, and typewriter effects using advanced CSS3 and JS. Includes a toggleable "Light Mode" for high-contrast visibility.
* **🌐 Localization (i18n):** Robust hot-swapping language engine supporting **English, Spanish, Catalan, French, and German** instantly without page reloads.
* **🛠️ Modular Architecture:** Separation of concerns with dedicated data layers (`data.js`) and logic layers (`main.js`), facilitating easy maintenance and scalability.

---

## 🧰 Integrated Toolkit

Beyond a static showcase, the system includes functional modules for basic security analysis and data conversion:

| Module Name | Category | Status | Functionality |
| :--- | :--- | :--- | :--- |
| **IP Tracker** | `[NET]` | ✅ Active | Retrieves Public IP, ISP, and Geolocation data via external REST APIs. |
| **SHA-256 Hasher** | `[CRYPTO]` | ✅ Active | Real-time client-side hashing using the Web Crypto API. |
| **MAC Generator** | `[NET]` | ✅ Active | Generates randomized MAC addresses for testing network interfaces. |
| **Base64 Encoder** | `[CONV]` | ✅ Active | Instant bidirectional String-to-Base64 encoding. |
| **Binary Converter** | `[CONV]` | ✅ Active | Translates ASCII text into binary strings for data inspection. |
| **Morse Code** | `[CONV]` | ✅ Active | Standard ITU conversion for signaling protocols. |

---

## 📂 Repository Structure

The project follows a clean, semantic file structure:

```text
/
├── index.html       # Entry point & DOM Structure
├── favicon.png      # System Identification Icon
├── css/
│   └── style.css    # Custom Variables, Animations & Responsive Layouts
└── js/
    ├── data.js      # Localization Dictionary & Project Database
    └── main.js      # Core Application Logic & Event Handling
