import { User, MapPin, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion"; // 1. Import motion

const About = () => {
  const personalInfo = [
    { icon: User, label: "Full Name", value: "Natnael Messay" },
    { icon: MapPin, label: "Address", value: "Addis Ababa, Ethiopia" },
    { icon: Phone, label: "Phone", value: "+251991998852" },
    { icon: Mail, label: "Email", value: "natnaelmessay70@mail.com" },
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }, // Staggers the children animations
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section id="about" className="py-20 bg-muted/30 overflow-hidden">
      <div className="container-1200 mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Section Heading Animation */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Left Column: Personal Info Cards */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold mb-6">Personal Info</h3>
              <div className="grid gap-4">
                {personalInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div 
                      key={index} 
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }} // Subtle hover effect
                      className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border card-hover"
                    >
                      <Icon className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <div className="text-sm text-muted-foreground">{item.label}</div>
                        <div className="font-medium">{item.value}</div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Right Column: Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold mb-6">What I Do</h3>
           <p className="text-muted-foreground leading-relaxed">
           I enjoy creating modern web applications and intelligent software systems that solve real-world problems. My experience includes frontend development, backend APIs, database design, and cloud deployment.
            </p>

            <p className="text-muted-foreground leading-relaxed">
           Through professional projects and 200+ solved algorithmic challenges, I have developed strong analytical and problem-solving abilities. I focus on building reliable, scalable, and user-centered solutions.
            </p>
              
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="font-medium">Available for Freelance</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;