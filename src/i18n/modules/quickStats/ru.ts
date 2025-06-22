import type { QuickStatsTranslations } from "../../types/translationInterfaceTypes";

export const quickStatsRu: QuickStatsTranslations = {
  title: "Статистика Периодической Таблицы",
  subtitle: "Полная аналитика всех 118 химических элементов с детальной разбивкой по категориям, свойствам и характеристикам",
  sections: {
    mainStats: {
      title: "Общая статистика элементов",
      totalElements: "Всего элементов",
      foundElements: "Найдено элементов",
      naturalElements: "Природные элементы",
      syntheticElements: "Искусственные элементы",
      tableStructure: "Структура таблицы",
      descriptions: {
        total: "Химических элементов в таблице Менделеева",
        natural: "Встречаются в природе естественным образом",
        synthetic: "Созданы искусственно в лабораториях",
        structure: "периодов × групп"
      }
    },
    blocks: {
      title: "Электронные блоки элементов",
      sBlock: "s-блок",
      pBlock: "p-блок",
      dBlock: "d-блок",
      fBlock: "f-блок",
      descriptions: {
        sBlock: "Щелочные и щелочноземельные металлы",
        pBlock: "Металлы, неметаллы и благородные газы",
        dBlock: "Переходные металлы с незаполненными d-орбиталями",
        fBlock: "Лантаноиды и актиноиды"
      }
    },
    states: {
      title: "Агрегатные состояния при комнатной температуре (20°C)",
      solids: "Твёрдые вещества",
      liquids: "Жидкости",
      gases: "Газы",
      descriptions: {
        solids: "Большинство металлов и некоторые неметаллы",
        liquids: "Ртуть (Hg) и бром (Br)",
        gases: "Благородные газы, водород, азот и другие"
      }
    },
    history: {
      title: "Исторические периоды открытия элементов",
      ancient: "Древние элементы",
      classical: "Классическая химия",
      modern: "Современные элементы",
      descriptions: {
        ancient: "Известны человечеству с античности",
        classical: "Открыты в XVIII-XIX веках",
        modern: "Трансурановые элементы XX-XXI века"
      }
    },
    categories: {
      title: "Детальная классификация химических элементов",
      alkaliMetals: "Щелочные металлы",
      alkalineEarthMetals: "Щелочноземельные металлы",
      transitionMetals: "Переходные металлы",
      postTransitionMetals: "Постпереходные металлы",
      metalloids: "Металлоиды",
      nonmetals: "Неметаллы",
      halogens: "Галогены",
      nobleGases: "Благородные газы",
      lanthanides: "Лантаноиды",
      actinides: "Актиноиды",
      unknown: "Неизвестные свойства"
    }
  },
  labels: {
    percentage: "% от общего количества",
    ofTotal: "% от общего количества",
    outOf: "из",
    elements: "элементов",
    periods: "периодов",
    groups: "групп"
  }
}; 