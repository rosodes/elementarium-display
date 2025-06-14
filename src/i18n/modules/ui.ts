// Расширенный интерфейс для всех поддерживаемых вариантов UI-переводов
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
  elementRemoved?: string;
  elementBookmarked?: string;
  linkCopied?: string;
  linkCopiedToClipboard?: string;
  naturalElements?: string;
  syntheticElements?: string;
  hotkeySearch?: string;
  hotkeyHome?: string;
  hotkeyClose?: string;
  skipToContent?: string;
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
  note: "Note",
  elementRemoved: "Element removed from bookmarks",
  elementBookmarked: "Element bookmarked",
  linkCopied: "Link copied",
  linkCopiedToClipboard: "Link has been copied to clipboard",
  naturalElements: "Natural",
  syntheticElements: "Synthetic",
  hotkeySearch: "Search",
  hotkeyHome: "Home",
  hotkeyClose: "Close",
  skipToContent: "Skip to main content"
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
  focusMode: "Режим фокусировки",
  usageDistribution: "Распределение использования",
  simulatedData: "Это симулированные данные для демонстрационных целей",
  note: "Примечание",
  elementRemoved: "Элемент удален из закладок",
  elementBookmarked: "Элемент добавлен в закладки",
  linkCopied: "Ссылка скопирована",
  linkCopiedToClipboard: "Ссылка скопирована в буфер обмена",
  naturalElements: "Природных",
  syntheticElements: "Синтетических",
  hotkeySearch: "Поиск",
  hotkeyHome: "На главную",
  hotkeyClose: "Закрыть",
  skipToContent: "Перейти к основному содержимому"
};
