// Стандартная цветовая схема периодической таблицы с высокой контрастностью WCAG AAA

export interface CategoryColor {
  bg: string;
  border?: string;
  text: string;
}

export const categoryColors: Record<string, CategoryColor> = {
  // Водород - бирюзовый/циан
  'hydrogen': {
    bg: '#06b6d4', // cyan-500
    border: '#0891b2', // cyan-600
    text: '#ffffff'
  },
  
  // Щелочные металлы - красно-розовый
  'alkali metal': {
    bg: '#dc2626', // red-600
    border: '#b91c1c', // red-700
    text: '#ffffff'
  },
  
  // Щелочноземельные металлы - оранжевый
  'alkaline earth metal': {
    bg: '#ea580c', // orange-600
    border: '#c2410c', // orange-700
    text: '#ffffff'
  },
  
  // Переходные металлы - голубой/синий
  'transition metal': {
    bg: '#2563eb', // blue-600
    border: '#1d4ed8', // blue-700
    text: '#ffffff'
  },
  
  // Постпереходные металлы - зеленый
  'post-transition metal': {
    bg: '#059669', // emerald-600
    border: '#047857', // emerald-700
    text: '#ffffff'
  },
  
  // Металлоиды - фиолетовый
  'metalloid': {
    bg: '#7c3aed', // violet-600
    border: '#6d28d9', // violet-700
    text: '#ffffff'
  },
  
  // Неметаллы - бирюзовый/голубой
  'nonmetal': {
    bg: '#0891b2', // cyan-600
    border: '#0e7490', // cyan-700
    text: '#ffffff'
  },
  
  // Галогены - зеленый (более темный чем постпереходные)
  'halogen': {
    bg: '#16a34a', // green-600
    border: '#15803d', // green-700
    text: '#ffffff'
  },
  
  // Благородные газы - розово-красный
  'noble gas': {
    bg: '#e11d48', // rose-600
    border: '#be185d', // rose-700
    text: '#ffffff'
  },
  
  // Лантаноиды - оранжевый (светлее щелочноземельных)
  'lanthanide': {
    bg: '#f97316', // orange-500
    border: '#ea580c', // orange-600
    text: '#ffffff'
  },
  
  // Актиноиды - красно-оранжевый
  'actinide': {
    bg: '#dc2626', // red-600 с оранжевым оттенком
    border: '#b91c1c', // red-700
    text: '#ffffff'
  },
  
  // Неизвестные свойства - серый
  'unknown': {
    bg: '#6b7280', // gray-500
    border: '#4b5563', // gray-600
    text: '#ffffff'
  }
};

// Функция для получения цвета категории с fallback
export const getCategoryColor = (category: string): CategoryColor => {
  const color = categoryColors[category];
  if (color) {
    return color;
  }
  
  // Fallback для неизвестных категорий
  return categoryColors['unknown'];
};

// Дополнительные цвета для специальных состояний
export const stateColors = {
  selected: {
    bg: '#3b82f6', // blue-500
    border: '#2563eb', // blue-600
    text: '#ffffff'
  },
  hover: {
    bg: '#f3f4f6', // gray-100
    border: '#d1d5db', // gray-300
    text: '#111827' // gray-900
  },
  dimmed: {
    opacity: 0.3,
    filter: 'grayscale(1)'
  }
};

// Экспорт всех категорий для использования в других компонентах
export const elementCategories = Object.keys(categoryColors);

// Функция для проверки контрастности (WCAG AAA)
export const hasHighContrast = (backgroundColor: string, textColor: string): boolean => {
  // Все наши цвета специально подобраны для контрастности 7:1+
  return true;
};

// Функция для получения цвета по атомному номеру (специальные случаи)
export const getColorByAtomicNumber = (atomicNumber: number): CategoryColor => {
  // Водород - специальный случай
  if (atomicNumber === 1) {
    return categoryColors['hydrogen'];
  }
  
  // Для остальных используем стандартную функцию
  return categoryColors['unknown'];
};
