
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../../components/SectionHeader';
import { LanguageContext } from '../../App';

const HeritageOral: React.FC = () => {
  const { lang } = useContext(LanguageContext);
  const nav = {
    en: { back: "Back to Heritage Overview", next: "Explore Other Domains" },
    cn: { back: "返回非遗总览", next: "探索其他非遗领域" }
  }[lang];

  return (
    <div className="py-24 bg-[#F9F7F2] min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader 
          en="Oral Tradition: Regional Memory and Variants" 
          cn="口传传统中的梁祝：地方记忆与变体" 
        />
        
        <article className="space-y-24 font-serif text-[#4A4A4A]">
          {/* Module 1: Context */}
          <section className="text-xl italic leading-relaxed text-center max-w-3xl mx-auto border-b border-[#D4C4A8]/20 pb-12">
            {lang === 'cn' 
              ? '口传文学是非遗的“原始森林”。在文字定型之前，传说是靠着呼吸与方言，在田间地头、茶馆饭肆中自由生长的活态文本。'
              : 'Oral tradition is the "old-growth forest" of ICH. Before fixed texts, legends grew freely through breath and dialect in rural and urban spaces.'}
          </section>

          {/* Module 2: Formation */}
          <section className="space-y-6">
            <h3 className="text-2xl font-bold text-black border-l-4 border-[#A6342E] pl-4">
              {lang === 'cn' ? '一、口头叙事的历史源流' : 'I. Origins of Oral Narrative'}
            </h3>
            <div className="bg-white/50 p-8 space-y-4">
              <p>{lang === 'cn' 
                ? '梁祝故事最早通过宣卷、弹词、歌谣的形式在江南流传。这种口耳相传的方式使得故事极具灵活性，不同地域的人们会根据当地的地理环境对情节细节进行“本地化”修正，形成了多中心的叙事版图。'
                : 'The story first spread via ballads and storytelling. This oral transmission allowed for flexibility, as different regions "localized" details, creating a multi-centered narrative landscape.'}</p>
            </div>
          </section>

          {/* Module 3: Features */}
          <section className="space-y-8">
            <h3 className="text-2xl font-bold text-black border-l-4 border-[#A6342E] pl-4">
              {lang === 'cn' ? '二、核心艺术特征：叙事方式与地域差异' : 'II. Core Artistic Features'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h4 className="font-bold text-[#8b6b23] uppercase tracking-wider">{lang === 'cn' ? '· 方言赋予的活态生命' : '· Dialectal Vitality'}</h4>
                <p>{lang === 'cn' 
                  ? '各地方言的韵律为故事注入了独特的人情味。这种口头表达的流动性，使得同一传说在不同地域呈现出截然不同的性格特征。'
                  : 'The rhythms of dialects inject unique human warmth. The fluidity of oral expression allows the legend to show different regional characters.'}</p>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-[#8b6b23] uppercase tracking-wider">{lang === 'cn' ? '· 叙事逻辑的民间智慧' : '· Folk Narrative Wisdom'}</h4>
                <p>{lang === 'cn' 
                  ? '口传版本中常包含大量民间谚语、隐喻与生活细节，补充了精英书写中缺失的市井温度与百姓情感。'
                  : 'Oral versions often include folk proverbs and metaphors, supplementing the "official" texts with emotional depth.'}</p>
              </div>
            </div>
          </section>

          {/* Module 4: Contemporary Status */}
          <section className="space-y-6">
            <h3 className="text-2xl font-bold text-black border-l-4 border-[#A6342E] pl-4">
              {lang === 'cn' ? '三、当代传承与保护现状' : 'III. Contemporary Status & Preservation'}
            </h3>
            <p>{lang === 'cn' 
              ? '随着老一代讲述人的离去，纯粹的口传文学面临断代风险。目前的保护工作重点在于田野调查与口述历史的数字化存档，试图将脆弱的声音记忆转化为永恒的数字档案。'
              : 'As older storytellers pass away, oral literature faces disconnection. Preservation focus is now on field investigations and digital archiving of these fragile memories.'}</p>
          </section>

          {/* Module 5: ICH Perspective */}
          <section className="p-8 bg-[#1A1A1A] text-white/80 rounded-sm">
            <h4 className="text-white font-bold mb-4">{lang === 'cn' ? '非遗体系总结' : 'ICH Perspective Summary'}</h4>
            <p className="italic">
              {lang === 'cn' 
                ? '口传文学是非遗多样性的终极体现，它证明了同一传说的不同变体正是其生命力不断延续的秘密所在。'
                : 'Oral tradition is the ultimate manifestation of ICH diversity, proving that narrative variants are the secret to the legend\'s endurance.'}
            </p>
          </section>
        </article>

        {/* Cross-navigation Module */}
        <div className="mt-32 pt-12 border-t border-[#D4C4A8]/40">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <Link to="/heritage" className="text-[#A6342E] font-bold tracking-widest uppercase hover:gap-4 transition-all flex items-center gap-2 group">
              <span className="group-hover:-translate-x-1 transition-transform">←</span> {nav.back}
            </Link>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/heritage/opera" className="px-6 py-2 border border-[#8b6b23]/30 text-xs font-bold hover:bg-[#8b6b23] hover:text-white transition-all uppercase tracking-widest">{lang === 'cn' ? '越剧艺术' : 'Opera'}</Link>
              <Link to="/heritage/music" className="px-6 py-2 border border-[#8b6b23]/30 text-xs font-bold hover:bg-[#8b6b23] hover:text-white transition-all uppercase tracking-widest">{lang === 'cn' ? '音乐传承' : 'Music'}</Link>
              <Link to="/heritage/crafts" className="px-6 py-2 border border-[#8b6b23]/30 text-xs font-bold hover:bg-[#8b6b23] hover:text-white transition-all uppercase tracking-widest">{lang === 'cn' ? '民间工艺' : 'Crafts'}</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeritageOral;
