
import { Element } from '../data/elementTypes';
import ElementDetails from '../components/ElementDetails';

interface ElementMainContentProps {
  element: Element | null;
  loading: boolean;
  error: string | null;
  onNavigate: (element: Element) => void;
  onClose: () => void;
}

const ElementMainContent = ({ element, loading, error, onNavigate, onClose }: ElementMainContentProps) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Ошибка</h2>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  if (!element) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-600 mb-4">Элемент не найден</h2>
          <p className="text-gray-500">Попробуйте выбрать другой элемент.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <ElementDetails 
        element={element} 
        onClose={onClose}
        onNavigate={onNavigate}
        isFullPage={true}
      />
    </div>
  );
};

export default ElementMainContent;
