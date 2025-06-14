import { motion } from 'framer-motion';
import { ExternalLink, Github, Smartphone, Globe, Database } from 'lucide-react';
import Main from '../assets/main.jpg';
import Party from '../assets/party.png';
import Book from '../assets/book.png';

const Projects = () => {
  const projects = [
    {
      title: 'Conference Mangement System',
      description: 'Web-based conference management system built with HTML, CSS, JavaScript, and PHP to streamline conference planning. It helps organizers manage participant registrations, session schedules, and more, ensuring a smooth experience for both participants and admins.',
      image: Main,
      tech: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
      github: 'https://github.com/Mihiran1/Conference-Mangement-System.git',
      live: 'https://demo.example.com',
      category: 'Web ',
      icon: Database
    },
    {
      title: 'Party Items Web Application',
      description: 'This is a modern, responsive web application for browsing and purchasing party items, built using React and Tailwind CSS. The application provides a clean UI and smooth user experience for customers looking to shop for party decorations, supplies, and accessories.',
      image: Party,
      tech: ['React', 'Tailwind CSS',],
      github: 'https://github.com',
      live: 'https://demo.example.com',
      category: 'Web',
      icon: Smartphone
    },
    {
      title: 'Book Selling System',
      description: 'A responsive web application built using React.js and Tailwind CSS for selling books online. The system includes features like book listing, search and filter options, and a modern UI for a smooth user experience. Designed to be fast, clean, and mobile-friendly.',
      image: Book,
      tech: ['React', 'Tailwind CSS'],
      github: 'https://github.com',
      live: 'https://demo.example.com',
      category: 'Web App',
      icon: Globe
    },
   
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Featured Projects
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work, demonstrating expertise across different technologies and domains
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-700 rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-36 sm:h-40 md:h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                  <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full">
                    <project.icon className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-5 lg:p-6">
                <div className="flex items-start justify-between mb-2 sm:mb-3">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 dark:text-white leading-tight flex-1 mr-2">
                    {project.title}
                  </h3>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full whitespace-nowrap">
                    {project.category}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col xs:flex-row xs:space-x-4 space-y-2 xs:space-y-0">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center xs:justify-start text-xs sm:text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-blue-600 flex-shrink-0" />
                    <span className="truncate">Code - View on Github</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-8 sm:mt-10 lg:mt-12"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-blue-800 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
          >
            <Github className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;