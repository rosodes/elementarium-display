
import React from 'react';
import { Element } from '../../data/elementTypes';
import { useLanguage } from '../../context/LanguageContext';
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Star, Upload, Home } from "lucide-react";

interface ElementHeaderProps {
  element: Element;
  prevElement: Element | null;
  nextElement: Element | null;
  onNavigate: (element: Element) => void;
  onFavorite?: () => void;
  onShare?: () => void;
  isBookmarked?: boolean;
}

const ElementHeader: React.FC<ElementHeaderProps> = ({
  element,
  prevElement,
  nextElement,
  onNavigate,
  onFavorite,
  onShare,
  isBookmarked = false,
}) => {
  const { t } = useLanguage();

  const tableLink = `/${window.location.pathname.split("/")[1] || "en"}`;

  return (
    <header className="w-full max-w-8xl mx-auto rounded-t-2xl bg-white/95 dark:bg-gray-900/95 shadow flex flex-wrap justify-between items-center px-4 md:px-10 py-4 md:py-6 border-b border-gray-200 dark:border-gray-800 relative z-20">
      {/* Левая часть: Назад */}
      <div className="flex items-center min-w-0">
        <Link
          to={tableLink}
          className="inline-flex items-center gap-1 text-gray-800 dark:text-gray-100 font-medium hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg px-3 py-2 focus:outline-none transition"
        >
          <Home size={20} className="mr-0.5 opacity-80" />
          <span className="text-sm md:text-base">{t.elementDetails.backToTable ?? "Back to Periodic Table"}</span>
        </Link>
        <span className="mx-3 text-gray-300">|</span>
        <span className="truncate text-gray-700 dark:text-gray-100 font-semibold text-base md:text-lg" title={`${element.name} (${element.symbol})`}>
          {element.name} ({element.symbol})
        </span>
      </div>
      {/* Центр: Пред. и след. элементы */}
      <div className="flex-1 flex justify-center items-center min-w-0">
        <button
          className="inline-flex items-center gap-1 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-1.5 font-medium text-gray-700 dark:text-gray-200 mr-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition disabled:opacity-40 disabled:cursor-not-allowed"
          onClick={() => prevElement && onNavigate(prevElement)}
          disabled={!prevElement}
          aria-label={t.elementDetails.previous ?? "Previous element"}
        >
          <ArrowLeft size={20} className="mr-1" />
          <span>{t.elementDetails.previous ?? "Previous"}</span>
        </button>
        <button
          className="inline-flex items-center gap-1 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-1.5 font-medium text-gray-700 dark:text-gray-200 ml-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition disabled:opacity-40 disabled:cursor-not-allowed"
          onClick={() => nextElement && onNavigate(nextElement)}
          disabled={!nextElement}
          aria-label={t.elementDetails.next ?? "Next element"}
        >
          <span>{t.elementDetails.next ?? "Next"}</span>
          <ArrowRight size={20} className="ml-1" />
        </button>
      </div>
      {/* Правая часть: Actions */}
      <div className="flex gap-2">
        <button
          onClick={onFavorite}
          className={`rounded-lg p-2 border shadow-sm transition-all ${isBookmarked ? 'bg-blue-100 border-blue-400 text-blue-700' : 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-950'}`}
          aria-label={t.elementDetails.favorite || "Favorite"}
        >
          <Star size={20} fill={isBookmarked ? "#2563eb" : "none"} strokeWidth={isBookmarked ? 2.5 : 2} />
        </button>
        <button
          onClick={onShare}
          className="rounded-lg p-2 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm hover:bg-blue-50 dark:hover:bg-blue-950 transition-all text-gray-500 dark:text-gray-300"
          aria-label={t.elementDetails.share || "Share"}
        >
          <Upload size={20} />
        </button>
      </div>
    </header>
  );
};

export default ElementHeader;
