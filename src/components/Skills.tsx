import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
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
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
            Tekniska Färdigheter
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Erfarenhet/Stack - Teknologier och verktyg jag arbetar med
          </p>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {/* Frontend */}
            <Card className="shadow-card hover:shadow-card-hover transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-primary">
                  Frontend & Webb
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillCategories.frontend.map((skill, index) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                      style={{
                        animationDelay: `${index * 0.05}s`,
                        animation: 'slide-in-from-bottom 0.6s ease-out forwards'
                      }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Native */}
            <Card className="shadow-card hover:shadow-card-hover transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-primary">
                  Native Utveckling
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillCategories.native.map((skill, index) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                      style={{
                        animationDelay: `${index * 0.05}s`,
                        animation: 'slide-in-from-bottom 0.6s ease-out forwards'
                      }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Backend */}
            <Card className="shadow-card hover:shadow-card-hover transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-primary">
                  Backend & API:er
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillCategories.backend.map((skill, index) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                      style={{
                        animationDelay: `${index * 0.05}s`,
                        animation: 'slide-in-from-bottom 0.6s ease-out forwards'
                      }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* UI/UX Design */}
            <Card className="shadow-card hover:shadow-card-hover transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-primary">
                  UI/UX Design
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillCategories.uiux.map((skill, index) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                      style={{
                        animationDelay: `${index * 0.05}s`,
                        animation: 'slide-in-from-bottom 0.6s ease-out forwards'
                      }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tools */}
            <Card className="shadow-card hover:shadow-card-hover transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-primary">
                  Verktyg
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillCategories.tools.map((skill, index) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                      style={{
                        animationDelay: `${index * 0.05}s`,
                        animation: 'slide-in-from-bottom 0.6s ease-out forwards'
                      }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Specialområden */}
            <Card className="shadow-card hover:shadow-card-hover transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-primary">
                  Specialområden
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Fullstack utveckling med modern tech-stack</li>
                  <li>• Cross-platform utveckling (Webb & Native)</li>
                  <li>• Cloud integration & deployment</li>
                  <li>• REST API:er & databashantering</li>
                  <li>• UI/UX design & prototyping</li>
                  <li>• Performance & säkerhetsoptimering</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;