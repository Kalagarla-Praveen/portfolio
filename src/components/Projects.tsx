import React, { useState } from 'react';
import { ExternalLink, Github, Play, Star, Eye, Heart } from 'lucide-react';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: 'Interactive 3D Portfolio',
      description: 'A stunning personal portfolio featuring advanced Three.js animations, particle systems, and interactive 3D models with real-time lighting effects.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Three.js', 'TypeScript', 'WebGL'],
      category: 'frontend',
      demoUrl: '#',
      githubUrl: '#',
      featured: true,
      stats: { stars: 234, views: '12.5k', likes: 89 }
    },
    {
      title: 'AI-Powered Chat Application',
      description: 'Real-time chat application with AI integration, featuring smart replies, sentiment analysis, and beautiful animations.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Next.js', 'OpenAI', 'Socket.io', 'MongoDB'],
      category: 'fullstack',
      demoUrl: '#',
      githubUrl: '#',
      featured: true,
      stats: { stars: 189, views: '8.7k', likes: 67 }
    },
    {
      title: 'E-commerce Dashboard',
      description: 'Modern admin dashboard with advanced analytics, real-time data visualization, and comprehensive inventory management.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Vue.js', 'D3.js', 'Express', 'PostgreSQL'],
      category: 'fullstack',
      demoUrl: '#',
      githubUrl: '#',
      featured: true,
      stats: { stars: 156, views: '6.2k', likes: 45 }
    },
    {
      title: 'Creative Design System',
      description: 'Comprehensive design system with interactive components, documentation, and automated testing for consistent UI/UX.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Storybook', 'React', 'Figma', 'Jest'],
      category: 'design',
      demoUrl: '#',
      githubUrl: '#',
      featured: false,
      stats: { stars: 98, views: '4.1k', likes: 32 }
    },
    {
      title: 'Mobile Fitness App',
      description: 'Cross-platform fitness tracking app with workout plans, progress tracking, and social features for motivation.',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React Native', 'Firebase', 'Redux', 'Expo'],
      category: 'mobile',
      demoUrl: '#',
      githubUrl: '#',
      featured: false,
      stats: { stars: 145, views: '7.3k', likes: 78 }
    },
    {
      title: 'Blockchain Voting System',
      description: 'Secure and transparent voting platform built on blockchain technology with smart contracts and real-time results.',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Solidity', 'Web3.js', 'React', 'Ethereum'],
      category: 'blockchain',
      demoUrl: '#',
      githubUrl: '#',
      featured: false,
      stats: { stars: 267, views: '15.2k', likes: 123 }
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', color: 'from-purple-400 to-pink-400' },
    { id: 'frontend', name: 'Frontend', color: 'from-blue-400 to-cyan-400' },
    { id: 'fullstack', name: 'Full Stack', color: 'from-green-400 to-emerald-400' },
    
    { id: 'ml', name: 'Machine Learning', color: 'from-pink-400 to-rose-400' },
    { id: 'static', name: 'static', color: 'from-pink-400 to-rose-400' },
    
    
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const featuredProjects = filteredProjects.filter(project => project.featured);
  const otherProjects = filteredProjects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-300/30 text-white px-6 py-3 rounded-full text-sm font-medium mb-6">
            <Star className="h-4 w-4 text-accent-400" />
            <span>Featured Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-accent-400 to-orange-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            A showcase of my latest work, featuring interactive experiences, innovative solutions, and creative experiments.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-slide-up">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg transform scale-105`
                  : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Featured Projects</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 animate-slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-accent-400 to-orange-400 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex space-x-3">
                        <a
                          href={project.demoUrl}
                          className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors"
                        >
                          <Play className="h-4 w-4" />
                          <span>Demo</span>
                        </a>
                        <a
                          href={project.githubUrl}
                          className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors"
                        >
                          <Github className="h-4 w-4" />
                          <span>Code</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-white/70 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-300/30 text-purple-300 text-sm rounded-full font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-sm text-white/60">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center space-x-1">
                          <Star className="h-4 w-4" />
                          <span>{project.stats.stars}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Eye className="h-4 w-4" />
                          <span>{project.stats.views}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Heart className="h-4 w-4" />
                          <span>{project.stats.likes}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Other Projects Grid */}
        {otherProjects.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 text-center">More Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={project.demoUrl}
                        className="p-2 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                      <a
                        href={project.githubUrl}
                        className="p-2 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-colors"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h4 className="font-semibold text-white mb-2 text-sm group-hover:text-accent-400 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-white/60 text-xs mb-3 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 bg-purple-500/20 border border-purple-300/30 text-purple-300 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-2 py-0.5 bg-white/10 text-white/60 text-xs rounded-full">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between text-xs text-white/50">
                      <span className="flex items-center space-x-1">
                        <Star className="h-3 w-3" />
                        <span>{project.stats.stars}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Eye className="h-3 w-3" />
                        <span>{project.stats.views}</span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="text-center mt-16 animate-slide-up">
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-300/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Want to See More?
            </h3>
            <p className="text-white/70 leading-relaxed mb-6">
              These are just a few highlights from my portfolio. I'm constantly working on new projects 
              and experimenting with emerging technologies.
            </p>
            <a
              href="https://github.com/Kalagarla-Praveen"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-accent-400 to-orange-400 text-white rounded-full font-medium hover:from-accent-500 hover:to-orange-500 transition-all duration-300 transform hover:scale-105"
            >
              <Github className="h-5 w-5" />
              <span>View All on GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;