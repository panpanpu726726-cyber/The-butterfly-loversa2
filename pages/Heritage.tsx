
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import { LanguageContext } from '../App';

const HERITAGE_CARRIERS = [
  {
    nameEn: "The Soul: Yue Opera",
    nameCn: "灵魂之声：越剧",
    descEn: "Originating in Shaoxing, Yue Opera became the primary guardian of the legend's emotional depth. Through its delicate 'Xianfu' (flowery) singing style and all-female casts, it captures the sensitivity of Zhu Yingtai's defiance and the purity of the lovers' bond.",
    descCn: "发源于绍兴嵊州，越剧是梁祝传说情感深度最重要的守护者。其委婉缠绵的唱腔与独特的全女班演艺形态，精准地捕捉了祝英台反抗礼教的坚毅与两人情感的纯粹。",
    image: "https://picsum.photos/seed/opera1/800/500"
  },
  {
    nameEn: "The Global Voice: Violin Concerto",
    nameCn: "世界回响：小提琴协奏曲",
    descEn: "The 1959 concerto translated the legend into a universal language. By blending Chinese folk pentatonic scales with Western symphonic structures, it amplified the emotional crescendo of 'Transformation into Butterflies' for a global audience.",
    descCn: "1959年创作的同名协奏曲将这一传说翻译成了全球通用的语言。它将中国民族五声音阶与西方交响乐结构融合，让“化蝶”的情感高潮在世界舞台上引起共鸣。",
    image: "https://picsum.photos/seed/music1/800/500"
  },
  {
    nameEn: "The Living Root: Oral Folklore",
    nameCn: "生命之根：民间口头文学",
    descEn: "Long before it was written in books, the legend lived in tea houses and rural festivals. Ballads (Tanci) and storytelling (Pingshu) allowed the story to adapt to local dialects, ensuring its survival in the collective memory of the common people.",
    descCn: "在文字记载之前，传说便活在茶馆与乡村集市中。弹词与评书让故事得以融入各地方言，在普通百姓的集体记忆中生根发芽，代代相传。",
    image: "https://picsum.photos/seed/folk1/800/500"
  },
  {
    nameEn: "The Visual Spirit: Folk Art",
    nameCn: "视觉之灵：民间工艺",
    descEn: "In paper cutting, shadow puppetry, and embroidery, the butterfly motif transcends simple decoration. These visual crafts preserve the legend by turning abstract love into tangible, everyday cultural artifacts.",
    descCn: "在剪纸、皮影与刺绣中，蝴蝶意象超越了单纯的装饰。这些视觉工艺将抽象的爱转化为可触碰的日常文化载体，使传说得以具象化保存。",
    image: "https://picsum.photos/seed/craft1/800/500"
  }
];

