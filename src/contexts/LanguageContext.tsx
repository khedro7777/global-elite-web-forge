
import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Language {
  code: string;
  name: string;
  flag: string;
  direction: 'ltr' | 'rtl';
}

export const languages: Language[] = [
  { code: 'en', name: 'English', flag: '🇺🇸', direction: 'ltr' },
  { code: 'ar', name: 'العربية', flag: '🇪🇬', direction: 'rtl' },
  { code: 'fr', name: 'Français', flag: '🇫🇷', direction: 'ltr' },
  { code: 'es', name: 'Español', flag: '🇪🇸', direction: 'ltr' },
  { code: 'zh', name: '中文', flag: '🇨🇳', direction: 'ltr' },
  { code: 'ko', name: '한국어', flag: '🇰🇷', direction: 'ltr' },
  { code: 'ja', name: '日本語', flag: '🇯🇵', direction: 'ltr' },
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳', direction: 'ltr' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪', direction: 'ltr' },
];

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0]);

  useEffect(() => {
    document.documentElement.dir = currentLanguage.direction;
    document.documentElement.lang = currentLanguage.code;
  }, [currentLanguage]);

  const setLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
    localStorage.setItem('preferred-language', lang.code);
  };

  const t = (key: string): string => {
    return translations[currentLanguage.code]?.[key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const translations: Record<string, Record<string, string>> = {
  en: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.clients': 'Clients',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'EGIT Financial Consulting Co.',
    'hero.subtitle': 'Financial & Industrial Consulting',
    'hero.description': 'Leading expertise in financial and industrial consulting services',
    'hero.cta': 'Get Started',
    
    // About
    'about.title': 'About EGIT',
    'about.description': 'EGIT Financial Consulting Co. is a leading provider of comprehensive financial and industrial consulting services. We specialize in delivering innovative solutions that drive business growth and operational excellence.',
    
    // Services
    'services.title': 'Our Services',
    'services.financial': 'Financial Consulting',
    'services.industrial': 'Industrial Consulting',
    'services.advisory': 'Strategic Advisory',
    'services.analysis': 'Market Analysis',
    
    // Clients
    'clients.title': 'Our Clients',
    'clients.description': 'The trust of our clients is the main driving force behind our ability to deliver real added value in every project we lead. We are proud to partner with a distinguished group of leading global companies that have trusted our long consultancy expertise across various business domains.',
    'clients.relationships': 'Our relationships are built on solid foundations of professionalism, confidentiality, and commitment.',
    'clients.partnerships': 'Our successful partnerships stand as the strongest testimony to our commitment, precision, and honesty.',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.name': 'Full Name',
    'contact.email': 'Email Address',
    'contact.phone': 'Phone Number',
    'contact.subject': 'Subject',
    'contact.message': 'Message',
    'contact.files': 'Attach Files',
    'contact.send': 'Send Message',
    'contact.info': 'Contact Information',
    'contact.address': '10 Talat Noman st, Ramel station- Alexandria- Egypt',
    'contact.tel': 'Tel: (+2) 01019026150 -01004249507',
    'contact.email_addr': 'Info@egitconsulting.online',
    'contact.website': 'www.egitconsulting.online',
  },
  ar: {
    // Header
    'nav.home': 'الرئيسية',
    'nav.about': 'عن الشركة',
    'nav.services': 'خدماتنا',
    'nav.clients': 'عملاؤنا',
    'nav.contact': 'اتصل بنا',
    
    // Hero
    'hero.title': 'شركة إيجيت للاستشارات المالية',
    'hero.subtitle': 'الاستشارات المالية والصناعية',
    'hero.description': 'خبرة رائدة في خدمات الاستشارات المالية والصناعية',
    'hero.cta': 'ابدأ الآن',
    
    // About
    'about.title': 'عن إيجيت',
    'about.description': 'شركة إيجيت للاستشارات المالية هي مزود رائد لخدمات الاستشارات المالية والصناعية الشاملة. نحن متخصصون في تقديم حلول مبتكرة تدفع نمو الأعمال والتميز التشغيلي.',
    
    // Services
    'services.title': 'خدماتنا',
    'services.financial': 'الاستشارات المالية',
    'services.industrial': 'الاستشارات الصناعية',
    'services.advisory': 'الاستشارات الاستراتيجية',
    'services.analysis': 'تحليل السوق',
    
    // Clients
    'clients.title': 'عملاؤنا',
    'clients.description': 'ثقة عملائنا هي القوة الدافعة الرئيسية وراء قدرتنا على تقديم قيمة مضافة حقيقية في كل مشروع نقوده. نحن فخورون بالشراكة مع مجموعة متميزة من الشركات العالمية الرائدة التي وثقت في خبرتنا الاستشارية الطويلة عبر مختلف مجالات الأعمال.',
    'clients.relationships': 'علاقاتنا مبنية على أسس قوية من الاحترافية والسرية والالتزام.',
    'clients.partnerships': 'شراكاتنا الناجحة تقف كأقوى شهادة على التزامنا ودقتنا وصدقنا.',
    
    // Contact
    'contact.title': 'اتصل بنا',
    'contact.name': 'الاسم الكامل',
    'contact.email': 'البريد الإلكتروني',
    'contact.phone': 'رقم الهاتف',
    'contact.subject': 'الموضوع',
    'contact.message': 'الرسالة',
    'contact.files': 'إرفاق ملفات',
    'contact.send': 'إرسال الرسالة',
    'contact.info': 'معلومات التواصل',
    'contact.address': '10 شارع طلعت نعمان، محطة الرمل - الإسكندرية - مصر',
    'contact.tel': 'هاتف: (+2) 01019026150 -01004249507',
    'contact.email_addr': 'Info@egitconsulting.online',
    'contact.website': 'www.egitconsulting.online',
  },
  // Add more languages with similar structure...
  fr: {
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.services': 'Services',
    'nav.clients': 'Clients',
    'nav.contact': 'Contact',
    'hero.title': 'EGIT Financial Consulting Co.',
    'hero.subtitle': 'Conseil Financier et Industriel',
    'hero.description': 'Expertise de pointe dans les services de conseil financier et industriel',
    'clients.title': 'Nos Clients',
    // Add more French translations...
  },
  // Similar structure for other languages...
};

export default LanguageProvider;
