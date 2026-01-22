import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "Hospital Management System",
    description:
      "A hospital management system that streamlines patient care, appointment scheduling, and inventory management.",
    tags: ["Java", "Spring Boot", "Microservices", "Spring JPA", "PostgreSQL"],
  
    featured: true,
  },
  {
    title: "Live Corporate Website",
    description:
      "A live corporate website that showcases the company's products, services.",
    tags: ["Javascript", "CSS3", "HTML5", "React"],
    
    featured: true,
  },
  {
    title: "Advertisement maker using AI-ML",
    description:
      "An AI-ML based advertisement maker that generates personalized ads based on user behavior and preferences.",
    tags: ["Python", "Flask", "numpy,Pandas", "ML models"],
    github: "#",
    
    featured: true,
  },
 

];

const ProjectsSection = () => {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono mb-2">// Portfolio</p>
          <h2 className="section-heading">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subheading mx-auto">
            Some of the projects I've worked on that showcase my skills
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card p-6 group hover:border-primary/50 transition-all duration-300 flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <Folder className="w-10 h-10 text-primary" />
                <div className="flex gap-3">
                  <a href={project.github} className="text-muted-foreground hover:text-primary transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  
                
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs font-mono text-primary/80 bg-primary/10 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-foreground mb-6">Other Noteworthy Projects</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {otherProjects.map((project) => (
              <div
                key={project.title}
                className="glass-card p-4 hover:border-primary/50 transition-all duration-300 text-left"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-foreground">{project.title}</h4>
                  <a href={project.github} className="text-muted-foreground hover:text-primary">
                    <Github className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-1">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-xs font-mono text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
