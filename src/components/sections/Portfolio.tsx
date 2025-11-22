import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const projects = [
    {
      title: "Gym Platform",
      description: "Full-stack e-commerce solution with payment integration",
      image: "/assets/project-1.jpg",
      tags: ["React", "Node.js", "MongoDB"],
      githubLink: "https://github.com/yourusername/gym-platform",
      deployed: "https://best-fitness-website.vercel.app/"
    },
    {
      title: "Movie Site",
      description: "Analytics dashboard for social media management",
      image: "/assets/project-2.jpg",
      tags: ["Next.js", "TypeScript", "Tailwind"],
      githubLink: "https://github.com/yourusername/movie-site",
      deployed: "https://best-movie-website.netlify.app/"
    },
    {
      title: "E-Commerce Platform",
      description: "Collaborative project management tool",
      image: "/assets/project-3.jpg",
      tags: ["Vue", "Flask", "MySQL"],
      githubLink: "https://github.com/yourusername/ecommerce-platform",
      deployed: "https://best-ecommerce-website.vercel.app/"
    },
    {
      title: "Education Website",
      description: "WebSocket-based messaging platform",
      image: "/assets/project-4.jpg",
      tags: ["React", "Go", "WebSocket"],
      githubLink: "https://github.com/yourusername/education-website",
      deployed: "https://educationallandingpage.netlify.app/"
    },
    {
      title: "Mortgage Calculator",
      description: "Content management system for portfolios",
      image: "/assets/project-5.jpg",
      tags: ["Next.js", "GraphQL", "Prisma"],
      githubLink: "https://github.com/yourusername/mortgage-calculator",
      deployed: "https://best-mortage-calculator.netlify.app/"
    },
    {
      title: "Gemini Integrated App",
      description: "Real-time weather data visualization",
      image: "/assets/gemini-new (1).png",
      tags: ["React", "API Integration", "Charts"],
      githubLink: "https://github.com/yourusername/gemini-app",
      deployed: "https://gemini-integration2.vercel.app/"
    },
    {
      title: "Hospital Management Website",
      description: "Real-time hospital management system",
      image: "/assets/woldia-hospital-home1 (1).png",
      tags: ["React", "API Integration", "Charts"],
      githubLink: "https://github.com/yourusername/hospital-management",
      deployed: "https://hospital-management-client-nu.vercel.app/"
    },
    {
      title: "Business Tracker Web App",
      description: "Real-time project tracking web app",
      image: "/assets/bussiness-traker.png",
      tags: ["React", "API Integration", "Charts"],
      githubLink: "https://github.com/yourusername/business-tracker",
      deployed: "https://bussiness-tracker.vercel.app/"
    },
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="gradient-text">Portfolio</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Here are some of my recent projects showcasing my skills in full-stack development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group rounded-lg overflow-hidden bg-card border border-border card-hover animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center gap-4 pb-6">
                    {project.deployed && (
                      <a href={project.deployed} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" variant="secondary" className="gap-2">
                          <ExternalLink className="w-4 h-4" />
                          View
                        </Button>
                      </a>
                    )}
                    {project.githubLink && (
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" variant="secondary" className="gap-2">
                          <Github className="w-4 h-4" />
                          Code
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
