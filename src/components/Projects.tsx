import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "En fullstack e-commerce lösning byggd med React, Node.js och PostgreSQL. Inkluderar användarautentisering, produkthantering och säker betalning.",
      image: "/ecommerce.jpg",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Projekthanterings App End-to-End",
      description: "En kollaborativ projekthanteringsapp med realtidsuppdateringar, kanban-board och teammedlemsinbjudningar.",
      image: "/project.jpg", 
      technologies: ["Next.js", "TypeScript", "Prisma", "WebSocket", "Supabase", "Docker"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Dogcare checkin App",
      description: "Smart incheckningssystem gör avlämning och upphämtning smidig, för både personal och husdjursägare.",
      image: "/dogcare1.jpg", 
      technologies: ["React", "TypeScript", "MongoDB, Express, React, Node.js", "CSS3"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "AI Chat Bot",
      description: "En intelligent chatbot med naturlig språkförståelse, byggd med modern AI-teknik och elegant användargränssnitt.",
      image: "/ai.jpg", 
      technologies: ["React", "OpenAI API", "FastAPI"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section className="py-20 bg-section-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
            Mina Projekt
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Ett urval av projekt jag har arbetat med
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const fromLeft = index % 2 === 0; 
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, x: fromLeft ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <Card className="group overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 rounded-none">
                    <div className="relative overflow-hidden rounded-none">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110 rounded-none"
                      />
                      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4 rounded-none">
                        <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white rounded-none">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </Button>
                        <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white rounded-none">
                          <Github className="h-4 w-4 mr-2" />
                          Kod
                        </Button>
                      </div>
                    </div>
                    
                    <CardHeader className="rounded-none">
                      <CardTitle className="text-foreground">{project.title}</CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="rounded-none">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs rounded-none">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="hover:bg-foreground hover:text-background rounded-none">
              <Github className="mr-2 h-4 w-4" />
              Se fler projekt på GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;