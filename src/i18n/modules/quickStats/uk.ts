import type { QuickStatsTranslations } from "../../types/translationInterfaceTypes";

export const quickStatsUk: QuickStatsTranslations = {
  title: "Статистика Періодичної Таблиці",
  subtitle: "Повна аналітика всіх 118 хімічних елементів з детальним розбором за категоріями, властивостями та характеристиками",
  sections: {
    mainStats: {
      title: "Загальна статистика елементів",
      totalElements: "Всього елементів",
      foundElements: "Знайдено елементів",
      naturalElements: "Природні елементи",
      syntheticElements: "Штучні елементи",
      tableStructure: "Структура таблиці",
      descriptions: {
        total: "Хімічних елементів у періодичній таблиці",
        natural: "Зустрічаються в природі природним шляхом",
        synthetic: "Створені штучно в лабораторіях",
        structure: "періодів × груп"
      }
    },
    blocks: {
      title: "Електронні блоки елементів",
      sBlock: "s-блок",
      pBlock: "p-блок",
      dBlock: "d-блок",
      fBlock: "f-блок",
      descriptions: {
        sBlock: "Лужні та лужноземельні метали",
        pBlock: "Метали, неметали та благородні гази",
        dBlock: "Перехідні метали з незаповненими d-орбіталями",
        fBlock: "Лантаноїди та актиноїди"
      }
    },
    states: {
      title: "Агрегатні стани при кімнатній температурі (20°C)",
      solids: "Тверді речовини",
      liquids: "Рідини",
      gases: "Гази",
      descriptions: {
        solids: "Більшість металів та деякі неметали",
        liquids: "Ртуть (Hg) і бром (Br)",
        gases: "Благородні гази, гідроген, нітроген та інші"
      }
    },
    history: {
      title: "Історичні періоди відкриття елементів",
      ancient: "Давні елементи",
      classical: "Класична хімія",
      modern: "Сучасні елементи",
      descriptions: {
        ancient: "Відомі людству з античності",
        classical: "Відкриті в XVIII-XIX століттях",
        modern: "Трансуранові елементи XX-XXI століть"
      }
    },
    categories: {
      title: "Детальна класифікація хімічних елементів",
      alkaliMetals: "Лужні метали",
      alkalineEarthMetals: "Лужноземельні метали",
      transitionMetals: "Перехідні метали",
      postTransitionMetals: "Постперехідні метали",
      metalloids: "Металоїди",
      nonmetals: "Неметали",
      halogens: "Галогени",
      nobleGases: "Благородні гази",
      lanthanides: "Лантаноїди",
      actinides: "Актиноїди",
      unknown: "Невідомі властивості"
    }
  },
  labels: {
    percentage: "% від загальної кількості",
    ofTotal: "% від загальної кількості",
    outOf: "з",
    elements: "елементів",
    periods: "періодів",
    groups: "груп"
  }
}; 