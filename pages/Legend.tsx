
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import { LanguageContext } from '../App';

const ACTS = [
  {
    titleEn: "Chapter I: The Origin · Sworn Brotherhood",
    titleCn: "第一章｜缘起 · 草桥结拜",
    descriptionEn: "During the Eastern Jin Dynasty, Zhu Yingtai, a gifted young woman from Shangyu, longed for knowledge. Disguising herself as a man, she set out for Kuaiji to study. On her journey, she met the scholar Liang Shanbo at the Straw Bridge Pavilion. Finding themselves kindred spirits, they became sworn brothers under the willow trees, vowing to travel together.",
    descriptionCn: "东晋时期，浙江上虞祝家庄的才女祝英台自幼聪慧，心向求学。她说服父母，女扮男装，踏上前往会稽求学的旅程。途中，祝英台在草桥亭邂逅同样前往书院求学的书生梁山伯。二人言谈投契，一见如故，遂在柳荫之下义结金兰，结为兄弟，相约同行。",
    image: "https://picsum.photos/seed/liangzhu1/1000/700"
  },
  {
    titleEn: "Chapter II: Studying Together · Three Years of Companionship",
    titleCn: "第二章｜同窗 · 三载朝夕",
    descriptionEn: "At the academy, Liang and Zhu studied and lived together for three years. The honest and diligent Liang cared deeply for his 'younger brother,' while Zhu's feelings grew into deep love. Despite her many subtle metaphors hinting at her true identity, Liang remained tragically unaware of the truth hidden beneath her scholar's robes.",
    descriptionCn: "在书院中，梁山伯与祝英台同窗共读、同室而居。梁山伯性情淳厚，勤勉治学，对这位“贤弟”关怀备至；祝英台则小心掩饰身份，内心情感逐渐生根。三年时光里，两人建立了深厚而真挚的情谊。其间，祝英台多次以隐喻方式暗示自身真实身份，但梁山伯始终未能参透其中深意。",
    image: "https://picsum.photos/seed/liangzhu2/1000/700"
  },
  {
    titleEn: "Chapter III: The Farewell · Eighteen Miles of Sending Off",
    titleCn: "第三章｜离别 · 十八相送",
    descriptionEn: "Called home by her family, Zhu had to leave. Liang escorted her for eighteen miles from the academy to the long pavilion. Along the way, Zhu used imagery like mandarin ducks and reflections in a well to reveal her secret, even proposing a marriage to her 'ninth sister' at home. Alas, her intentions went uncomprehended.",
    descriptionCn: "因家书催促，祝英台不得不中断学业，返乡省亲。梁山伯一路相送，自书院行至长亭，这段送别被后世称为“十八相送”。沿途，祝英台借景寄情，以鸳鸯、井中倒影、观音堂等意象反复暗示自身女儿之身，并托付“家中九妹”的婚约之意，盼梁山伯早日登门提亲。然而，这一切终究未被完全领悟。",
    image: "https://picsum.photos/seed/liangzhu3/1000/700"
  },
  {
    titleEn: "Chapter IV: Sudden Change · Meeting at the Tower",
    titleCn: "第四章｜惊变 · 楼台相会",
    descriptionEn: "A year later, Liang visited Zhu and finally realized his 'sworn brother' was a woman. Overjoyed, he sought a matchmaker, only to find she had been betrothed to the son of a powerful prefect. The two met one last time at the tower, mourning their fate. Liang returned home in despair and soon fell ill from a broken heart.",
    descriptionCn: "一年后，梁山伯前往上虞探访祝英台，方知昔日结拜的“贤弟”竟是女子，往日种种暗示顿时恍然。梁山伯喜悦之余，立即托人做媒，欲求良缘。然而，祝英台早已被父母许配给鄮县太守之子马文才。二人在楼台相会，互诉衷肠，却深知命运难以更改。梁山伯郁郁返乡，不久抑郁成疾。",
    image: "https://picsum.photos/seed/liangzhu4/1000/700"
  },
  {
    titleEn: "Chapter V: Sacrificing for Love · Metamorphosis",
    titleCn: "第五章｜殉情 · 哭坟化蝶",
    descriptionEn: "After Liang died, Zhu was forced into marriage. During her wedding procession, she stopped at Liang's grave. As she wept in grief, the earth split open and she leaped inside. A pair of butterflies emerged from the tomb, dancing together for eternity. This story of love and defiance has moved hearts for over a thousand years, transcending death to reach the realm of the eternal.",
    descriptionCn: "不久之后，梁山伯病逝，遗愿葬于九龙墟。次年春天，祝英台被迫出嫁。迎亲途中，船行至梁山伯墓前，骤起风雨，舟行受阻。祝英台身着素衣登岸祭拜，悲恸哭诉。忽然雷霆震动，坟墓裂开，祝英台毅然投身其中，与梁山伯合葬。顷刻间，风雨止歇，一双彩蝶自墓中飞出，翩然起舞，自此相随不离。",
    image: "https://picsum.photos/seed/liangzhu5/1000/700"
  }
];

