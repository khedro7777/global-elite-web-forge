
import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Linkedin, Twitter, Instagram, Share2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface SocialShareProps {
  url?: string;
  title?: string;
  description?: string;
  className?: string;
}

const SocialShare: React.FC<SocialShareProps> = ({ 
  url = window.location.href,
  title = "EGIT Financial Consulting Co.",
  description = "Leading provider of comprehensive financial and industrial consulting services",
  className = ""
}) => {
  const { t, currentLanguage } = useLanguage();

  const socialPlatforms = [
    {
      name: 'Facebook',
      icon: Facebook,
      color: 'from-blue-600 to-blue-700',
      hoverColor: 'hover:from-blue-500 hover:to-blue-600',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(title + ' - ' + description)}`,
      handle: '@egitconsulting'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      color: 'from-blue-700 to-blue-800',
      hoverColor: 'hover:from-blue-600 hover:to-blue-700',
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      handle: 'EGIT Financial Consulting'
    },
    {
      name: 'X (Twitter)',
      icon: Twitter,
      color: 'from-black to-gray-800',
      hoverColor: 'hover:from-gray-800 hover:to-gray-700',
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title + ' - ' + description)}&hashtags=consulting,finance,business`,
      handle: '@egitconsulting'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      color: 'from-pink-500 to-purple-600',
      hoverColor: 'hover:from-pink-400 hover:to-purple-500',
      url: 'https://www.instagram.com/egitconsulting/',
      handle: '@egitconsulting'
    }
  ];

  const handleShare = (platform: typeof socialPlatforms[0]) => {
    if (platform.name === 'Instagram') {
      // Instagram doesn't support direct sharing via URL, so open their page
      window.open(platform.url, '_blank', 'noopener,noreferrer');
    } else {
      window.open(
        platform.url,
        '_blank',
        'width=600,height=400,scrollbars=yes,resizable=yes'
      );
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      // You could add a toast notification here
      console.log('URL copied to clipboard');
    } catch (err) {
      console.error('Failed to copy URL:', err);
    }
  };

  return (
    <div className={`${className}`}>
      <div className="flex items-center space-x-2 mb-4">
        <Share2 className="w-5 h-5 text-cyan-400" />
        <h4 className="text-white font-semibold">
          {t('social.share') || 'Share & Follow'}
        </h4>
      </div>
      
      <div className="flex flex-wrap gap-3">
        {socialPlatforms.map((platform, index) => (
          <motion.button
            key={platform.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            onClick={() => handleShare(platform)}
            className={`group relative w-12 h-12 bg-gradient-to-br ${platform.color} ${platform.hoverColor} rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg`}
            title={`${t('social.share_on') || 'Share on'} ${platform.name}`}
          >
            <platform.icon className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
            
            {/* Tooltip */}
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {platform.handle}
            </div>
          </motion.button>
        ))}
        
        {/* Copy Link Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.3 }}
          onClick={copyToClipboard}
          className="group relative w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
          title={t('social.copy_link') || 'Copy Link'}
        >
          <Share2 className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
          
          {/* Tooltip */}
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {t('social.copy_link') || 'Copy Link'}
          </div>
        </motion.button>
      </div>
    </div>
  );
};

export default SocialShare;
