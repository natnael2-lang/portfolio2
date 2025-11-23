import { User, MapPin, Mail, Phone, Globe, Calendar } from "lucide-react";

const About = () => {
  const personalInfo = [
    { icon: User, label: "Full Name", value: "Natnael Messay" },
    { icon: MapPin, label: "Address", value: "Addis Ababa,Ethiopia" },
    { icon: Phone, label: "Phone", value: "+251991998852" },
    { icon: Mail, label: "Email", value: "natnaelmessay70@mail.com" },
    { icon: Globe, label: "Languages", value: "Amharic, English" },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Personal Info</h3>
              <div className="grid gap-4">
                {personalInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border card-hover">
                      <Icon className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <div className="text-sm text-muted-foreground">{item.label}</div>
                        <div className="font-medium">{item.value}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">What I Do</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm a passionate Full Stack Developer specializing in building exceptional digital experiences. 
                With expertise in both frontend and backend technologies, I create scalable applications that 
                combine beautiful design with robust functionality.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Currently available for freelance opportunities, I'm always excited to work on challenging 
                projects that push the boundaries of web development.
              </p>
              
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="font-medium">Available for Freelance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
