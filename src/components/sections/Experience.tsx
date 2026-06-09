import { GraduationCap, Briefcase } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const Experience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end end"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const timeline = [
    {
      type: "education",
      year: "2021 – 2025",
      title: "Computer Engineering",
      organization: "Addis Ababa University",
      description: "Pursuing a Computer Engineering degree with a focus on software development, algorithms, and system design.",
    },
    {
      type: "work",
      year: "2020 – Present",
      title: "Backend Developer",
      organization: "Codedamnworks",
      description: "Designing and building scalable backend APIs and services for client projects across various industries.",
    },
    {
      type: "education",
      year: "2020 – 2022",
      title: "Frontend Development",
      organization: "W3Schools",
      description: "Comprehensive training in HTML, CSS, JavaScript, and modern frontend frameworks.",
    },
  ];

  return (
    <section id="experience" className="py-24 overflow-hidden" ref={containerRef}
      style={{ background: "hsl(var(--background))" }}>
      <div className="container mx-auto px-4 max-w-4xl">

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-[0.2em] uppercase mb-3"
            style={{ color: "hsl(var(--primary))" }}>My Journey</p>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <div className="w-16 h-1 rounded-full mx-auto" style={{ background: "var(--hero-gradient)" }} />
        </motion.div>

        <div className="relative">
          {/* Animated amber timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px hidden md:block"
            style={{ background: "hsl(var(--border))" }} />
          <motion.div
            style={{ scaleY }}
            className="absolute left-1/2 top-0 bottom-0 w-px hidden md:block origin-top"
            style2={{ background: "var(--hero-gradient)" }}
          >
            <div className="w-full h-full" style={{ background: "var(--hero-gradient)" }} />
          </motion.div>
          {/* Mobile line */}
          <div className="absolute left-5 top-0 bottom-0 w-px md:hidden"
            style={{ background: "hsl(var(--border))" }} />

          <div className="space-y-10">
            {timeline.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center gap-8 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Card */}
                  <div className={`flex-1 ml-12 md:ml-0 ${isEven ? "md:text-right" : "md:text-left"}`}>
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="p-6 rounded-2xl card-hover"
                      style={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }}
                    >
                      {/* Type + year */}
                      <div className={`flex items-center gap-2 mb-3 ${isEven ? "md:justify-end" : ""}`}>
                        <div className="w-7 h-7 rounded-lg flex items-center justify-center"
                          style={{ background: "hsl(38 92% 50% / 0.12)" }}>
                          {item.type === "education"
                            ? <GraduationCap className="w-4 h-4" style={{ color: "hsl(var(--primary))" }} />
                            : <Briefcase className="w-4 h-4" style={{ color: "hsl(var(--primary))" }} />
                          }
                        </div>
                        <span className="text-xs font-bold tracking-wider uppercase px-2 py-0.5 rounded-full"
                          style={{
                            background: "hsl(38 92% 50% / 0.1)",
                            color: "hsl(var(--primary))",
                          }}>
                          {item.year}
                        </span>
                      </div>
                      <h3 className="text-lg font-black mb-1" style={{ color: "hsl(var(--foreground))" }}>
                        {item.title}
                      </h3>
                      <h4 className="font-semibold text-sm mb-3" style={{ color: "hsl(var(--primary))" }}>
                        {item.organization}
                      </h4>
                      <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
                        {item.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-5 md:left-1/2 w-4 h-4 rounded-full -translate-x-1/2 z-10 flex items-center justify-center"
                    style={{ background: "var(--hero-gradient)", boxShadow: "0 0 16px hsl(38 92% 50% / 0.5)" }}>
                    <motion.div
                      animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
                      transition={{ repeat: Infinity, duration: 2.5 }}
                      className="absolute w-full h-full rounded-full"
                      style={{ background: "hsl(var(--primary))" }}
                    />
                  </div>

                  <div className="flex-1 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
