import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";
import { Atom, RotateCcw, Play, Pause, ZoomIn, ZoomOut, Info } from 'lucide-react';

interface Atom3D {
  id: string;
  element: string;
  x: number;
  y: number;
  z: number;
  color: string;
  radius: number;
}

interface Bond3D {
  atom1: string;
  atom2: string;
  type: 'single' | 'double' | 'triple';
  strength: number;
}

const HydrogenMoleculeVisualization: React.FC = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });
  const [isAnimating, setIsAnimating] = useState(true);
  const [selectedMolecule, setSelectedMolecule] = useState('H2');
  const [zoom, setZoom] = useState(1);
  const [vibration, setVibration] = useState(0);

  // Данные молекул
  const molecules = {
    H2: {
      name: 'Молекула водорода (H₂)',
      atoms: [
        { id: 'H1', element: 'H', x: -50, y: 0, z: 0, color: '#ffffff', radius: 15 },
        { id: 'H2', element: 'H', x: 50, y: 0, z: 0, color: '#ffffff', radius: 15 }
      ] as Atom3D[],
      bonds: [
        { atom1: 'H1', atom2: 'H2', type: 'single' as const, strength: 436 }
      ] as Bond3D[],
      description: 'Простейшая двухатомная молекула с ковалентной связью',
      bondLength: '74 пм',
      bondEnergy: '436 кДж/моль'
    },
    H2O: {
      name: 'Молекула воды (H₂O)',
      atoms: [
        { id: 'O1', element: 'O', x: 0, y: 0, z: 0, color: '#ff0000', radius: 20 },
        { id: 'H1', element: 'H', x: -60, y: 40, z: 0, color: '#ffffff', radius: 12 },
        { id: 'H2', element: 'H', x: 60, y: 40, z: 0, color: '#ffffff', radius: 12 }
      ] as Atom3D[],
      bonds: [
        { atom1: 'O1', atom2: 'H1', type: 'single' as const, strength: 463 },
        { atom1: 'O1', atom2: 'H2', type: 'single' as const, strength: 463 }
      ] as Bond3D[],
      description: 'Самое важное соединение водорода, угол связи 104.5°',
      bondLength: '96 пм',
      bondEnergy: '463 кДж/моль'
    },
    NH3: {
      name: 'Молекула аммиака (NH₃)',
      atoms: [
        { id: 'N1', element: 'N', x: 0, y: 0, z: 0, color: '#0000ff', radius: 18 },
        { id: 'H1', element: 'H', x: -50, y: 30, z: 30, color: '#ffffff', radius: 10 },
        { id: 'H2', element: 'H', x: 50, y: 30, z: 30, color: '#ffffff', radius: 10 },
        { id: 'H3', element: 'H', x: 0, y: -40, z: -40, color: '#ffffff', radius: 10 }
      ] as Atom3D[],
      bonds: [
        { atom1: 'N1', atom2: 'H1', type: 'single' as const, strength: 391 },
        { atom1: 'N1', atom2: 'H2', type: 'single' as const, strength: 391 },
        { atom1: 'N1', atom2: 'H3', type: 'single' as const, strength: 391 }
      ] as Bond3D[],
      description: 'Важнейшее соединение для производства удобрений',
      bondLength: '101 пм',
      bondEnergy: '391 кДж/моль'
    }
  };

  const currentMolecule = molecules[selectedMolecule as keyof typeof molecules];

  // Анимация вращения
  useEffect(() => {
    if (!isAnimating) return;
    
    const interval = setInterval(() => {
      setRotation(prev => ({
        x: prev.x,
        y: (prev.y + 1) % 360,
        z: prev.z
      }));
    }, 50);

    return () => clearInterval(interval);
  }, [isAnimating]);

  // Анимация вибрации
  useEffect(() => {
    const interval = setInterval(() => {
      setVibration(prev => (prev + 1) % 100);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const handleRotation = (axis: 'x' | 'y' | 'z', delta: number) => {
    setRotation(prev => ({
      ...prev,
      [axis]: (prev[axis] + delta) % 360
    }));
  };

  const resetView = () => {
    setRotation({ x: 0, y: 0, z: 0 });
    setZoom(1);
  };

  const renderAtom = (atom: Atom3D, index: number) => {
    const vibrationOffset = selectedMolecule === 'H2' ? Math.sin(vibration * 0.1) * 2 : 0;
    
    return (
      <div
        key={atom.id}
        className="absolute"
        style={{
          left: `calc(50% + ${(atom.x + vibrationOffset) * zoom}px)`,
          top: `calc(50% + ${atom.y * zoom}px)`,
          transform: `
            rotateX(${rotation.x}deg) 
            rotateY(${rotation.y}deg) 
            rotateZ(${rotation.z}deg)
            translate(-50%, -50%)
          `,
          transformStyle: 'preserve-3d'
        }}
      >
        <div
          className="rounded-full border-2 border-gray-300 dark:border-gray-600 shadow-lg flex items-center justify-center font-bold text-xs"
          style={{
            width: `${atom.radius * 2 * zoom}px`,
            height: `${atom.radius * 2 * zoom}px`,
            backgroundColor: atom.color,
            color: atom.color === '#ffffff' ? '#000000' : '#ffffff',
            boxShadow: `0 0 ${10 * zoom}px rgba(0,0,0,0.3)`
          }}
        >
          {atom.element}
        </div>
      </div>
    );
  };

  const renderBond = (bond: Bond3D, index: number) => {
    const atom1 = currentMolecule.atoms.find(a => a.id === bond.atom1);
    const atom2 = currentMolecule.atoms.find(a => a.id === bond.atom2);
    
    if (!atom1 || !atom2) return null;

    const dx = atom2.x - atom1.x;
    const dy = atom2.y - atom1.y;
    const length = Math.sqrt(dx * dx + dy * dy);
    const angle = Math.atan2(dy, dx) * 180 / Math.PI;

    return (
      <div
        key={`bond-${index}`}
        className="absolute"
        style={{
          left: `calc(50% + ${(atom1.x + dx/2) * zoom}px)`,
          top: `calc(50% + ${(atom1.y + dy/2) * zoom}px)`,
          width: `${length * zoom}px`,
          height: `${3 * zoom}px`,
          backgroundColor: '#666666',
          transform: `
            rotateX(${rotation.x}deg) 
            rotateY(${rotation.y}deg) 
            rotateZ(${rotation.z}deg)
            rotate(${angle}deg)
            translate(-50%, -50%)
          `,
          transformStyle: 'preserve-3d',
          transformOrigin: 'center'
        }}
      />
    );
  };

  return (
    <Card className="my-6 border border-gray-200 dark:border-gray-700 overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-6">
        <CardTitle className="text-xl font-bold text-purple-900 dark:text-purple-100 flex items-center gap-3">
          <Atom className="text-purple-600 dark:text-purple-400" size={24} />
          3D Визуализация молекул водорода
        </CardTitle>
        
        {/* Выбор молекулы */}
        <div className="flex flex-wrap gap-2 mt-4">
          {Object.entries(molecules).map(([key, molecule]) => (
            <button
              key={key}
              onClick={() => setSelectedMolecule(key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                selectedMolecule === key
                  ? 'bg-purple-500 text-white shadow-md'
                  : 'bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/30 border border-purple-200 dark:border-purple-800'
              }`}
            >
              {molecule.name}
            </button>
          ))}
        </div>
      </CardHeader>

      <CardContent className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* 3D Визуализация */}
          <div className="lg:col-span-2">
            <div className="relative bg-gradient-to-br from-blue-900 to-purple-900 rounded-xl overflow-hidden" style={{ height: '400px' }}>
              {/* Координатная сетка */}
              <div className="absolute inset-0 opacity-20">
                <svg width="100%" height="100%">
                  <defs>
                    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>

              {/* Молекула */}
              <div className="relative w-full h-full" style={{ perspective: '1000px' }}>
                {/* Связи (рендерятся сначала, чтобы быть под атомами) */}
                {currentMolecule.bonds.map((bond, index) => renderBond(bond, index))}
                
                {/* Атомы */}
                {currentMolecule.atoms.map((atom, index) => renderAtom(atom, index))}
              </div>

              {/* Элементы управления */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                <button
                  onClick={() => setIsAnimating(!isAnimating)}
                  className="p-2 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all"
                >
                  {isAnimating ? <Pause size={16} /> : <Play size={16} />}
                </button>
                <button
                  onClick={resetView}
                  className="p-2 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all"
                >
                  <RotateCcw size={16} />
                </button>
              </div>

              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <button
                  onClick={() => setZoom(prev => Math.min(prev + 0.2, 2))}
                  className="p-2 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all"
                >
                  <ZoomIn size={16} />
                </button>
                <button
                  onClick={() => setZoom(prev => Math.max(prev - 0.2, 0.5))}
                  className="p-2 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all"
                >
                  <ZoomOut size={16} />
                </button>
              </div>

              {/* Элементы управления вращением */}
              <div className="absolute bottom-4 left-4 flex gap-2">
                <button
                  onClick={() => handleRotation('x', 15)}
                  className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white rounded text-xs hover:bg-white/20 transition-all"
                >
                  ↑X
                </button>
                <button
                  onClick={() => handleRotation('y', 15)}
                  className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white rounded text-xs hover:bg-white/20 transition-all"
                >
                  ↻Y
                </button>
                <button
                  onClick={() => handleRotation('z', 15)}
                  className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white rounded text-xs hover:bg-white/20 transition-all"
                >
                  ↻Z
                </button>
              </div>
            </div>
          </div>

          {/* Информационная панель */}
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-4 rounded-xl border border-purple-200 dark:border-purple-800">
              <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-3 flex items-center gap-2">
                <Info size={16} />
                {currentMolecule.name}
              </h3>
              <p className="text-sm text-purple-700 dark:text-purple-300 mb-3">
                {currentMolecule.description}
              </p>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-purple-600 dark:text-purple-400">Длина связи:</span>
                  <span className="font-semibold text-purple-800 dark:text-purple-200">{currentMolecule.bondLength}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-600 dark:text-purple-400">Энергия связи:</span>
                  <span className="font-semibold text-purple-800 dark:text-purple-200">{currentMolecule.bondEnergy}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-600 dark:text-purple-400">Атомов:</span>
                  <span className="font-semibold text-purple-800 dark:text-purple-200">{currentMolecule.atoms.length}</span>
                </div>
              </div>
            </div>

            {/* Легенда элементов */}
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Легенда атомов</h4>
              <div className="space-y-2">
                {[...new Set(currentMolecule.atoms.map(atom => atom.element))].map(element => {
                  const atom = currentMolecule.atoms.find(a => a.element === element);
                  if (!atom) return null;
                  
                  const elementNames: Record<string, string> = {
                    'H': 'Водород',
                    'O': 'Кислород', 
                    'N': 'Азот'
                  };

                  return (
                    <div key={element} className="flex items-center gap-3">
                      <div
                        className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-xs font-bold"
                        style={{ 
                          backgroundColor: atom.color,
                          color: atom.color === '#ffffff' ? '#000000' : '#ffffff'
                        }}
                      >
                        {element}
                      </div>
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {elementNames[element] || element}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Инструкции */}
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2 text-sm">💡 Как использовать:</h4>
              <ul className="text-xs text-blue-700 dark:text-blue-300 space-y-1">
                <li>• Автоматическое вращение можно включить/выключить</li>
                <li>• Используйте кнопки X, Y, Z для ручного поворота</li>
                <li>• Масштабируйте изображение кнопками +/-</li>
                <li>• Молекула H₂ демонстрирует колебания связи</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Научные ссылки */}
        <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">🔬 Научные источники по молекулярной структуре:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <ul className="space-y-1">
                <li>
                  <a href="https://webbook.nist.gov/chemistry/"
                     target="_blank"
                     rel="noindex nofollow"
                     className="text-blue-600 dark:text-blue-400 hover:underline">
                    NIST Chemistry WebBook - Molecular Data
                  </a>
                </li>
                <li>
                  <a href="https://pubchem.ncbi.nlm.nih.gov/"
                     target="_blank"
                     rel="noindex nofollow"
                     className="text-blue-600 dark:text-blue-400 hover:underline">
                    PubChem - Chemical Structures Database
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-1">
                <li>
                  <a href="https://www.rcsb.org/"
                     target="_blank"
                     rel="noindex nofollow"
                     className="text-blue-600 dark:text-blue-400 hover:underline">
                    Protein Data Bank - 3D Structure Database
                  </a>
                </li>
                <li>
                  <a href="https://www.ccdc.cam.ac.uk/structures/"
                     target="_blank"
                     rel="noindex nofollow"
                     className="text-blue-600 dark:text-blue-400 hover:underline">
                    Cambridge Structural Database
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HydrogenMoleculeVisualization; 