const Heritage: React.FC = () => {
  const { lang } = useContext(LanguageContext);

  const t = {
    en: {
      intro: "An Intangible Cultural Heritage is not just a relic of the past; it is a living organism that breathes through the performance, memory, and traditions of its people.",
      transitionTitle: "From Ephemeral Tale to Eternal Heritage",
      transitionBody: "How does a local story become a national treasure? The journey of Liang Zhu is one of continuous re-creation. For over a millennium, it has migrated from historical records into the hearts of performers, transforming from a static text into a vibrant tapestry of living traditions protected by UNESCO standards.",
      characteristicsTitle: "The Common Threads of Heritage",
      characteristicsBody: "Regardless of the medium—be it music, theater, or literature—the heritage of the Butterfly Lovers shares core characteristics: a priority on emotional resonance over historical accuracy, a deep connection to regional identity, and a resilience that allows it to survive social upheavals.",
      modernLink: "Explore Contemporary Adaptations",
      symbolTitle: "Symbolism of the Butterfly",
      symbolBody: "In the context of heritage, the butterfly represents more than beauty; it symbolizes the soul's liberation and the transcendence of love over death."
    },
    cn: {
      intro: "非物质文化遗产不仅仅是过去的遗迹；它是一个活生生的有机体，通过人民的表演、记忆和传统不断呼吸与演变。",
      transitionTitle: "从流传逸闻到永恒文化遗产",
      transitionBody: "一个地方故事如何成为国家宝藏？梁祝的历程是一个不断再创作的过程。一千多年来，它从史籍记载迁徙到演艺者的心中，从静态的文本转化为受国家与世界保护的鲜活传统织锦。",
      characteristicsTitle: "非遗传承的共同基因",
      characteristicsBody: "无论媒介是音乐、戏剧还是文学，梁祝文化遗产都共有核心特征：情感共鸣优先于历史真实、深厚的地方认同感，以及在社会变革中依然能够存续的坚韧生命力。",
      modernLink: "探索当代传承与再创作",
      symbolTitle: "蝴蝶的文化符号",
      symbolBody: "在非遗语境下，蝴蝶不仅代表美，更象征着灵魂的解放，以及爱对死亡与束缚的终极超越。"
    }
  }[lang];

  return (
    <div className="bg-[#F9F7F2] selection:bg-[#A6342E]/10">
      
      {/* Module 1: Page Introduction */}
      <section className="py-24 border-b border-[#D4C4A8]/20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            en="Heritage of the Butterfly Lovers" 
            cn="梁祝非物质文化遗产" 
            subtitleEn="Exploring how the legend lived through performance, memory, and tradition"
            subtitleCn="探索那些让传说在表演、记忆与传统中获得永恒生命的艺术形式"
          />
          <p className="mt-8 text-center text-xl md:text-2xl text-[#1a1a1a]/60 max-w-3xl mx-auto font-serif italic leading-relaxed">
            "{t.intro}"
          </p>
        </div>
      </section>

      {/* Module 2: From Legend to Heritage */}
      <section className="py-24 bg-[#f4eee0]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl md:text-4xl mb-8 text-[#A6342E]" style={{ fontFamily: lang === 'cn' ? "'Zhi Mang Xing', cursive" : "'Playfair Display', serif" }}>
            {t.transitionTitle}
          </h3>
          <p className="text-lg md:text-xl text-[#4A4A4A] leading-loose font-light">
            {t.transitionBody}
          </p>
          <div className="mt-12 h-px w-24 bg-[#8b6b23]/30 mx-auto" />
        </div>
      </section>

      {/* Module 3: Heritage Carriers (Main Module) */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            {HERITAGE_CARRIERS.map((item, idx) => (
              <div key={idx} className="flex flex-col space-y-8 group">
                <div className="overflow-hidden shadow-lg border border-[#D4C4A8]/30">
                  <img 
                    src={item.image} 
                    alt={lang === 'en' ? item.nameEn : item.nameCn} 
                    className="w-full h-[400px] object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                  />
                </div>
                <div className="space-y-4">
                  <h4 className="text-2xl md:text-3xl text-[#1a1a1a] font-bold tracking-tight">
                    {lang === 'en' ? item.nameEn : item.nameCn}
                  </h4>
                  <div className="h-0.5 w-12 bg-[#A6342E]" />
                  <p className="text-[#4A4A4A] text-lg leading-relaxed font-light">
                    {lang === 'en' ? item.descEn : item.descCn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Module 4: Common Characteristics */}
      <section className="py-24 bg-[#1a1a1a] text-[#F9F7F2] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center space-y-8">
            <svg className="w-12 h-12 text-[#A6342E]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L9.5 7h5L12 2zm0 20l2.5-5h-5L12 22zm-8-10l5 2.5v-5L4 12zm16 0l-5-2.5v5l5-2.5z" />
            </svg>
            <h3 className="text-3xl md:text-4xl font-serif">
              {t.characteristicsTitle}
            </h3>
            <p className="text-lg md:text-xl opacity-80 leading-loose font-light italic">
              {t.characteristicsBody}
            </p>
          </div>
        </div>
      </section>

      {/* Module 5: Contemporary Transmission (Link to Modern) */}
      <section className="py-32 bg-[#F9F7F2]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white p-12 md:p-20 border border-[#D4C4A8]/30 flex flex-col md:flex-row items-center gap-12 shadow-sm">
            <div className="md:w-1/2">
              <h3 className="text-3xl font-bold mb-6">{t.symbolTitle}</h3>
              <p className="text-lg text-[#4A4A4A] leading-relaxed mb-8 font-light">
                {t.symbolBody}
              </p>
              <Link 
                to="/modern" 
                className="inline-flex items-center gap-4 text-[#A6342E] font-bold tracking-widest uppercase hover:gap-6 transition-all duration-500"
              >
                {t.modernLink} <span>→</span>
              </Link>
            </div>
            <div className="md:w-1/2 relative">
               <div className="absolute inset-0 border-2 border-[#A6342E]/10 translate-x-4 translate-y-4" />
               <img src="https://picsum.photos/seed/butterfly-heritage/600/400" alt="Butterfly" className="relative z-10 w-full grayscale-[10%]" />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Heritage;
