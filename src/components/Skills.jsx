import { motion } from 'framer-motion';
import { 
  Globe, Database, Cloud, Settings, 
  Smartphone, Palette, Code, GitBranch 
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Globe,
      color: 'from-blue-500 to-cyan-500',
      skills: ['React.js', 'Tailwind CSS', 'JavaScript', 'HTML5', 'CSS3']
    },
    {
      title: 'Backend',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      skills: ['Node.js', 'Express.js', 'Spring Boot', 'MongoDB', 'MySQL']
    },
    {
      title: 'Design',
      icon: Cloud,
      color: 'from-purple-500 to-violet-500',
      skills: ['UI/UX Design', 'Figma', 'Photoshop', 'Adobe XD', 'Prototyping']
    },
    {
      title: 'Others',
      icon: Settings,
      color: 'from-orange-500 to-red-500',
      skills: ['Git', 'Linux (Ubuntu)', 'Agile', 'Jira', 'Postman']
    }
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Skills & Technologies
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-blue-800 to-purple-600 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit of modern technologies and frameworks that I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-4 sm:mb-5 md:mb-6">
                <div className={`inline-flex p-2 sm:p-3 rounded-lg bg-gradient-to-r ${category.color} mb-3 sm:mb-4`}>
                  <category.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-2 sm:space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05 
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center p-1.5 sm:p-2 bg-white dark:bg-gray-700 rounded-md sm:rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
                  >
                    <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r ${category.color} mr-2 sm:mr-3 flex-shrink-0`}></div>
                    <span className="text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300 font-medium leading-tight">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;