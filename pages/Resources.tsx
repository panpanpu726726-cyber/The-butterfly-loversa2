
import React, { useContext } from 'react';
import { LanguageContext } from '../App';

const Resources: React.FC = () => {
  const { lang } = useContext(LanguageContext);

  const t = {
    en: {
      pageTitle: "Resources · Authoritative References",
      pageSub: "A curated gateway to primary texts, institutional archives, and academic platforms that document, preserve, and interpret the Liang–Zhu legacy.",
      modules: [
        {
          id: "M1",
          title: "Historical & Textual Records",
          desc: "The Liang–Zhu legend occupies a significant position in the history of Chinese folk literature. This module provides access to authoritative digital archives of classical texts, local gazetteers, and early narrative records, documenting the legend’s evolution from the Tang dynasty onward.",
          links: [
            { name: "National Library of China — Digital Collections", url: "https://www.nlc.cn/" },
            { name: "Scripta Sinica (Academia Sinica) — Chinese Classical Texts Database", url: "https://hanchi.ihp.sinica.edu.tw/" },
            { name: "National Center for the Preservation and Conservation of Ancient Books", url: "https://www.nlc.cn/pcab/" }
          ],
          bg: "https://picsum.photos/seed/records/1600/600"
        },
        {
          id: "M2",
          title: "Museums & Cultural Institutions",
          desc: "Museums and cultural institutions safeguard both the material artifacts and intangible traditions associated with the Liang–Zhu story. These official platforms present exhibitions, archival collections, and contemporary interpretations through curated and scholarly perspectives.",
          links: [
            { name: "China Intangible Cultural Heritage Network (Official)", url: "http://www.ihchina.cn/" },
            { name: "National Museum of China — Official Website", url: "https://en.chnmuseum.cn/" },
            { name: "Zhejiang Provincial Museum — Digital Exhibitions", url: "https://www.zhejiangmuseum.com/" }
          ],
          bg: "https://picsum.photos/seed/museums/1600/600"
        },
        {
          id: "M3",
          title: "Sites & Architecture",
          desc: "Historical sites and traditional architecture serve as spatial anchors of cultural memory. This module indexes officially recognized heritage locations associated with the Liang–Zhu narrative, including academies, memorial sites, and culturally significant landscapes.",
          links: [
            { name: "Wansong Academy (Hangzhou) — Cultural Heritage Introduction", url: "https://www.hangzhou.gov.cn/" },
            { name: "Archaeological Ruins of Liangzhu City — UNESCO World Heritage Centre", url: "https://whc.unesco.org/en/list/1592" }
          ],
          bg: "https://picsum.photos/seed/sites/1600/600"
        },
        {
          id: "M4",
          title: "Academic Research Platforms",
          desc: "Scholarly research platforms provide theoretical frameworks for interpreting the Liang–Zhu legend in historical, literary, and sociological contexts. These databases host peer-reviewed research, academic journals, and institutional studies.",
          links: [
            { name: "National Social Sciences Database of China", url: "https://www.ncpssd.org/" },
            { name: "China National Knowledge Infrastructure (CNKI)", url: "https://www.cnki.net/" },
            { name: "Chinese Folklore Society — Academic Resources", url: "http://www.chinesefolklore.org.cn/" }
          ],
          bg: "https://picsum.photos/seed/academic/1600/600"
        }
      ],
      footerNote: "All external links direct to officially recognized academic, governmental, or international cultural heritage platforms. The accuracy and maintenance of external content are managed by the respective institutions."
    },
    cn: {
      pageTitle: "资源索引 · 权威参考",
      pageSub: "汇集梁祝文化相关的原始文献、机构档案与学术平台，为深入研究与公共认知提供可靠入口。",
      modules: [
        {
          id: "M1",
          title: "历史文献与文本记录",
          desc: "梁祝传说在中国民间文学史上具有重要的文献研究价值。本模块整合国家级与学术机构的数字资源，涵盖古籍、地方志及早期叙事文本，呈现传说自唐代以来的历史演变脉络。",
          links: [
            { name: "中国国家图书馆 · 数字资源库", url: "https://www.nlc.cn/" },
            { name: "中央研究院 · 汉籍电子文献资料库", url: "https://hanchi.ihp.sinica.edu.tw/" },
            { name: "国家古籍保护中心", url: "https://www.nlc.cn/pcab/" }
          ],
          bg: "https://picsum.photos/seed/records/1600/600"
        },
        {
          id: "M2",
          title: "博物馆与文化机构",
          desc: "博物馆与非物质文化遗产机构是梁祝文化物质与精神形态的重要守护者。通过官方平台，可系统了解相关藏品、展览、保护项目与当代展示方式。",
          links: [
            { name: "中国非物质文化遗产网（官方）", url: "http://www.ihchina.cn/" },
            { name: "中国国家博物馆（官网）", url: "https://www.chnmuseum.cn/" },
            { name: "浙江省博物馆 · 数字展厅", url: "https://www.zhejiangmuseum.com/" }
          ],
          bg: "https://picsum.photos/seed/museums/1600/600"
        },
        {
          id: "M3",
          title: "遗迹与历史建筑",
          desc: "历史遗迹与传统建筑构成梁祝文化记忆的重要空间载体。本模块汇集官方文化遗产机构对相关书院、遗址与文化景观的权威介绍与保护信息。",
          links: [
            { name: "杭州万松书院 · 文化史迹介绍", url: "https://www.hangzhou.gov.cn/" },
            { name: "良渚古城遗址 · 联合国教科文组织世界遗产中心", url: "https://whc.unesco.org/en/list/1592" }
          ],
          bg: "https://picsum.photos/seed/sites/1600/600"
        },
        {
          id: "M4",
          title: "学术研究平台",
          desc: "学术研究平台为梁祝传说的当代阐释提供严谨的理论支持，涵盖民俗学、文学研究与文化社会学等领域的重要研究成果。",
          links: [
            { name: "国家哲学社会科学文献中心", url: "https://www.ncpssd.org/" },
            { name: "中国知网（CNKI）", url: "https://www.cnki.net/" },
            { name: "中国民俗学会（官方）", url: "http://www.chinesefolklore.org.cn/" }
          ],
          bg: "https://picsum.photos/seed/academic/1600/600"
        }
      ],
      footerNote: "本页面所列资源均来自官方、学术或国际文化遗产机构，外部内容的准确性由相关机构负责维护。"
    }
  }[lang];

  const handleLinkClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-[#F9F7F2] selection:bg-[#A6342E]/10 min-h-screen">
      {/* 1. Page Header */}
      <section className="pt-32 pb-24 text-center border-b border-black/5">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1A1A1A]">
            {t.pageTitle}
          </h1>
          <p className="text-lg md:text-xl text-[#4A4A4A] font-light leading-relaxed max-w-2xl mx-auto">
            {t.pageSub}
          </p>
        </div>
      </section>

      {/* 2-5. Content Modules */}
      <div className="flex flex-col">
        {t.modules.map((mod, index) => (
          <section key={mod.id} className="relative min-h-[500px] flex items-center overflow-hidden group">
            {/* Module Background Image Placeholder */}
            <div className="absolute inset-0 z-0">
              <img 
                src={mod.bg} 
                className="w-full h-full object-cover grayscale opacity-10 group-hover:opacity-20 transition-opacity duration-1000" 
                alt={mod.title} 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#F9F7F2] via-[#F9F7F2]/90 to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center gap-16 py-20">
              <div className="md:w-3/5 space-y-8">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-bold text-[#A6342E] tracking-[0.4em]">{mod.id}</span>
                  <div className="h-px w-12 bg-[#A6342E]/30" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">
                  {mod.title}
                </h2>
                <p className="text-lg text-[#4A4A4A] leading-relaxed max-w-xl font-light">
                  {mod.desc}
                </p>
              </div>

              <div className="md:w-2/5 flex flex-col gap-4 w-full">
                {mod.links.map((link, lIndex) => (
                  <button 
                    key={lIndex}
                    onClick={() => handleLinkClick(link.url)}
                    className="w-full py-4 px-6 border border-black/10 bg-white/50 hover:bg-black hover:text-white transition-all text-sm font-bold tracking-widest uppercase flex justify-between items-center group/btn text-left"
                  >
                    <span className="pr-4">{link.name}</span>
                    <span className="transform translate-x-0 group-hover/btn:translate-x-2 transition-transform shrink-0">→</span>
                  </button>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* 6. Page Footer */}
      <section className="py-24 border-t border-black/5 bg-[#1A1A1A]/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm text-[#4A4A4A]/60 italic tracking-wide">
            {t.footerNote}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Resources;
