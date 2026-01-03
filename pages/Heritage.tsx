
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import { LanguageContext } from '../App';

const HERITAGE_CARRIERS = [
  {
    id: "01",
    path: "/heritage/opera",
    nameEn: "The Soul: Yue Opera",
    nameCn: "灵魂之声：越剧",
    subEn: "Canonical stage medium of National Intangible Heritage.",
    subCn: "国家级非遗名录中的典范性舞台艺术载体。",
    descEn: "Yue Opera transforms the literary text into an emotional sensory experience through lyrical singing and all-female casts.",
    descCn: "越剧通过委婉唱腔与全女班演艺，将文学文本转化为深切的情感感官体验，是梁祝传说传播力最强的艺术形态。",
    image: "https://picsum.photos/seed/opera_curated/1000/600"
  },
  {
    id: "02",
    path: "/heritage/music",
    nameEn: "The Global Voice: Musical Works",
    nameCn: "世界回响：音乐传承",
    subEn: "Universal language of modern symphonic transformation.",
    subCn: "现代交响化转化下的全球通用语言。",
    descEn: "Modern musical interpretations, led by the 1959 Violin Concerto, transformed folk melodies into a universal symphonic language.",
    descCn: "以1959年创作的《梁祝》小提琴协奏曲为首，现代音乐将民间旋律转化为全球通用的交响语言，实现了文化共振。",
    image: "https://picsum.photos/seed/music_curated/1000/600"
  },
  {
    id: "03",
    path: "/heritage/oral",
    nameEn: "The Living Root: Oral Tradition",
    nameCn: "生命之根：口传文学",
    subEn: "Foundational regional memory and folk variants.",
    subCn: "构成叙事底色的地域记忆与民间变体。",
    descEn: "Centuries of storytelling, ballads, and local legends form the living foundation, preserving regional diversity and dialectal warmth.",
    descCn: "跨越千年的说唱、歌谣与民间传说构成了梁祝叙事的活态基础，在不同的方言语境中保存了传说的多样性生命力。",
    image: "https://picsum.photos/seed/folk_curated/1000/600"
  },
  {
    id: "04",
    path: "/heritage/crafts",
    nameEn: "The Visual Spirit: Folk Crafts",
    nameCn: "视觉之灵：民间工艺",
    subEn: "Materialization of cultural symbols and motifs.",
    subCn: "文化符号与图腾意象的物态化传承。",
    descEn: "Visual expressions through embroidery and paper cutting, where the butterfly motif serves as a recurring cultural totem.",
    descCn: "梁祝形象在刺绣、剪纸、皮影等工艺中的视觉呈现。其中“蝴蝶”意象作为跨地域的文化图腾，在民间造物中获得了永恒。",
    image: "https://picsum.photos/seed/craft_curated/1000/600"
  }
];

