import { CircularProgress } from "@/components/ui/circular-progress";

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

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="gradient-text">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center space-y-4 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CircularProgress value={skill.level} size={120} strokeWidth={8} />
                <span className="font-medium text-lg text-center">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
