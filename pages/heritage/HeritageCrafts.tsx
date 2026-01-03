
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../../components/SectionHeader';
import { LanguageContext } from '../../App';

const HeritageCrafts: React.FC = () => {
  const { lang } = useContext(LanguageContext);
  const nav = {
    en: { back: "Back to Heritage Overview", next: "Explore Other Domains" },
    cn: { back: "返回非遗总览", next: "探索其他非遗领域" }
  }[lang];

  return (
    <div className="py-24 bg-[#F9F7F2] min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader 
          en="Visual Heritage in Folk Crafts" 
          cn="梁祝形象在民间工艺中的视觉传承" 
        />
        
        <article className="space-y-24 font-serif text-[#4A4A4A]">
          {/* Module 1: Context */}
          <section className="text-xl italic leading-relaxed text-center max-w-3xl mx-auto border-b border-[#D4C4A8]/20 pb-12">
            {lang === 'cn' 
              ? '民间工艺是传说的物质锚点。通过指尖的雕琢与刺绣，抽象的爱被物化为可感知的视觉图腾，融入日常生活的每一个角落。'
              : 'Folk crafts serve as the material anchors of the legend. Through carving and embroidery, love is materialized into tangible totems integrated into daily life.'}
          </section>

          {/* Module 2: Formation */}
          <section className="space-y-6">
            <h3 className="text-2xl font-bold text-black border-l-4 border-[#A6342E] pl-4">
              {lang === 'cn' ? '一、视觉符号的历史演变' : 'I. Evolution of Visual Symbols'}
            </h3>
            <div className="bg-white/50 p-8 space-y-4">
              <p>{lang === 'cn' 
                ? '从宋元时期的建筑构件到清代的刺绣纹样，“梁祝”主题在民间工艺中逐渐定型。其中最为核心的是“双蝶戏花”的构图方式，它将悲剧结局转化为对生命永恒与美好的视觉祝福。'
                : 'From architectural elements in the Song Dynasty to embroidery patterns in the Qing, the Liang-Zhu theme standardized. The "Twin Butterflies" composition transforms tragedy into a visual blessing of eternity.'}</p>
            </div>
          </section>

          {/* Module 3: Features */}
          <section className="space-y-8">
            <h3 className="text-2xl font-bold text-black border-l-4 border-[#A6342E] pl-4">
              {lang === 'cn' ? '二、核心艺术特征：材料、技法与符号' : 'II. Core Artistic Features'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h4 className="font-bold text-[#8b6b23] uppercase tracking-wider">{lang === 'cn' ? '· 绣绘、剪纸与造物' : '· Materiality & Making'}</h4>
                <p>{lang === 'cn' 
                  ? '江南地区的刺绣常以细腻针法还原同窗共读的场景。这种具象化的造物过程，让古老的传说具有了触手可及的温度与物理质感。'
                  : 'Regional embroideries use fine stitching to recreate scenes. This process gives the ancient legend a tangible warmth and physical texture.'}</p>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-[#8b6b23] uppercase tracking-wider">{lang === 'cn' ? '· 符号意象：化蝶图腾' : '· Symbolic Totems'}</h4>
                <p>{lang === 'cn' 
                  ? '蝴蝶意象在民间造物中被赋予了“灵魂重生”的文化含义，成为一种跨越地域的文化标志。'
                  : 'The butterfly motif is endowed with meanings of soul rebirth, becoming a cross-regional cultural signature.'}</p>
              </div>
            </div>
          </section>

          {/* Module 4: Contemporary Status */}
          <section className="space-y-6">
            <h3 className="text-2xl font-bold text-black border-l-4 border-[#A6342E] pl-4">
              {lang === 'cn' ? '三、当代传承与跨界重塑' : 'III. Contemporary Preservation & Reshaping'}
            </h3>
            <p>{lang === 'cn' 
              ? '今日的梁祝工艺正在从纯粹的传统手作转向现代文创设计。通过材料的改良与审美的迭代，古老的视觉符号正在通过衍生品、现代装饰等形式进入当代消费空间。'
              : 'Today’s Liang-Zhu crafts are shifting from traditional handmaking to modern design, entering contemporary spaces through derivative products.'}</p>
          </section>

          {/* Module 5: ICH Perspective */}
          <section className="p-8 bg-[#1A1A1A] text-white/80 rounded-sm">
            <h4 className="text-white font-bold mb-4">{lang === 'cn' ? '非遗体系总结' : 'ICH Perspective Summary'}</h4>
            <p className="italic">
              {lang === 'cn' 
                ? '民间工艺记录了梁祝传说在百姓日常生活中的物化过程，是衡量非物质文化遗产社会渗透力的重要指标。'
                : 'Folk crafts record the materialization of the legend in daily life, serving as a key indicator of ICH social penetration.'}
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
              <Link to="/heritage/oral" className="px-6 py-2 border border-[#8b6b23]/30 text-xs font-bold hover:bg-[#8b6b23] hover:text-white transition-all uppercase tracking-widest">{lang === 'cn' ? '口传文学' : 'Oral'}</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeritageCrafts;
