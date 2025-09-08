import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const technicalSkills = [
    { name: "React/Next.js", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "CSS/Tailwind", level: 95 },
    { name: "Python", level: 75 },
    { name: "PostgreSQL", level: 70 },
  ];

  const tools = [
    "Git", "Docker", "Figma", "VS Code", "Vite", "MongoDB", 
    "Firebase", "AWS", "Vercel", "Prisma", "Supabase", "GraphQL"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
            Färdigheter
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Teknologier och verktyg jag arbetar med
          </p>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Tekniska Färdigheter
              </h3>
              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2"
                      style={{
                        animationDelay: `${index * 0.2}s`,
                        animation: 'slide-in-from-left 0.8s ease-out forwards'
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Tools & Technologies */}
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Verktyg & Teknologier
              </h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, index) => (
                  <Badge 
                    key={tool} 
                    variant="secondary" 
                    className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      animation: 'slide-in-from-bottom 0.6s ease-out forwards'
                    }}
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-accent/50 rounded-lg border">
                <h4 className="font-semibold text-foreground mb-3">
                  Specialområden
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Frontend utveckling med React & TypeScript</li>
                  <li>• Responsiv design & mobil-först approach</li>
                  <li>• REST API & GraphQL integration</li>
                  <li>• Performance optimering</li>
                  <li>• UI/UX implementering</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;