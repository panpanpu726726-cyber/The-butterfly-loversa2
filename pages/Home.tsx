
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../App';

const Home: React.FC = () => {
  const { lang } = useContext(LanguageContext);

  const t = {
    en: {
      heroTitle: "The Butterfly Lovers",
      sub1: "A timeless tale of love, tragedy, and metamorphosis that transcends centuries.",
      sub2: "CHINESE INTANGIBLE CULTURAL HERITAGE",
      cta: "ENTER EXHIBITION"
    },
    cn: {
      heroTitle: "梁山伯与祝英台",
      sub1: "一段超越世纪的爱、悲剧与蜕变的永恒传说。",
      sub2: "中国非物质文化遗产",
      cta: "进入展馆"
    }
  }[lang];

  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
      {/* Background Motifs - subtle and atmospheric */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none flex items-center justify-center">
         <div className="text-[25vw] leading-none select-none text-[#8b6b23]" style={{ fontFamily: "'Zhi Mang Xing', cursive" }}>
           {lang === 'cn' ? '化蝶' : 'LOVE'}
         </div>
      </div>

      <div className="relative z-10 max-w-5xl fade-in flex flex-col items-center py-12">
        {/* Main Title */}
        <h1 className="text-[#1a1a1a] text-6xl md:text-9xl mb-8 tracking-tight"
            style={{ fontFamily: lang === 'cn' ? "'Zhi Mang Xing', cursive" : "'Playfair Display', serif" }}>
          {t.heroTitle}
        </h1>

        {/* New Introduction Text Line 1 */}
        <p className="text-xl md:text-2xl text-[#1a1a1a]/80 font-serif italic mb-6 max-w-3xl leading-relaxed">
          {t.sub1}
        </p>

        {/* New Introduction Text Line 2 - Heritage Label */}
        <p className="text-sm md:text-base text-[#A6342E] tracking-[0.4em] font-medium mb-12 uppercase">
          {t.sub2}
        </p>

        {/* Action Button - Placed below with adequate spacing to avoid overlap */}
        <div className="mt-4">
          <Link to="/legend" className="inline-block px-12 py-3 border-2 border-[#1a1a1a]/30 text-[#1a1a1a] text-sm tracking-[0.5em] hover:bg-[#1a1a1a] hover:text-white transition-all duration-700 uppercase font-bold flex items-center gap-3">
            {t.cta} <span className="text-lg">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
