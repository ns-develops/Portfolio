import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const { t } = useLanguage();
  
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background">
      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Scrolling Code Text - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 -ml-8 sm:-ml-12 lg:-ml-16"
          >
            <div className="relative h-64 w-48 overflow-hidden bg-background/50 backdrop-blur-sm border border-border/50">
              <motion.div
                className="absolute inset-0 text-xs font-mono text-muted-foreground/80 leading-relaxed p-2"
                animate={{ y: [0, -200, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              >
                <div className="space-y-1">
                  <div>const App = () =&gt; &#123;</div>
                  <div>  const [data, setData] = useState([]);</div>
                  <div>  const [loading, setLoading] = useState(false);</div>
                  <div></div>
                  <div>  useEffect(() =&gt; &#123;</div>
                  <div>    fetchData();</div>
                  <div>  &#125;, []);</div>
                  <div></div>
                  <div>  const fetchData = async () =&gt; &#123;</div>
                  <div>    setLoading(true);</div>
                  <div>    try &#123;</div>
                  <div>      const response = await api.get(&quot;/data&quot;);</div>
                  <div>      setData(response.data);</div>
                  <div>    &#125; catch (error) &#123;</div>
                  <div>      console.error(&quot;Error:&quot;, error);</div>
                  <div>    &#125; finally &#123;</div>
                  <div>      setLoading(false);</div>
                  <div>    &#125;</div>
                  <div>  &#125;;</div>
                  <div></div>
                  <div>  return (</div>
                  <div>    &lt;div className=&quot;app&quot;&gt;</div>
                  <div>      &lt;Header /&gt;</div>
                  <div>      &#123;loading ? (</div>
                  <div>        &lt;Spinner /&gt;</div>
                  <div>      ) : (</div>
                  <div>        &lt;DataList data=&#123;data&#125; /&gt;</div>
                  <div>      )&#125;</div>
                  <div>    &lt;/div&gt;</div>
                  <div>  );</div>
                  <div>&#125;;</div>
                  <div></div>
                  <div>export default App;</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content - Center */}
          <motion.div 
            className="text-center order-1 lg:order-2 lg:col-span-2 lg:-ml-64"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t('name')}
            </motion.h1>
            
            <motion.p 
              className="text-xl sm:text-2xl text-muted-foreground mb-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t('title')}
            </motion.p>
            
            <motion.p 
              className="text-lg text-muted-foreground mb-8 max-w-2xl lg:max-w-none"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {t('description')}
            </motion.p>
            
            {/* Social Links */}
            <motion.div 
              className="flex justify-center space-x-4 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {[Github, Linkedin, Mail].map((Icon, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="icon" variant="outline" className="border-border hover:bg-accent">
                    <Icon className="h-5 w-5" />
                  </Button>
                </motion.div>
              ))}
            </motion.div>
            
            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                onClick={scrollToAbout}
                size="lg" 
                className="bg-foreground text-background hover:bg-foreground/90"
              >
                {t('readMore')}
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </motion.div>
    </section>
  );
};

export default Hero;