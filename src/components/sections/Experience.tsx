import { GraduationCap, Briefcase } from "lucide-react";

const Experience = () => {
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
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Experience & <span className="gradient-text">Education</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } gap-8 animate-fade-in-up`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="p-6 rounded-lg bg-card border border-border card-hover">
                      <div className="flex items-center gap-2 mb-2 justify-start md:justify-end">
                        {item.type === "education" ? (
                          <GraduationCap className="w-5 h-5 text-primary" />
                        ) : (
                          <Briefcase className="w-5 h-5 text-secondary" />
                        )}
                        <span className="text-sm font-semibold text-primary">{item.year}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                      <h4 className="text-muted-foreground font-medium mb-2">{item.organization}</h4>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 z-10"></div>

                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
