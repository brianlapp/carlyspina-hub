# Project File Structure and Documentation

## Root Directory
- 📁 `src/` - Main source code directory
  - 📄 `App.tsx` 🟢 - Main application component, handles routing and global providers
  - 📄 `App.css` 🟡 - Global styles and animations
  - 📄 `main.tsx` 🟢 - Application entry point
  - 📄 `index.css` 🟡 - Global CSS imports and base styles
  - 📄 `vite-env.d.ts` 🔴 - TypeScript declarations for Vite

## Components Directory (`src/components/`)
- 📄 `Navigation.tsx` 🟢 - Main navigation bar with responsive menu
- 📄 `ServiceCard.tsx` 🟡 - Reusable card component for displaying services
- 📄 `ServicesSection.tsx` 🟢 - Grid layout of service offerings
- 📄 `SpinalEnergeticsHero.tsx` 🟡 - Hero section for spinal energetics page
- 📄 `SpinalEnergeticsContent.tsx` 🟢 - Main content for spinal energetics page
- 📄 `FooterTeaser.tsx` 🟡 - Footer component with call-to-action
- 📄 `CallToAction.tsx` 🟡 - Reusable call-to-action button component
- 📄 `AboutContent.tsx` 🟡 - Main content for about page
- 📄 `AboutHero.tsx` 🟡 - Hero section for about page
- 📄 `AboutSection.tsx` 🟡 - About section with company information
- 📄 `CTASection.tsx` 🟡 - Call-to-action section component
- 📄 `HeroSection.tsx` 🟢 - Main hero section for homepage
- 📄 `IntroSection.tsx` 🟡 - Introduction section component
- 📄 `TestimonialsSection.tsx` 🟡 - Customer testimonials section

### Spinal Energetics Components (`src/components/spinal-energetics/`)
- 📄 `ContentSection.tsx` 🟢 - Content section layout component
- 📄 `SectionTitle.tsx` 🟡 - Reusable section title component
- 📄 `BookingCard.tsx` 🟡 - Booking card with call-to-action

### Reiki Components (`src/components/reiki/`)
- 📄 `ReikiContent.tsx` 🟢 - Main content for reiki page
- 📄 `ReikiHero.tsx` 🟡 - Hero section for reiki page

### Reiki Training Components (`src/components/reiki-training/`)
- 📄 `ReikiTrainingContent.tsx` 🟢 - Main content for reiki training page
- 📄 `ReikiTrainingHero.tsx` 🟡 - Hero section for reiki training page

### Akashic Records Components (`src/components/akashic-records/`)
- 📄 `AkashicRecordsContent.tsx` 🟢 - Main content for akashic records page
- 📄 `AkashicRecordsHero.tsx` 🟡 - Hero section for akashic records page

### UI Components (`src/components/ui/`)
- 📄 Various shadcn/ui components 🟢 - Reusable UI components from shadcn/ui library

## Pages Directory (`src/pages/`)
- 📄 `Index.tsx` 🟢 - Homepage component
- 📄 `About.tsx` 🟡 - About page component
- 📄 `SpinalEnergetics.tsx` 🟢 - Spinal energetics page component
- 📄 `Reiki.tsx` 🟢 - Reiki page component
- 📄 `ReikiTraining.tsx` 🟢 - Reiki training page component
- 📄 `AkashicRecords.tsx` 🟢 - Akashic records page component

## Configuration Files
- 📄 `tailwind.config.ts` 🟢 - Tailwind CSS configuration
- 📄 `vite.config.ts` 🟢 - Vite build configuration
- 📄 `tsconfig.json` 🟡 - TypeScript configuration
- 📄 `package.json` 🟢 - Project dependencies and scripts

## Emoji Key
- 🟢 High importance (frequently imported/used)
- 🟡 Medium importance (moderately imported/used)
- 🔴 Low importance (rarely imported/used)

# Project Dependencies

## Core Dependencies
- React 18.3.1
- React Router DOM 6.26.2
- Tailwind CSS 3.4.11
- Framer Motion 11.15.0
- @tanstack/react-query 5.56.2

## UI Libraries
- shadcn/ui components
- Lucide React 0.462.0 (icons)
- Sonner 1.5.0 (toasts)

## Build Tools
- Vite 5.4.1
- TypeScript 5.5.3
- @vitejs/plugin-react-swc 3.5.0

## Development Dependencies
- ESLint 9.9.0
- PostCSS 8.4.47
- Autoprefixer 10.4.20

# Project Architecture

The project follows a component-based architecture with React and TypeScript. It uses:
- React Router for navigation
- Tailwind CSS for styling
- shadcn/ui for UI components
- Framer Motion for animations
- React Query for data management

The application is structured with:
1. Pages as top-level components
2. Reusable components in the components directory
3. Feature-specific components in dedicated subdirectories
4. Shared UI components from shadcn/ui

Each page typically consists of:
- A hero section
- Main content sections
- Reusable components like cards and CTAs
- Navigation and footer components