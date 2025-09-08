import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Meddelande skickat!",
      description: "Tack för ditt meddelande. Jag återkommer så snart som möjligt.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
            Kontakta Mig
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Låt oss diskutera ditt nästa projekt tillsammans
          </p>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-foreground">Skicka ett meddelande</CardTitle>
                <CardDescription>
                  Fyll i formuläret så återkommer jag inom 24 timmar
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Ditt namn"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Din e-post"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Ditt meddelande"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full resize-none"
                    />
                  </div>
                  <Button type="submit" className="w-full hover:bg-foreground hover:text-background">
                    <Send className="mr-2 h-4 w-4" />
                    Skicka Meddelande
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="shadow-card hover:shadow-card-hover transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">E-post</h3>
                      <p className="text-muted-foreground">ditt.namn@email.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-card hover:shadow-card-hover transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Telefon</h3>
                      <p className="text-muted-foreground">+46 70 123 45 67</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-card hover:shadow-card-hover transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Plats</h3>
                      <p className="text-muted-foreground">Stockholm, Sverige</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="p-6 bg-accent/50 rounded-lg">
                <h3 className="font-semibold text-foreground mb-3">
                  Öppen för Möjligheter
                </h3>
                <p className="text-muted-foreground mb-4">
                  Jag är alltid intresserad av spännande projekt och samarbeten. 
                  Hör av dig så diskuterar vi hur vi kan arbeta tillsammans!
                </p>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    Ladda ner CV
                  </Button>
                  <Button variant="outline" size="sm">
                    LinkedIn
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;