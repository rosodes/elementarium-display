
import React from "react";
import { useLanguage } from "../../../context/LanguageContext";

const items = {
  en: [
    "First artificial isolation of hydrogen as a substance was achieved by Henry Cavendish in 1766, through experiments with acids and metals. He recognized it as a distinct, flammable gas ('inflammable air').",
    "In 1783, Antoine Lavoisier proved that water is a compound of hydrogen and oxygen, naming the element from Greek for 'water former' (hydro-gen).",
    "Hydrogen-filled balloons and airships were used in the 19th and early 20th centuries, but their flammability led to catastrophic accidents (e.g., Hindenburg, 1937).",
    "Discovery of hydrogen’s role in the Sun and stars (fusion reactions) revolutionized astrophysics in the 20th century.",
    "Deuterium and tritium isotopes of hydrogen were isolated in the 1930s, essential for nuclear science and fusion research.",
    "Hydrogen is a reference element for atomic mass and forms the basis of quantum theory (Bohr model, spectral lines).",
    "First hydrogen bomb test—1952, using fusion of deuterium and tritium.",
    "Hydrogen economy concepts and green hydrogen production are key modern scientific directions."
  ],
  ru: [
    "Впервые водород выделил как отдельное вещество Генри Кавендиш в 1766 году (реакции кислот с металлами, изучение 'горючего воздуха').",
    "В 1783 году Антуан Лавуазье доказал, что вода — соединение водорода и кислорода, и ввёл название элемента ('hydrogenium' — рождающий воду).",
    "В XIX–XX веках водород широко использовался в аэростатах и дирижаблях до аварий, например, Гинденбург (1937).",
    "Открытие роли водорода в Солнце, звёздах (термоядерный синтез), начало XX века.",
    "Изотопы дейтерий и тритий выделили в 1930-х, они стали важны для ядерной и энергетической науки.",
    "Водород служит стандартом атомных масс, модель Бора для водорода — основа квантовой механики.",
    "Первая водородная бомба испытана в 1952 году (термояд).",
    "Сегодня активно развиваются направления водородной энергетики, методы экологичного получения."
  ],
  uk: [
    "Генрі Кавендіш у 1766 р. виділив водень як окрему речовину (реакції кислот із металами, виявлене 'горюче повітря').",
    "У 1783 році Антуан Лавуазьє встановив, що вода — сполука водню з киснем (назва 'hydrogenium').",
    "Водень використовувався у повітряних кулях і дирижаблях XIX–XX ст., поки його вибухонебезпечність не призвела до катастроф (Гінденбург, 1937).",
    "Відкриття ролі водню в сонячних і зоряних термоядерних реакціях стало проривом для науки.",
    "Дейтерій і тритій відкрили в 1930-х роках — надзвичайно важливо для ядерної фізики.",
    "Водень — стандарт атомної маси, спектри водню дали поштовх квантовій теорії.",
    "Перший термоядерний вибух (Воднева бомба) — 1952 рік.",
    "Розвиток зеленої водневої енергетики — одна з сучасних тенденцій."
  ]
};

const sources = {
  en: "Sources: WebElements, CRC Handbook, ISO, scientific literature, Nature Reviews Chemistry",
  ru: "Источники: WebElements, CRC Handbook, ISO, научные публикации",
  uk: "Джерела: WebElements, CRC Handbook, ISO, наукові статті"
};

const HydrogenHistorySection: React.FC = () => {
  const { language } = useLanguage();
  const facts = items[language] || items.en;
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
          {facts.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
        <div className="mt-2 text-[11px] text-gray-500">
          {sources[language] || sources.en}
        </div>
      </div>
    </section>
  );
};

export default HydrogenHistorySection;
