
export interface FooterTranslations {
  madeWith: string;
  by: string;
  dataNote?: string;
  credits?: string;
}

export const footerEn: FooterTranslations = {
  madeWith: "Made with",
  by: "by",
  dataNote: "Data based on recent scientific measurements",
  credits: "© Periodic Table Interactive"
};

export const footerRu: FooterTranslations = {
  madeWith: "Сделано с",
  by: "от",
  dataNote: "Данные основаны на последних научных исследованиях",
  credits: "© Интерактивная Периодическая Таблица"
};
