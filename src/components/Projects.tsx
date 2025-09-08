import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "En fullstack e-commerce lösning byggd med React, Node.js och PostgreSQL. Inkluderar användarautentisering, produkthantering och säker betalning.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Projekthantering App",
      description: "En kollaborativ projekthanteringsapp med realtidsuppdateringar, kanban-board och teammedlemsinbjudningar.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: ["Next.js", "TypeScript", "Prisma", "WebSocket", "Supabase"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Weather Dashboard",
      description: "En responsiv väderapp som visar aktuellt väder och prognoser med vackra animationer och interaktiva kartor.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      technologies: ["React", "TypeScript", "OpenWeather API", "Chart.js", "CSS3"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "AI Chat Bot",
      description: "En intelligent chatbot med naturlig språkförståelse, byggd med modern AI-teknik och elegant användargränssnitt.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      technologies: ["React", "Python", "OpenAI API", "FastAPI", "Docker"],
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
            {projects.map((project, index) => (
              <Card 
                key={project.title} 
                className="group overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500"
                style={{
                  animationDelay: `${index * 0.2}s`,
                  animation: 'slide-in-from-bottom 0.8s ease-out forwards'
                }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                    <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                      <Github className="h-4 w-4 mr-2" />
                      Kod
                    </Button>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-foreground">{project.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="hover:bg-primary hover:text-primary-foreground">
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