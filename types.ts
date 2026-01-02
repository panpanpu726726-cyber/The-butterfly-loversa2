
export interface ContentSection {
  id: string;
  titleEn: string;
  titleCn: string;
  descriptionEn: string;
  descriptionCn: string;
  imageUrl?: string;
}

export interface LegendAct {
  titleEn: string;
  titleCn: string;
  contentEn: string;
  contentCn: string;
  image: string;
}

export interface ResourceItem {
  nameEn: string;
  nameCn: string;
  url: string;
  type: 'Museum' | 'Academic' | 'Media';
}