const Legend: React.FC = () => {
  const { lang } = useContext(LanguageContext);

  return (
    <div className="py-24 bg-[#f4eee0] selection:bg-[#A6342E]/10 relative overflow-hidden">
      {/* Decorative Ink Texture Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader 
          en="The Butterfly Lovers" 
          cn="梁山伯与祝英台" 
          subtitleEn="A legend of love originating in the Eastern Jin and recorded since the Tang Dynasty, spanning over a millennium. Its core narrative has been enriched through generations, transforming into the most moving symbol of butterflies in Chinese cultural memory."
          subtitleCn="这是一个起源于东晋、记载于唐代，流传千年的爱情传说。它既包含一见如故的知己之情，也承载着生死相随的炽烈爱恋。其故事的核心骨架早见于古籍文献，后在戏曲、民间艺术与文学书写中不断被丰富与升华，最终化身为中华文化记忆中最为动人的“蝴蝶”象征。"
        />

        <div className="mt-32 space-y-48">
          {ACTS.map((act, idx) => (
            <div key={idx} className="relative">
              {idx < ACTS.length - 1 && (
                <div className="hidden md:block absolute left-1/2 top-full h-48 w-px bg-gradient-to-b from-[#A6342E]/20 to-transparent -translate-x-1/2" />
              )}
              
              <div className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-16 items-center`}>
                <div className="w-full md:w-3/5">
                  <div className="relative group">
                    <div className="absolute inset-0 border border-[#8b6b23]/20 -m-4 transition-transform duration-700 group-hover:scale-95" />
                    <div className="overflow-hidden shadow-xl">
                      <img 
                        src={act.image} 
                        alt={lang === 'en' ? act.titleEn : act.titleCn} 
                        className="w-full h-[500px] object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2500ms] ease-out"
                      />
                    </div>
                    <div className="absolute -top-8 -left-8 md:-left-12 w-20 h-20 bg-[#A6342E] shadow-lg flex flex-col items-center justify-center text-white border-2 border-white/20">
                      <span className="text-[10px] tracking-widest opacity-80 uppercase font-sans">Act</span>
                      <span className="text-3xl font-serif font-bold leading-none">{idx + 1}</span>
                    </div>
                  </div>
                </div>

                <div className={`w-full md:w-2/5 space-y-8 ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right md:items-end flex flex-col'}`}>
                  <div>
                    <h3 className="text-[#A6342E] text-4xl mb-2 ink-glow" style={{ fontFamily: "'Zhi Mang Xing', cursive" }}>
                      {act.titleCn}
                    </h3>
                    <h4 className="text-[#1A1A1A] text-2xl tracking-wide italic" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {act.titleEn}
                    </h4>
                  </div>
                  <div className={`h-px w-16 bg-[#A6342E]/40 ${idx % 2 === 0 ? '' : 'ml-auto'}`} />
                  <div className="space-y-6">
                    <p className={`text-xl leading-relaxed text-[#1A1A1A] font-medium opacity-90 whitespace-pre-wrap ${lang === 'cn' ? 'block' : 'hidden'}`}>
                      {act.descriptionCn}
                    </p>
                    <p className={`text-lg leading-relaxed text-[#2a2a2a]/80 font-serif italic whitespace-pre-wrap ${lang === 'en' ? 'block' : 'hidden'}`}>
                      {act.descriptionEn}
                    </p>
                  </div>
                  <div className={`text-[#8b6b23]/20 pointer-events-none select-none ${idx % 2 === 0 ? '' : 'self-end'}`}>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L9.5 7h5L12 2zm0 20l2.5-5h-5L12 22zm-8-10l5 2.5v-5L4 12zm16 0l-5-2.5v5l5-2.5z" opacity="0.4"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Refined Academic Footnote Section (Based on Reference Image) */}
        <div className="mt-48 flex flex-col items-center text-center space-y-12">
          {/* Vertical Separator */}
          <div className="w-px h-48 bg-[#8b6b23]/20" />
          
          {/* Main Footnote Text */}
          <div className="max-w-4xl px-6">
            <p className="text-[#1a1a1a]/70 text-xl md:text-2xl italic leading-relaxed font-serif">
              {lang === 'cn' 
                ? "我们今日所熟知的《梁山伯与祝英台》故事，是历史记载与艺术想象长期交织的结果。其最早可靠文献可追溯至唐代张读所著《宣室志》，其中已出现女扮男装、同窗共读、访后知女、祝哀恸而墓裂合葬等关键情节，并被后世视为传说权威性的文本基础。"
                : "The story of the Butterfly Lovers as we know it today is a product of centuries where historical records and artistic imagination intertwined. Its earliest reliable source dates back to the Tang Dynasty's 'Xuan Shi Zhi' by Zhang Du, establishing the authoritative textual foundation for this immortal legend."}
            </p>
          </div>

          {/* Navigation Links with Brackets */}
          <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-4 text-[#A6342E] font-serif text-lg md:text-xl">
            <span className="opacity-60 font-medium">{lang === 'cn' ? '欢迎继续浏览：' : 'Continue Exploring: '}</span>
            <Link to="/history" className="hover:text-black transition-colors">「{lang === 'cn' ? '历史溯源' : 'History'}」</Link>
            <span className="opacity-30">|</span>
            <Link to="/heritage" className="hover:text-black transition-colors">「{lang === 'cn' ? '非遗艺术' : 'Heritage'}」</Link>
            <span className="opacity-30">|</span>
            <Link to="/modern" className="hover:text-black transition-colors">「{lang === 'cn' ? '当代演绎' : 'Modern'}」</Link>
            <span className="opacity-30">|</span>
            <Link to="/resources" className="hover:text-black transition-colors">「{lang === 'cn' ? '资料巡礼' : 'Resources'}」</Link>
          </div>

          {/* Large Calligraphy Closing */}
          <div className="pt-16">
            <p className="text-[#A6342E]/30 text-7xl md:text-8xl select-none ink-glow" style={{ fontFamily: "'Zhi Mang Xing', cursive" }}>
              {lang === 'cn' ? "生不同襟，死必同穴" : "United in Eternal Love"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legend;
