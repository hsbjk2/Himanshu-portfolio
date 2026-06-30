import { useState, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Github, Linkedin, Instagram, MapPin, Send, CheckCircle2, Sparkles, Loader2 } from 'lucide-react';
import { personalInfo, socialLinks } from '../data';

interface ContactProps {
  isDarkMode: boolean;
}

export default function Contact({ isDarkMode }: ContactProps) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = () => {
    const tempErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) tempErrors.name = 'Full name is required';
    
    if (!formData.email.trim()) {
      tempErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please provide a valid email';
    }

    if (!formData.message.trim()) tempErrors.message = 'Message content is required';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error as they type
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate clean premium server payload dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1800);
  };

  const getContactIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'github':
        return <Github className="w-5 h-5 text-brand-cyan" />;
      case 'linkedin':
        return <Linkedin className="w-5 h-5 text-brand-purple" />;
      case 'instagram':
        return <Instagram className="w-5 h-5 text-brand-indigo" />;
      case 'email':
        return <Mail className="w-5 h-5 text-brand-cyan" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden px-6">
      {/* Background radial glowing ambient backdrop */}
      <div className="absolute bottom-1/4 right-0 w-[30rem] h-[30rem] translate-x-1/2 translate-y-1/2 rounded-full radial-glow-purple opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <motion.h4
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs font-bold uppercase tracking-widest text-brand-cyan"
          >
            GET IN TOUCH
          </motion.h4>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`font-display text-3xl md:text-4xl font-extrabold tracking-tight ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            Let's Build Something New
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1.5 bg-gradient-to-r from-brand-cyan to-brand-purple rounded-full"
          />
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-stretch">
          
          {/* Left Side: Direct Contact Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-3 text-left"
              >
                <h3 className={`font-display text-2xl font-extrabold tracking-tight ${
                  isDarkMode ? 'text-white' : 'text-slate-950'
                }`}>
                  Connect With Me
                </h3>
                <p className={`text-sm leading-relaxed ${
                  isDarkMode ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  Have an exciting project idea, looking for a software partner, or simply want to chat about AI/ML? Send a message and let's connect!
                </p>
              </motion.div>

              {/* Direct Info Cards stack */}
              <div className="space-y-4">
                {/* Email card */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`p-5 rounded-2xl border flex items-center space-x-4 text-left group transition-all duration-300 ${
                    isDarkMode ? 'border-white/5 bg-slate-950/60' : 'border-slate-200 bg-slate-50'
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 flex items-center justify-center text-brand-cyan border border-brand-cyan/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block leading-none mb-1">Direct Mail</span>
                    <a href={`mailto:${personalInfo.email}`} className={`font-mono text-sm font-semibold hover:text-brand-cyan transition-colors ${
                      isDarkMode ? 'text-slate-300' : 'text-slate-800'
                    }`}>
                      {personalInfo.email}
                    </a>
                  </div>
                </motion.div>

                {/* Location card */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className={`p-5 rounded-2xl border flex items-center space-x-4 text-left group transition-all duration-300 ${
                    isDarkMode ? 'border-white/5 bg-slate-950/60' : 'border-slate-200 bg-slate-50'
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-purple/10 flex items-center justify-center text-brand-purple border border-brand-purple/20">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block leading-none mb-1">Location</span>
                    <span className={`font-sans text-sm font-semibold ${
                      isDarkMode ? 'text-slate-300' : 'text-slate-800'
                    }`}>
                      {personalInfo.location}
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Social Cards Inline Grid */}
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className={`p-4 rounded-xl border flex items-center space-x-3 text-left transition-all duration-300 hover:scale-[1.02] ${
                    isDarkMode 
                      ? 'border-white/5 bg-slate-950/60 hover:border-brand-cyan/20 text-slate-400 hover:text-brand-cyan' 
                      : 'border-slate-200 bg-slate-50 hover:border-brand-purple/20 text-slate-600 hover:text-brand-purple'
                  }`}
                >
                  {getContactIcon(social.platform)}
                  <span className="font-display font-bold text-xs">{social.platform}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right Side: Interactive Form Card */}
          <div className="lg:col-span-7 flex">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`w-full p-8 rounded-[2rem] border relative overflow-hidden flex flex-col justify-between ${
                isDarkMode ? 'border-white/5 bg-slate-950/40 glass-panel-dark' : 'border-slate-200 bg-white glass-panel-light shadow-lg'
              }`}
            >
              <AnimatePresence mode="wait">
                {!submitSuccess ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-6 text-left flex flex-col justify-between h-full"
                    exit={{ opacity: 0 }}
                  >
                    <div className="space-y-5">
                      {/* Name input */}
                      <div className="space-y-2">
                        <label className={`block font-mono text-[10px] font-bold uppercase tracking-widest ${
                          isDarkMode ? 'text-slate-400' : 'text-slate-500'
                        }`}>
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-3.5 rounded-xl border text-sm font-sans transition-all duration-300 focus:outline-none ${
                            errors.name 
                              ? 'border-rose-500 focus:ring-1 focus:ring-rose-500' 
                              : isDarkMode 
                                ? 'border-white/10 bg-white/5 text-white focus:border-brand-cyan/50' 
                                : 'border-slate-200 bg-slate-50/50 text-slate-900 focus:border-brand-purple/50'
                          }`}
                          placeholder="Your full name"
                        />
                        {errors.name && (
                          <span className="text-[10px] font-mono text-rose-500">{errors.name}</span>
                        )}
                      </div>

                      {/* Email input */}
                      <div className="space-y-2">
                        <label className={`block font-mono text-[10px] font-bold uppercase tracking-widest ${
                          isDarkMode ? 'text-slate-400' : 'text-slate-500'
                        }`}>
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3.5 rounded-xl border text-sm font-sans transition-all duration-300 focus:outline-none ${
                            errors.email 
                              ? 'border-rose-500 focus:ring-1 focus:ring-rose-500' 
                              : isDarkMode 
                                ? 'border-white/10 bg-white/5 text-white focus:border-brand-cyan/50' 
                                : 'border-slate-200 bg-slate-50/50 text-slate-900 focus:border-brand-purple/50'
                          }`}
                          placeholder="your.email@gmail.com"
                        />
                        {errors.email && (
                          <span className="text-[10px] font-mono text-rose-500">{errors.email}</span>
                        )}
                      </div>

                      {/* Subject input */}
                      <div className="space-y-2">
                        <label className={`block font-mono text-[10px] font-bold uppercase tracking-widest ${
                          isDarkMode ? 'text-slate-400' : 'text-slate-500'
                        }`}>
                          Subject (Optional)
                        </label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className={`w-full px-4 py-3.5 rounded-xl border text-sm font-sans transition-all duration-300 focus:outline-none ${
                            isDarkMode 
                              ? 'border-white/10 bg-white/5 text-white focus:border-brand-cyan/50' 
                              : 'border-slate-200 bg-slate-50/50 text-slate-900 focus:border-brand-purple/50'
                          }`}
                          placeholder="What is this regarding?"
                        />
                      </div>

                      {/* Message input */}
                      <div className="space-y-2">
                        <label className={`block font-mono text-[10px] font-bold uppercase tracking-widest ${
                          isDarkMode ? 'text-slate-400' : 'text-slate-500'
                        }`}>
                          Message
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className={`w-full px-4 py-3.5 rounded-xl border text-sm font-sans transition-all duration-300 focus:outline-none resize-none ${
                            errors.message 
                              ? 'border-rose-500 focus:ring-1 focus:ring-rose-500' 
                              : isDarkMode 
                                ? 'border-white/10 bg-white/5 text-white focus:border-brand-cyan/50' 
                                : 'border-slate-200 bg-slate-50/50 text-slate-900 focus:border-brand-purple/50'
                          }`}
                          placeholder="Type your message here..."
                        />
                        {errors.message && (
                          <span className="text-[10px] font-mono text-rose-500">{errors.message}</span>
                        )}
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full mt-6 py-4 rounded-xl font-display font-bold text-sm tracking-wide bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-indigo text-white shadow-xl shadow-brand-cyan/15 hover:opacity-95 transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-75 disabled:transform-none"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Dispatching Message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center p-8 space-y-4 my-auto"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                      className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-2"
                    >
                      <CheckCircle2 className="w-10 h-10" />
                    </motion.div>

                    <h3 className={`font-display text-2xl font-extrabold ${
                      isDarkMode ? 'text-white' : 'text-slate-900'
                    }`}>
                      Message Dispatched!
                    </h3>

                    <p className={`text-sm leading-relaxed max-w-sm ${
                      isDarkMode ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                      Thank you for connecting, Himanshu has received your details and will review it immediately. You'll get a response back at your email shortly.
                    </p>

                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest pt-4">
                      TICKET_LOGGED: SUCCESS
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
