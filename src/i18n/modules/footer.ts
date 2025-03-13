
export interface FooterTranslations {
  madeWith?: string;
  by?: string;
  dataNote?: string;
  credits?: string;
  version?: string;
  copyright?: string;
  license?: string;
  contributors?: string;
}

export const footerEn: FooterTranslations = {
  madeWith: "Made with",
  by: "by React team",
  dataNote: "Data sourced from various scientific databases and publications",
  credits: "Based on the latest IUPAC recommendations",
  version: "Version 1.0.0",
  copyright: "© 2023 Periodic Table",
  license: "Open source under MIT license",
  contributors: "Thanks to all contributors"
};

export const footerRu: FooterTranslations = {
  madeWith: "Сделано с",
  by: "командой React",
  dataNote: "Данные взяты из различных научных баз данных и публикаций",
  credits: "На основе последних рекомендаций ИЮПАК",
  version: "Версия 1.0.0",
  copyright: "© 2023 Периодическая таблица",
  license: "Открытый исходный код под лицензией MIT",
  contributors: "Благодарность всем участникам"
};
