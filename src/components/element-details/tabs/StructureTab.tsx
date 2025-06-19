
import React from 'react';
import { Element } from '../../../data/elementTypes';
import { useValidatedTranslation } from '../../../hooks/useValidatedTranslation';

interface StructureTabProps {
  element: Element;
  categoryColor: string;
}

const StructureTab: React.FC<StructureTabProps> = ({ element, categoryColor }) => {
  const { t } = useValidatedTranslation('StructureTab');

  return (
    <div className="structure-tab space-y-6">
      {/* Атомная структура */}
      <div className="atomic-structure-section">
        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
          {t('details.atomicStructure', 'Atomic Structure')}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Основные параметры */}
          <div className="basic-atomic-info bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
              {t('details.basicAtomicInfo', 'Basic Atomic Information')}
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">{t('details.atomicNumber', 'Atomic Number')}:</span>
                <span className="font-medium text-gray-900 dark:text-white">{element.atomic}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">{t('details.atomicWeight', 'Atomic Weight')}:</span>
                <span className="font-medium text-gray-900 dark:text-white">{element.weight}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">{t('details.group', 'Group')}:</span>
                <span className="font-medium text-gray-900 dark:text-white">{element.group}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">{t('details.period', 'Period')}:</span>
                <span className="font-medium text-gray-900 dark:text-white">{element.period}</span>
              </div>
              {element.block && (
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">{t('details.block', 'Block')}:</span>
                  <span className="font-medium text-gray-900 dark:text-white">{element.block}-block</span>
                </div>
              )}
            </div>
          </div>

          {/* Квантовые числа */}
          {element.quantum && (
            <div className="quantum-numbers bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                {t('details.quantumNumbers', 'Quantum Numbers')}
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">n (principal):</span>
                  <span className="font-medium text-gray-900 dark:text-white">{element.quantum.n}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">l (azimuthal):</span>
                  <span className="font-medium text-gray-900 dark:text-white">{element.quantum.l}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">m (magnetic):</span>
                  <span className="font-medium text-gray-900 dark:text-white">{element.quantum.m}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Электронная конфигурация */}
      <div className="electron-configuration-section">
        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
          {t('details.electronConfiguration', 'Electron Configuration')}
        </h3>
        
        <div className="space-y-4">
          {/* Краткая конфигурация */}
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              {t('details.shortConfiguration', 'Short Configuration')}
            </h4>
            <code className="text-sm font-mono bg-white dark:bg-gray-800 px-3 py-2 rounded border text-blue-900 dark:text-blue-100 block">
              {element.electronstring}
            </code>
          </div>

          {/* Полная конфигурация */}
          {element.expandedconfig && (
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">
                {t('details.expandedConfiguration', 'Expanded Configuration')}
              </h4>
              <code className="text-sm font-mono bg-white dark:bg-gray-800 px-3 py-2 rounded border text-green-900 dark:text-green-100 block">
                {element.expandedconfig}
              </code>
            </div>
          )}

          {/* Электроны по оболочкам */}
          {element.electrons && element.electrons.length > 0 && (
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">
                {t('details.electronsPerShell', 'Electrons per Shell')}
              </h4>
              <div className="flex flex-wrap gap-2">
                {element.electrons.map((count, index) => (
                  <span key={index} className="bg-white dark:bg-gray-800 px-3 py-1 rounded-full text-sm font-medium text-purple-900 dark:text-purple-100 border">
                    Shell {index + 1}: {count}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Изотопы */}
      <div className="isotopes-section">
        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
          {t('details.isotopes', 'Isotopes')}
        </h3>
        
        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-3">
            <span className="text-gray-600 dark:text-gray-400">{t('details.knownIsotopes', 'Known Isotopes')}:</span>
            <span className="font-semibold text-gray-900 dark:text-white">{element.isotopes}</span>
          </div>
          
          {element.isotopesDetailed && element.isotopesDetailed.length > 0 && (
            <div className="mt-4">
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                {t('details.stableIsotopes', 'Stable Isotopes')}:
              </h4>
              <div className="space-y-2">
                {element.isotopesDetailed.filter(iso => iso.stable).map((isotope, index) => (
                  <div key={index} className="flex justify-between items-center bg-gray-50 dark:bg-gray-600 p-2 rounded">
                    <span className="font-mono text-sm">{isotope.symbol}</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {isotope.abundance ? `${isotope.abundance}%` : 'Stable'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StructureTab;
