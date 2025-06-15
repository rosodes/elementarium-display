
import React from 'react';
import { Element } from '../../data/elementTypes';
import { useLanguage } from '../../context/LanguageContext';
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Star, Upload, Home } from "lucide-react";
import ElementImage from './ElementImage';

interface ElementHeaderProps {
  element: Element;
  categoryColor: string;
  prevElement: Element | null;
  nextElement: Element | null;
  onClose: () => void;
  onNavigate: (element: Element) => void;
  isFullPage?: boolean;
}

const ElementHeader: React.FC<ElementHeaderProps> = ({
  element,
  categoryColor,
  prevElement,
  nextElement,
  // onClose,
  onNavigate,
  isFullPage = false,
}) => {
  const { t } = useLanguage();

  // URL для возврата к таблице (с учётом локали)
  const tableLink = `/${window.location.pathname.split("/")[1] || "en"}`;

  // Semantic h1 только на странице (не во всплывашке)
  const HeadingTag = isFullPage ? 'h1' : 'h2';

  // Card-like фон с плавным градиентом и тенью
  return (
    <div className="relative z-10 pb-2 md:pb-0">
      {/* Навигационная панель */}
      <div className="flex items-center justify-between px-2 md:px-6 pt-4">
        {/* Back/Home + Title */}
        <div className="flex items-center gap-2">
          <Link to={tableLink} className="hover:bg-blue-50 dark:hover:bg-gray-700 rounded-lg p-2 transition-colors flex items-center group">
            <Home size={20} className="mr-1 opacity-80 group-hover:opacity-100" />
            <span className="font-medium text-sm md:text-base text-gray-700 dark:text-gray-200 hidden sm:inline">{t.ui.backToTable ?? "Back to Periodic Table"}</span>
          </Link>
          <span className="mx-2 text-gray-400">|</span>
          <span className="font-medium text-sm md:text-base text-gray-700 dark:text-gray-200">{element.name} ({element.symbol})</span>
        </div>
        {/* Right-side actions */}
        <div className="flex items-center gap-2">
          <button
            className="rounded-lg p-2 bg-white/80 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800 shadow-sm hover:bg-blue-50 dark:hover:bg-blue-950 transition-all"
            aria-label={t.ui?.favorite ?? "Favorite"}
            // TODO: Add favorite logic
          >
            <Star size={20} className="text-gray-400" />
          </button>
          <button
            className="rounded-lg p-2 bg-white/80 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800 shadow-sm hover:bg-blue-50 dark:hover:bg-blue-950 transition-all"
            aria-label={t.ui?.share ?? "Share"}
            // TODO: Add share logic
          >
            <Upload size={20} className="text-gray-400" />
          </button>
        </div>
      </div>
      {/* Основной card-блок */}
      <div 
        className="my-3 mx-1 md:mx-6 bg-gradient-to-br from-blue-50/70 to-white dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-lg px-1 py-4 md:py-8 flex flex-col items-center relative transition-all"
        style={{ border: `1.5px solid ${categoryColor.split(" ")[0]}` }}
      >
        {/* Предыдущий элемент */}
        <button
          className={`absolute left-2 top-1/2 -translate-y-1/2 flex items-center gap-1 rounded-lg p-1.5 bg-white/60 dark:bg-gray-950/80 border border-gray-200 dark:border-gray-700 shadow-sm hover:scale-105 hover:bg-blue-100 dark:hover:bg-blue-900/60 transition-all disabled:opacity-30`}
          style={{ minWidth: 48 }}
          onClick={() => prevElement && onNavigate(prevElement)}
          disabled={!prevElement}
          aria-label={t.ui?.previous ?? "Previous element"}
        >
          <ArrowLeft size={22} />
          <span className="hidden md:inline text-xs">{t.ui?.previous ?? "Previous"}</span>
        </button>
        {/* Следующий элемент */}
        <button
          className={`absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1 rounded-lg p-1.5 bg-white/60 dark:bg-gray-950/80 border border-gray-200 dark:border-gray-700 shadow-sm hover:scale-105 hover:bg-blue-100 dark:hover:bg-blue-900/60 transition-all disabled:opacity-30`}
          style={{ minWidth: 48 }}
          onClick={() => nextElement && onNavigate(nextElement)}
          disabled={!nextElement}
          aria-label={t.ui?.next ?? "Next element"}
        >
          <span className="hidden md:inline text-xs">{t.ui?.next ?? "Next"}</span>
          <ArrowRight size={22} />
        </button>
        {/* Крупный символ и номер */}
        <div className="flex flex-col items-center justify-center py-4 px-2 select-none">
          <div className="text-5xl sm:text-7xl md:text-8xl font-bold text-gray-900 dark:text-gray-50 tracking-tight mb-2">
            {element.symbol}
          </div>
          <HeadingTag className="text-xl sm:text-3xl font-bold text-gray-800 dark:text-blue-50 mb-2">{element.name}</HeadingTag>
          <div className="flex flex-col md:flex-row gap-1 mb-1 md:mb-0 text-base md:text-lg font-semibold text-gray-500 dark:text-gray-300">
            <span>
              {t.elementDetails.atomicNumber}: <b className="font-bold text-gray-950 dark:text-white">{element.atomic}</b>
            </span>
            <span className="hidden md:inline mx-1">•</span>
            <span>
              {t.elementDetails.atomicWeight}: <b className="font-bold text-gray-950 dark:text-white">{element.weight}</b>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElementHeader;

