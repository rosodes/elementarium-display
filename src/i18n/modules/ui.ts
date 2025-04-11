
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
  searchPlaceholder?: string;
  searchResults?: string;
  searchNoResults?: string;
  clearSearch?: string;
  searchShortcut?: string;
  accessibilityLabel?: string;
  elementTable?: string;
  focusMode?: string;
  usageDistribution?: string;
  simulatedData?: string;
  note?: string;
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
  groupNumbersLabel: "Group numbers",
  searchPlaceholder: "Search by name, symbol or atomic number...",
  searchResults: "Search results",
  searchNoResults: "No elements found matching your search",
  clearSearch: "Clear search",
  searchShortcut: "Keyboard shortcut",
  accessibilityLabel: "Periodic Table of Elements",
  elementTable: "Periodic Table of Elements",
  focusMode: "Focus mode",
  usageDistribution: "Usage Distribution", 
  simulatedData: "This is simulated data for demonstration purposes",
  note: "Note"
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
  groupNumbersLabel: "Номера групп",
  searchPlaceholder: "Поиск по названию, символу или атомному номеру...",
  searchResults: "Результаты поиска",
  searchNoResults: "Не найдено элементов, соответствующих вашему запросу",
  clearSearch: "Очистить поиск",
  searchShortcut: "Сочетание клавиш",
  accessibilityLabel: "Периодическая таблица элементов",
  elementTable: "Периодическая таблица элементов",
  focusMode: "Режим фокусировки"
};
