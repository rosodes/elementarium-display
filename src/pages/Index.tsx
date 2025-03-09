
import PeriodicTable from '../components/PeriodicTable';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="pt-8 pb-4 px-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-700">Периодическая система химических элементов</h1>
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/d15e32a0-0ffc-4e60-81ef-18f90f76878a.png" 
            alt="Chemistry Made Simple" 
            className="h-24 object-contain"
          />
        </div>
      </header>
      
      <main>
        <PeriodicTable />
      </main>
      
      <footer className="py-6 px-4 text-xs text-gray-500 text-center">
        <p>
          Данные актуальны по состоянию на 01.09.2023 года. Названия химических элементов указаны в соответствии 
          с номенклатурой IUPAC. Разработано на основе элемента дизайна от проекта "Химия - просто".
        </p>
      </footer>
    </div>
  );
};

export default Index;
