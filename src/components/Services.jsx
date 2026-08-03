import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Layout, ShoppingBag, ArrowUpRight, CheckCircle2, Cpu } from 'lucide-react';

export default function Services() {
  const services = [
    {
      num: "01",
      icon: Code,
      title: "Full-Stack Web Development",
      desc: "Custom web applications engineered end-to-end solo using React, Node.js, Express, PHP, Laravel, and MySQL. Scalable, fast, and production-ready.",
      deliverables: ["React & Node.js Architecture", "Laravel MVC Systems", "MySQL Database Schemas", "Solo End-to-End Delivery"]
    },
    {
      num: "02",
      icon: Server,
      title: "Node.js & Backend APIs",
      desc: "High-performance Node.js/Express & Laravel RESTful APIs, database normalization, authentication pipelines, and Razorpay payment integration.",
      deliverables: ["Node.js & Express APIs", "Razorpay Payment Integration", "Auth & Token Security", "SQL Query Optimization"]
    },
    {
      num: "03",
      icon: Layout,
      title: "React UI/UX & Responsive Web",
      desc: "Interactive React components, responsive Tailwind CSS v4 styling, pixel-perfect Figma translation, and fluid micro-animations.",
      deliverables: ["React Interactive UI", "Tailwind CSS Styling", "Figma Mockup Translation", "Mobile-First Responsive Grids"]
    },
    {
      num: "04",
      icon: ShoppingBag,
      title: "E-Commerce & Custom Systems",
      desc: "Fashion e-commerce storefronts, student course portals, online exam simulators, and admin dashboards built by a single engineer.",
      deliverables: ["E-Commerce Checkout", "Admin Control Dashboards", "Timed Exam Platforms", "Student Portals"]
    }
  ];

  return (
    <section id="services" className="py-24 border-t border-[#EAEAEA] bg-[#FAFAFA] relative overflow-hidden">
      {/* Background Visual Graphics System */}
      <div className="absolute inset-0 bg-grid-lines opacity-50 pointer-events-none z-0" />
      <div className="absolute inset-0 bg-dot-matrix opacity-25 pointer-events-none z-0" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-neutral-200/50 rounded-full blur-3xl pointer-events-none z-0 animate-float-slow" />

      {/* Floating Accent Graphic Shape */}
      <div className="absolute top-12 left-[6%] w-16 h-16 border border-neutral-300 rounded-2xl -rotate-12 bg-white/70 backdrop-blur-sm pointer-events-none z-0 hidden lg:flex items-center justify-center text-neutral-500 animate-float-reverse">
        <Cpu className="w-6 h-6" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-black mb-2 block">
            // Core Offerings
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#111111] tracking-tight">
            Services & Solutions
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-6">
          {services.map((service, idx) => {
            const IconComp = service.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="p-4 sm:p-8 bg-white/95 border border-[#EAEAEA] rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-xl hover:border-black transition-all flex flex-col justify-between group backdrop-blur-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 sm:mb-6">
                    <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-black text-white flex items-center justify-center shadow-md">
                      <IconComp className="w-4 h-4 sm:w-6 sm:h-6" />
                    </div>
                    <span className="text-[10px] sm:text-xs font-mono font-bold text-neutral-400 group-hover:text-black transition-colors">
                      {service.num}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-xl font-bold text-[#111111] mb-1.5 sm:mb-3 leading-snug">{service.title}</h3>
                  <p className="text-[#5F6368] text-xs sm:text-sm leading-relaxed mb-3 sm:mb-6 line-clamp-3 sm:line-clamp-none">{service.desc}</p>

                  <div className="space-y-1.5 sm:space-y-2 pt-2 border-t border-[#F5F5F5]">
                    {service.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-[#5F6368]">
                        <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-black shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 sm:pt-6 mt-3 sm:mt-6 border-t border-[#F5F5F5] flex items-center justify-between">
                  <a
                    href="#contact"
                    className="text-[10px] sm:text-xs font-bold text-black uppercase tracking-wider flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Discuss</span>
                    <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
