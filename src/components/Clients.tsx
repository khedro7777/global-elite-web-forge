
import React from 'react';
import { motion } from 'framer-motion';
import { Building, Users, Award, Target, Globe, TrendingUp, Briefcase, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Clients = () => {
  const { t } = useLanguage();

  const achievements = [
    { icon: Building, number: "50+", label: "Global Clients", color: "from-cyan-400 to-blue-500" },
    { icon: TrendingUp, number: "200+", label: "Projects Delivered", color: "from-blue-500 to-purple-500" },
    { icon: Award, number: "15+", label: "Years Experience", color: "from-purple-500 to-pink-500" },
    { icon: Users, number: "99%", label: "Client Satisfaction", color: "from-pink-500 to-red-500" },
    { icon: Globe, number: "25+", label: "Countries Served", color: "from-green-400 to-cyan-500" },
    { icon: Briefcase, number: "100+", label: "Consultants", color: "from-orange-400 to-red-500" },
    { icon: Target, number: "95%", label: "Success Rate", color: "from-violet-500 to-purple-600" },
    { icon: Shield, number: "24/7", label: "Support", color: "from-teal-400 to-cyan-600" }
  ];

  return (
    <section id="clients" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('clients.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8" />
          <p className="text-slate-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Trusted partnerships with industry leaders across the globe
          </p>
        </motion.div>

        {/* Main Client Portfolio Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Side - Client Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Our Esteemed Clients</h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                {t('clients.description')}
              </p>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                {t('clients.relationships')}
              </p>
              <p className="text-cyan-400 text-lg leading-relaxed font-medium mb-6">
                {t('clients.partnerships')}
              </p>
              
              {/* Key Highlights */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-slate-300">Fortune 500 Companies</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-slate-300">Global Manufacturing Leaders</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-slate-300">Financial Institutions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span className="text-slate-300">Technology Innovators</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Industrial Excellence */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/lovable-uploads/9aadb49b-87f0-41f3-9775-c31410379ec3.png"
                alt="Industrial Excellence and Client Success"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4">
                  <h4 className="text-white font-bold text-lg mb-2">Industrial Leadership</h4>
                  <p className="text-slate-200 text-sm">
                    Delivering excellence across manufacturing, energy, and industrial sectors
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Comprehensive Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-12">Our Track Record</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center hover:bg-white/10 transition-all duration-300 group"
              >
                <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.number}
                </div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Client Portfolio Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">Trusted by Industry Leaders</h3>
            <p className="text-slate-400 text-lg">
              Our prestigious client portfolio represents excellence across multiple industries
            </p>
          </div>
          
          <div className="relative overflow-hidden rounded-xl shadow-2xl">
            <img
              src="/lovable-uploads/45df2bd7-2f7e-4807-95b7-0840ce1a98cf.png"
              alt="Prestigious Client Portfolio - Global Industry Leaders"
              className="w-full h-auto opacity-90 hover:opacity-100 transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-black/60 backdrop-blur-sm rounded-lg p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-white font-bold text-lg mb-2">Global Partnerships</h4>
                    <p className="text-slate-200 text-sm">
                      Strategic alliances with multinational corporations and industry leaders
                    </p>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-2">Sector Expertise</h4>
                    <p className="text-slate-200 text-sm">
                      Manufacturing, Finance, Technology, Energy, and Industrial sectors
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Join Our Success Stories</h3>
            <p className="text-slate-300 text-lg mb-6 max-w-2xl mx-auto">
              Become part of our prestigious client network and experience the EGIT difference
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105"
            >
              Start Your Journey
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
