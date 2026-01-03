
import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import { LanguageContext } from '../App';

// --- 子页面视图类型定义 ---
type ModernView = 'overview' | 'stage' | 'digital' | 'pop' | 'themes';

const Modern: React.FC = () => {
  const { lang } = useContext(LanguageContext);
  const [view, setView] = useState<ModernView>('overview');

  // 跳转视图时自动回顶
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  // --- 导航辅助组件 ---
  const SubNav = () => {
    const navItems = [
      { id: 'stage' as ModernView, cn: '舞台与影像', en: 'Stage & Screen' },
      { id: 'digital' as ModernView, cn: '数字媒介', en: 'Digital Media' },
      { id: 'pop' as ModernView, cn: '流行文化', en: 'Pop Culture' },
      { id: 'themes' as ModernView, cn: '主题转译', en: 'Themes' },
    ];

    return (
      <div className="mt-24 pt-12 border-t border-black/5 flex flex-col items-center gap-8">
        <button 
          onClick={() => setView('overview')}
          className="text-[#A6342E] font-bold tracking-[0.2em] uppercase text-sm hover:opacity-60 transition-opacity"
        >
          {lang === 'cn' ? '← 返回当代演绎总览' : '← Back to Overview'}
        </button>
        <div className="flex flex-wrap justify-center gap-4">
          {navItems.filter(item => item.id !== view).map(item => (
            <button
              key={item.id}
              onClick={() => setView(item.id)}
              className="px-6 py-2 border border-black/10 text-[10px] font-bold tracking-widest uppercase hover:bg-black hover:text-white transition-all"
            >
              {lang === 'cn' ? item.cn : item.en}
            </button>
          ))}
        </div>
      </div>
    );
  };

  // --- 1. 总览页视图 (Overview) ---
  const Overview = () => {
    const modules = [
      {
        id: 'stage',
        titleEn: "Modern Stage & Screen",
        titleCn: "现代舞台与影像表达",
        descEn: "Deconstructing traditional tragedy through contemporary theatrical language and cinematic narrative.",
        descCn: "通过现代戏剧语言与电影叙事，对传统悲剧进行结构性重组与情感再解读。",
        image: "https://picsum.photos/seed/stage_v/800/600"
      },
      {
        id: 'digital',
        titleEn: "Digital Media & Interactive Art",
        titleCn: "数字媒介与交互艺术",
        descEn: "Exploring the boundary between myth and reality through VR, gaming, and spatial storytelling.",
        descCn: "利用VR、游戏及空间叙事技术，探索神话与现实、受众与故事之间的交互边界。",
        image: "https://picsum.photos/seed/digital_v/800/600"
      },
      {
        id: 'pop',
        titleEn: "Pop Culture & Mass Communication",
        titleCn: "流行文化与大众传播",
        descEn: "How the legend is stylized into visual totems in animation, pop music, and internet subcultures.",
        descCn: "梁祝意象如何在动画、流行音乐与网络亚文化中被符号化为当代视觉图腾。",
        image: "https://picsum.photos/seed/pop_v/800/600"
      },
      {
        id: 'themes',
        titleEn: "Thematic Translation & Discourse",
        titleCn: "当代视角下的主题转译",
        descEn: "Interrogating gender, free will, and social structures through the lens of modern values.",
        descCn: "基于现代价值观，重审梁祝故事中的性别意识、自由意志与社会结构。",
        image: "https://picsum.photos/seed/themes_v/800/600"
      }
    ];

    return (
      <div className="fade-in">
        {/* Hero Section */}
        <section className="relative h-[60vh] overflow-hidden mb-24">
          <img src="https://picsum.photos/seed/modern_hero/1600/900" className="w-full h-full object-cover grayscale opacity-20" alt="Hero" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
            <SectionHeader 
              en="Contemporary Interpretations" 
              cn="当代演绎" 
              subtitleEn="A living cultural motif undergoing constant re-creation and re-interpretation."
              subtitleCn="梁祝并非停留在历史中的遗迹，而是在当代不断被重新演绎与转译的活态文化母题。"
            />
          </div>
        </section>

        {/* 2x2 Grid Modules */}
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          {modules.map(mod => (
            <div 
              key={mod.id} 
              onClick={() => setView(mod.id as ModernView)}
              className="group cursor-pointer bg-[#F1EEE6]/30 border border-black/5 p-8 transition-all hover:border-[#A6342E]/20 hover:shadow-2xl"
            >
              <div className="aspect-video bg-gray-200 mb-8 overflow-hidden">
                <img src={mod.image} className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-100 transition-all duration-1000" alt={mod.titleEn} />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-[#A6342E] transition-colors">
                {lang === 'cn' ? mod.titleCn : mod.titleEn}
              </h3>
              <p className="text-[#4A4A4A] leading-relaxed font-light mb-6">
                {lang === 'cn' ? mod.descCn : mod.descEn}
              </p>
              <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-[#A6342E]">
                {lang === 'cn' ? '进入专项策展' : 'Enter Specialized Unit'} →
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // --- 2. 子页面视图: 舞台与影像 (Stage) ---
  const StageView = () => (
    <div className="max-w-5xl mx-auto px-6 py-24 fade-in">
      <div className="aspect-[21/9] bg-gray-200 mb-16 overflow-hidden">
        <img src="https://picsum.photos/seed/stage_detail/1200/500" className="w-full h-full object-cover grayscale opacity-40" alt="Stage Detail" />
      </div>
      <h2 className="text-4xl font-bold mb-8 border-l-4 border-[#A6342E] pl-6">
        {lang === 'cn' ? '现代舞台与影像表达' : 'Modern Stage & Screen'}
      </h2>
      <div className="text-xl italic text-[#4A4A4A] leading-loose mb-24 border-b border-black/5 pb-12">
        {lang === 'cn' 
          ? '当代舞台不再满足于复述悲剧。从实验剧场到大银幕，创作者们正在通过重构时空与人物心理，探讨传统情感在现代伦理下的回响。'
          : 'Contemporary stagecraft is no longer content with mere retelling. From experimental theaters to the big screen, creators are reconstructing space-time and psychology to explore how traditional emotions resonate within modern ethics.'}
      </div>

      <div className="space-y-32">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 aspect-square bg-gray-100"><img src="https://picsum.photos/seed/theatre/600/600" className="w-full h-full object-cover opacity-50" /></div>
          <div className="md:w-1/2 space-y-6">
            <h4 className="text-2xl font-bold">{lang === 'cn' ? '剧场实验：叙事结构的解构' : 'Experimental Theatre: Deconstructing Narrative'}</h4>
            <p className="text-[#4A4A4A] leading-relaxed">
              {lang === 'cn' 
                ? '在现代舞与先锋剧场中，梁祝被抽象为两个寻找自我的符号。这种改编往往跳出了“门第冲突”的外部框架，转而深挖个体在面对社会规范时的内在张力。'
                : 'In modern dance and avant-garde theatre, Liang and Zhu are abstracted into symbols of self-discovery. These adaptations shift focus from external class conflict to the internal tension of an individual facing societal norms.'}
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
          <div className="md:w-1/2 aspect-square bg-gray-100"><img src="https://picsum.photos/seed/movie/600/600" className="w-full h-full object-cover opacity-50" /></div>
          <div className="md:w-1/2 space-y-6">
            <h4 className="text-2xl font-bold">{lang === 'cn' ? '影像叙事：视觉语言的转译' : 'Cinematic Narrative: Visual Translation'}</h4>
            <p className="text-[#4A4A4A] leading-relaxed">
              {lang === 'cn' 
                ? '影视改编通过宏大的视觉语言与蒙太奇技巧，将“化蝶”这一超现实结尾赋予了更强烈的史诗感，使其从民间传说升华为一种具有民族共性的文化史诗。'
                : 'Cinematic adaptations use grand visual language and montage to give the surreal "metamorphosis" a stronger epic quality, elevating the legend into a shared national cultural epic.'}
            </p>
          </div>
        </div>
      </div>
      <SubNav />
    </div>
  );

  // --- 3. 子页面视图: 数字媒介 (Digital) ---
  const DigitalView = () => (
    <div className="max-w-5xl mx-auto px-6 py-24 fade-in">
      <div className="aspect-[21/9] bg-gray-200 mb-16 overflow-hidden">
        <img src="https://picsum.photos/seed/digital_detail/1200/500" className="w-full h-full object-cover grayscale opacity-40" alt="Digital Detail" />
      </div>
      <h2 className="text-4xl font-bold mb-8 border-l-4 border-[#A6342E] pl-6">
        {lang === 'cn' ? '数字媒介与交互艺术' : 'Digital Media & Interactive Art'}
      </h2>
      <div className="text-xl italic text-[#4A4A4A] leading-loose mb-24 border-b border-black/5 pb-12">
        {lang === 'cn' 
          ? '数字技术让观众从“看客”变为“局中人”。交互式的体验打破了叙事的线性时间，让传说在虚拟现实与实时演算中获得新生。'
          : 'Digital technology transforms the audience from observers into participants. Interactive experiences break the linearity of narrative, granting the legend new life in VR and real-time computing.'}
      </div>

      <div className="space-y-32">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 aspect-video bg-gray-100"><img src="https://picsum.photos/seed/vrsite/800/450" className="w-full h-full object-cover opacity-50" /></div>
          <div className="md:w-1/2 space-y-6">
            <h4 className="text-2xl font-bold">{lang === 'cn' ? '沉浸式体验：作为参与者的叙事' : 'Immersion: Narrative as Participation'}</h4>
            <p className="text-[#4A4A4A] leading-relaxed">
              {lang === 'cn' 
                ? '通过VR与互动影像，观众可以身临其境地步入万松书院。第一人称视角改变了情感共鸣的深度，使传统文化不再是遥远的博物馆陈列，而是当下的感官实践。'
                : 'Through VR and interactive media, audiences can step into the Wansong Academy. The first-person perspective changes the depth of resonance, making traditional culture an immediate sensory practice rather than a distant exhibit.'}
            </p>
          </div>
        </div>
        
        {/* UE Project Highlight */}
        <div className="p-12 bg-black text-white relative overflow-hidden">
          <div className="relative z-10 space-y-6">
            <div className="text-[#A6342E] text-xs font-bold tracking-[0.4em] uppercase">Laboratory / Practice</div>
            <h4 className="text-3xl font-bold">{lang === 'cn' ? '实践探索：UE 梁祝项目重构' : 'Experimental Practice: UE Liang-Zhu Reconstruction'}</h4>
            <p className="text-white/60 leading-relaxed font-light">
              {lang === 'cn' 
                ? '本模块致力于利用现代引擎重构“化蝶”的情绪空间。我们不追求写实的还原，而是探索如何通过算法驱动的粒子与光影，在数字维度构建一种符合当代审美的诗意叙事。'
                : 'This module is dedicated to reconstructing the emotional space of the metamorphosis using modern engines. We aim not for realistic reproduction, but for a poetic narrative driven by algorithmic particles and light.'}
            </p>
          </div>
          <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
        </div>
      </div>
      <SubNav />
    </div>
  );

  // --- 4. 子页面视图: 流行文化 (Pop) ---
  const PopView = () => (
    <div className="max-w-5xl mx-auto px-6 py-24 fade-in">
      <div className="aspect-[21/9] bg-gray-200 mb-16 overflow-hidden">
        <img src="https://picsum.photos/seed/pop_detail/1200/500" className="w-full h-full object-cover grayscale opacity-40" alt="Pop Detail" />
      </div>
      <h2 className="text-4xl font-bold mb-8 border-l-4 border-[#A6342E] pl-6">
        {lang === 'cn' ? '流行文化与大众传播' : 'Pop Culture & Mass Communication'}
      </h2>
      <div className="text-xl italic text-[#4A4A4A] leading-loose mb-24 border-b border-black/5 pb-12">
        {lang === 'cn' 
          ? '在Z世代的语境下，梁祝被转化为一种具有辨识度的视觉图腾。它活跃在动画、流行乐与二次元社区，成为文化消费与身份认同的一部分。'
          : 'In the Gen Z context, Liang-Zhu is transformed into a recognizable visual totem. It thrives in animation, pop music, and subculture communities, becoming part of cultural consumption and identity.'}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="space-y-6">
          <div className="aspect-square bg-gray-100"><img src="https://picsum.photos/seed/anime/600/600" className="w-full h-full object-cover opacity-50" /></div>
          <h4 className="text-xl font-bold">{lang === 'cn' ? '符号化：动画与二次元形象' : 'Symbolism: Animation & Subculture'}</h4>
          <p className="text-[#4A4A4A] leading-relaxed text-sm">
            {lang === 'cn' 
              ? '通过动漫风格的重构，梁祝故事中关于“自由”的内核获得了更直观的表达。这种风格化的处理虽然简化了复杂背景，却极大地增强了在年轻群体中的传播效率。'
              : 'Through anime-style reconstruction, the theme of "freedom" finds intuitive expression. While simplifying complex backgrounds, this stylization enhances dissemination efficiency among youth.'}
          </p>
        </div>
        <div className="space-y-6">
          <div className="aspect-square bg-gray-100"><img src="https://picsum.photos/seed/popmusic/600/600" className="w-full h-full object-cover opacity-50" /></div>
          <h4 className="text-xl font-bold">{lang === 'cn' ? '情绪化：流行音乐中的情感共振' : 'Emotionality: Resonance in Pop Music'}</h4>
          <p className="text-[#4A4A4A] leading-relaxed text-sm">
            {lang === 'cn' 
              ? '流行乐曲对梁祝旋律的解构与采样，将宏大的悲剧转化为当下的情绪碎片。它让古典意蕴走入日常的通勤耳机，成为一种随时可以被唤起的感性记忆。'
              : 'The sampling and deconstruction of Liang-Zhu melodies in pop music transform grand tragedy into everyday emotional fragments, making classical resonance an accessible sensory memory.'}
          </p>
        </div>
      </div>
      <SubNav />
    </div>
  );

  // --- 5. 子页面视图: 主题转译 (Themes) ---
  const ThemesView = () => (
    <div className="max-w-5xl mx-auto px-6 py-24 fade-in">
      <div className="aspect-[21/9] bg-gray-200 mb-16 overflow-hidden">
        <img src="https://picsum.photos/seed/theme_detail/1200/500" className="w-full h-full object-cover grayscale opacity-40" alt="Theme Detail" />
      </div>
      <h2 className="text-4xl font-bold mb-8 border-l-4 border-[#A6342E] pl-6">
        {lang === 'cn' ? '当代视角下的主题转译' : 'Thematic Translation & Discourse'}
      </h2>
      <div className="text-xl italic text-[#4A4A4A] leading-loose mb-24 border-b border-black/5 pb-12">
        {lang === 'cn' 
          ? '作为文化母题，梁祝持续提供着关于性别、自我与社会的讨论资源。它不仅仅是一个故事，更是一个审视现代人类关系的实验室。'
          : 'As a cultural motif, Liang-Zhu provides ongoing resources for discussing gender, self, and society. It is more than a story; it is a laboratory for interrogating modern human relationships.'}
      </div>

      <div className="space-y-24">
        <section className="space-y-6">
          <h4 className="text-2xl font-bold">{lang === 'cn' ? '超越性别的对话' : 'A Dialogue Beyond Gender'}</h4>
          <p className="text-[#4A4A4A] leading-loose font-serif">
            {lang === 'cn' 
              ? '当代性别研究者开始关注祝英台“女扮男装”背后的酷儿身份与流动性特征。在现代视角的转译中，这种性别置换不再仅仅是剧情策略，而是对二元性别结构的解构与挑战。'
              : 'Contemporary gender scholars focus on the queer identity and fluidity behind Zhu’s disguise. In modern translation, this gender displacement becomes a challenge to binary structures rather than just a plot device.'}
          </p>
        </section>
        <section className="space-y-6">
          <h4 className="text-2xl font-bold">{lang === 'cn' ? '个人意志与社会结构' : 'Individual Will vs. Social Structure'}</h4>
          <p className="text-[#4A4A4A] leading-loose font-serif">
            {lang === 'cn' 
              ? '我们将梁祝面临的“门第枷锁”转译为现代社会的各种结构性困境。它所引发的关于“自由选择”与“现实壁垒”的讨论，在当代的职场、婚姻与社会认同中依然具有深切的共鸣。'
              : 'We translate the "feudal constraints" faced by the lovers into modern structural dilemmas. The resulting discussions on "free choice" and "real-world barriers" resonate deeply in modern careers, marriage, and identity.'}
          </p>
        </section>
      </div>
      <SubNav />
    </div>
  );

  // --- 主渲染逻辑 ---
  return (
    <div className="bg-white selection:bg-[#A6342E]/10 min-h-screen">
      {view === 'overview' && <Overview />}
      {view === 'stage' && <StageView />}
      {view === 'digital' && <DigitalView />}
      {view === 'pop' && <PopView />}
      {view === 'themes' && <ThemesView />}

      {/* 底部过渡总结 (仅在总览页显示) */}
      {view === 'overview' && (
        <section className="py-32 text-center bg-[#F9F7F2]/30 mt-24">
          <div className="max-w-3xl mx-auto px-6 space-y-12">
            <p className="text-2xl font-serif italic text-[#1A1A1A]/80 leading-relaxed">
              {lang === 'cn' 
                ? "“梁祝持续跨越时间、媒介与意识形态的边界，证明了最持久的传说，是那些从未停止改变的故事。”"
                : "\"Liang Zhu continues to flutter across the boundaries of time, medium, and ideology, proving that the most enduring legends are those that never stop changing.\""}
            </p>
            <div className="pt-16 border-t border-black/5">
              <Link 
                to="/heritage" 
                className="group flex items-center justify-center gap-4 text-[#A6342E] font-bold tracking-widest uppercase text-sm"
              >
                <span className="group-hover:-translate-x-2 transition-transform">←</span>
                {lang === 'cn' ? '返回非遗数字档案馆' : 'Return to Heritage Archive'}
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Modern;
