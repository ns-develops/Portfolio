import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-hero-gradient opacity-90" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-in slide-in-from-bottom-8 duration-1000">
          Ditt Namn
        </h1>
        
        <p className="text-xl sm:text-2xl text-primary-foreground/90 mb-2 animate-in slide-in-from-bottom-8 duration-1000 delay-200">
          Frontend Utvecklare
        </p>
        
        <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto animate-in slide-in-from-bottom-8 duration-1000 delay-300">
          Jag skapar moderna, responsiva webbapplikationer med passion för ren kod och användarupplevelse
        </p>
        
        {/* Social Links */}
        <div className="flex justify-center space-x-4 mb-8 animate-in slide-in-from-bottom-8 duration-1000 delay-400">
          <Button size="icon" variant="outline" className="bg-white/10 border-white/20 hover:bg-white/20 text-white">
            <Github className="h-5 w-5" />
          </Button>
          <Button size="icon" variant="outline" className="bg-white/10 border-white/20 hover:bg-white/20 text-white">
            <Linkedin className="h-5 w-5" />
          </Button>
          <Button size="icon" variant="outline" className="bg-white/10 border-white/20 hover:bg-white/20 text-white">
            <Mail className="h-5 w-5" />
          </Button>
        </div>
        
        {/* CTA Button */}
        <Button 
          onClick={scrollToAbout}
          size="lg" 
          className="bg-white text-primary hover:bg-white/90 animate-in slide-in-from-bottom-8 duration-1000 delay-500"
        >
          Läs mer om mig
          <ArrowDown className="ml-2 h-4 w-4" />
        </Button>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary-foreground/60" />
      </div>
    </section>
  );
};

export default Hero;