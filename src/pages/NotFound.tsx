
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { t, language } = useLanguage();
  
  // Determine base path based on current language
  const homePath = language && language !== 'en' ? `/${language}` : '/';

  useEffect(() => {
    // Log the 404 error for monitoring
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="text-center px-4 py-10 max-w-md mx-auto">
        <h1 className="text-6xl font-bold mb-6 text-gray-900 dark:text-gray-100">404</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          {language === 'ru' ? 'Упс! Страница не найдена' : 
           language === 'uk' ? 'Ой! Сторінку не знайдено' : 
           'Oops! Page not found'}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to={homePath}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors shadow-sm hover:shadow"
          >
            {language === 'ru' ? 'На главную' : 
             language === 'uk' ? 'На головну' : 
             'Return to Home'}
          </Link>
          <button 
            onClick={() => window.history.back()} 
            className="px-6 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg transition-colors shadow-sm hover:shadow"
          >
            {language === 'ru' ? 'Назад' : 
             language === 'uk' ? 'Назад' : 
             'Go Back'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
