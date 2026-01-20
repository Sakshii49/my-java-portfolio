import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import profilePicture from "@/assets/profile-picture.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cloud/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <div className="relative animate-fade-in">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 glow-effect animate-float">
              <img
                src={profilePicture}
                alt="Developer Profile"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Ring */}
            <div className="absolute inset-0 rounded-full border-2 border-primary/20 scale-110 animate-pulse-glow" />
          </div>

          {/* Content */}
          <div className="text-center lg:text-left max-w-2xl animate-slide-up">
            <p className="text-primary font-mono text-lg mb-4">Hello, I'm</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
              <span className="gradient-text">John Doe</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">
              Senior Java Developer & Cloud Engineer
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Passionate about building scalable backend systems and cloud-native applications.
              5+ years of experience crafting robust solutions with Java, Spring Boot, and AWS.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a
                href="#projects"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-all glow-effect"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all"
              >
                Get In Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="#"
                className="p-3 glass-card hover:border-primary/50 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
              <a
                href="#"
                className="p-3 glass-card hover:border-primary/50 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
              <a
                href="mailto:john@example.com"
                className="p-3 glass-card hover:border-primary/50 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
