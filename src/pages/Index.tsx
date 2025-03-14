
import PeriodicTable from '../components/PeriodicTable';
import Header from '../components/Header';
import { useLanguage } from '../context/LanguageContext';

const Index = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <Header />
      
      <main className="container mx-auto px-2 sm:px-4">
        <div className="text-center my-4 sm:my-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">{t.title}</h1>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-2">{t.subtitle}</p>
        </div>
        
        <PeriodicTable />
      </main>
      
      <footer className="py-4 sm:py-6 px-4 text-xs text-gray-500 dark:text-gray-400 text-center">
        <p>{t.footer.dataNote}</p>
        <p>{t.footer.credits}</p>
        <p className="mt-1">{t.footer.version} • {t.footer.license}</p>
      </footer>
    </div>
  );
};

export default Index;
