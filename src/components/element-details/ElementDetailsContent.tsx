import React from 'react';
import { Element } from '../../data/elementTypes';
import { useValidatedTranslation } from '../../hooks/useValidatedTranslation';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../ui/tabs';

// Импортируем все компоненты вкладок
import OverviewTab from './tabs/OverviewTab';
import PropertiesTab from './tabs/PropertiesTab';
import StructureTab from './tabs/StructureTab';
import ApplicationsTab from './tabs/ApplicationsTab';
import HistoryTab from './tabs/HistoryTab';
import CompoundsTab from './tabs/CompoundsTab';
import BioTab from './tabs/BioTab';
import ProductionTab from './tabs/ProductionTab';
import SafetyTab from './tabs/SafetyTab';
import OccurrenceTab from './tabs/OccurrenceTab';

interface ElementDetailsContentProps {
  element: Element;
}

const ElementDetailsContent: React.FC<ElementDetailsContentProps> = ({ element }) => {
  const { t } = useValidatedTranslation('ElementDetailsContent');

  // Определяем доступность контента для каждой вкладки
  const getContentAvailability = () => {
    return {
      overview: true, // всегда доступен
      properties: !!(element.melt || element.boil || element.density || element.conductivity || element.heat || element.ionize),
      structure: !!(element.electronstring || element.electrons || element.quantum || element.isotopes),
      applications: !!(element.applications || !element.radioactive),
      history: !!(element.discover || element.history),
      compounds: true, // заглушка пока что
      bio: true, // заглушка пока что  
      production: true, // заглушка пока что
      safety: !!(element.radioactive || element.safety),
      occurrence: !!(element.abundance || element.production?.sources)
    };
  };

  // Подсчитываем количество доступных данных
  const getDataCount = (tabId: string): number => {
    switch(tabId) {
      case 'overview':
        let count = 3; // базовые свойства всегда есть
        if (element.description) count++;
        if (element.radius) count++;
        if (element.abundance) count++;
        if (element.radioactive) count++;
        return count;
      
      case 'properties':
        let propCount = 0;
        if (element.melt || element.boil) propCount++;
        if (element.density) propCount++;
        if (element.conductivity) propCount++;
        if (element.electroneg || element.valence || element.oxidation || element.affinity) propCount++;
        if (element.ionize && Object.keys(element.ionize).length > 0) propCount++;
        if (element.heat) propCount++;
        return propCount;
      
      case 'structure':
        let structCount = 0;
        if (element.electronstring) structCount++;
        if (element.electrons) structCount++;
        if (element.quantum) structCount++;
        if (element.isotopes) structCount++;
        if (element.radius) structCount++;
        return structCount;
      
      default:
        return 0;
    }
  };

  // Определяем какие вкладки показывать для каждого элемента
  const getAvailableTabs = () => {
    const availability = getContentAvailability();
    
    const allTabs = [
      { 
        id: 'overview', 
        label: 'Обзор', 
        component: OverviewTab, 
        alwaysShow: true,
        icon: '📋',
        description: 'Основная информация об элементе'
      },
      { 
        id: 'properties', 
        label: 'Свойства', 
        component: PropertiesTab, 
        alwaysShow: true,
        icon: '⚗️',
        description: 'Физические и химические свойства'
      },
      { 
        id: 'structure', 
        label: 'Структура', 
        component: StructureTab, 
        alwaysShow: true,
        icon: '⚛️',
        description: 'Атомная структура и изотопы'
      },
      { 
        id: 'applications', 
        label: 'Применение', 
        component: ApplicationsTab, 
        alwaysShow: false,
        icon: '🔧',
        description: 'Практическое применение'
      },
      { 
        id: 'history', 
        label: 'История', 
        component: HistoryTab, 
        alwaysShow: false,
        icon: '📚',
        description: 'История открытия'
      },
      { 
        id: 'compounds', 
        label: 'Соединения', 
        component: CompoundsTab, 
        alwaysShow: false,
        icon: '🧪',
        description: 'Химические соединения'
      },
      { 
        id: 'bio', 
        label: 'Биология', 
        component: BioTab, 
        alwaysShow: false,
        icon: '🧬',
        description: 'Биологическая роль'
      },
      { 
        id: 'production', 
        label: 'Производство', 
        component: ProductionTab, 
        alwaysShow: false,
        icon: '🏭',
        description: 'Методы получения'
      },
      { 
        id: 'safety', 
        label: 'Безопасность', 
        component: SafetyTab, 
        alwaysShow: false,
        icon: '⚠️',
        description: 'Меры безопасности'
      },
      { 
        id: 'occurrence', 
        label: 'Распространение', 
        component: OccurrenceTab, 
        alwaysShow: false,
        icon: '🌍',
        description: 'Распространенность в природе'
      }
    ];

    // Для основных элементов показываем больше вкладок
    const atomicNumber = parseInt(element.atomic);
    const showExtendedTabs = atomicNumber <= 30 || [26, 29, 47, 79, 82].includes(atomicNumber); // Первые 30 + важные элементы

    return allTabs.filter(tab => {
      if (tab.alwaysShow) return true;
      if (showExtendedTabs) return true;
      return availability[tab.id as keyof typeof availability];
    });
  };

  const availableTabs = getAvailableTabs();

  return (
    <div className="element-details-content w-full min-h-[700px]">
      <Tabs defaultValue="overview" className="w-full">
        {/* Навигация по вкладкам - улучшенные кнопки */}
        <div className="tabs-navigation mb-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 flex items-center">
              <span className="text-2xl mr-3">📊</span>
              Подробная информация об элементе {element.name}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Выберите раздел для изучения различных аспектов элемента
            </p>
          </div>
          
          <div className="p-4">
            <TabsList className="grid w-full gap-2 bg-gray-50 dark:bg-gray-900 p-2 rounded-lg" style={{
              gridTemplateColumns: `repeat(${Math.min(availableTabs.length, 5)}, 1fr)`
            }}>
              {availableTabs.map(tab => {
                const dataCount = getDataCount(tab.id);
                return (
                  <TabsTrigger 
                    key={tab.id} 
                    value={tab.id}
                    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white font-bold text-sm px-4 py-3 rounded-lg transition-all duration-300 hover:bg-blue-100 dark:hover:bg-gray-700 text-center min-h-[80px] flex flex-col justify-center gap-1"
                    title={tab.description}
                  >
                    <div className="text-lg">{tab.icon}</div>
                    <div className="font-semibold">{tab.label}</div>
                    {dataCount > 0 && (
                      <div className="text-xs opacity-75">
                        {dataCount} блок{dataCount === 1 ? '' : dataCount < 5 ? 'а' : 'ов'}
                      </div>
                    )}
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </div>
        </div>

        {/* Контент вкладок */}
        <div className="tabs-content">
          {availableTabs.map(tab => {
            const TabComponent = tab.component;
            return (
              <TabsContent 
                key={tab.id} 
                value={tab.id}
                className="mt-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                <div className="tab-content-wrapper bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                  {/* Заголовок вкладки */}
                  <div className="tab-header bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{tab.icon}</span>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                          {tab.label}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {tab.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Контент вкладки */}
                  <div className="tab-content p-6 min-h-[500px]">
                    <TabComponent element={element} />
                  </div>
                </div>
              </TabsContent>
            );
          })}
        </div>
      </Tabs>
    </div>
  );
};

export default ElementDetailsContent;