const Heritage: React.FC = () => {
  const { lang } = useContext(LanguageContext);

  const t = {
    en: {
      intro: "Intangible cultural heritage is the lived expression of a legend. It exists through the continuous re-creation and transmission within performance, memory, and everyday social practice.",
      ichTitle: "Living Heritage: Beyond the Relic",
      ichText: "Why is the Butterfly Lovers an Intangible Cultural Heritage? Unlike static stone artifacts, ICH is a 'living stream'. It resides in the collective memory and spiritual practice of a community. The legend lives only as long as people continue to sing, dance, and craft its story.",
      logicTitle: "Classification by Medium",
      logicText: "We categorize the heritage into four domains based on their medium of transmission: Stage (Opera), Sound (Music), Story (Oral), and Symbol (Crafts). This multi-dimensional approach ensures the legend's survival across different layers of society.",
      entranceTip: "Select a module to enter the specialized curatorial unit.",
      footerTitle: "The Essence of Preservation",
      footerBody: "Preserving the Butterfly Lovers is about ensuring its core values—truth, freedom, and devotion—remain resonant in our modern world."
    },
    cn: {
      intro: "非物质文化遗产是传说的活态表达。它存在于表演、记忆与日常社会实践的持续再创作与传承之中，是民族精神的流转。",
      ichTitle: "非遗：超越文物的活态传承",
      ichText: "为什么梁祝会成为“非物质文化遗产”？与静止的文物不同，非遗是一条“活着的河流”。它不只存在于故纸堆中，更存在于民众的集体记忆与精神实践里。只有当人们仍在传唱、舞动与造物时，传说才具有真正的生命。",
      logicTitle: "分类逻辑：传播媒介矩阵",
      logicText: "我们根据传播媒介的不同，将梁祝非遗分为：舞台演艺（越剧）、音乐表达、口头叙事、视觉造物（工艺）四大领域。这种多维度的分类确保了传说在社会不同层面的持续渗透与存续。",
      entranceTip: "点击下方模块，进入对应的非遗专项策展单元。",
      footerTitle: "保护的本质",
      footerBody: "保护“梁祝”并非将其冻结在过去，而是确保其核心价值观——真挚、自由与对美的追求——在现代语境下依然能够引发深切的共鸣。"
    }
  }[lang];

  return (
    <div className="bg-[#F9F7F2] selection:bg-[#A6342E]/10 pb-24">
      
      {/* Module 1: Page Introduction */}
      <section className="pt-24 pb-16 border-b border-[#D4C4A8]/20 bg-white/30">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            en="Heritage of the Butterfly Lovers" 
            cn="非物质文化遗产 · 从传说到民间艺术" 
            subtitleEn="Exploring the artistic forms that sustain the legend's living pulse"
            subtitleCn="探索那些让传说在表演、记忆与传统中获得永恒生命的艺术载体"
          />
          <div className="mt-12 text-center">
            <p className="text-xl md:text-2xl text-[#1a1a1a]/70 max-w-4xl mx-auto font-serif italic leading-relaxed">
              "{t.intro}"
            </p>
          </div>
        </div>
      </section>

      {/* NEW: Module 1.1 - Relationship between Age and ICH */}
      <section className="py-24 bg-white/40">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-8 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-[#A6342E]">{t.ichTitle}</h3>
            <p className="text-lg text-[#4A4A4A] leading-loose font-serif italic border-l-4 border-[#A6342E]/20 pl-6">
              {t.ichText}
            </p>
          </div>
        </div>
      </section>

      {/* NEW: Module 1.2 - Classification Logic */}
      <section className="py-16 bg-[#f4eee0]/50 border-y border-[#D4C4A8]/20">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/3">
            <h4 className="text-xl font-bold text-[#8b6b23] tracking-widest uppercase mb-2">{lang === 'cn' ? '分类逻辑' : 'LOGIC'}</h4>
            <div className="h-1 w-12 bg-[#8b6b23]/30" />
          </div>
          <div className="md:w-2/3 space-y-4">
            <h5 className="text-2xl font-bold text-black">{t.logicTitle}</h5>
            <p className="text-[#4A4A4A] leading-relaxed">{t.logicText}</p>
            <p className="text-xs font-bold text-[#A6342E] tracking-widest uppercase mt-4">
              {t.entranceTip}
            </p>
          </div>
        </div>
      </section>

      {/* Module 3: Enhanced Carriers (Existing list with academic sub-descriptions) */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 space-y-48">
          {HERITAGE_CARRIERS.map((item, idx) => (
            <Link key={idx} to={item.path} className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16 md:gap-24 group`}>
              {/* Image Section */}
              <div className="w-full md:w-3/5">
                <figure className="relative">
                  <div className={`absolute inset-0 border-2 border-[#D4C4A8]/30 -m-4 md:-m-8 transition-transform duration-700 ${idx % 2 === 0 ? 'group-hover:translate-x-2 group-hover:translate-y-2' : 'group-hover:-translate-x-2 group-hover:translate-y-2'}`} />
                  <div className="overflow-hidden shadow-2xl bg-[#EAE3D1]">
                    <img 
                      src={item.image} 
                      alt={lang === 'en' ? item.nameEn : item.nameCn} 
                      className="w-full h-[400px] md:h-[500px] object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-[2000ms] group-hover:scale-110"
                    />
                  </div>
                  <div className={`absolute top-0 ${idx % 2 === 0 ? 'left-0' : 'right-0'} bg-[#A6342E] text-white p-4 md:p-6 shadow-lg`}>
                    <span className="text-4xl font-serif font-bold italic opacity-30 block">{item.id}</span>
                  </div>
                </figure>
              </div>

              {/* Text Section */}
              <div className="w-full md:w-2/5 space-y-8">
                <div className="space-y-4">
                  <h4 className="text-3xl md:text-4xl text-[#1a1a1a] font-bold tracking-tight group-hover:text-[#A6342E] transition-colors">
                    {lang === 'en' ? item.nameEn : item.nameCn}
                  </h4>
                  <p className="text-[#8b6b23] font-bold tracking-widest text-sm uppercase">
                    {lang === 'en' ? item.subEn : item.subCn}
                  </p>
                  <div className="h-1 w-16 bg-[#A6342E]" />
                </div>
                <div className="space-y-6">
                  <p className="text-[#4A4A4A] text-lg md:text-xl leading-relaxed font-light font-serif">
                    {lang === 'en' ? item.descEn : item.descCn}
                  </p>
                  <div className="flex items-center gap-4 text-[#A6342E] text-sm tracking-[0.2em] font-bold uppercase group-hover:gap-6 transition-all">
                    <span>{lang === 'en' ? "Enter Specialized Curatorial Unit" : "进入非遗专项策展单元"}</span>
                    <span className="text-xl">→</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Module 4: Footer */}
      <section className="py-24 bg-[#1a1a1a] text-[#F9F7F2] mt-32">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
          <h3 className="text-3xl md:text-5xl font-serif">{t.footerTitle}</h3>
          <p className="text-xl opacity-70 font-light leading-loose italic">
            "{t.footerBody}"
          </p>
          <div className="w-16 h-px bg-[#A6342E] mx-auto" />
        </div>
      </section>

    </div>
  );
};

export default Heritage;
