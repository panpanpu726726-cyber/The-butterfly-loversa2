
import React, { useContext } from 'react';
import SectionHeader from '../components/SectionHeader';
import { LanguageContext } from '../App';

const Modern: React.FC = () => {
  const { lang } = useContext(LanguageContext);

  const items = [
    {
      id: "01",
      titleEn: "Digital Media & Animation",
      titleCn: "数字媒体与动画",
      descEn: "From 3D animated feature films to immersive mobile games, the legend is being repackaged for Gen Z.",
      descCn: "从3D动画长片到沉浸式手游，这一传说正面向Z世代进行全新的包装和演绎。"
    },
    {
      id: "02",
      titleEn: "VR Museum Exhibits",
      titleCn: "VR 博物馆展览",
      descEn: "Contemporary museums use Virtual Reality to transport visitors to the Wansong Academy.",
      descCn: "当代博物馆利用VR技术，将参观者带回万松书院，体验跨越时空的同窗情谊。"
    },
    {
      id: "03",
      titleEn: "Modern Dance & Ballet",
      titleCn: "现代舞与芭蕾",
      descEn: "The story is a staple in modern ballet, re-envisioned through avant-garde movement.",
      descCn: "通过先锋的肢体语言，现代芭蕾舞将这一故事的核心情感极致纯粹地呈现在舞台上。"
    }
  ];

  return (
    <div className="py-24 bg-[#F9F7F2]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          en="Contemporary Interpretation" 
          cn="当代演绎" 
          subtitleEn="How the legend lives on in the digital age."
          subtitleCn="在数字化时代，蝴蝶的翅膀依然在艺术的视野中扇动。"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-8">
            {items.map(item => (
              <div key={item.id} className="p-8 bg-[#F1EEE6] rounded-sm relative group overflow-hidden border border-transparent hover:border-[#A6342E]/20 transition-all">
                <div className="absolute -right-4 -top-4 text-8xl opacity-5 font-bold pointer-events-none">{item.id}</div>
                <h3 className="text-2xl font-bold mb-4">{lang === 'en' ? item.titleEn : item.titleCn}</h3>
                <p className="text-[#4A4A4A] leading-relaxed font-light">
                  {lang === 'en' ? item.descEn : item.descCn}
                </p>
              </div>
            ))}
          </div>

          <div className="relative">
            <img src="https://picsum.photos/seed/modernart/800/1200" alt="Modern Interpretation" className="w-full h-full object-cover rounded-sm shadow-xl grayscale-[20%]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 to-transparent flex items-end p-12">
              <p className="text-[#F9F7F2] text-xl font-light italic">
                {lang === 'en' 
                  ? '"The core of the legend remains unchanged: the pursuit of truth, beauty, and love against all odds."'
                  : '“传说的核心始终未变：在那艰难的岁月中，对真、善、美的执着追求。”'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modern;
