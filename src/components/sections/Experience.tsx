import { GraduationCap, Briefcase } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const Experience = () => {
  const containerRef = useRef(null);
  
  // Create a scroll-linked animation for the vertical line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const timeline = [
    {
      type: "education",
      year: "2021 - 2025",
      title: "Computer Engineer",
      organization: "Addis Ababa University",
      description: "Pursuing Computer Engineering degree with focus on software development and system design.",
    },
    {
      type: "education",
      year: "2020 - 2022",
      title: "Frontend Development",
      organization: "W3 School",
      description: "Comprehensive frontend development training covering HTML, CSS, JavaScript, and modern frameworks.",
    },
    {
      type: "work",
      year: "2020 - Current",
      title: "Backend Developer",
      organization: "codedamnworks",
      description: "Developing scalable backend solutions and APIs for various client projects.",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30 overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Experience & <span className="gradient-text">Education</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </motion.div>

          <div className="relative">
            {/* Animated Timeline line */}
            <motion.div 
              style={{ scaleY }}
              className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary origin-top hidden md:block"
            />
            {/* Static line for mobile */}
            <div className="absolute left-8 md:hidden top-0 bottom-0 w-0.5 bg-border" />

            <div className="space-y-12">
              {timeline.map((item, index) => {
                const isEven = index % 2 === 0;
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`relative flex items-center ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    } gap-8`}
                  >
                    {/* Content Card */}
                    <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'} ml-16 md:ml-0`}>
                      <motion.div 
                        whileHover={{ y: -5 }}
                        className="p-6 rounded-lg bg-card border border-border shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className={`flex items-center gap-2 mb-2 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                          {item.type === "education" ? (
                            <GraduationCap className="w-5 h-5 text-primary" />
                          ) : (
                            <Briefcase className="w-5 h-5 text-secondary" />
                          )}
                          <span className="text-sm font-semibold text-primary">{item.year}</span>
                        </div>
                        <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                        <h4 className="text-muted-foreground font-medium mb-2">{item.organization}</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                      </motion.div>
                    </div>

                    {/* Center dot with pulse effect */}
                    <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-background border-4 border-primary -translate-x-1/2 z-10">
                      <motion.div 
                        initial={{ scale: 1 }}
                        whileInView={{ scale: [1, 1.5, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="absolute inset-0 rounded-full bg-primary/30 -z-10"
                      />
                    </div>

                    <div className="flex-1 hidden md:block"></div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;