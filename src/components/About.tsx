import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
            Om Mig
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            en passionerad utvecklare som älskar att bygga digitala upplevelser
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
              Jag började med programmering år 2020 med att göra egna projekt som sedan resulterade till en universitetsexamen som App och webb utvecklare. 
              Med över 5 års erfarenhet inom webb och native mobilutveckling har jag arbetat med moderna 
                teknologier som React, TypeScript och Node.js. Jag brinner för att skapa 
                användarvänliga applikationer som löser verkliga problem.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                När jag inte kodar spenderar jag tid med att lära mig nya teknologier, 
                bidra till open source-projekt och utforska kreativa lösningar på komplexa problem.
              </p>
            </div>
            
            <div className="space-y-4">
              <Card className="shadow-card hover:shadow-card-hover transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-foreground/10 rounded-lg">
                      <Code className="h-6 w-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Clean Code</h3>
                      <p className="text-muted-foreground">Skriver ren, underhållbar kod</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-card hover:shadow-card-hover transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-foreground/10 rounded-lg">
                      <Palette className="h-6 w-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Design Thinking</h3>
                      <p className="text-muted-foreground">Fokuserar på användarupplevelse</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-card hover:shadow-card-hover transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-foreground/10 rounded-lg">
                      <Lightbulb className="h-6 w-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Code meet solution</h3>
                      <p className="text-muted-foreground">Skapar nytt, optimerar, omformar, addera funktioner i befintlig kod</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;