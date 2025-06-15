
import React from "react";
import { useLanguage } from "../../../context/LanguageContext";

const HydrogenHistorySection: React.FC = () => {
  const { t, language } = useLanguage();
  return (
    <section>
      <h2 className="text-lg font-bold mb-2 text-sky-700 dark:text-sky-200">
        {language === "ru"
          ? "История открытия и изучения"
          : language === "uk"
          ? "Історія відкриття і досліджень"
          : "History & Discovery"}
      </h2>
      <div className="text-xs mb-2">
        <ul className="list-disc pl-4 marker:text-sky-500 space-y-1">
          <li>
            {language === "ru"
              ? "Водород выделил как вещество в 1766 году Генри Кавендиш — экспериментируя с кислотами и металлами (вода при этом была продуктом реакции)."
              : language === "uk"
              ? "Водень виділив як речовину у 1766 році Генрі Кавендіш — працюючи з кислотами і металами (вода була продуктом реакції)."
              : "Hydrogen was recognized as a distinct substance in 1766 by Henry Cavendish, who produced it by reacting acids with metals; water was identified as a reaction product."}
          </li>
          <li>
            {language === "ru"
              ? "Французский химик Антуан Лавуазье в 1783 г. определил водород как отдельный элемент, а воду — как его соединение с кислородом."
              : language === "uk"
              ? "Французький хімік Антуан Лавуазьє у 1783 р. визначив водень як окремий елемент, а воду — як його сполуку з киснем."
              : "In 1783, Antoine Lavoisier named the gas 'hydrogène' and proved that water is a compound of hydrogen and oxygen."}
          </li>
          <li>
            {language === "ru"
              ? "Название 'hydrogenium' от греческого — «рождающий воду»."
              : language === "uk"
              ? "Назва 'hydrogenium' від грецького — «той, що породжує воду»."
              : "The name 'hydrogen' is from Greek meaning 'water former'."}
          </li>
          <li>
            {language === "ru"
              ? "Водород использовали в начале XIX века для разработки воздушных шаров и дирижаблей."
              : language === "uk"
              ? "Водень використовували на початку XIX століття для повітряних куль і дирижаблів."
              : "Hydrogen was used in balloons and airships in the 19th and early 20th centuries."}
          </li>
          <li>
            {language === "ru"
              ? "В XX веке открыта роль водорода в термоядерных реакциях, на Солнце и звездах."
              : language === "uk"
              ? "У XX столітті відкрили роль водню у термоядерних реакціях, на Сонці та зорях."
              : "In the 20th century, hydrogen's role in nuclear fusion (stars, the Sun) was clarified."}
          </li>
        </ul>
        <div className="mt-2 text-[11px] text-gray-500">
          {language === "ru"
            ? "Источники: WebElements, CRC Handbook, научные публикации"
            : language === "uk"
            ? "Джерела: WebElements, CRC Handbook, наукові публікації"
            : "Sources: WebElements, CRC Handbook, scientific literature"}
        </div>
      </div>
    </section>
  );
};

export default HydrogenHistorySection;
