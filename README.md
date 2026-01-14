# 🛡️ JHEREMY SÁNCHEZ // CYBER SECURITY PORTFOLIO

> **System ID:** `7E9-ITB-SEC`  
> **Status:** `SYSTEM ONLINE`

This project is an interactive web interface designed to showcase the professional profile of a **Cybersecurity Specialist**. The application combines a **minimalist "Dark Luxury"** aesthetic with real technical functionalities, simulating an advanced terminal environment while maintaining the usability of a modern web application.

The primary objective is to demonstrate competencies in both Web Development (Frontend) and programming logic oriented towards security tools and networking.

---

## 📋 Table of Contents

1. [General Description](#-general-description)
2. [Technical Features](#-technical-features)
3. [Implemented Tools](#-implemented-tools)
4. [Technology Stack](#-technology-stack)
5. [Installation & Deployment](#-installation--deployment)
6. [Project Structure](#-project-structure)
7. [Author](#-author)

---

## 🧐 General Description

The portfolio departs from traditional designs to offer an immersive experience. The user navigates through a control panel that centralizes profile information, featured projects, and functional tools in real-time.

The visual design prioritizes **elegant minimalism**: deep dark backgrounds (`#050505`), clean typography, and metallic gold accents (`#d4af37`), eliminating visual noise to focus attention on functionality and content.

---

## 🚀 Technical Features

### 🌐 Internationalization (i18n)
A robust real-time translation system without page reloads.
- **Supported Languages:** Spanish (ES), English (EN), Catalan (CA), French (FR), German (DE).
- **Scope:** Translates the interface, tool descriptions, placeholders, and dynamically resets text animations.

### ⚡ Interactivity & UI/UX
- **TypeWriter Effect:** Automatic typing animation that rotates through profile roles (Student, Pentester, Network Admin, etc.).
- **Responsive Design:** Fluid adaptation to mobile devices, tablets, and desktops.
- **Light/Dark Mode:** Theme toggling with visual persistence.
- **Dynamic Map:** **OpenStreetMap** integration (via iframe) for geolocation without private API key dependencies.

### 🛡️ Network & Cryptography Logic
Implementation of pure JavaScript logic (`Vanilla JS`) to execute real tasks within the client's browser.

---

## 🛠 Implemented Tools

The portfolio includes a set of functional "Web-Apps" integrated directly into the DOM:

1.  **IP Tracker:**
    * Connection to an external API (`api.ipify.org`) to retrieve the user's real public IP.
    * Simulation of ISP analysis and geolocation.
    * Error handling (try/catch) for ad blockers.

2.  **SHA-256 Hasher:**
    * Utilization of the browser's native **Web Crypto API** to generate secure hashes in real-time.

3.  **MAC Generator:**
    * Algorithm for creating valid random MAC addresses (Hexadecimal).

4.  **Base64 Encoder:**
    * Bidirectional conversion of text to Base64 format.

5.  **Binary / Hexadecimal / Morse Converter:**
    * Algorithms for transforming text strings into their respective representations.

---

## 💻 Technology Stack

The project has been developed following a **"Dependency-Free"** philosophy to ensure maximum performance and compatibility.

* **Semantic HTML5:** Content structure.
* **Modern CSS3:** CSS Variables (`:root`), Flexbox, CSS Grid, and Media Queries.
* **JavaScript (ES6+):** Business logic, DOM manipulation, `async/await`, and `fetch API`.
* **OpenStreetMap:** Open-source mapping service.

No frameworks (React, Vue, Bootstrap) or heavy libraries (jQuery) were used, demonstrating a solid command of web fundamentals.

---

## 📥 Installation & Deployment

As a static site, it does not require backend server configuration (Node.js, PHP, Python).

### Local Execution
1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/cyber-portfolio.git](https://github.com/your-username/cyber-portfolio.git)
    ```
2.  **Navigate to the folder:**
    ```bash
    cd cyber-portfolio
    ```
3.  **Run:**
    Simply open the `index.html` file in your preferred web browser (Chrome, Firefox, Edge, Safari).

### Customization
To modify the profile picture, replace the file:
* `img/logo.png` (A square image with a 1:1 ratio is recommended).

---

## 📂 Project Structure

```text
/
├── index.html          # Core structure and markup
├── css/
│   └── style.css       # Styles, theme variables, and animations
├── js/
│   ├── main.js         # Main logic, i18n, and tools
│   └── date.js         # Independent module for date management
├── img/
│   └── logo.png        # Profile/branding image
└── README.md           # Project documentation
