import { motion } from "framer-motion";
import {
  SiReact, SiHtml5, SiCss, SiNextdotjs, SiJavascript, SiNodedotjs,
  SiMysql, SiGo, SiTailwindcss, SiGraphql, SiVuedotjs, SiFlask,
  SiMongodb, SiPython, SiGithub, SiOpenjdk, SiCplusplus,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "React",      icon: SiReact,       color: "#61DAFB" },
    { name: "HTML",       icon: SiHtml5,       color: "#E34F26" },
    { name: "CSS",        icon: SiCss,         color: "#1572B6" },
    { name: "Next.js",    icon: SiNextdotjs,   color: "#A1A1AA" },
    { name: "JavaScript", icon: SiJavascript,  color: "#F7DF1E" },
    { name: "Node.js",    icon: SiNodedotjs,   color: "#339933" },
    { name: "MySQL",      icon: SiMysql,       color: "#4479A1" },
    { name: "Go",         icon: SiGo,          color: "#00ADD8" },
    { name: "Tailwind",   icon: SiTailwindcss, color: "#06B6D4" },
    { name: "GraphQL",    icon: SiGraphql,     color: "#E10098" },
    { name: "Vue",        icon: SiVuedotjs,    color: "#4FC08D" },
    { name: "Flask",      icon: SiFlask,       color: "#A1A1AA" },
    { name: "MongoDB",    icon: SiMongodb,     color: "#47A248" },
    { name: "Python",     icon: SiPython,      color: "#3776AB" },
    { name: "GitHub",     icon: SiGithub,      color: "#A1A1AA" },
    { name: "Java",       icon: SiOpenjdk,     color: "#ED8B00" },
    { name: "C++",        icon: SiCplusplus,   color: "#00599C" },
  ];

  const itemVariants = {
    hidden:  { y: -40, opacity: 0 },
    visible: { y: 0,   opacity: 1, transition: { type: "spring", stiffness: 260, damping: 14 } },
  };

  return (
    <section id="skills" className="py-20 bg-background">
      <style>{`
        .skills-section-wrap {
          display: block !important;
          width: 100% !important;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          box-sizing: border-box;
        }
        .skills-grid {
          display: grid !important;
          grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
          gap: 0.5rem;
          width: 100%;
        }
        .skills-grid-item {
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
          justify-content: center;
          gap: 0.35rem;
          padding: 0.75rem 0.25rem;
          cursor: default;
          min-width: 0;
        }
        .skills-grid-item svg {
          width: 1.75rem !important;
          height: 1.75rem !important;
          flex-shrink: 0;
        }
        .skills-grid-item span {
          font-weight: 600;
          font-size: 0.625rem;
          line-height: 1.2;
          text-align: center;
          word-break: break-word;
          width: 100%;
        }
        @media (min-width: 640px) {
          .skills-grid {
            grid-template-columns: repeat(5, minmax(0, 1fr)) !important;
            gap: 0.75rem;
          }
        }
        @media (min-width: 900px) {
          .skills-grid {
            grid-template-columns: repeat(6, minmax(0, 1fr)) !important;
            gap: 1.5rem;
          }
          .skills-grid-item { padding: 1rem 0.5rem; }
          .skills-grid-item svg { width: 2.5rem !important; height: 2.5rem !important; }
          .skills-grid-item span { font-size: 0.875rem; }
        }
      `}</style>

      <div className="skills-section-wrap">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="skills-grid">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                className="skills-grid-item"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 14,
                  delay: (index % 4) * 0.08,
                }}
                whileHover={{ y: -4 }}
              >
                <Icon style={{ color: skill.color }} />
                <span>{skill.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
