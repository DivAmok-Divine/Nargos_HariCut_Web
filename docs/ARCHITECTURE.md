# Architecture & Design System

## 🏛️ Core Principles

The project follows a **Centralized Source of Truth** architecture. This avoids technical debt by ensuring that logic and styling are never duplicated.

### 1. The Design System (`/src/constants/`)
- **`colors.js`**: Contains the semantic Tailwind configuration. Any change here propagates to the entire UI.
- **`contact.js`**: Centralized business information. Updating a phone number or address here updates the Header, Footer, Contact Page, Terms, and Privacy pages automatically.
- **`services.js`, `team.js`, `testimonials.js`**: Data models that drive the dynamic UI components.

### 2. Reusable UI Components (`/src/components/ui/`)
- High-level components like `Button`, `Badge`, and `CurveDivider` are built to be "props-driven" and context-aware. They should be used for all UI interactions to maintain brand voice.

### 3. Layout Composition (`/src/components/layout/`)
- Structural elements like `Navbar` and `Footer` are separate from page-specific logic, allowing for global navigation updates.

### 4. Page Architecture (`/src/pages/`)
- Pages are modular compositions of the UI components. Each page follows the same structural pattern:
  - Header (Page Hero)
  - Main Content (Sections)
  - Divider Transitions (Wave/Curve effects)
  - Footer

## 🎨 Visual Aesthetics
The app uses a curated palette:
- **Primary (Magenta)**: For high-visibility actions.
- **Midnight/Charcoal**: For premium, masculine depth.
- **Outfield/Inter Fonts**: For modern, readable typography.

---

## 🔧 Workflow
For any new feature:
1. Define any new data in `constants/`.
2. Build/Compose UI in `components/`.
3. Assemble the page in `pages/`.
4. Register the route in `App.jsx`.
