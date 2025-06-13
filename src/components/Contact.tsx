import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, MessageCircle, Calendar, Coffee } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  budget: string;
  timeline: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    budget: '',
    timeline: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = 'Subject must be at least 5 characters';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '', budget: '', timeline: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: 'Email',
      value: 'praveenkalagarla2005@gmail.com',
      href: 'mailto:praveenkalagarla2005@gmail.com',
      color: 'from-blue-400 to-cyan-400',
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: 'Phone',
      value: '+91 9490722065',
      href: 'tel:+91 9490722065',
      color: 'from-green-400 to-emerald-400',
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: 'Location',
      value: 'Bhimavaram, AP',
      href: 'https://www.google.com/maps/place/Tatavarthy+Hostel/@16.5546928,81.5098211,17z/data=!3m1!4b1!4m6!3m5!1s0x3a37cd55e4ccc15f:0x9777038d29921c88!8m2!3d16.5546928!4d81.512396!16s%2Fg%2F11bx9c_r5t?entry=ttu&g_ep=EgoyMDI1MDYxMC4xIKXMDSoASAFQAw%3D%3D',
      color: 'from-purple-400 to-pink-400',
    },
  ];

  const quickActions = [
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: 'Quick Chat',
      description: 'Schedule a 15-min call',
      color: 'from-blue-400 to-cyan-400',
      action: () => window.open('https://calendly.com', '_blank'),
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: 'Book Meeting',
      description: 'Plan a detailed discussion',
      color: 'from-purple-400 to-pink-400',
      action: () => window.open('https://calendly.com', '_blank'),
    },
    {
      icon: <Coffee className="h-6 w-6" />,
      title: 'Coffee Chat',
      description: 'Casual conversation',
      color: 'from-orange-400 to-red-400',
      action: () => window.open('mailto:hello@yourname.com?subject=Coffee Chat', '_blank'),
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-300/30 text-white px-6 py-3 rounded-full text-sm font-medium mb-6">
            <Send className="h-4 w-4 text-accent-400" />
            <span>Let's Connect</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In <span className="bg-gradient-to-r from-accent-400 to-orange-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-16 animate-slide-up">
          {quickActions.map((action, index) => (
            <button
              key={index}
              onClick={action.action}
              className={`group p-6 bg-gradient-to-r ${action.color} rounded-2xl text-white hover:scale-105 transition-all duration-300 hover:shadow-2xl`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-white/20 rounded-xl group-hover:bg-white/30 transition-colors">
                  {action.icon}
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-lg">{action.title}</h3>
                  <p className="text-white/80 text-sm">{action.description}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-right">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Let's Start a <span className="text-accent-400">Conversation</span>
              </h3>
              <p className="text-white/70 leading-relaxed mb-8 text-lg">
                I'm always excited to work on new projects and collaborate with creative minds. 
                Whether you have a specific project in mind or just want to explore possibilities, 
                I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="group flex items-center space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`flex-shrink-0 w-14 h-14 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white/60">{item.label}</p>
                    <a
                      href={item.href}
                      className="text-lg font-semibold text-white hover:text-accent-400 transition-colors"
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-300/30 p-6 rounded-2xl animate-slide-up">
              <h4 className="font-bold text-white mb-3 flex items-center space-x-2">
                <span>🚀</span>
                <span>Ready to Collaborate?</span>
              </h4>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                I'm currently available for freelance projects and full-time opportunities. 
                Let's discuss how we can work together to create something extraordinary.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Web Development', 'Machine Learning', 'Consulting'].map((service, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-accent-400/20 border border-accent-400/30 text-accent-400 rounded-full text-xs font-medium"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl animate-slide-left">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white/10 border rounded-xl focus:ring-2 focus:ring-accent-400 focus:border-transparent transition-all text-white placeholder-white/50 ${
                      errors.name ? 'border-red-500' : 'border-white/20'
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-400 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white/10 border rounded-xl focus:ring-2 focus:ring-accent-400 focus:border-transparent transition-all text-white placeholder-white/50 ${
                      errors.email ? 'border-red-500' : 'border-white/20'
                    }`}
                    placeholder="Enter your email address"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                 
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-white/80 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white/10 border rounded-xl focus:ring-2 focus:ring-accent-400 focus:border-transparent transition-all text-white placeholder-white/50 ${
                    errors.subject ? 'border-red-500' : 'border-white/20'
                  }`}
                  placeholder="What's this about?"
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-400 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.subject}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white/10 border rounded-xl focus:ring-2 focus:ring-accent-400 focus:border-transparent transition-all resize-none text-white placeholder-white/50 ${
                    errors.message ? 'border-red-500' : 'border-white/20'
                  }`}
                  placeholder="Tell me about your project, goals, and any specific requirements..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-400 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-accent-400 to-orange-400 text-white py-4 px-6 rounded-xl font-semibold hover:from-accent-500 hover:to-orange-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105 hover:shadow-2xl"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="flex items-center justify-center space-x-2 text-green-400 bg-green-400/10 border border-green-400/20 p-4 rounded-xl animate-slide-up">
                  <CheckCircle className="h-5 w-5" />
                  <span>Message sent successfully! I'll get back to you within 24 hours.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="flex items-center justify-center space-x-2 text-red-400 bg-red-400/10 border border-red-400/20 p-4 rounded-xl animate-slide-up">
                  <AlertCircle className="h-5 w-5" />
                  <span>Something went wrong. Please try again or email me directly.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;