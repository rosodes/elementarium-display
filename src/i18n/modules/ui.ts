
export interface UITranslations {
  close?: string;
  back?: string;
  more?: string;
  view?: string;
  loading?: string;
  radioactive?: string;
  themeToggle?: string;
  language?: string;
  elements?: { [key: string]: string };
  search?: string;
  filter?: string;
  reset?: string;
  noResults?: string;
  period?: string;
  group?: string;
  periodNumbersLabel?: string;
  groupNumbersLabel?: string;
}

export const uiEn: UITranslations = {
  close: "Close",
  back: "Back",
  more: "Show more",
  view: "View details",
  loading: "Loading...",
  radioactive: "Radioactive",
  themeToggle: "Toggle theme",
  language: "Change language",
  search: "Search elements",
  filter: "Filter elements",
  reset: "Reset filters",
  noResults: "No results found",
  period: "Period",
  group: "Group",
  periodNumbersLabel: "Period numbers",
  groupNumbersLabel: "Group numbers"
};

export const uiRu: UITranslations = {
  close: "Закрыть",
  back: "Назад",
  more: "Показать больше",
  view: "Подробнее",
  loading: "Загрузка...",
  radioactive: "Радиоактивный",
  themeToggle: "Сменить тему",
  language: "Изменить язык",
  search: "Поиск элементов",
  filter: "Фильтр элементов",
  reset: "Сбросить фильтры",
  noResults: "Результаты не найдены",
  period: "Период",
  group: "Группа",
  periodNumbersLabel: "Номера периодов",
  groupNumbersLabel: "Номера групп"
};
