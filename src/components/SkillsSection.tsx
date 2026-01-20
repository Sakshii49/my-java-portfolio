const skills = {
  java: {
    title: "Java Ecosystem",
    color: "java",
    items: ["Java 17+", "Spring Boot", "Spring Cloud", "Hibernate/JPA", "Maven/Gradle", "JUnit/Mockito"],
  },
  cloud: {
    title: "Cloud Fundamentals",
    color: "cloud",
    items: ["Cloud Architecture", "Microservices", "Docker", "Kubernetes", "CI/CD Pipelines", "Infrastructure as Code"],
  },
  aws: {
    title: "AWS Services",
    color: "aws",
    items: ["EC2 / ECS / EKS", "Lambda", "RDS / DynamoDB", "S3 / CloudFront", "API Gateway", "CloudWatch"],
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
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: `hsl(var(--${category.color}))` }}
                />
                <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-2 bg-muted rounded-lg text-sm font-mono text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  >
                    {skill}
                  </span>
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
