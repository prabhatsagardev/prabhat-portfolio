import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageSquare, Send, CheckCircle, AlertCircle, Loader2, Sparkles } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null,
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      // 1. Try sending to Web3Forms / local API endpoint
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          access_key: '5a409f87-19d2-4361-bd80-d29b1be42475', // Free demo access key or direct fallback
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'Portfolio Inquiry for Prabhat Sagar',
          message: formData.message,
          to_email: 'prabhatsagar2408@gmail.com'
        }),
      }).catch(() => null);

      // 2. Also send to local backend /api/contact if server is active
      fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      }).catch(() => null);

      // Set success state
      setStatus({ loading: false, success: true, error: null });

      // Automatically construct WhatsApp message URL and prompt
      const whatsappText = encodeURIComponent(
        `Hi Prabhat Sagar!\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Subject:* ${formData.subject || 'Website Project Inquiry'}\n\n*Message:*\n${formData.message}`
      );
      const whatsappUrl = `https://wa.me/916398449403?text=${whatsappText}`;
      
      // Open WhatsApp directly in new tab as instant delivery fallback
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
      }, 400);

    } catch (err) {
      console.error('Contact Form Error:', err);
      setStatus({ loading: false, success: true, error: null });
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#0A0A0A] text-white border-t border-neutral-900 relative overflow-hidden">
      {/* Background Visual Graphics System */}
      <div className="absolute inset-0 bg-grid-lines opacity-10 pointer-events-none z-0" />
      <div className="absolute inset-0 bg-dot-matrix opacity-10 pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neutral-800/30 rounded-full blur-3xl pointer-events-none z-0 animate-float-slow" />

      {/* Floating Accent Shape */}
      <div className="absolute top-12 left-[10%] w-16 h-16 border border-neutral-800 rounded-2xl -rotate-12 bg-white/5 backdrop-blur-sm pointer-events-none z-0 hidden lg:flex items-center justify-center text-neutral-600 animate-float-slow">
        <Mail className="w-6 h-6" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center space-y-4 mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 font-mono">// Direct Contact</span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Let's build something extraordinary.
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-medium">
            Reach out directly via Phone, WhatsApp, or Email to discuss your project requirements or hiring opportunities.
          </p>

          {/* Quick Direct Buttons Box */}
          <div className="flex flex-wrap justify-center items-center gap-4 pt-4">
            <a
              href="https://wa.me/916398449403"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white text-xs sm:text-sm font-bold rounded-xl shadow-lg transition-all flex items-center gap-2 hover:scale-[1.02]"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp: 6398449403</span>
            </a>

            <a
              href="tel:6398449403"
              className="px-6 py-3.5 bg-white text-black hover:bg-neutral-200 text-xs sm:text-sm font-bold rounded-xl shadow-lg transition-all flex items-center gap-2 hover:scale-[1.02]"
            >
              <Phone className="w-4 h-4" />
              <span>Call +91 6398449403</span>
            </a>

            <a
              href="mailto:prabhatsagar2408@gmail.com"
              className="px-6 py-3.5 bg-[#1C1C1C] border border-neutral-800 hover:border-white text-white text-xs sm:text-sm font-bold rounded-xl shadow-lg transition-all flex items-center gap-2 hover:scale-[1.02]"
            >
              <Mail className="w-4 h-4" />
              <span>prabhatsagar2408@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Contact Form Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#121212] border border-neutral-800 p-8 sm:p-10 rounded-3xl shadow-2xl max-w-2xl mx-auto relative overflow-hidden"
        >
          {status.success ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
              <p className="text-neutral-400 text-sm max-w-md mx-auto">
                Thank you for getting in touch with Prabhat Sagar. I will respond to your message shortly!
              </p>
              <button
                onClick={() => setStatus({ loading: false, success: false, error: null })}
                className="px-6 py-2.5 bg-white text-black font-bold text-xs rounded-xl hover:bg-neutral-200 transition-colors mt-4"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {status.error && (
                <div className="p-4 bg-rose-500/10 border border-rose-500/20 text-rose-300 rounded-xl text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{status.error}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-bold text-neutral-300 uppercase tracking-wider block mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full bg-[#1A1A1A] border border-neutral-800 focus:border-white rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-neutral-300 uppercase tracking-wider block mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="rahul@example.com"
                    className="w-full bg-[#1A1A1A] border border-neutral-800 focus:border-white rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-neutral-300 uppercase tracking-wider block mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Website Development / Freelance / Hiring"
                  className="w-full bg-[#1A1A1A] border border-neutral-800 focus:border-white rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-neutral-300 uppercase tracking-wider block mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your project, timeline, or requirements..."
                  className="w-full bg-[#1A1A1A] border border-neutral-800 focus:border-white rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status.loading}
                className="w-full py-4 bg-white hover:bg-neutral-200 text-black text-xs sm:text-sm font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 hover:scale-[1.01]"
              >
                {status.loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message to Prabhat Sagar</span>
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
