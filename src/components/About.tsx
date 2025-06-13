import React from 'react';
import { User, Heart, Coffee, Music, Camera, Gamepad2 } from 'lucide-react';

const About: React.FC = () => {
  const interests = [
    { icon: <Coffee className="h-6 w-6" />, name: 'Coffee Lover', color: 'from-amber-400 to-orange-500' },
    { icon: <Music className="h-6 w-6" />, name: 'Music Producer', color: 'from-purple-400 to-pink-500' },
    { icon: <Camera className="h-6 w-6" />, name: 'Photography', color: 'from-blue-400 to-cyan-500' },
    { icon: <Gamepad2 className="h-6 w-6" />, name: 'Gaming', color: 'from-green-400 to-emerald-500' },
  ];

  const stats = [
    { number: '5+', label: 'Years Experience', color: 'text-primary-400' },
    { number: '50+', label: 'Projects Completed', color: 'text-secondary-400' },
    { number: '30+', label: 'Happy Clients', color: 'text-accent-400' },
    { number: '24/7', label: 'Support Available', color: 'text-green-400' },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-300/30 text-white px-6 py-3 rounded-full text-sm font-medium mb-6">
            <User className="h-4 w-4 text-accent-400" />
            <span>Get to Know Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-accent-400 to-orange-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate developer who loves creating digital experiences that make a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-6 animate-slide-right">
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl backdrop-blur-sm border border-white/10 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Profile"
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-accent-400 to-orange-400 p-4 rounded-2xl animate-bounce-slow">
                <Heart className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>

          <div className="space-y-8 animate-slide-left">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">
                Turning Ideas Into <span className="text-accent-400">Reality</span>
              </h3>
              <p className="text-white/70 leading-relaxed text-lg">
                With over 5 years of experience in full-stack development, I specialize in creating 
                interactive web applications that combine beautiful design with powerful functionality. 
                I'm passionate about emerging technologies and love experimenting with 3D graphics, 
                AI integration, and creative coding.
              </p>
              <p className="text-white/70 leading-relaxed text-lg">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or working on creative side projects that push the boundaries 
                of what's possible on the web.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {interests.map((interest, index) => (
                <div
                  key={index}
                  className={`p-4 bg-gradient-to-r ${interest.color} rounded-xl text-white font-medium flex items-center space-x-3 hover:scale-105 transition-transform duration-300 animate-slide-up`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {interest.icon}
                  <span>{interest.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default About;