import type { CommonTranslations } from "../../types/commonTypes";

export const commonUk: CommonTranslations = {
  title: "Періодична Таблиця Елементів",
  subtitle: "Інтерактивна періодична таблиця з детальною інформацією про елементи",
  selectLanguage: "Обрати мову",
  search: "Пошук",
  toggleTheme: "Змінити тему",
  
  // Переклади для CleanPeriodicTable
  CleanPeriodicTable: {
    tableTitle: "Періодична таблиця елементів",
    tableSubtitle: "Таблиця Менделєєва з інтерактивними елементами",
    lanthanides: "Лантаноїди",
    actinides: "Актиноїди",
    legendTitle: "Легенда",
    radioactive: "Радіоактивний",
    group: "Група",
    period: "Період",
    ariaLabels: {
      periodicTable: "Інтерактивна періодична таблиця елементів Менделєєва",
      mainTable: "Основна таблиця хімічних елементів",
      fBlock: "F-блок елементів: лантаноїди та актиноїди",
      lanthanides: "Лантаноїди",
      actinides: "Актиноїди",
      groupNumbers: "Номери груп періодичної таблиці",
      periodNumbers: "Номери періодів",
      group: "Група",
      period: "Період",
      radioactiveElement: "Радіоактивний елемент",
      atomicNumber: "Атомний номер",
      symbol: "Символ",
      name: "Назва",
      atomicMass: "Атомна маса",
      elementInfo: "атомний номер {atomic}, символ {symbol}, категорія {category}, атомна маса {weight}",
      unknown: "невідома"
    },
    labels: {
      lanthanidesCount: "Лантаноїди (58-71)",
      actinidesCount: "Актиноїди (90-103)",
      period6: "Період 6",
      period7: "Період 7",
      elements: "елементів"
    }
  },

  // Переклади для QuickStats
  QuickStats: {
    totalElements: "Всього елементів",
    naturalElements: "Природних",
    syntheticElements: "Штучних",
    structure: "Періоди × Групи"
  },

  // Переклади для інструкцій головної сторінки
  MainPageInstructions: {
    title: "Як використовувати таблицю",
    clickElement: {
      title: "Клацніть на елемент",
      description: "Натисніть на будь-який елемент, щоб побачити детальну інформацію про його властивості, історію та застосування"
    },
    useSearch: {
      title: "Використовуйте пошук",
      description: "Шукайте елементи за назвою, символом, атомним номером або категорією для швидкого доступу"
    },
    studyColors: {
      title: "Вивчайте кольори",
      description: "Кожен колір відповідає певній категорії елементів згідно з міжнародною класифікацією"
    },
    legendToggle: {
      show: "🎨 Показати легенду кольорів",
      hide: "🎨 Сховати легенду кольорів"
    }
  }
};
