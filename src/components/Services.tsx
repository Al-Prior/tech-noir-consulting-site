
import { Code, Shield, Cloud, Cpu, Database, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Software Development",
      description: "Custom application development, system integration, and modernization of legacy systems to drive operational efficiency."
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Cloud migration strategies, infrastructure optimization, and scalable platform implementations for enhanced performance."
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security assessments, risk management, and implementation of robust protection frameworks."
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Advanced data processing, business intelligence solutions, and insights-driven decision support systems."
    },
    {
      icon: Cpu,
      title: "Infrastructure",
      description: "Technology architecture design, performance optimization, and scalable infrastructure solutions."
    },
    {
      icon: Zap,
      title: "Digital Transformation",
      description: "Strategic technology roadmaps, process automation, and organizational change management for digital excellence."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-orange-500 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology consulting services designed to transform your business and accelerate growth through innovative solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-900/80 border border-gray-700 p-8 rounded-xl hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-orange-600 rounded-lg mb-6 group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                <service.icon size={32} className="text-white" />
              </div>
              
              <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-blue-400 transition-colors duration-200">
                {service.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
