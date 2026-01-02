
import React, { useContext } from 'react';
import SectionHeader from '../components/SectionHeader';
import { LanguageContext } from '../App';

const Resources: React.FC = () => {
  const { lang } = useContext(LanguageContext);

  const sections = [
    {
      categoryEn: "Museums & Parks",
      categoryCn: "博物馆与遗址",
      items: [
        { 
          nameEn: "Liang Zhu Cultural Park (Ningbo)", 
          nameCn: "宁波梁祝文化公园",
          descEn: "The site featuring the Liang-Zhu temple and tombs.",
          descCn: "传说中梁祝合葬的遗址，建有规模宏大的纪念场馆。"
        },
        { 
          nameEn: "Wansong Academy (Hangzhou)", 
          nameCn: "杭州万松书院",
          descEn: "The historical site of their three-year study.",
          descCn: "著名的同窗共读之地，现为重要的历史文化景点。"
        }
      ]
    },
    {
      categoryEn: "Academic Works",
      categoryCn: "学术研究",
      items: [
        { 
          nameEn: "Evolution of the Legend", 
          nameCn: "传说演变研究",
          descEn: "A study on narrative changes across history.",
          descCn: "关于梁祝故事在历朝历代演变过程的深入学术论文。"
        },
        { 
          nameEn: "National Archive Documentation", 
          nameCn: "国家级非遗档案",
          descEn: "Official government cultural records.",
          descCn: "来自文化和旅游部的官方非物质文化遗产保护档案。"
        }
      ]
    }
  ];

  return (
    <div className="py-24 bg-[#F9F7F2]">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader 
          en="Academic & Cultural Resources" 
          cn="学术与文化资源" 
          subtitleEn="Authoritative sources and historical sites for further study."
          subtitleCn="为深入研究者提供的权威参考资料与历史考察地。"
        />

        <div className="space-y-16 mt-12">
          {sections.map((group, idx) => (
            <div key={idx}>
              <h3 className="text-2xl font-bold border-b-2 border-[#A6342E] inline-block mb-8 pb-2">
                {lang === 'en' ? group.categoryEn : group.categoryCn}
              </h3>
              <div className="grid gap-6">
                {group.items.map((item, i) => (
                  <div 
                    key={i} 
                    className="block p-6 bg-white border border-[#D4C4A8]/20 hover:border-[#A6342E] hover:shadow-md transition-all group cursor-pointer"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-lg font-bold group-hover:text-[#A6342E] transition-colors">
                          {lang === 'en' ? item.nameEn : item.nameCn}
                        </h4>
                        <p className="text-[#4A4A4A] mt-2 text-sm font-light">
                          {lang === 'en' ? item.descEn : item.descCn}
                        </p>
                      </div>
                      <svg className="w-5 h-5 text-[#D4C4A8] group-hover:text-[#A6342E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-10 bg-[#F1EEE6] text-center rounded-sm">
          <p className="text-lg text-[#4A4A4A] mb-4 font-light">
            {lang === 'en' ? 'Looking for archival materials?' : '需要获取更详细的档案资料？'}
          </p>
          <button className="px-8 py-3 bg-[#1A1A1A] text-white uppercase tracking-widest text-sm hover:bg-[#4A4A4A] transition-colors">
            {lang === 'en' ? 'Contact the Curator' : '联系馆长'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resources;
