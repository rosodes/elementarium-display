
import PeriodicTable from '../components/PeriodicTable';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-gray-50">
      <header className="pt-16 pb-12 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4 animate-fade-in">Periodic Table of Elements</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-slide-up">
          An elegant, interactive visualization of all chemical elements, designed with precision and simplicity.
        </p>
      </header>
      
      <main className="animate-fade-in">
        <PeriodicTable />
      </main>
    </div>
  );
};

export default Index;
