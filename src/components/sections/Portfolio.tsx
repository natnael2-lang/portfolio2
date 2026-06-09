import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const projects = [
    {
      title: "Gym Platform",
      category: "Full Stack",
      description: "A web platform to manage gym memberships, track workouts, and schedule classes efficiently.",
      image: "/assets/project-1.jpg",
      tags: ["React", "Node.js", "MongoDB"],
      githubLink: "https://github.com/yourusername/gym-platform",
      deployed: "https://best-fitness-website.vercel.app/"
    },
    {
      title: "Movie Site",
      category: "Frontend",
      description: "A web platform to browse, search, and stream information about movies, including ratings and reviews.",
      image: "/assets/project-2.jpg",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      githubLink: "https://github.com/yourusername/movie-site",
      deployed: "https://best-movie-website.netlify.app/"
    },
    {
      title: "Hospital Management",
      category: "Full Stack",
      description: "A web platform that automates hospital operations, from patient registration to medical records.",
      image: "/assets/woldia-hospital-home1 (1).png",
      tags: ["React", "Tailwind", "Express", "MongoDB"],
      githubLink: "https://github.com/natnael2-lang/hospitalManagementClient",
      deployed: "https://hospital-management-client-nu.vercel.app/"
    },
    {
      title: "Code Editor",
      category: "Tools",
      description: "A focused code editor where takers can write, test, and submit code directly in a controlled environment.",
      image: "/assets/codeEditor.png",
      tags: ["React", "Tailwind", "MongoDB", "codeMirror"],
      githubLink: "https://github.com/natnael2-lang/code-editor-front",
      deployed: "https://code-editor-front.vercel.app/"
    },
    {
      title: "Alle School of Arts",
      category: "Frontend",
      description: "Showcases the school’s history, programs, and achievements in Ethiopian design education.",
      image: "/assets/alle2.png",
      tags: ["React", "Tailwind CSS"],
      githubLink: "https://github.com/natnael2-lang/alle-school-of-fine-arts",
      deployed: "https://alle-school-of-fine-arts.vercel.app/"
    },
    {
      title: "Gemini Integrated App",
      category: "Tools",
      description: "AI-powered application for real-time data visualization and intelligent responses.",
      image: "/assets/gemini-new (1).png",
      tags: ["React", "Tailwind CSS", "API Integration"],
      githubLink: "https://github.com/yourusername/gemini-app",
      deployed: "https://gemini-integration2.vercel.app/"
    },
    {
        title: "Business Tracker",
        category: "Full Stack",
        description: "Records daily expenses and provides daily, monthly, and yearly profits using charts.",
        image: "/assets/bussiness-traker.png",
        tags: ["React", "CSS", "Recharts"],
        githubLink: "https://github.com/yourusername/business-tracker",
        deployed: "https://bussiness-tracker.vercel.app/"
      },
      {
        title: "Attendance Web App",
        category: "Full Stack",
        description: "Record the attendance of registered users and enable CRUD operations on recorded data.",
        image: "/assets/attendance-register (1).png",
        tags: ["React", "CSS", "Recharts"],
        githubLink: "https://github.com/natnael2-lang/attendance-frontEnd",
        deployed: "https://attendo-face-reg.vercel.app/"
      },
      {
        title: "Guess Game",
        category: "Tools",
        description: "A fun interactive guessing game where users guess numbers within limited attempts.",
        image: "/assets/guess.png",
        tags: ["React", "Tailwind CSS", "MongoDB"],
        githubLink: "https://github.com/natnael2-lang/guess_game",
        deployed: "https://guess-game-kappa-plum.vercel.app/"
      }
  ];

  const categories = ["All", "Full Stack", "Frontend", "Tools"];

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-muted/20">
      <div className="container-1200 mx-auto">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="gradient-text">Portfolio</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              {categories.map((cat) => (
                <Button
                  key={cat}
                  variant={activeCategory === cat ? "default" : "outline"}
                  onClick={() => setActiveCategory(cat)}
                  className="rounded-full px-6 transition-all duration-300"
                >
                  {cat}
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode='popLayout'>
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative rounded-xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-xl transition-all flex flex-col h-full"
                >
                  {/* Image & Overlay */}
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      {project.deployed && (
                        <Button size="sm" variant="secondary" asChild className="rounded-full">
                          <a href={project.deployed} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" /> View
                          </a>
                        </Button>
                      )}
                      {project.githubLink && (
                        <Button size="sm" variant="outline" asChild className="rounded-full bg-white/10 text-white hover:bg-white/20 border-white/20">
                          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" /> Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                            {project.title}
                        </h3>
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-secondary text-secondary-foreground">
                            {project.category}
                        </span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="mt-auto flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-xs font-medium rounded bg-primary/10 text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;