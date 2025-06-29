
import React from 'react';
import { motion } from 'framer-motion';
import { Building, Mail, Phone, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import SocialShare from './SocialShare';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-black/40 backdrop-blur-sm border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
                <Building className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-bold text-xl">EGIT</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              {t('about.description').substring(0, 120)}...
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h3 className="text-white font-semibold text-lg mb-4">{t('nav.home')}</h3>
            <div className="space-y-2">
              {[
                { key: 'nav.home', href: '#home' },
                { key: 'nav.about', href: '#about' },
                { key: 'nav.services', href: '#services' },
                { key: 'nav.clients', href: '#clients' },
                { key: 'nav.contact', href: '#contact' }
              ].map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  className="block text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  {t(link.key)}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="text-white font-semibold text-lg mb-4">{t('contact.info')}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span className="text-slate-300">info@egitconsulting.online</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span className="text-slate-300">(+2) 01019026150</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-4 h-4 text-cyan-400" />
                <span className="text-slate-300">www.egitconsulting.online</span>
              </div>
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <SocialShare />
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="border-t border-white/10 pt-8 text-center"
        >
          <p className="text-slate-400">
            © 2024 EGIT Financial Consulting Co. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
