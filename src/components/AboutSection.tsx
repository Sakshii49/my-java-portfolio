import { Code2, Cloud, Server, Zap } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code following SOLID principles",
  },
  {
    icon: Cloud,
    title: "Cloud Native",
    description: "Building applications designed for the cloud from day one",
  },
  {
    icon: Server,
    title: "Backend Expert",
    description: "Specializing in high-performance distributed systems",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing applications for speed and efficiency",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono mb-2">// About Me</p>
          <h2 className="section-heading">
            Crafting Digital <span className="gradient-text">Solutions</span>
          </h2>
          <p className="section-subheading mx-auto">
            A passionate developer dedicated to building exceptional software
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Story */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
               I specialize in building robust backend systems using Java and Spring Boot ecosystem. 
              My journey started with a fascination for how complex systems work together.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I've worked with startups and enterprise companies, helping them scale their 
              applications and migrate to cloud-native architectures. I'm particularly 
              passionate about microservices, distributed systems, and DevOps practices.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing 
              to open-source projects, or sharing knowledge through technical blog posts.
            </p>

            
          
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="glass-card p-6 hover:border-primary/50 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
