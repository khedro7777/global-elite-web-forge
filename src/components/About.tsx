
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Award, Users, Lightbulb, Building, Briefcase, Globe, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const expertise = [
    {
      icon: Target,
      title: "Strategic Planning",
      description: "Comprehensive strategic planning and business development solutions"
    },
    {
      icon: Award,
      title: "Industry Excellence",
      description: "Award-winning expertise in financial and industrial consulting"
    },
    {
      icon: Users,
      title: "Client Success",
      description: "Dedicated to achieving exceptional results for our clients"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Cutting-edge solutions for modern business challenges"
    },
    {
      icon: Building,
      title: "Industrial Solutions",
      description: "Advanced industrial consulting and process optimization"
    },
    {
      icon: Briefcase,
      title: "Business Advisory",
      description: "Professional business advisory and management consulting"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "International expertise with local market knowledge"
    },
    {
      icon: TrendingUp,
      title: "Growth Focus",
      description: "Driving sustainable growth and operational excellence"
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
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
            {t('about.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8" />
          <p className="text-slate-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Leading provider of comprehensive financial and industrial consulting services with over 15 years of excellence
          </p>
        </motion.div>

        {/* Main Content with Industrial Image */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Side - Industrial Excellence Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/lovable-uploads/9aadb49b-87f0-41f3-9775-c31410379ec3.png"
                alt="Industrial Consulting Excellence"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4">
                  <h4 className="text-white font-bold text-lg mb-2">Industrial Excellence</h4>
                  <p className="text-slate-200 text-sm">Advanced manufacturing and industrial process consulting</p>
                </div>
              </div>
            </div>
            
            {/* Floating Achievement Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-8 -right-8 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-md rounded-xl p-6 border border-white/20"
            >
              <div className="text-3xl font-bold text-cyan-400 mb-2">15+</div>
              <div className="text-white font-medium">Years of Excellence</div>
              <div className="text-slate-300 text-sm">Industry Leadership</div>
            </motion.div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              Leading Financial & Industrial Consulting
            </h3>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              {t('about.description')}
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Our comprehensive approach combines deep industry knowledge with innovative solutions, 
              delivering measurable results for businesses across various sectors including manufacturing, 
              finance, technology, and industrial operations.
            </p>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <div className="text-2xl font-bold text-cyan-400">200+</div>
                <div className="text-slate-300 text-sm">Projects Delivered</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <div className="text-2xl font-bold text-blue-400">99%</div>
                <div className="text-slate-300 text-sm">Client Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Expertise Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-12">Our Core Expertise</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group text-center"
              >
                <item.icon className="w-8 h-8 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                <p className="text-slate-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Client Portfolio Display */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Our Prestigious Client Portfolio</h3>
            <p className="text-slate-400">Building successful partnerships with industry leaders worldwide</p>
          </div>
          
          <div className="relative overflow-hidden rounded-xl">
            <img
              src="/lovable-uploads/45df2bd7-2f7e-4807-95b7-0840ce1a98cf.png"
              alt="Client Portfolio - Industry Leaders and Partners"
              className="w-full h-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
