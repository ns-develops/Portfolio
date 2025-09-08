import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'sv' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  sv: {
    // Hero
    name: "Portfolio",
    title: "App & Web Developer",
    description: "Jag skapar moderna, responsiva webbapplikationer med passion för ren kod och användarupplevelse",
    readMore: "Läs mer om mig",
    
    // About
    aboutTitle: "Om Mig",
    aboutSubtitle: "Passion för utveckling och problemlösning",
    aboutText: "Jag är en passionerad frontend-utvecklare med flera års erfarenhet inom webbutveckling. Jag älskar att skapa användarcentrerade lösningar som kombinerar funktionalitet med elegant design.",
    
    // Skills
    skillsTitle: "Tekniska Färdigheter",
    skillsSubtitle: "Erfarenhet/Stack - Teknologier och verktyg jag arbetar med",
    frontendTitle: "Frontend & Webb",
    nativeTitle: "Native Utveckling",
    backendTitle: "Backend & API:er",
    uiuxTitle: "UI/UX Design",
    toolsTitle: "Verktyg",
    specialTitle: "Specialområden",
    
    // Projects
    projectsTitle: "Mina Projekt",
    projectsSubtitle: "En samling av mina senaste projekt och arbeten",
    
    // Contact
    contactTitle: "Kontakt",
    contactSubtitle: "Låt oss diskutera ditt nästa projekt",
    
    // Language
    language: "Svenska"
  },
  en: {
    // Hero
    name: "Portfolio",
    title: "App & Web Developer",
    description: "I create modern, responsive web applications with passion for clean code and user experience",
    readMore: "Read more about me",
    
    // About
    aboutTitle: "About Me",
    aboutSubtitle: "Passion for development and problem solving",
    aboutText: "I am a passionate frontend developer with several years of experience in web development. I love creating user-centered solutions that combine functionality with elegant design.",
    
    // Skills
    skillsTitle: "Technical Skills",
    skillsSubtitle: "Experience/Stack - Technologies and tools I work with",
    frontendTitle: "Frontend & Web",
    nativeTitle: "Native Development",
    backendTitle: "Backend & APIs",
    uiuxTitle: "UI/UX Design",
    toolsTitle: "Tools",
    specialTitle: "Specializations",
    
    // Projects
    projectsTitle: "My Projects",
    projectsSubtitle: "A collection of my latest projects and work",
    
    // Contact
    contactTitle: "Contact",
    contactSubtitle: "Let's discuss your next project",
    
    // Language
    language: "English"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('sv');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['sv']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}