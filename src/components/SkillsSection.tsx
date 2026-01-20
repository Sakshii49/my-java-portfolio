const skills = {
  java: {
    title: "Java Ecosystem",
    color: "java",
    items: [
      { name: "Java 17+", level: 95 },
      { name: "Spring Boot", level: 90 },
      { name: "Spring Cloud", level: 85 },
      { name: "Hibernate/JPA", level: 88 },
      { name: "Maven/Gradle", level: 85 },
      { name: "JUnit/Mockito", level: 90 },
    ],
  },
  cloud: {
    title: "Cloud Fundamentals",
    color: "cloud",
    items: [
      { name: "Cloud Architecture", level: 85 },
      { name: "Microservices", level: 90 },
      { name: "Docker", level: 88 },
      { name: "Kubernetes", level: 80 },
      { name: "CI/CD Pipelines", level: 85 },
      { name: "Infrastructure as Code", level: 75 },
    ],
  },
  aws: {
    title: "AWS Services",
    color: "aws",
    items: [
      { name: "EC2 / ECS / EKS", level: 88 },
      { name: "Lambda", level: 85 },
      { name: "RDS / DynamoDB", level: 82 },
      { name: "S3 / CloudFront", level: 90 },
      { name: "API Gateway", level: 85 },
      { name: "CloudWatch", level: 80 },
    ],
  },
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono mb-2">// Technical Skills</p>
          <h2 className="section-heading">
            My <span className="gradient-text">Expertise</span>
          </h2>
          <p className="section-subheading mx-auto">
            Proficient in modern Java development and cloud technologies
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([key, category]) => (
            <div key={key} className="glass-card p-6 hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-3 h-3 rounded-full`}
                  style={{ backgroundColor: `hsl(var(--${category.color}))` }}
                />
                <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-muted-foreground font-mono">{skill.name}</span>
                      <span className="text-sm text-primary font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          background: `linear-gradient(90deg, hsl(var(--${category.color})), hsl(var(--primary)))`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-6">Also familiar with:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["PostgreSQL", "MongoDB", "Redis", "Kafka", "RabbitMQ", "Git", "Linux", "REST APIs", "GraphQL", "Terraform"].map(
              (skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 glass-card text-sm font-mono text-muted-foreground hover:text-primary hover:border-primary/50 transition-all cursor-default"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
