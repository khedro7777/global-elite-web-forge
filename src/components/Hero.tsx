
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Building, TrendingUp, Award, Users, Target } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t, currentLanguage } = useLanguage();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: `url('/lovable-uploads/467ec579-5884-4de9-bd11-3d5aab5d0e52.png')`
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/70 to-slate-800/80" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/20 rounded-full"
            animate={{
              x: [0, 100, -100, 0],
              y: [0, -100, 100, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Hero Content */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto"
          >
            {/* Logo Section */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-8"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-cyan-500/30">
                  <Building className="w-10 h-10 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                EGIT
              </h1>
              <h2 className="text-2xl md:text-3xl text-slate-300 font-light mb-2">
                Egyptian Financial & Investment Consultancy Co.
              </h2>
              <p className="text-xl text-cyan-400 font-medium">
                Established Since 1995 - Building Success History
              </p>
            </motion.div>

            {/* Who We Are Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Who We Are</h3>
              <div className="text-slate-300 text-lg leading-relaxed space-y-4">
                <p>
                  EGIT is an Egyptian Financial & Investment consultancy Co. Established Since 1995 and building success history.
                </p>
                <p>
                  EGIT has empowered businesses and organizations across Egypt and the MENA region to achieve sustainable growth and success.
                </p>
                <p>
                  We are a leading provider of financial, marketing, Industrial, and investment consulting and solutions, offering a comprehensive range of services designed to meet your specific needs and objectives.
                </p>
                <p>
                  Our comprehensive feasibility studies includes independently conducted audits of financial projections by top auditing firms like KPMG, Grant Thornton, and Deloitte, through our established partnerships. This collaboration guarantees unparalleled accuracy and stakeholder confidence.
                </p>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 group"
              >
                Get Started
                <ArrowRight className={`w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform ${currentLanguage.direction === 'rtl' ? 'rotate-180' : ''}`} />
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* CEO Message Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-12 items-center mb-16"
        >
          {/* CEO Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/lovable-uploads/7c017ca8-1618-40ee-9223-f53ac4cb1b9c.png"
                alt="Dr. Ehab M. Anwar - CEO & Founder"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent" />
            </div>
          </div>

          {/* CEO Message Content */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">CEO Message</h3>
            <div className="text-slate-300 text-lg leading-relaxed space-y-4">
              <p>
                As the founder of EGIT Financial & Investment Consultancy Co. I understand the challenges and opportunities facing businesses in the dynamic MENA region.
              </p>
              <p>
                Having navigated this landscape for over two decades, both as a consultant at leading global firms and through long experience establishing successful industrial, oil & gas projects, we possess a deep understanding of the region's economic drivers, cultural nuances, and regulatory environment.
              </p>
              <p>
                At EGIT, we are not just another consultancy firm. We are a team of passionate professionals driven by a single mission, to empower businesses like yours to achieve sustainable growth and unlock full potential.
              </p>
              <div className="mt-6">
                <p className="text-cyan-400 font-semibold">Sincerely,</p>
                <p className="text-white font-bold text-xl mt-2">Dr. Ehab M. Anwar</p>
                <p className="text-slate-400">Founder & CEO, EGIT Financial & Investment Consultancy Co.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { icon: TrendingUp, number: "29+", label: "Years Experience", color: "from-cyan-400 to-blue-500" },
            { icon: Building, number: "200+", label: "Projects Completed", color: "from-blue-500 to-purple-500" },
            { icon: Users, number: "50+", label: "Global Clients", color: "from-purple-500 to-pink-500" },
            { icon: Award, number: "99%", label: "Client Satisfaction", color: "from-pink-500 to-red-500" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.8 + index * 0.1, duration: 0.6 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center hover:bg-white/20 transition-all duration-300 group"
            >
              <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.number}
              </div>
              <div className="text-slate-300 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
