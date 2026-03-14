# Nargo's First Class — Premium Grooming & Hair Restoration

![Nargo's First Class](https://img.shields.io/badge/Status-Development-orange?style=for-the-badge)
![Tech](https://img.shields.io/badge/Tech-React%20%7C%20Vite%20%7C%20Tailwind-blue?style=for-the-badge)

Nargo's First Class is a premium grooming destination in Ghana, where artistry meets precision. This repository contains the source code for the official web application, designed with a focus on high-end aesthetics, modular architecture, and seamless user experience.

---

## 💎 Project Philosophy: "Write Once, Import Everywhere"

The codebase is built on a custom design system that ensures absolute visual consistency across all pages. By centralizing our branding tokens and UI components, we achieve:
- **Design Integrity**: Every color, shadow, and spacing follows a strict aesthetic guide.
- **Maintainability**: Global changes (like the primary brand color) can be updated in a single file.
- **Performance**: Lightweight, modular components using Tailwind CSS for zero-overhead styling.

## 🚀 Technical Stack

- **Core**: [React 18](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/) & Custom SVG System
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Routing**: [React Router DOM v7](https://reactrouter.com/)

---

## 🛠️ Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/)

### Installation
1. Clone the repository
2. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Development
Run the development server with auto-restart functionality:
```bash
# In the root or frontend folder
./start.sh
```
The application will be available at `http://localhost:5173`.

---

## 📂 Project Structure

```text
NargosHariCut/
├── frontend/               # Main React Application
│   ├── src/
│   │   ├── assets/         # High-resolution images & textures
│   │   ├── components/     # UI Design System (Button, Navbar, Footer)
│   │   ├── constants/      # Source of Truth for Colors, Contact, Data
│   │   ├── pages/          # Full-page View Compositions
│   │   │   ├── home/       # Hero sections, Carousels, Reviews
│   │   │   ├── about/      # Story section, Team cards
│   │   │   └── legal/      # Terms & Privacy Policy
│   │   └── styles/         # Global CSS & Tailwind Base
│   └── vite.config.js      # Build & Plugin Configuration
├── push_to_github.sh       # Automated DevOps/Push Script
└── .gitignore              # Environment-safe exclusions
```

---

## ⚖️ Legal & Compliance

This web application includes built-in compliance modules:
- **Terms of Service**: Found in `/src/pages/legal/Terms.jsx`
- **Privacy Policy**: Found in `/src/pages/legal/Privacy.jsx`

---

## 👤 Author & Operator

Designed and Developed by **DivAmok Corp.** for **Nargo's First Class (Sesi Technologies Ltd)**.

© 2026 Nargo's First Class. All Rights Reserved.
