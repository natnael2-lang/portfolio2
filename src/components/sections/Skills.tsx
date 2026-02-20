import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    { name: "React", level: 99 },
    { name: "HTML", level: 98 },
    { name: "CSS", level: 97 },
    { name: "Next.js", level: 95 },
    { name: "JavaScript", level: 95 },
    { name: "Node.js", level: 90 },
    { name: "MySQL", level: 85 },
    { name: "Go", level: 85 },
    { name: "Tailwind CSS", level: 80 },
    { name: "GraphQL", level: 75 },
    { name: "Vue", level: 75 },
    { name: "Flask", level: 70 },
  ];

  // Container variant to stagger children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="gradient-text">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          >
            {skills.map((skill, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="flex flex-col items-center p-6 rounded-2xl bg-card border border-border card-hover shadow-sm"
              >
                <div className="relative flex items-center justify-center mb-4">
                  {/* SVG for Circular Progress */}
                  <svg className="w-24 h-24 transform -rotate-90">
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="transparent"
                      className="text-muted/20"
                    />
                    <motion.circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="transparent"
                      strokeDasharray="251.2" // 2 * PI * r
                      initial={{ strokeDashoffset: 251.2 }}
                      whileInView={{ 
                        strokeDashoffset: 251.2 - (251.2 * skill.level) / 100 
                      }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                      className="text-primary"
                    />
                  </svg>
                  <span className="absolute text-lg font-bold">
                    {skill.level}%
                  </span>
                </div>
                <span className="font-semibold text-center">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;