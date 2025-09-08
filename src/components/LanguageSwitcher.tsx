import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.div 
      className="fixed top-4 right-4 z-50 flex items-center gap-2 bg-background/80 backdrop-blur-sm border rounded-lg p-2 shadow-lg"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Globe className="h-4 w-4 text-muted-foreground" />
      <div className="flex items-center border rounded-md">
        <Button
          variant={language === 'sv' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setLanguage('sv')}
          className="text-xs px-2 py-1 h-7 rounded-r-none border-r"
        >
          SV
        </Button>
        <Button
          variant={language === 'en' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setLanguage('en')}
          className="text-xs px-2 py-1 h-7 rounded-l-none"
        >
          EN
        </Button>
      </div>
    </motion.div>
  );
};

export default LanguageSwitcher;