import type { LegendTranslations } from "../../types/translationInterfaceTypes";

export const legendRu: LegendTranslations = {
  title: "Цветовая схема элементов",
  description: "Каждая категория элементов имеет свой цвет согласно международным стандартам",
  categories: {
    hydrogen: {
      label: "Водород",
      description: "Уникальный элемент - самый легкий и простой"
    },
    alkaliMetal: {
      label: "Щелочные металлы",
      description: "Высоко реактивные металлы группы 1 (Li, Na, K, Rb, Cs, Fr)"
    },
    alkalineEarthMetal: {
      label: "Щелочноземельные металлы",
      description: "Реактивные металлы группы 2 (Be, Mg, Ca, Sr, Ba, Ra)"
    },
    transitionMetal: {
      label: "Переходные металлы",
      description: "Металлы d-блока с переменной валентностью"
    },
    postTransitionMetal: {
      label: "Постпереходные металлы",
      description: "Металлы p-блока (Al, Ga, In, Sn, Tl, Pb, Bi)"
    },
    metalloid: {
      label: "Металлоиды",
      description: "Элементы с промежуточными свойствами (B, Si, Ge, As, Sb, Te)"
    },
    nonmetal: {
      label: "Неметаллы",
      description: "Элементы-неметаллы (C, N, O, P, S, Se)"
    },
    halogen: {
      label: "Галогены",
      description: "Высоко реактивные неметаллы группы 17 (F, Cl, Br, I, At)"
    },
    nobleGas: {
      label: "Благородные газы",
      description: "Инертные газы группы 18 (He, Ne, Ar, Kr, Xe, Rn, Og)"
    },
    lanthanide: {
      label: "Лантаноиды",
      description: "Редкоземельные элементы f-блока (Ce-Lu)"
    },
    actinide: {
      label: "Актиноиды",
      description: "Радиоактивные элементы f-блока (Th-Lr)"
    },
    unknown: {
      label: "Неизвестные свойства",
      description: "Синтетические элементы с неопределенными свойствами"
    }
  },
  additionalInfo: {
    title: "Дополнительные обозначения",
    radioactive: "Радиоактивные элементы",
    lanthanides: "6* - Лантаноиды (период 6)",
    actinides: "7* - Актиноиды (период 7)"
  },
  accessibility: "Все цвета соответствуют стандарту WCAG AAA для максимальной контрастности и доступности",
  elementCount: {
    one: "элемент",
    few: "элемента", 
    many: "элементов"
  }
};
