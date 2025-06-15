
import { TranslationData } from ".";
import { commonEn } from "./modules/common"; // используем английские заглушки
import { legendEn } from "./modules/legend";
import { detailsEn } from "./modules/details";
import { categoriesEn } from "./modules/categories";
import { uiEn } from "./modules/ui";
import { elementDetailsEn } from "./modules/elementDetails";
import { footerEn } from "./modules/footer";
import { enElements } from "./modules/elements/en";

// Базовые переводы для главной страницы, остальные поля можно будет расширять
const commonEs = {
  title: "Tabla Periódica de los Elementos",
  subtitle: "La tabla periódica interactiva moderna con datos científicos, historia y aplicaciones.",
  selectLanguage: "Seleccionar idioma",
  search: "Buscar",
  toggleTheme: "Cambiar tema"
};

// Собираем перевод полностью, остальные ключи временно копируются с английского варианта
export const es: TranslationData = {
  ...commonEs,
  legend: legendEn,
  details: detailsEn,
  categories: categoriesEn,
  ui: { ...uiEn, elements: enElements },
  elementDetails: elementDetailsEn,
  footer: footerEn
};
