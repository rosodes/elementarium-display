
import React from "react";
import { ArrowLeft, ArrowRight, Bookmark, Share, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useLanguage } from "../../context/LanguageContext";

interface ElementControlBarProps {
  element: { name: string; symbol: string };
  prevEnabled: boolean;
  nextEnabled: boolean;
  onPrev: () => void;
  onNext: () => void;
  onFavorite: () => void;
  onShare: () => void;
  isBookmarked: boolean;
  tableLink: string;
}

const ElementControlBar: React.FC<ElementControlBarProps> = ({
  element,
  prevEnabled,
  nextEnabled,
  onPrev,
  onNext,
  onFavorite,
  onShare,
  isBookmarked,
  tableLink,
}) => {
  const { t } = useLanguage();
  return (
    <nav className="w-full max-w-8xl mx-auto rounded-t-2xl bg-white/95 dark:bg-gray-900/95 shadow flex flex-wrap items-center px-4 md:px-10 py-4 border-b border-gray-200 dark:border-gray-800 relative z-20">
      {/* Left: Back to table + element name */}
      <div className="flex items-center min-w-0 flex-1">
        <Link
          to={tableLink}
          className="inline-flex items-center gap-1 text-gray-800 dark:text-gray-100 font-medium hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg px-3 py-2 focus:outline-none transition"
        >
          <Home size={20} className="mr-0.5 opacity-80" />
          <span className="text-sm md:text-base">
            {t.elementDetails?.backToTable ?? "Back to Periodic Table"}
          </span>
        </Link>
        <span className="mx-3 text-gray-300">|</span>
        <span className="truncate text-gray-700 dark:text-gray-100 font-semibold text-base md:text-lg" title={`${element.name} (${element.symbol})`}>
          {element.name} ({element.symbol})
        </span>
      </div>
      {/* Center: navigation */}
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          onClick={onPrev}
          disabled={!prevEnabled}
          className="min-w-[110px] font-semibold"
        >
          <ArrowLeft className="mr-1" /> {t.elementDetails.previous ?? "Previous"}
        </Button>
        <Button
          variant="outline"
          onClick={onNext}
          disabled={!nextEnabled}
          className="min-w-[100px] font-semibold"
        >
          {t.elementDetails.next ?? "Next"} <ArrowRight className="ml-1" />
        </Button>
      </div>
      {/* Right: Favorite/Share */}
      <div className="flex gap-1 ml-4">
        <Button
          onClick={onFavorite}
          variant={isBookmarked ? "secondary" : "outline"}
          className={`rounded-lg p-2 ${isBookmarked ? 'text-blue-700 border-blue-400' : ''}`}
          aria-label={t.elementDetails.favorite ?? "Favorite"}
        >
          <Bookmark size={20} fill={isBookmarked ? "#2563eb" : "none"} strokeWidth={isBookmarked ? 2.5 : 2} />
        </Button>
        <Button
          onClick={onShare}
          variant="outline"
          className="rounded-lg p-2"
          aria-label={t.elementDetails.share ?? "Share"}
        >
          <Share size={20} />
        </Button>
      </div>
    </nav>
  );
};
export default ElementControlBar;
