
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../../components/SectionHeader';
import { LanguageContext } from '../../App';

const HeritageOpera: React.FC = () => {
  const { lang } = useContext(LanguageContext);
  
  const nav = {
    en: { back: "Back to Heritage Overview", next: "Explore Other Domains" },
    cn: { back: "返回非遗总览", next: "探索其他非遗领域" }
  }[lang];

  return (
    <div className="py-24 bg-[#F9F7F2] min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader 
          en="Yue Opera: The Stage Canonicalization" 
          cn="越剧《梁山伯与祝英台》：舞台上的经典定型" 
        />
        
        <article className="space-y-24 font-serif text-[#4A4A4A]">
          {/* Module 1: Context (页面引言) */}
          <section className="text-xl italic leading-relaxed text-center max-w-3xl mx-auto border-b border-[#D4C4A8]/20 pb-12">
            {lang === 'cn' 
              ? '越剧是梁祝传说最具代表性的舞台艺术形态，它通过诗化的表现力，将这一古老传说从地方性叙事提升为具有全国影响力的经典艺术典范。'
              : 'Yue Opera serves as the primary artistic vehicle for the Liang-Zhu legend on the modern stage, elevating the local folklore into a national classical masterpiece.'}
          </section>

          {/* Module 2: Formation (历史形成与定型过程) */}
          <section className="space-y-6">
            <h3 className="text-2xl font-bold text-black border-l-4 border-[#A6342E] pl-4">
              {lang === 'cn' ? '一、历史形成与定型过程' : 'I. Historical Formation & Canonicalization'}
            </h3>
            <div className="bg-white/50 p-8 space-y-4">
              <p>{lang === 'cn' 
                ? '越剧发源于浙江嵊州。20世纪50年代，以袁雪芬、范瑞娟为代表的艺术家对《梁祝》进行了系统性重构。通过借鉴电影叙事与现代戏剧结构，确立了“十八相送”、“楼台会”、“哭灵控诉”、“化蝶”等经典段落，使之成为越剧的灵魂之作。'
                : 'Originating in Shengzhou, Zhejiang, Yue Opera underwent a systemic reconstruction in the 1950s led by artists like Yuan Xuefen. They standardized classic acts like "The 18-Mile Send-off" and "Meeting at the Tower", creating a definitive stage narrative.'}</p>
            </div>
          </section>

          {/* Module 3: Features (核心艺术特征) */}
          <section className="space-y-8">
            <h3 className="text-2xl font-bold text-black border-l-4 border-[#A6342E] pl-4">
              {lang === 'cn' ? '二、核心艺术特征：舞台、角色与唱腔' : 'II. Core Artistic Features'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h4 className="font-bold text-[#8b6b23] uppercase tracking-wider">{lang === 'cn' ? '· 全女班表演传统' : '· All-female Cast'}</h4>
                <p>{lang === 'cn' 
                  ? '全女班的表演形态为展现梁祝情感中的细腻与纯真提供了独特的视角。演员通过对性别跨度的艺术化处理，放大了悲剧的凄美感。'
                  : 'The all-female cast provides a unique lens for depicting the delicate emotions of the lovers, amplifying the aesthetic of tragedy.'}</p>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-[#8b6b23] uppercase tracking-wider">{lang === 'cn' ? '· 委婉抒情的唱腔' : '· Lyrical Singing'}</h4>
                <p>{lang === 'cn' 
                  ? '越剧唱腔以抒情见长，其优美的旋律与江南水乡的文化底蕴高度契合，精准地捕捉到了祝英台反抗礼教时的坚韧与悲伤。'
                  : 'Known for its lyrical strengths, Yue Opera melodies accurately capture the emotional nuances of Zhu Yingtai’s defiance.'}</p>
              </div>
            </div>
          </section>

          {/* Module 4: Contemporary Status (当代传承与保护现状) */}
          <section className="space-y-6">
            <h3 className="text-2xl font-bold text-black border-l-4 border-[#A6342E] pl-4">
              {lang === 'cn' ? '三、当代传承与保护现状' : 'III. Contemporary Status & Preservation'}
            </h3>
            <p>{lang === 'cn' 
              ? '今日之《梁祝》已成为越剧院团的必排剧目。随着“数字越剧”的兴起，经典的折子戏正在通过全息投影、短视频等新媒体手段走近青年一代，实现了跨越时空的生命力。'
              : 'Today, "Liang Zhu" is a mandatory repertoire for Yue Opera troupes. Through "Digital Opera" and holograms, classic segments are reaching younger generations, ensuring continued vitality.'}</p>
          </section>

          {/* Module 5: ICH Perspective (总结) */}
          <section className="p-8 bg-[#1A1A1A] text-white/80 rounded-sm">
            <h4 className="text-white font-bold mb-4">{lang === 'cn' ? '非遗体系总结' : 'ICH Perspective Summary'}</h4>
            <p className="italic">
              {lang === 'cn' 
                ? '越剧《梁祝》的成功在于它完成了从“地方性知识”向“民族精神图腾”的转化，它是中国非物质文化遗产中活态传承的巅峰典范。'
                : 'The success of Yue Opera’s "Liang Zhu" lies in its transformation from local knowledge to a national spiritual totem, serving as a pinnacle example of living ICH.'}
            </p>
          </section>
        </article>

        {/* Cross-navigation Module (跨页面导航) */}
        <div className="mt-32 pt-12 border-t border-[#D4C4A8]/40">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <Link to="/heritage" className="text-[#A6342E] font-bold tracking-widest uppercase hover:gap-4 transition-all flex items-center gap-2 group">
              <span className="group-hover:-translate-x-1 transition-transform">←</span> {nav.back}
            </Link>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/heritage/music" className="px-6 py-2 border border-[#8b6b23]/30 text-xs font-bold hover:bg-[#8b6b23] hover:text-white transition-all uppercase tracking-widest">{lang === 'cn' ? '音乐传承' : 'Music'}</Link>
              <Link to="/heritage/oral" className="px-6 py-2 border border-[#8b6b23]/30 text-xs font-bold hover:bg-[#8b6b23] hover:text-white transition-all uppercase tracking-widest">{lang === 'cn' ? '口传文学' : 'Oral'}</Link>
              <Link to="/heritage/crafts" className="px-6 py-2 border border-[#8b6b23]/30 text-xs font-bold hover:bg-[#8b6b23] hover:text-white transition-all uppercase tracking-widest">{lang === 'cn' ? '民间工艺' : 'Crafts'}</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeritageOpera;
