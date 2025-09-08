import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { LanguageProvider } from "@/contexts/LanguageContext";

const Index = () => {
  return (
    <LanguageProvider>
      <main className="min-h-screen relative">
        <LanguageSwitcher />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </LanguageProvider>
  );
};

export default Index;