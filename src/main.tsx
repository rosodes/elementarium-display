
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './styles/periodicTable.css'

const rootElement = document.getElementById("root");

if (!rootElement) throw new Error('Failed to find the root element');

// Определяем, был ли контент предварительно отрендерен
const hasPreRenderedContent = rootElement.hasChildNodes();

if (hasPreRenderedContent) {
  // Если есть предварительно отрендеренный контент, используем гидратацию
  hydrateRoot(rootElement, <App />);
} else {
  // Если нет предварительно отрендеренного контента, используем обычный рендеринг
  createRoot(rootElement).render(<App />);
}

// Добавляем маркер для отладки гидратации
console.log('Hydration mode:', hasPreRenderedContent ? 'SSR hydration' : 'CSR render');
