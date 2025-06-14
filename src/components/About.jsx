import { motion } from 'framer-motion';
import { Code, Palette, Server, Quote } from 'lucide-react';

const About = () => {
  const interests = [
    { icon: Code, title: 'Web Design', description: 'Writing maintainable and efficient code' },
    { icon: Palette, title: 'UI/UX Design', description: 'Creating beautiful user experiences' },
    { icon: Server, title: 'DevOps', description: 'Automating and optimizing workflows' }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            About Me
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-blue-800 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4 sm:space-y-5 lg:space-y-6 text-gray-600 dark:text-gray-300 text-justify">
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
               I'm a passionate and undergraduate student at the Institute of Technology, University of Moratuwa, currently pursuing my studies in Information technology. With a strong interest in software development, I've focused on becoming a full-stack developer, and I am learning and working with modern web technologies.
              </p>
              
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
               I specialize in building responsive, user-friendly web applications using React.js, Node.js, Express.js, and MongoDB. I enjoy solving problems through code and continuously learning to improve my skills. My goal is to grow as a developer and contribute to real-world software projects that make a difference.
              </p>
              
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                My approach combines technical expertise with creative problem-solving, ensuring 
                that every project I work on is both functionally robust and visually compelling.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-5 lg:space-y-6"
          >
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-gray-700 p-4 sm:p-5 lg:p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="p-2 sm:p-3 bg-gradient-to-r from-blue-800 to-purple-500 rounded-lg">
                    <interest.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white ml-3 sm:ml-4">
                    {interest.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  {interest.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;