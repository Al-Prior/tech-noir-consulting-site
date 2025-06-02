
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-orange-500 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your business with cutting-edge technology solutions? Let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="flex justify-center">
          {/* Contact Information - Centered */}
          <div className="w-full max-w-md">
            <div className="bg-gray-800/50 border border-gray-700 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-6 text-white text-center">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-orange-600 rounded-lg">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400">Email</p>
                    <p className="text-white font-medium">alastair@halconsulting.com.au</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-orange-600 rounded-lg">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400">Phone</p>
                    <p className="text-white font-medium">+61 414 350 035</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
