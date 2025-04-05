
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// Import the main CSS file that now imports all modularized files
import './styles/periodicTable.css'

createRoot(document.getElementById("root")!).render(<App />);
