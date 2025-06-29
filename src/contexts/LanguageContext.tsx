
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

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.clients': 'Clients',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'EGIT Financial Consulting Co.',
    'hero.subtitle': 'Your Strategic Partner in Financial Excellence',
    'hero.description': 'Leading provider of comprehensive financial and industrial consulting services, empowering businesses to achieve sustainable growth and operational excellence.',
    'hero.cta': 'Get Started',
    'hero.learn_more': 'Learn More',
    
    // About Section
    'about.title': 'About EGIT',
    'about.subtitle': 'Excellence in Financial Consulting',
    'about.description': 'EGIT Financial Consulting Co. stands as a beacon of excellence in the financial consulting industry. With years of expertise and a commitment to innovation, we provide comprehensive solutions that drive business success.',
    'about.mission': 'Our Mission',
    'about.mission_text': 'To empower businesses with strategic financial insights and innovative solutions that drive sustainable growth and competitive advantage.',
    'about.vision': 'Our Vision',
    'about.vision_text': 'To be the leading financial consulting firm recognized for our expertise, integrity, and commitment to client success.',
    'about.values': 'Our Values',
    'about.values_text': 'Excellence, Integrity, Innovation, and Client-Centricity guide everything we do.',
    
    // Services Section
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive Financial Solutions',
    'services.financial_consulting': 'Financial Consulting',
    'services.financial_consulting_desc': 'Strategic financial planning and analysis to optimize your business performance.',
    'services.investment_advisory': 'Investment Advisory',
    'services.investment_advisory_desc': 'Expert guidance on investment strategies and portfolio management.',
    'services.risk_management': 'Risk Management',
    'services.risk_management_desc': 'Comprehensive risk assessment and mitigation strategies.',
    'services.business_development': 'Business Development',
    'services.business_development_desc': 'Strategic planning and execution for sustainable business growth.',
    'services.compliance': 'Compliance & Regulatory',
    'services.compliance_desc': 'Ensuring your business meets all regulatory requirements and standards.',
    'services.training': 'Training & Development',
    'services.training_desc': 'Professional development programs to enhance your team capabilities.',
    
    // Clients Section
    'clients.title': 'Our Clients',
    'clients.subtitle': 'Trusted by Industry Leaders',
    'clients.description': 'We are proud to serve a diverse portfolio of clients across various industries, helping them achieve their financial objectives.',
    
    // Contact Section
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Get in Touch',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.subject': 'Subject',
    'contact.message': 'Message',
    'contact.files': 'Attach Files',
    'contact.send': 'Send Message',
    'contact.info': 'Contact Information',
    'contact.address': 'Address',
    'contact.tel': 'Phone',
    'contact.email_addr': 'Email',
    'contact.website': 'Website',
    
    // Social Media
    'social.share': 'Share & Follow',
    'social.share_on': 'Share on',
    'social.copy_link': 'Copy Link',
    'social.follow_us': 'Follow Us',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.services': 'خدماتنا',
    'nav.clients': 'عملاؤنا',
    'nav.contact': 'اتصل بنا',
    
    // Hero Section
    'hero.title': 'شركة إيجيت للاستشارات المالية',
    'hero.subtitle': 'شريكك الاستراتيجي في التميز المالي',
    'hero.description': 'مقدم رائد لخدمات الاستشارات المالية والصناعية الشاملة، نمكن الشركات من تحقيق النمو المستدام والتميز التشغيلي.',
    'hero.cta': 'ابدأ الآن',
    'hero.learn_more': 'اعرف المزيد',
    
    // About Section
    'about.title': 'عن إيجيت',
    'about.subtitle': 'التميز في الاستشارات المالية',
    'about.description': 'تقف شركة إيجيت للاستشارات المالية كمنارة للتميز في صناعة الاستشارات المالية. مع سنوات من الخبرة والالتزام بالابتكار، نقدم حلولاً شاملة تقود نجاح الأعمال.',
    'about.mission': 'مهمتنا',
    'about.mission_text': 'تمكين الشركات برؤى مالية استراتيجية وحلول مبتكرة تدفع النمو المستدام والميزة التنافسية.',
    'about.vision': 'رؤيتنا',
    'about.vision_text': 'أن نكون شركة الاستشارات المالية الرائدة المعترف بها لخبرتنا ونزاهتنا والتزامنا بنجاح العملاء.',
    'about.values': 'قيمنا',
    'about.values_text': 'التميز والنزاهة والابتكار والتركيز على العملاء توجه كل ما نقوم به.',
    
    // Services Section
    'services.title': 'خدماتنا',
    'services.subtitle': 'حلول مالية شاملة',
    'services.financial_consulting': 'الاستشارات المالية',
    'services.financial_consulting_desc': 'التخطيط والتحليل المالي الاستراتيجي لتحسين أداء أعمالك.',
    'services.investment_advisory': 'الاستشارات الاستثمارية',
    'services.investment_advisory_desc': 'إرشادات الخبراء حول استراتيجيات الاستثمار وإدارة المحافظ.',
    'services.risk_management': 'إدارة المخاطر',
    'services.risk_management_desc': 'تقييم شامل للمخاطر واستراتيجيات التخفيف منها.',
    'services.business_development': 'تطوير الأعمال',
    'services.business_development_desc': 'التخطيط والتنفيذ الاستراتيجي لنمو الأعمال المستدام.',
    'services.compliance': 'الامتثال والتنظيم',
    'services.compliance_desc': 'ضمان استيفاء أعمالك لجميع المتطلبات والمعايير التنظيمية.',
    'services.training': 'التدريب والتطوير',
    'services.training_desc': 'برامج التطوير المهني لتعزيز قدرات فريقك.',
    
    // Clients Section
    'clients.title': 'عملاؤنا',
    'clients.subtitle': 'موثوق به من قادة الصناعة',
    'clients.description': 'نفخر بخدمة محفظة متنوعة من العملاء عبر مختلف الصناعات، مساعدتهم في تحقيق أهدافهم المالية.',
    
    // Contact Section
    'contact.title': 'اتصل بنا',
    'contact.subtitle': 'تواصل معنا',
    'contact.name': 'الاسم',
    'contact.email': 'البريد الإلكتروني',
    'contact.phone': 'الهاتف',
    'contact.subject': 'الموضوع',
    'contact.message': 'الرسالة',
    'contact.files': 'إرفاق ملفات',
    'contact.send': 'إرسال الرسالة',
    'contact.info': 'معلومات الاتصال',
    'contact.address': 'العنوان',
    'contact.tel': 'الهاتف',
    'contact.email_addr': 'البريد الإلكتروني',
    'contact.website': 'الموقع الإلكتروني',
    
    // Social Media
    'social.share': 'شارك وتابع',
    'social.share_on': 'شارك على',
    'social.copy_link': 'نسخ الرابط',
    'social.follow_us': 'تابعنا',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.services': 'Services',
    'nav.clients': 'Clients',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'EGIT Financial Consulting Co.',
    'hero.subtitle': 'Votre partenaire stratégique en excellence financière',
    'hero.description': 'Fournisseur leader de services de conseil financier et industriel complets, habilitant les entreprises à atteindre une croissance durable et l\'excellence opérationnelle.',
    'hero.cta': 'Commencer',
    'hero.learn_more': 'En savoir plus',
    
    // About Section
    'about.title': 'À propos d\'EGIT',
    'about.subtitle': 'Excellence en conseil financier',
    'about.description': 'EGIT Financial Consulting Co. se dresse comme un phare d\'excellence dans l\'industrie du conseil financier. Avec des années d\'expertise et un engagement envers l\'innovation, nous fournissons des solutions complètes qui stimulent le succès commercial.',
    'about.mission': 'Notre mission',
    'about.mission_text': 'Autonomiser les entreprises avec des insights financiers stratégiques et des solutions innovantes qui stimulent la croissance durable et l\'avantage concurrentiel.',
    'about.vision': 'Notre vision',
    'about.vision_text': 'Être la première entreprise de conseil financier reconnue pour notre expertise, notre intégrité et notre engagement envers le succès des clients.',
    'about.values': 'Nos valeurs',
    'about.values_text': 'Excellence, Intégrité, Innovation et Centricité client guident tout ce que nous faisons.',
    
    // Services Section
    'services.title': 'Nos services',
    'services.subtitle': 'Solutions financières complètes',
    'services.financial_consulting': 'Conseil financier',
    'services.financial_consulting_desc': 'Planification et analyse financières stratégiques pour optimiser les performances de votre entreprise.',
    'services.investment_advisory': 'Conseil en investissement',
    'services.investment_advisory_desc': 'Conseils d\'experts sur les stratégies d\'investissement et la gestion de portefeuille.',
    'services.risk_management': 'Gestion des risques',
    'services.risk_management_desc': 'Évaluation complète des risques et stratégies d\'atténuation.',
    'services.business_development': 'Développement commercial',
    'services.business_development_desc': 'Planification et exécution stratégiques pour une croissance commerciale durable.',
    'services.compliance': 'Conformité et réglementation',
    'services.compliance_desc': 'S\'assurer que votre entreprise respecte toutes les exigences et normes réglementaires.',
    'services.training': 'Formation et développement',
    'services.training_desc': 'Programmes de développement professionnel pour améliorer les capacités de votre équipe.',
    
    // Clients Section
    'clients.title': 'Nos clients',
    'clients.subtitle': 'Approuvé par les leaders de l\'industrie',
    'clients.description': 'Nous sommes fiers de servir un portefeuille diversifié de clients dans diverses industries, les aidant à atteindre leurs objectifs financiers.',
    
    // Contact Section
    'contact.title': 'Contactez-nous',
    'contact.subtitle': 'Entrer en contact',
    'contact.name': 'Nom',
    'contact.email': 'Email',
    'contact.phone': 'Téléphone',
    'contact.subject': 'Sujet',
    'contact.message': 'Message',
    'contact.files': 'Joindre des fichiers',
    'contact.send': 'Envoyer le message',
    'contact.info': 'Informations de contact',
    'contact.address': 'Adresse',
    'contact.tel': 'Téléphone',
    'contact.email_addr': 'Email',
    'contact.website': 'Site web',
    
    // Social Media
    'social.share': 'Partager et suivre',
    'social.share_on': 'Partager sur',
    'social.copy_link': 'Copier le lien',
    'social.follow_us': 'Suivez-nous',
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.about': 'Acerca de',
    'nav.services': 'Servicios',
    'nav.clients': 'Clientes',
    'nav.contact': 'Contacto',
    
    // Hero Section
    'hero.title': 'EGIT Financial Consulting Co.',
    'hero.subtitle': 'Su socio estratégico en excelencia financiera',
    'hero.description': 'Proveedor líder de servicios integrales de consultoría financiera e industrial, capacitando a las empresas para lograr un crecimiento sostenible y excelencia operacional.',
    'hero.cta': 'Empezar',
    'hero.learn_more': 'Saber más',
    
    // About Section
    'about.title': 'Acerca de EGIT',
    'about.subtitle': 'Excelencia en consultoría financiera',
    'about.description': 'EGIT Financial Consulting Co. se erige como un faro de excelencia en la industria de consultoría financiera. Con años de experiencia y un compromiso con la innovación, proporcionamos soluciones integrales que impulsan el éxito empresarial.',
    'about.mission': 'Nuestra misión',
    'about.mission_text': 'Empoderar a las empresas con perspectivas financieras estratégicas y soluciones innovadoras que impulsen el crecimiento sostenible y la ventaja competitiva.',
    'about.vision': 'Nuestra visión',
    'about.vision_text': 'Ser la empresa líder de consultoría financiera reconocida por nuestra experiencia, integridad y compromiso con el éxito del cliente.',
    'about.values': 'Nuestros valores',
    'about.values_text': 'Excelencia, Integridad, Innovación y Centrismo en el cliente guían todo lo que hacemos.',
    
    // Services Section
    'services.title': 'Nuestros servicios',
    'services.subtitle': 'Soluciones financieras integrales',
    'services.financial_consulting': 'Consultoría financiera',
    'services.financial_consulting_desc': 'Planificación y análisis financiero estratégico para optimizar el rendimiento de su negocio.',
    'services.investment_advisory': 'Asesoría de inversiones',
    'services.investment_advisory_desc': 'Orientación experta sobre estrategias de inversión y gestión de carteras.',
    'services.risk_management': 'Gestión de riesgos',
    'services.risk_management_desc': 'Evaluación integral de riesgos y estrategias de mitigación.',
    'services.business_development': 'Desarrollo empresarial',
    'services.business_development_desc': 'Planificación y ejecución estratégica para el crecimiento empresarial sostenible.',
    'services.compliance': 'Cumplimiento y regulatorio',
    'services.compliance_desc': 'Asegurar que su negocio cumpla con todos los requisitos y estándares regulatorios.',
    'services.training': 'Entrenamiento y desarrollo',
    'services.training_desc': 'Programas de desarrollo profesional para mejorar las capacidades de su equipo.',
    
    // Clients Section
    'clients.title': 'Nuestros clientes',
    'clients.subtitle': 'Confiado por líderes de la industria',
    'clients.description': 'Nos enorgullece servir a una cartera diversa de clientes en varias industrias, ayudándolos a lograr sus objetivos financieros.',
    
    // Contact Section
    'contact.title': 'Contáctanos',
    'contact.subtitle': 'Ponte en contacto',
    'contact.name': 'Nombre',
    'contact.email': 'Correo electrónico',
    'contact.phone': 'Teléfono',
    'contact.subject': 'Asunto',
    'contact.message': 'Mensaje',
    'contact.files': 'Adjuntar archivos',
    'contact.send': 'Enviar mensaje',
    'contact.info': 'Información de contacto',
    'contact.address': 'Dirección',
    'contact.tel': 'Teléfono',
    'contact.email_addr': 'Correo electrónico',
    'contact.website': 'Sitio web',
    
    // Social Media
    'social.share': 'Compartir y seguir',
    'social.share_on': 'Compartir en',
    'social.copy_link': 'Copiar enlace',
    'social.follow_us': 'Síguenos',
  },
  zh: {
    // Navigation
    'nav.home': '首页',
    'nav.about': '关于我们',
    'nav.services': '服务',
    'nav.clients': '客户',
    'nav.contact': '联系我们',
    
    // Hero Section
    'hero.title': 'EGIT 金融咨询公司',
    'hero.subtitle': '您的战略合作伙伴，追求金融卓越',
    'hero.description': '综合金融和工业咨询服务的领先提供者，赋能企业实现可持续增长和运营卓越。',
    'hero.cta': '开始',
    'hero.learn_more': '了解更多',
    
    // About Section
    'about.title': '关于EGIT',
    'about.subtitle': '金融咨询的卓越',
    'about.description': 'EGIT金融咨询公司在金融咨询行业中是卓越的标杆。凭借多年的专业知识和对创新的承诺，我们提供推动商业成功的全面解决方案。',
    'about.mission': '我们的使命',
    'about.mission_text': '用战略金融洞察和创新解决方案赋能企业，推动可持续增长和竞争优势。',
    'about.vision': '我们的愿景',
    'about.vision_text': '成为以专业知识、诚信和对客户成功承诺而受到认可的领先金融咨询公司。',
    'about.values': '我们的价值观',
    'about.values_text': '卓越、诚信、创新和以客户为中心指导我们所做的一切。',
    
    // Services Section
    'services.title': '我们的服务',
    'services.subtitle': '综合金融解决方案',
    'services.financial_consulting': '金融咨询',
    'services.financial_consulting_desc': '战略金融规划和分析，优化您的业务表现。',
    'services.investment_advisory': '投资顾问',
    'services.investment_advisory_desc': '投资策略和投资组合管理的专业指导。',
    'services.risk_management': '风险管理',
    'services.risk_management_desc': '综合风险评估和缓解策略。',
    'services.business_development': '业务发展',
    'services.business_development_desc': '可持续业务增长的战略规划和执行。',
    'services.compliance': '合规与监管',
    'services.compliance_desc': '确保您的业务符合所有监管要求和标准。',
    'services.training': '培训与发展',
    'services.training_desc': '提升团队能力的专业发展项目。',
    
    // Clients Section
    'clients.title': '我们的客户',
    'clients.subtitle': '受到行业领导者信任',
    'clients.description': '我们自豪地为各行各业的多样化客户提供服务，帮助他们实现财务目标。',
    
    // Contact Section
    'contact.title': '联系我们',
    'contact.subtitle': '取得联系',
    'contact.name': '姓名',
    'contact.email': '电子邮件',
    'contact.phone': '电话',
    'contact.subject': '主题',
    'contact.message': '消息',
    'contact.files': '附件',
    'contact.send': '发送消息',
    'contact.info': '联系信息',
    'contact.address': '地址',
    'contact.tel': '电话',
    'contact.email_addr': '电子邮件',
    'contact.website': '网站',
    
    // Social Media
    'social.share': '分享和关注',
    'social.share_on': '分享到',
    'social.copy_link': '复制链接',
    'social.follow_us': '关注我们',
  },
  ko: {
    // Navigation
    'nav.home': '홈',
    'nav.about': '회사 소개',
    'nav.services': '서비스',
    'nav.clients': '고객',
    'nav.contact': '연락처',
    
    // Hero Section
    'hero.title': 'EGIT 금융 컨설팅',
    'hero.subtitle': '금융 우수성의 전략적 파트너',
    'hero.description': '포괄적인 금융 및 산업 컨설팅 서비스의 선도적 제공업체로, 기업이 지속 가능한 성장과 운영 우수성을 달성할 수 있도록 지원합니다.',
    'hero.cta': '시작하기',
    'hero.learn_more': '더 알아보기',
    
    // About Section
    'about.title': 'EGIT 소개',
    'about.subtitle': '금융 컨설팅의 우수성',
    'about.description': 'EGIT 금융 컨설팅은 금융 컨설팅 업계에서 우수성의 등대 역할을 합니다. 수년간의 전문 지식과 혁신에 대한 헌신으로, 우리는 비즈니스 성공을 이끄는 포괄적인 솔루션을 제공합니다.',
    'about.mission': '우리의 사명',
    'about.mission_text': '전략적 금융 통찰력과 혁신적인 솔루션으로 기업을 지원하여 지속 가능한 성장과 경쟁 우위를 추진합니다.',
    'about.vision': '우리의 비전',
    'about.vision_text': '전문 지식, 성실성 및 고객 성공에 대한 헌신으로 인정받는 선도적인 금융 컨설팅 회사가 되는 것입니다.',
    'about.values': '우리의 가치',
    'about.values_text': '우수성, 성실성, 혁신 및 고객 중심주의가 우리가 하는 모든 일을 안내합니다.',
    
    // Services Section
    'services.title': '우리의 서비스',
    'services.subtitle': '포괄적인 금융 솔루션',
    'services.financial_consulting': '금융 컨설팅',
    'services.financial_consulting_desc': '비즈니스 성과 최적화를 위한 전략적 금융 계획 및 분석.',
    'services.investment_advisory': '투자 자문',
    'services.investment_advisory_desc': '투자 전략 및 포트폴리오 관리에 대한 전문 지침.',
    'services.risk_management': '위험 관리',
    'services.risk_management_desc': '포괄적인 위험 평가 및 완화 전략.',
    'services.business_development': '사업 개발',
    'services.business_development_desc': '지속 가능한 비즈니스 성장을 위한 전략적 계획 및 실행.',
    'services.compliance': '규정 준수 및 규제',
    'services.compliance_desc': '귀하의 비즈니스가 모든 규제 요구 사항과 표준을 충족하도록 보장.',
    'services.training': '교육 및 개발',
    'services.training_desc': '팀 역량 향상을 위한 전문 개발 프로그램.',
    
    // Clients Section
    'clients.title': '우리의 고객',
    'clients.subtitle': '업계 리더들의 신뢰',
    'clients.description': '다양한 산업의 다양한 고객 포트폴리오를 제공하며, 그들의 재정 목표 달성을 돕는 것을 자랑스럽게 생각합니다.',
    
    // Contact Section
    'contact.title': '연락처',
    'contact.subtitle': '연락하기',
    'contact.name': '이름',
    'contact.email': '이메일',
    'contact.phone': '전화',
    'contact.subject': '제목',
    'contact.message': '메시지',
    'contact.files': '파일 첨부',
    'contact.send': '메시지 보내기',
    'contact.info': '연락처 정보',
    'contact.address': '주소',
    'contact.tel': '전화',
    'contact.email_addr': '이메일',
    'contact.website': '웹사이트',
    
    // Social Media
    'social.share': '공유 및 팔로우',
    'social.share_on': '공유하기',
    'social.copy_link': '링크 복사',
    'social.follow_us': '팔로우하기',
  },
  ja: {
    // Navigation
    'nav.home': 'ホーム',
    'nav.about': '会社について',
    'nav.services': 'サービス',
    'nav.clients': 'クライアント',
    'nav.contact': 'お問い合わせ',
    
    // Hero Section
    'hero.title': 'EGIT金融コンサルティング',
    'hero.subtitle': '金融エクセレンスにおける戦略的パートナー',
    'hero.description': '包括的な金融・産業コンサルティングサービスの主要プロバイダーとして、企業が持続可能な成長と運用の卓越性を達成できるよう支援しています。',
    'hero.cta': '始める',
    'hero.learn_more': '詳細を見る',
    
    // About Section
    'about.title': 'EGITについて',
    'about.subtitle': '金融コンサルティングの卓越性',
    'about.description': 'EGIT金融コンサルティングは、金融コンサルティング業界における卓越性の灯台として立っています。長年の専門知識と革新への取り組みにより、ビジネスの成功を推進する包括的なソリューションを提供しています。',
    'about.mission': '私たちの使命',
    'about.mission_text': '戦略的な金融洞察と革新的なソリューションで企業を支援し、持続可能な成長と競争優位性を推進すること。',
    'about.vision': '私たちのビジョン',
    'about.vision_text': '専門知識、誠実性、およびクライアントの成功への取り組みで認められる主要な金融コンサルティング会社になること。',
    'about.values': '私たちの価値観',
    'about.values_text': '卓越性、誠実性、革新性、およびクライアント中心主義が私たちの行うすべてを導いています。',
    
    // Services Section
    'services.title': '私たちのサービス',
    'services.subtitle': '包括的な金融ソリューション',
    'services.financial_consulting': '金融コンサルティング',
    'services.financial_consulting_desc': 'ビジネスパフォーマンスを最適化するための戦略的金融計画と分析。',
    'services.investment_advisory': '投資アドバイザリー',
    'services.investment_advisory_desc': '投資戦略とポートフォリオ管理に関する専門的ガイダンス。',
    'services.risk_management': 'リスク管理',
    'services.risk_management_desc': '包括的なリスク評価と軽減戦略。',
    'services.business_development': '事業開発',
    'services.business_development_desc': '持続可能なビジネス成長のための戦略的計画と実行。',
    'services.compliance': 'コンプライアンス・規制',
    'services.compliance_desc': 'あなたのビジネスがすべての規制要件と基準を満たすことを保証。',
    'services.training': 'トレーニング・開発',
    'services.training_desc': 'チームの能力向上のための専門開発プログラム。',
    
    // Clients Section
    'clients.title': '私たちのクライアント',
    'clients.subtitle': '業界リーダーに信頼されています',
    'clients.description': '様々な業界の多様なクライアントポートフォリオにサービスを提供し、彼らの財務目標達成を支援することを誇りに思っています。',
    
    // Contact Section
    'contact.title': 'お問い合わせ',
    'contact.subtitle': 'ご連絡ください',
    'contact.name': 'お名前',
    'contact.email': 'メールアドレス',
    'contact.phone': '電話番号',
    'contact.subject': '件名',
    'contact.message': 'メッセージ',
    'contact.files': 'ファイル添付',
    'contact.send': 'メッセージを送信',
    'contact.info': '連絡先情報',
    'contact.address': '住所',
    'contact.tel': '電話',
    'contact.email_addr': 'メールアドレス',
    'contact.website': 'ウェブサイト',
    
    // Social Media
    'social.share': 'シェア・フォロー',
    'social.share_on': 'シェアする',
    'social.copy_link': 'リンクをコピー',
    'social.follow_us': 'フォローする',
  },
  hi: {
    // Navigation
    'nav.home': 'होम',
    'nav.about': 'हमारे बारे में',
    'nav.services': 'सेवाएं',
    'nav.clients': 'ग्राहक',
    'nav.contact': 'संपर्क',
    
    // Hero Section
    'hero.title': 'EGIT वित्तीय सलाहकार कंपनी',
    'hero.subtitle': 'वित्तीय उत्कृष्टता में आपका रणनीतिक साझीदार',
    'hero.description': 'व्यापक वित्तीय और औद्योगिक सलाहकार सेवाओं के अग्रणी प्रदाता, व्यवसायों को टिकाऊ विकास और परिचालन उत्कृष्टता प्राप्त करने के लिए सशक्त बनाते हैं।',
    'hero.cta': 'शुरू करें',
    'hero.learn_more': 'और जानें',
    
    // About Section
    'about.title': 'EGIT के बारे में',
    'about.subtitle': 'वित्तीय सलाह में उत्कृष्टता',
    'about.description': 'EGIT वित्तीय सलाहकार कंपनी वित्तीय सलाहकार उद्योग में उत्कृष्टता के प्रकाश स्तंभ के रूप में खड़ी है। वर्षों की विशेषज्ञता और नवाचार के प्रति प्रतिबद्धता के साथ, हम व्यापारिक सफलता को चलाने वाले व्यापक समाधान प्रदान करते हैं।',
    'about.mission': 'हमारा मिशन',
    'about.mission_text': 'रणनीतिक वित्तीय अंतर्दृष्टि और नवाचार समाधानों के साथ व्यवसायों को सशक्त बनाना जो टिकाऊ विकास और प्रतिस्पर्धी लाभ को बढ़ाते हैं।',
    'about.vision': 'हमारी दृष्टि',
    'about.vision_text': 'हमारी विशेषज्ञता, अखंडता और ग्राहक सफलता के प्रति प्रतिबद्धता के लिए पहचाने जाने वाली अग्रणी वित्तीय सलाहकार फर्म बनना।',
    'about.values': 'हमारे मूल्य',
    'about.values_text': 'उत्कृष्टता, अखंडता, नवाचार और ग्राहक-केंद्रितता हमारे सभी कामों का मार्गदर्शन करती है।',
    
    // Services Section
    'services.title': 'हमारी सेवाएं',
    'services.subtitle': 'व्यापक वित्तीय समाधान',
    'services.financial_consulting': 'वित्तीय सलाह',
    'services.financial_consulting_desc': 'आपके व्यवसाय के प्रदर्शन को अनुकूलित करने के लिए रणनीतिक वित्तीय योजना और विश्लेषण।',
    'services.investment_advisory': 'निवेश सलाह',
    'services.investment_advisory_desc': 'निवेश रणनीतियों और पोर्टफोलियो प्रबंधन पर विशेषज्ञ मार्गदर्शन।',
    'services.risk_management': 'जोखिम प्रबंधन',
    'services.risk_management_desc': 'व्यापक जोखिम मूल्यांकन और शमन रणनीतियां।',
    'services.business_development': 'व्यवसाय विकास',
    'services.business_development_desc': 'टिकाऊ व्यावसायिक विकास के लिए रणनीतिक योजना और क्रियान्वयन।',
    'services.compliance': 'अनुपालन और नियामक',
    'services.compliance_desc': 'यह सुनिश्चित करना कि आपका व्यवसाय सभी नियामक आवश्यकताओं और मानकों को पूरा करता है।',
    'services.training': 'प्रशिक्षण और विकास',
    'services.training_desc': 'आपकी टीम की क्षमताओं को बढ़ाने के लिए व्यावसायिक विकास कार्यक्रम।',
    
    // Clients Section
    'clients.title': 'हमारे ग्राहक',
    'clients.subtitle': 'उद्योग के नेताओं द्वारा भरोसा',
    'clients.description': 'हम विभिन्न उद्योगों में विविध ग्राहकों के पोर्टफोलियो की सेवा करने पर गर्व करते हैं, उन्हें अपने वित्तीय उद्देश्यों को प्राप्त करने में मदद करते हैं।',
    
    // Contact Section
    'contact.title': 'संपर्क करें',
    'contact.subtitle': 'संपर्क में रहें',
    'contact.name': 'नाम',
    'contact.email': 'ईमेल',
    'contact.phone': 'फोन',
    'contact.subject': 'विषय',
    'contact.message': 'संदेश',
    'contact.files': 'फाइलें संलग्न करें',
    'contact.send': 'संदेश भेजें',
    'contact.info': 'संपर्क जानकारी',
    'contact.address': 'पता',
    'contact.tel': 'फोन',
    'contact.email_addr': 'ईमेल',
    'contact.website': 'वेबसाइट',
    
    // Social Media
    'social.share': 'साझा करें और फॉलो करें',
    'social.share_on': 'साझा करें',
    'social.copy_link': 'लिंक कॉपी करें',
    'social.follow_us': 'हमें फॉलो करें',
  },
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.about': 'Über uns',
    'nav.services': 'Dienstleistungen',
    'nav.clients': 'Kunden',
    'nav.contact': 'Kontakt',
    
    // Hero Section
    'hero.title': 'EGIT Financial Consulting Co.',
    'hero.subtitle': 'Ihr strategischer Partner für finanzielle Exzellenz',
    'hero.description': 'Führender Anbieter umfassender Finanz- und Industrieberatungsdienstleistungen, der Unternehmen dabei unterstützt, nachhaltiges Wachstum und operative Exzellenz zu erreichen.',
    'hero.cta': 'Loslegen',
    'hero.learn_more': 'Mehr erfahren',
    
    // About Section
    'about.title': 'Über EGIT',
    'about.subtitle': 'Exzellenz in der Finanzberatung',
    'about.description': 'EGIT Financial Consulting Co. steht als Leuchtturm der Exzellenz in der Finanzberatungsbranche. Mit jahrelanger Expertise und einem Engagement für Innovation bieten wir umfassende Lösungen, die den Geschäftserfolg vorantreiben.',
    'about.mission': 'Unsere Mission',
    'about.mission_text': 'Unternehmen mit strategischen Finanzeinblicken und innovativen Lösungen zu stärken, die nachhaltiges Wachstum und Wettbewerbsvorteile fördern.',
    'about.vision': 'Unsere Vision',
    'about.vision_text': 'Das führende Finanzberatungsunternehmen zu sein, das für unsere Expertise, Integrität und unser Engagement für den Kundenerfolg anerkannt wird.',
    'about.values': 'Unsere Werte',
    'about.values_text': 'Exzellenz, Integrität, Innovation und Kundenorientierung leiten alles, was wir tun.',
    
    // Services Section
    'services.title': 'Unsere Dienstleistungen',
    'services.subtitle': 'Umfassende Finanzlösungen',
    'services.financial_consulting': 'Finanzberatung',
    'services.financial_consulting_desc': 'Strategische Finanzplanung und -analyse zur Optimierung Ihrer Unternehmensleistung.',
    'services.investment_advisory': 'Anlageberatung',
    'services.investment_advisory_desc': 'Expertenleitfaden zu Anlagestrategien und Portfoliomanagement.',
    'services.risk_management': 'Risikomanagement',
    'services.risk_management_desc': 'Umfassende Risikobewertung und Minderungsstrategien.',
    'services.business_development': 'Geschäftsentwicklung',
    'services.business_development_desc': 'Strategische Planung und Umsetzung für nachhaltiges Unternehmenswachstum.',
    'services.compliance': 'Compliance & Regulierung',
    'services.compliance_desc': 'Sicherstellen, dass Ihr Unternehmen alle regulatorischen Anforderungen und Standards erfüllt.',
    'services.training': 'Schulung & Entwicklung',
    'services.training_desc': 'Professionelle Entwicklungsprogramme zur Verbesserung Ihrer Teamfähigkeiten.',
    
    // Clients Section
    'clients.title': 'Unsere Kunden',
    'clients.subtitle': 'Vertraut von Branchenführern',
    'clients.description': 'Wir sind stolz darauf, ein vielfältiges Portfolio von Kunden aus verschiedenen Branchen zu bedienen und ihnen dabei zu helfen, ihre finanziellen Ziele zu erreichen.',
    
    // Contact Section
    'contact.title': 'Kontakt',
    'contact.subtitle': 'In Kontakt bleiben',
    'contact.name': 'Name',
    'contact.email': 'E-Mail',
    'contact.phone': 'Telefon',
    'contact.subject': 'Betreff',
    'contact.message': 'Nachricht',
    'contact.files': 'Dateien anhängen',
    'contact.send': 'Nachricht senden',
    'contact.info': 'Kontaktinformationen',
    'contact.address': 'Adresse',
    'contact.tel': 'Telefon',
    'contact.email_addr': 'E-Mail',
    'contact.website': 'Website',
    
    // Social Media
    'social.share': 'Teilen und folgen',
    'social.share_on': 'Teilen auf',
    'social.copy_link': 'Link kopieren',
    'social.follow_us': 'Folgen Sie uns',
  },
};

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0]);

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language);
    document.documentElement.dir = language.direction;
    document.documentElement.lang = language.code;
  };

  const t = (key: string): string => {
    return translations[currentLanguage.code as keyof typeof translations]?.[key] || key;
  };

  useEffect(() => {
    document.documentElement.dir = currentLanguage.direction;
    document.documentElement.lang = currentLanguage.code;
  }, [currentLanguage]);

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageProvider;
