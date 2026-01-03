
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../../components/SectionHeader';
import { LanguageContext } from '../../App';

const HeritageMusic: React.FC = () => {
  const { lang } = useContext(LanguageContext);
  const nav = {
    en: { back: "Back to Heritage Overview", next: "Explore Other Domains" },
    cn: { back: "返回非遗总览", next: "探索其他非遗领域" }
  }[lang];

  return (
    <div className="py-24 bg-[#F9F7F2] min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader 
          en="Liang Zhu Music: From Folk Melody to Global Stage" 
          cn="《梁祝》音乐：从民间旋律到世界舞台" 
        />
        
        <article className="space-y-24 font-serif text-[#4A4A4A]">
          {/* Module 1: Context */}
          <section className="text-xl italic leading-relaxed text-center max-w-3xl mx-auto border-b border-[#D4C4A8]/20 pb-12">
            {lang === 'cn' 
              ? '音乐是打破文化壁垒的通用语言。梁祝旋律通过跨越国界的交响化改编，成为中国文化走向世界最重要的听觉名片。'
              : 'Music is a universal language. Through cross-border symphonic adaptations, the Liang-Zhu melody has become China\'s most important auditory signature globally.'}
          </section>

          {/* Module 2: Formation */}
          <section className="space-y-6">
            <h3 className="text-2xl font-bold text-black border-l-4 border-[#A6342E] pl-4">
              {lang === 'cn' ? '一、现代交响化转化过程' : 'I. Modern Symphonic Transformation'}
            </h3>
            <div className="bg-white/50 p-8 space-y-4">
              <p>{lang === 'cn' 
                ? '1959年，由何占豪、陈钢创作的小提琴协奏曲《梁祝》问世。该作巧妙地将中国戏剧的五声音阶融入西方奏鸣曲式，实现了中国民族风格与西洋配器法的完美结合，奠定了梁祝音乐的现代基石。'
                : 'In 1959, the Butterfly Lovers Violin Concerto by He Zhanhao and Chen Gang was premiered. It integrated Chinese pentatonic scales into Western sonata form, establishing the modern foundation of Liang-Zhu music.'}</p>
            </div>
          </section>

          {/* Module 3: Features */}
          <section className="space-y-8">
            <h3 className="text-2xl font-bold text-black border-l-4 border-[#A6342E] pl-4">
              {lang === 'cn' ? '二、核心艺术特征：旋律、结构与叙事' : 'II. Core Artistic Features'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h4 className="font-bold text-[#8b6b23] uppercase tracking-wider">{lang === 'cn' ? '· 跨语言的器乐叙事' : '· Instrumental Narrative'}</h4>
                <p>{lang === 'cn' 
                  ? '作品摒弃了文字限制，纯粹依靠小提琴与大提琴的“性别化”对话来模拟梁祝的冲突与柔情，使情感跨越了语言的鸿沟。'
                  : 'The work relies on the "gendered" dialogue between the violin and cello to simulate interactions, crossing language barriers.'}</p>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-[#8b6b23] uppercase tracking-wider">{lang === 'cn' ? '· 民族旋律的现代张力' : '· Modern Ethic Tension'}</h4>
                <p>{lang === 'cn' 
                  ? '旋律大量吸取了越剧“弦下调”和民间器乐曲。这些具有浓厚地域色彩的旋律，在现代和声的包裹下产生了巨大的跨文化震撼力。'
                  : 'The melody draws from regional folk tunes, gaining cross-cultural impact when wrapped in modern harmonies.'}</p>
              </div>
            </div>
          </section>

          {/* Module 4: Contemporary Status */}
          <section className="space-y-6">
            <h3 className="text-2xl font-bold text-black border-l-4 border-[#A6342E] pl-4">
              {lang === 'cn' ? '三、当代传播与全球化现状' : 'III. Contemporary Global Transmission'}
            </h3>
            <p>{lang === 'cn' 
              ? '协奏曲《梁祝》已成为全球演出频率最高的中国管弦乐作品，被乐评界誉为“东方的罗密欧与朱丽叶”。它不仅出现在音乐厅，还被广泛用于花样滑冰、影视配乐等现代场景。'
              : 'The concerto is the most performed Chinese orchestral work globally, appearing in concert halls, films, and even international sports events.'}</p>
          </section>

          {/* Module 5: ICH Perspective */}
          <section className="p-8 bg-[#1A1A1A] text-white/80 rounded-sm">
            <h4 className="text-white font-bold mb-4">{lang === 'cn' ? '非遗体系总结' : 'ICH Perspective Summary'}</h4>
            <p className="italic">
              {lang === 'cn' 
                ? '《梁祝》音乐展示了非物质文化遗产如何通过艺术语言的现代转化，获得全球性的普遍认同。'
                : 'Liang-Zhu music demonstrates how ICH can gain universal recognition through modern transformation of its artistic language.'}
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
              <Link to="/heritage/oral" className="px-6 py-2 border border-[#8b6b23]/30 text-xs font-bold hover:bg-[#8b6b23] hover:text-white transition-all uppercase tracking-widest">{lang === 'cn' ? '口传文学' : 'Oral'}</Link>
              <Link to="/heritage/crafts" className="px-6 py-2 border border-[#8b6b23]/30 text-xs font-bold hover:bg-[#8b6b23] hover:text-white transition-all uppercase tracking-widest">{lang === 'cn' ? '民间工艺' : 'Crafts'}</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeritageMusic;
