
import { TranslationData } from ".";
import { legendEn } from "./modules/legend";
import { detailsEn } from "./modules/details";
import { categoriesEn } from "./modules/categories";
import { uiEn } from "./modules/ui";
import { elementDetailsEn } from "./modules/elementDetails";
import { footerEn } from "./modules/footer";
import { enElements } from "./modules/elements/en";

const commonPa = {
  title: "ਤੱਤਾਂ ਦੀ ਆਵਰਤੀ ਸਾਰਣੀ",
  subtitle: "ਆਧੁਨਿਕ ਇੰਟਰਐਕਟਿਵ ਆਵਰਤੀ ਸਾਰਣੀ, ਵਿਗਿਆਨਕ ਡਾਟਾ, ਇਤਿਹਾਸ ਅਤੇ ਉਪਯੋਗਤਾਵਾਂ ਸਮੇਤ।",
  selectLanguage: "ਭਾਸ਼ਾ ਚੁਣੋ",
  search: "ਖੋਜੋ",
  toggleTheme: "ਥੀਮ ਬਦਲੋ"
};

export const pa: TranslationData = {
  ...commonPa,
  legend: legendEn,
  details: detailsEn,
  categories: categoriesEn,
  ui: { ...uiEn, elements: enElements },
  elementDetails: elementDetailsEn,
  footer: footerEn
};
