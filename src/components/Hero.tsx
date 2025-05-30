
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 via-blue-900/20 to-orange-900/20">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 pt-20">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-orange-500 to-blue-600 bg-clip-text text-transparent leading-tight">
          Technology Consulting
          <span className="block">Excellence</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Empowering businesses through innovative technology solutions, strategic guidance, and digital transformation expertise.
        </p>
        
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          We partner with organizations to navigate complex technology challenges, optimize operations, and accelerate growth through cutting-edge solutions tailored to your unique needs.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={scrollToServices}
            className="bg-gradient-to-r from-blue-500 to-orange-600 hover:from-blue-600 hover:to-orange-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Explore Our Services
          </button>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="border border-gray-600 hover:border-blue-400 text-gray-300 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:bg-gray-800"
          >
            Get In Touch
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown 
          size={32} 
          className="text-gray-400 cursor-pointer hover:text-blue-400 transition-colors duration-200"
          onClick={scrollToServices}
        />
      </div>
    </section>
  );
};

export default Hero;
