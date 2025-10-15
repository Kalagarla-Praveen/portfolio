import React from 'react';
import { Code2, Palette, Database, Globe, Smartphone, Zap } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code2 className="h-8 w-8" />,
      color: 'from-blue-400 to-cyan-400',
      skills: [
        { name: 'React', level: 95, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        
        { name: 'JavaScript', level: 95, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'HTML5', level: 98, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS3', level: 92, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'Tailwind CSS', level: 88, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
      ]
    },
    {
      title: 'Backend Development',
      icon: <Database className="h-8 w-8" />,
      color: 'from-green-400 to-emerald-400',
      skills: [
        { name: 'Node.js', level: 88, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Python', level: 85, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'MongoDB', level: 82, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'PostgreSQL', level: 80, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
        { name: 'Express.js', level: 85, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
        
      ]
    },
   
    {
      title: 'Tools & DevOps',
      icon: <Zap className="h-8 w-8" />,
      color: 'from-orange-400 to-red-400',
      skills: [
        { name: 'Git', level: 92, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
       
        { name: 'AWS', level: 75, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
        { name: 'Vercel', level: 88, logo: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=100&h=100' },
       
        {name:'VS Code',level:90,logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png'}
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-300/30 text-white px-6 py-3 rounded-full text-sm font-medium mb-6">
            <Globe className="h-4 w-4 text-accent-400" />
            <span>Technical Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-accent-400 to-orange-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit of modern technologies and creative tools I use to bring ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <div className="flex items-center space-x-4 mb-8">
                <div className={`p-3 bg-gradient-to-r ${category.color} rounded-xl text-white`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="group relative bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 animate-slide-up"
                    style={{ animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s` }}
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 rounded-lg overflow-hidden bg-white/10 flex items-center justify-center">
                        <img
                          src={skill.logo}
                          alt={skill.name}
                          className="w-8 h-8 object-contain"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            target.nextElementSibling!.classList.remove('hidden');
                          }}
                        />
                        <div className="hidden w-8 h-8 bg-gradient-to-r from-gray-400 to-gray-600 rounded flex items-center justify-center text-white text-xs font-bold">
                          {skill.name.charAt(0)}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-sm">{skill.name}</h4>
                        <p className="text-white/60 text-xs">{skill.level}%</p>
                      </div>
                    </div>

                    <div className="w-full bg-white/10 rounded-full h-2 mb-2">
                      <div
                        className={`bg-gradient-to-r ${category.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1) + 0.5}s`
                        }}
                      />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-slide-up">
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-300/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Always Learning, Always Growing
            </h3>
            <p className="text-white/70 leading-relaxed max-w-2xl mx-auto">
              Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
              tools, and techniques to stay at the forefront of web development and creative technology.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              {['AI/ML', 'Web3', 'AR/VR', 'IoT',  'Cloud Computing'].map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-accent-400/20 to-orange-400/20 border border-accent-400/30 text-accent-400 rounded-full text-sm font-medium animate-pulse"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;