import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const Skills = () => {
  const { t } = useLanguage();
  
  const skillCategories = {
    frontend: [
      "VS Code", "Javascript", "React.js", "Vercel", "Bootstrap", "TypeScript", 
      "Next.js", "Vue.js", "React hooks", "Flexbox", "Grid", "Routes", 
      "Tailwind CSS", "HTML5", "CSS3", "Axios", "Middleware", "Zod", 
      "Redux", "Stripe", "WordPress", "Netlify"
    ],
    native: [
      "SwiftUI", "UIKit", "AVFoundation", "CoreData", "Randomizer", 
      "Animationer", "Egna knappar/design", "Android Studio", 
      "Kotlin", "Java", "Javascript Native"
    ],
    backend: [
      "AWS", "Azure", "MongoDB", "Firebase", "SQLite/CoreData", 
      "Node.js + Express", "Google Cloud Console", "JWT Token", 
      "Autentisering (Login/Signup)", "CRUD operationer", "REST API:er", 
      "Lambda", "DynamoDB", "CloudWatch", "Öppna API-listor"
    ],
    uiux: [
      "Figma prototyper", "UX/UI Design", "Material Design", "MUI", 
      "Style components", "SVG", "React Icons", "Pexels", "Flaticon", 
      "Canva", "Sass", "Image sliders", "Framer motion", "Hover effects"
    ],
    tools: [
      "Jira", "Trello", "Husky", "Prettier", "ESLint"
    ]
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              {t('skillsTitle')}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t('skillsSubtitle')}
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {/* Frontend */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="shadow-card hover:shadow-card-hover transition-all duration-300 h-full">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {t('frontendTitle')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillCategories.frontend.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Badge 
                          variant="secondary" 
                          className="text-xs hover:bg-foreground hover:text-background transition-colors duration-300"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Native */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="shadow-card hover:shadow-card-hover transition-all duration-300 h-full">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {t('nativeTitle')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillCategories.native.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Badge 
                          variant="secondary" 
                          className="text-xs hover:bg-foreground hover:text-background transition-colors duration-300"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Backend */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="shadow-card hover:shadow-card-hover transition-all duration-300 h-full">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {t('backendTitle')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillCategories.backend.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Badge 
                          variant="secondary" 
                          className="text-xs hover:bg-foreground hover:text-background transition-colors duration-300"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* UI/UX Design */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="shadow-card hover:shadow-card-hover transition-all duration-300 h-full">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {t('uiuxTitle')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillCategories.uiux.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Badge 
                          variant="secondary" 
                          className="text-xs hover:bg-foreground hover:text-background transition-colors duration-300"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Tools */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="shadow-card hover:shadow-card-hover transition-all duration-300 h-full">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {t('toolsTitle')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillCategories.tools.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Badge 
                          variant="secondary" 
                          className="text-xs hover:bg-foreground hover:text-background transition-colors duration-300"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Specialområden */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="shadow-card hover:shadow-card-hover transition-all duration-300 h-full">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {t('specialTitle')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <motion.ul 
                    className="space-y-2 text-sm text-muted-foreground"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                  >
                    {[
                      "• Fullstack utveckling med modern tech-stack",
                      "• Cross-platform utveckling (Webb & Native)",
                      "• Cloud integration & deployment",
                      "• REST API:er & databashantering",
                      "• UI/UX design & prototyping",
                      "• Performance & säkerhetsoptimering"
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </motion.ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;