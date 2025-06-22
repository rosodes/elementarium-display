import type { LegendTranslations } from "../../types/translationInterfaceTypes";

export const legendUk: LegendTranslations = {
  title: "Кольорова схема елементів",
  description: "Кожна категорія елементів має свій колір згідно з міжнародними стандартами",
  categories: {
    hydrogen: {
      label: "Гідроген",
      description: "Унікальний елемент - найлегший і найпростіший"
    },
    alkaliMetal: {
      label: "Лужні метали",
      description: "Високо реактивні метали групи 1 (Li, Na, K, Rb, Cs, Fr)"
    },
    alkalineEarthMetal: {
      label: "Лужноземельні метали",
      description: "Реактивні метали групи 2 (Be, Mg, Ca, Sr, Ba, Ra)"
    },
    transitionMetal: {
      label: "Перехідні метали",
      description: "Метали d-блоку зі змінною валентністю"
    },
    postTransitionMetal: {
      label: "Постперехідні метали",
      description: "Метали p-блоку (Al, Ga, In, Sn, Tl, Pb, Bi)"
    },
    metalloid: {
      label: "Металоїди",
      description: "Елементи з проміжними властивостями (B, Si, Ge, As, Sb, Te)"
    },
    nonmetal: {
      label: "Неметали",
      description: "Неметалічні елементи (C, N, O, P, S, Se)"
    },
    halogen: {
      label: "Галогени",
      description: "Високо реактивні неметали групи 17 (F, Cl, Br, I, At)"
    },
    nobleGas: {
      label: "Благородні гази",
      description: "Інертні гази групи 18 (He, Ne, Ar, Kr, Xe, Rn, Og)"
    },
    lanthanide: {
      label: "Лантаноїди",
      description: "Рідкісноземельні елементи f-блоку (Ce-Lu)"
    },
    actinide: {
      label: "Актиноїди",
      description: "Радіоактивні елементи f-блоку (Th-Lr)"
    },
    unknown: {
      label: "Невідомі властивості",
      description: "Синтетичні елементи з невизначеними властивостями"
    }
  },
  additionalInfo: {
    title: "Додаткові позначення",
    radioactive: "Радіоактивні елементи",
    lanthanides: "6* - Лантаноїди (період 6)",
    actinides: "7* - Актиноїди (період 7)"
  },
  accessibility: "Всі кольори відповідають стандарту WCAG AAA для максимального контрасту та доступності",
  elementCount: {
    one: "елемент",
    few: "елементи", 
    many: "елементів"
  }
};
