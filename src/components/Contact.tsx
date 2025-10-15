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

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    else if (formData.name.trim().length < 2) newErrors.name = 'Name must be at least 2 characters';

    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!validateEmail(formData.email)) newErrors.email = 'Please enter a valid email address';

    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    else if (formData.subject.trim().length < 5) newErrors.subject = 'Subject must be at least 5 characters';

    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formspree.io/f/mqaywend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '', budget: '', timeline: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (err) {
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
      href: 'https://goo.gl/maps/your-location-link',
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
      action: () => window.open('mailto:praveenkalagarla2005@gmail.com?subject=Coffee Chat', '_blank'),
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In <span className="bg-gradient-to-r from-accent-400 to-orange-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <div className={`flex-shrink-0 w-14 h-14 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center text-white`}>
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm font-medium text-white/60">{item.label}</p>
                  <a href={item.href} className="text-lg font-semibold text-white hover:text-accent-400">{item.value}</a>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={`w-full px-4 py-3 bg-white/10 border rounded-xl focus:ring-2 focus:ring-accent-400 focus:border-transparent text-white placeholder-white/50 ${errors.name ? 'border-red-500' : 'border-white/20'}`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-400 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" /> {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className={`w-full px-4 py-3 bg-white/10 border rounded-xl focus:ring-2 focus:ring-accent-400 focus:border-transparent text-white placeholder-white/50 ${errors.email ? 'border-red-500' : 'border-white/20'}`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" /> {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className={`w-full px-4 py-3 bg-white/10 border rounded-xl focus:ring-2 focus:ring-accent-400 focus:border-transparent text-white placeholder-white/50 ${errors.subject ? 'border-red-500' : 'border-white/20'}`}
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-400 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" /> {errors.subject}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">Message *</label>
                <textarea
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  className={`w-full px-4 py-3 bg-white/10 border rounded-xl focus:ring-2 focus:ring-accent-400 focus:border-transparent text-white placeholder-white/50 resize-none ${errors.message ? 'border-red-500' : 'border-white/20'}`}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-400 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" /> {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-accent-400 to-orange-400 text-white py-4 px-6 rounded-xl font-semibold hover:from-accent-500 hover:to-orange-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 hover:scale-105 hover:shadow-2xl"
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

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="flex items-center justify-center space-x-2 text-green-400 bg-green-400/10 border border-green-400/20 p-4 rounded-xl">
                  <CheckCircle className="h-5 w-5" />
                  <span>Message sent successfully! I'll get back to you within 24 hours.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="flex items-center justify-center space-x-2 text-red-400 bg-red-400/10 border border-red-400/20 p-4 rounded-xl">
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
