
import React from 'react';
import ElementPageHead from '../components/element-details/ElementPageHead';
import ElementPageFooter from '../components/element-details/ElementPageFooter';
// import ElementHeader from '../components/element-details/ElementHeader'; // Удаляем
import ElementControlBar from '../components/element-details/ElementControlBar';
import ElementDetails from '../components/ElementDetails';
import ElementNavigation from '../components/element-details/ElementNavigation';
import Header from "../components/Header"; // Берём основной Header

interface Props {
  t: any;
  lang: string;
  mainRef: React.RefObject<HTMLDivElement>;
  element: any;
  isBookmarked: boolean;
  canGoPrevious: boolean;
  canGoNext: boolean;
  handleHome: () => void;
  handleNext: () => void;
  handlePrevious: () => void;
  handleToggleBookmark: () => void;
  handleShare: () => void;
  handleSkipToContent: () => void;
}

const ElementMainContent = ({
  t, lang, mainRef, element,
  isBookmarked, canGoPrevious, canGoNext,
  handleHome, handleNext, handlePrevious,
  handleToggleBookmark, handleShare, handleSkipToContent
}: Props) => {
  if (!element) {
    return (
      <main className="flex justify-center items-center min-h-[50vh] bg-white dark:bg-gray-900" aria-busy="true">
        <div className="animate-pulse">
          <p className="text-gray-800 dark:text-gray-100">{t.ui?.loading || 'Loading...'}</p>
        </div>
      </main>
    );
  }

  const tableLink = `/${window.location.pathname.split("/")[1] || "en"}`;

  return (
    <>
      {/* Top site-wide header */}
      <Header isElementPage />
      {/* UNDER header: bar for element navigation/actions */}
      <ElementControlBar
        element={{ name: element.name, symbol: element.symbol }}
        prevEnabled={canGoPrevious}
        nextEnabled={canGoNext}
        onPrev={handlePrevious}
        onNext={handleNext}
        onFavorite={handleToggleBookmark}
        onShare={handleShare}
        isBookmarked={isBookmarked}
        tableLink={tableLink}
      />

      <a
        href="#element-main-content"
        className="sr-only focus:not-sr-only absolute top-0 left-0 bg-blue-700 text-white px-4 py-2 z-50 rounded-b-lg transition"
        tabIndex={0}
        onClick={handleSkipToContent}
      >
        {t.ui?.skipToContent || "Skip to main content"}
      </a>
      <div
        ref={mainRef}
        id="element-main-content"
        tabIndex={-1}
        className="min-h-screen w-full bg-gradient-to-br from-white via-blue-50 to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-800 transition-colors duration-200 animate-fade-in focus:outline-none"
        role="main"
        aria-labelledby={`element-title-${element.atomic}`}
        aria-describedby={`element-details-title-${element.atomic}`}
      >
        <ElementPageHead element={element} lang={lang} />
        <section
          aria-labelledby={`element-details-title-${element.atomic}`}
          className="w-full max-w-8xl mx-auto py-8 px-4 md:px-12 xl:px-36 animate-fade-in"
          tabIndex={0}
        >
          <div className="relative w-full max-w-8xl mx-0 rounded-2xl bg-white/90 dark:bg-gray-900/95 shadow-xl ring-2 ring-blue-300/10 dark:ring-blue-800/20 p-0 md:p-2 transition border border-gray-200 dark:border-gray-700">
            <ElementDetails
              element={element}
              onClose={handleHome}
              onNavigate={(newElement) => {
                if (Number(newElement.atomic) < Number(element.atomic)) {
                  handlePrevious();
                } else {
                  handleNext();
                }
              }}
              isFullPage={true}
            />
          </div>
        </section>
        <ElementPageFooter />
      </div>
    </>
  );
};

export default ElementMainContent;
