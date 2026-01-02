
import React, { useState, createContext, useContext } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Legend from './pages/Legend';
import History from './pages/History';
import Heritage from './pages/Heritage';
import Modern from './pages/Modern';
import Resources from './pages/Resources';

type Language = 'en' | 'cn';
interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
}
export const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  setLang: () => {},
});

const Navigation = () => {
  const location = useLocation();
  const { lang, setLang } = useContext(LanguageContext);

  const links = [
    { path: '/', labelEn: 'HOME', labelCn: '首页' },
    { path: '/legend', labelEn: 'THE LEGEND', labelCn: '传奇' },
    { path: '/history', labelEn: 'HISTORY', labelCn: '历史' },
    { path: '/heritage', labelEn: 'HERITAGE', labelCn: '非遗' },
    { path: '/modern', labelEn: 'MODERN', labelCn: '现代' },
    { path: '/resources', labelEn: 'RESOURCES', labelCn: '资源' },
  ];

  const LanguageToggle = () => (
    <div className="flex items-center ml-4">
      <button 
        onClick={() => setLang(lang === 'en' ? 'cn' : 'en')}
        className="flex items-center gap-2 text-black/80 hover:text-black transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
        <span className="text-[11px] font-bold tracking-widest uppercase">{lang === 'en' ? 'EN' : '中'}</span>
      </button>
    </div>
  );

  return (
    <nav className="sticky top-0 z-50 bg-[#f4eee0]/95 backdrop-blur-md px-8 py-4 border-b border-black/5 shadow-sm">
      <div className="max-w-[1600px] mx-auto flex justify-between items-center">
        {/* Left: Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-full bg-[#A6342E] flex items-center justify-center text-[#f4eee0] font-serif italic text-lg shadow-sm group-hover:scale-105 transition-transform">
            LZ
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-[13px] tracking-[0.15em] text-[#1a1a1a] leading-none uppercase">BUTTERFLY LOVERS</span>
            <span className="text-[9px] tracking-[0.2em] opacity-40 font-sans font-medium uppercase mt-0.5">DIGITAL ARCHIVE</span>
          </div>
        </Link>

        {/* Center/Right: Nav Links */}
        <div className="flex items-center flex-1 justify-end mr-8">
          <div className="flex items-center">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-all px-4 py-2 relative group ${
                  location.pathname === link.path ? 'text-[#A6342E] font-bold' : 'text-black/60 hover:text-black'
                } ${lang === 'cn' ? 'text-lg' : 'text-[11px] tracking-[0.2em] uppercase font-medium'}`}
                style={{ fontFamily: lang === 'cn' ? "'Zhi Mang Xing', cursive" : "'Playfair Display', serif" }}
              >
                {lang === 'en' ? link.labelEn : link.labelCn}
                {location.pathname === link.path && (
                  <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-[#A6342E]" />
                )}
              </Link>
            ))}
          </div>
        </div>

        {/* Far Right: Language Toggle */}
        <LanguageToggle />
      </div>
    </nav>
  );
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <Router>
        <div className="min-h-screen flex flex-col selection:bg-[#8b6b23]/20 selection:text-[#8b6b23]">
          <Navigation />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/legend" element={<Legend />} />
              <Route path="/history" element={<History />} />
              <Route path="/heritage" element={<Heritage />} />
              <Route path="/modern" element={<Modern />} />
              <Route path="/resources" element={<Resources />} />
            </Routes>
          </main>
          <footer className="bg-[#e9e1d1] text-black/40 py-12 px-8 border-t border-black/5">
            <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
              <span className="text-lg" style={{ fontFamily: "'Zhi Mang Xing', cursive" }}>{lang === 'en' ? 'Butterfly Lovers Archive' : '梁祝数字档案馆'}</span>
              <p className="text-[10px] tracking-[0.3em] uppercase">© 2024 LIANG ZHU Exhibition Project</p>
            </div>
          </footer>
        </div>
      </Router>
    </LanguageContext.Provider>
  );
};

export default App;
