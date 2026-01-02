
import React, { useContext } from 'react';
import SectionHeader from '../components/SectionHeader';
import { LanguageContext } from '../App';

const History: React.FC = () => {
  const { lang } = useContext(LanguageContext);

  const t = {
    en: {
      title: "The Legend of Liang Zhu · Historical Context",
      sub: "A tragic love story is never accidental. The fate of Liang Shanbo and Zhu Yingtai was shaped by the social hierarchy, values, and beliefs of the Eastern Jin Dynasty. These cultural contexts reveal why their tragedy was inevitable.",
      quote: "History is the mirror that reflects the heart of the legend.",
      footer: "The story first appeared in the 'Records of the Han and Jin Dynasties'. Over 1,600 years, it has evolved into a national myth."
    },
    cn: {
      title: "梁祝传说 · 时代背景",
      sub: "一段爱情悲剧，从来不是偶然。梁山伯与祝英台的命运，深深嵌入东晋时代的社会结构、价值体系与文化观念之中。透过这些关键词，理解悲剧为何必然发生。",
      quote: "历史是映照传说核心的一面明镜。",
      footer: "《梁祝》故事最早见于《韩晋春秋》。一千六百多年间，它已从地方逸事演变为不朽的国家神话。"
    }
  }[lang];

  const cards = [
    {
      titleEn: "Aristocratic Hierarchy",
      titleCn: "门第制度",
      bodyEn: "In the Eastern Jin Dynasty, aristocratic clans dominated politics and society. Lineage determined one’s future, and marriage between social classes was forbidden. Zhu Yingtai, despite her talent, was bound by her aristocratic identity, while Liang Shanbo’s humble background made acceptance impossible. Their tragedy was rooted in this rigid hierarchy.",
      bodyCn: "东晋时期，门阀士族掌握社会与政治资源，家族出身决定人生道路。“士庶不通婚”是一条不可逾越的铁律。祝英台虽才情出众，却首先是士族之女，她的婚姻从一开始就服务于家族利益。梁山伯即便有学识，也因寒门出身而被排除在士族体系之外，悲剧的根源由此奠定。"
    },
    {
      titleEn: "Wei–Jin Elegance",
      titleCn: "魏晋风度",
      bodyEn: "Political turmoil encouraged intellectual liberation. Influenced by Daoist philosophy, scholars valued individuality and emotional expression, a spirit later called “Wei–Jin elegance.” This cultural climate made Zhu Yingtai’s pursuit of education conceivable.",
      bodyCn: "战乱频仍的时代反而催生了思想解放。玄学兴盛，士人追求个性、情感与精神自由，形成了被称为“魏晋风度”的文化气质。这种氛围，使祝英台突破女性禁锢、选择外出求学在精神上成为可能。"
    },
    {
      titleEn: "Female Education",
      titleCn: "女子游学",
      bodyEn: "Although women’s education was relatively tolerated in the Six Dynasties, traveling to study like men was extraordinary. Zhu Yingtai’s disguise challenged gender norms and foreshadowed the fragility of her secret.",
      bodyCn: "汉魏六朝时期，江南地区对女性才学相对宽容，但女性离家游学仍属惊世之举。祝英台女扮男装求学，不仅挑战性别秩序，也为故事埋下了身份必然暴露的隐忧。"
    },
    {
      titleEn: "Academy Culture",
      titleCn: "同窗文化",
      bodyEn: "The rise of private academies and scholarly travel allowed students to study together across regions. Liang and Zhu’s shared years as classmates reflected genuine educational practices of the time.",
      bodyCn: "游学与私学兴盛，使不同地域的学子得以结伴求学。书院成为思想交流的空间。“三年同窗”并非浪漫虚构，而是当时知识流动背景下的真实社会场景。"
    },
    {
      titleEn: "Marriage Ethics",
      titleCn: "婚姻伦理",
      bodyEn: "Marriage in traditional society served family alliances rather than personal affection. Arranged unions were moral and legal obligations, making Zhu Yingtai’s betrothal a social norm rather than individual cruelty.",
      bodyCn: "在传统社会，婚姻是家族事务，而非个人选择。“父母之命，媒妁之言”具有法律与伦理效力。祝英台被许配马家，是父亲履行家族责任的行为，并非单纯的情感压迫。"
    },
    {
      titleEn: "Soul Beliefs",
      titleCn: "灵魂观念",
      bodyEn: "Belief in the immortality of the soul led to customs such as spirit marriage. The shared grave symbolizes a posthumous reunion, offering emotional resolution beyond social constraints.",
      bodyCn: "古人相信灵魂不灭，未竟之缘可在死后完成。“坟裂合葬”的结局，源于冥婚与亡灵信仰，是民间对现实悲剧的一种精神补偿。"
    },
    {
      titleEn: "Butterfly Symbolism",
      titleCn: "化蝶象征",
      bodyEn: "The transformation into butterflies was a later addition, symbolizing freedom, love, and spiritual transcendence. It elevated the story from tragedy to enduring cultural myth.",
      bodyCn: "“化蝶”并非故事最早结局，而是后世民间的浪漫升华。蝴蝶象征自由、爱情与灵魂重生，使梁祝从现实悲剧升华为跨越生死的文化象征。"
    }
  ];

  return (
    <div className="py-24 bg-[#F9F7F2] relative">
      {/* Decorative vertical line to enhance structural rhythm */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-black/5 -translate-x-1/2 hidden lg:block" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Top Banner Image Placeholder */}
        <figure className="w-full h-[240px] md:h-[360px] bg-[#EAE3D1] mb-16 border border-[#D4C4A8]/40 relative overflow-hidden flex items-center justify-center shadow-inner">
          <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
          <div className="text-center relative z-10 select-none pointer-events-none opacity-20">
            <span className="cn-font text-8xl md:text-9xl text-[#8b6b23]">{lang === 'cn' ? '晋' : 'JIN'}</span>
          </div>
        </figure>

        <div className="mb-24">
          <SectionHeader 
            en={t.title} 
            cn={t.title} 
            subtitleEn={t.sub}
            subtitleCn={t.sub}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {cards.map((card, index) => (
            <div key={index} className="bg-[#fdfcf9] p-10 md:p-12 border border-[#D4C4A8]/40 border-t-4 border-t-[#A6342E] shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group flex flex-col h-full">
              
              {/* Card Image Placeholder Area */}
              <figure className="h-40 bg-[#F4F1E8] mb-8 border-b border-[#D4C4A8]/20 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#A6342E]/5 to-transparent opacity-50" />
                <span className="text-xs tracking-[0.3em] text-[#8b6b23]/30 uppercase font-bold">{lang === 'cn' ? '历史图鉴' : 'Historical Archive'}</span>
                <div className="absolute bottom-2 right-2 text-[4rem] leading-none text-black/[0.02] font-serif select-none">0{index + 1}</div>
              </figure>

              <h3 className={`text-2xl font-bold mb-8 text-[#1a1a1a] tracking-tight border-b border-[#D4C4A8]/20 pb-4 inline-block w-full group-hover:text-[#A6342E] transition-colors ${lang === 'cn' ? 'font-serif' : ''}`}>
                {lang === 'en' ? card.titleEn : card.titleCn}
              </h3>
              <p className={`text-[#4A4A4A] leading-relaxed text-base font-light flex-grow ${lang === 'en' ? 'font-serif italic' : 'font-sans'}`}>
                {lang === 'en' ? card.bodyEn : card.bodyCn}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-32 p-12 md:p-20 bg-[#1A1A1A] text-[#F9F7F2] relative overflow-hidden shadow-2xl">
          <div className="absolute right-0 bottom-0 opacity-[0.07] pointer-events-none transform translate-x-1/4 translate-y-1/4">
            <span className="cn-font text-[25rem] leading-none select-none italic">{lang === 'cn' ? '史' : 'H'}</span>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto text-center md:text-left">
            <h3 className="text-3xl md:text-5xl font-bold mb-10 italic leading-tight text-white/95" style={{ fontFamily: "'Playfair Display', serif" }}>
              "{t.quote}"
            </h3>
            <div className="w-16 h-1 bg-[#A6342E] mb-10 hidden md:block" />
            <p className="opacity-70 text-lg md:text-xl leading-relaxed font-light font-serif">
              {t.footer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
