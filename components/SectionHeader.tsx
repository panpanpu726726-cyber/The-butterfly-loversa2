
import React, { useContext } from 'react';
import { LanguageContext } from '../App';

interface SectionHeaderProps {
  en: string;
  cn: string;
  subtitleEn?: string;
  subtitleCn?: string;
  centered?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ en, cn, subtitleEn, subtitleCn, centered = true }) => {
  const { lang } = useContext(LanguageContext);
  
  return (
    <header className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <div className={`flex flex-col ${centered ? 'items-center' : ''} space-y-4`}>
        <h2 className={`text-4xl md:text-6xl text-[#8b6b23] ink-glow leading-tight`} 
            style={{ 
              fontFamily: lang === 'cn' ? "'Zhi Mang Xing', cursive" : "'Playfair Display', serif",
            }}>
          {lang === 'en' ? en : cn}
        </h2>
        <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#A6342E]/60 to-transparent" />
        {(lang === 'en' ? subtitleEn : subtitleCn) && (
          <p className="text-base md:text-lg text-[#1a1a1a]/70 max-w-2xl mx-auto mt-4 font-medium italic leading-relaxed" 
             style={{ fontFamily: "'Playfair Display', serif" }}>
            {lang === 'en' ? subtitleEn : subtitleCn}
          </p>
        )}
      </div>
    </header>
  );
};

export default SectionHeader;
