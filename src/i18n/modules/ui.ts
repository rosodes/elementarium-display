
export interface UiTranslations {
  close?: string;
  back?: string;
  more?: string;
  view?: string;
  loading?: string;
  radioactive?: string;
  themeToggle?: string;
  elements?: {
    [key: string]: string;
  };
}

// Just creating the structure, will be filled in the main files
export const uiEn: UiTranslations = {
  close: "Close",
  back: "Back",
  more: "More Details",
  view: "View",
  loading: "Loading...",
  radioactive: "Radioactive",
  themeToggle: "Toggle Theme",
  elements: {}
};

export const uiRu: UiTranslations = {
  close: "Закрыть",
  back: "Назад",
  more: "Подробнее",
  view: "Просмотр",
  loading: "Загрузка...",
  radioactive: "Радиоактивный",
  themeToggle: "Переключить тему",
  elements: {}
};
