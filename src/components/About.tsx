
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
            About Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8" />
        </motion.div>

        {/* About Us Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Side - Team Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/lovable-uploads/1c2ab0fb-33d1-45b4-ba8b-f194a3594758.png"
                alt="EGIT Professional Team"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <h3 className="text-3xl font-bold text-white mb-6">About Us</h3>
            <div className="text-slate-300 text-lg leading-relaxed space-y-4">
              <p>
                We listen to your unique needs and objectives, and then craft customized strategies that leverage my regional expertise and our team's diverse skill set.
              </p>
              <p>
                <strong className="text-cyan-400">Proven track record:</strong> From securing funding for promising startups to optimizing operations for established companies, we have a history of delivering quantifiable results and exceeding expectations. Our success stories speak for themselves.
              </p>
              <p>
                <strong className="text-cyan-400">Client-centric approach:</strong> We believe in building strong partnerships with our clients. We are invested in your success and work alongside you every step of the way, providing ongoing support and guidance.
              </p>
              <p>
                <strong className="text-cyan-400">Innovative mindset:</strong> We stay ahead of the curve, embracing new technologies and data-driven insights to provide you with the most effective solutions. We believe in continuously improving and adapting to ensure your success in the ever-evolving market.
              </p>
              <p>
                Together, we can achieve your financial, marketing, and investment goals. Together, we can unlock your growth potential and set your business on the path to success.
              </p>
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

        {/* Leadership Meeting Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Strategic Leadership & Partnership</h3>
            <p className="text-slate-400">Building strategic alliances and fostering industry collaboration</p>
          </div>
          
          <div className="relative overflow-hidden rounded-xl">
            <img
              src="/lovable-uploads/73eb6c53-fc9e-46b7-bc07-9455575fd8a5.png"
              alt="EGIT Strategic Leadership Meeting"
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
