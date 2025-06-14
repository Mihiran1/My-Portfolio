import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";
import { Link } from 'react-scroll';


  const navItems = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' }
  ];

export default function ModernFooter() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Left Column - Personal Info */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-purple-400 mb-2">Mihiran samarasinghe</h2>
            <p className="text-gray-400 leading-relaxed">
              Software Developer, UI/UX Designer, and DevOps Engineer 
              passionate about creating innovative digital solutions that 
              make a difference.
            </p>
            
            {/* Social Icons */}
            <div className="flex space-x-4 pt-4">
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-colors duration-200"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Middle Column - Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="block  text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Column - Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <p className="text-gray-400">Colombo, Sri Lanka </p>
              <a 
                href="mailto:alex.johnson@example.com"
                className="block text-gray-400 hover:text-purple-400 transition-colors duration-200"
              >
                mihiransamarasinghe5@gmail.com
              </a>
              <a 
                href="tel:+15551234567"
                className="block text-gray-400 hover:text-purple-400 transition-colors duration-200"
              >
               076 4377039
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-gray-400">
            <span>© 2025 MyPortfolio. All rights reserved.</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
           
          </div>
          <div className="text-gray-500 text-sm">
            Built with React & Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
}