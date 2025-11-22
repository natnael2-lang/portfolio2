import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden py-16">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-background z-0" />
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm <span className="gradient-text">Natnael Messay</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Mid-Senior Full Stack Developer
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              With 2+ years of experience building scalable, user-friendly, high performance web applications. 
              Skilled in modern JavaScript, backend technologies, and cloud platforms to deliver reliable, future-ready solutions.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" className="gap-2" onClick={scrollToContact}>
                <Mail className="w-5 h-5" />
                Contact Me
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
              
              
              <Download className="w-5 h-5" />
              Download CV
              <a href="/cv6.pdf" download>
  </a>
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="p-6 rounded-lg bg-card border border-border card-hover">
                <div className="text-4xl font-bold gradient-text mb-2">2+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="p-6 rounded-lg bg-card border border-border card-hover">
                <div className="text-4xl font-bold gradient-text mb-2">15</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="p-6 rounded-lg bg-card border border-border card-hover">
                <div className="text-4xl font-bold gradient-text mb-2">3</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="p-6 rounded-lg bg-card border border-border card-hover">
                <div className="text-4xl font-bold gradient-text mb-2">2</div>
                <div className="text-sm text-muted-foreground">Awards Won</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button 
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </button>
    </section>
  );
};

export default Hero;
