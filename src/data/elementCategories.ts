
export interface CategoryColor {
  bg: string;
  border: string;
  text: string;
}

export const categories: Record<string, CategoryColor> = {
  'alkali metal': {
    bg: '#ff6b6b',
    border: '#e55656',
    text: '#ffffff'
  },
  'alkaline earth metal': {
    bg: '#ffa726',
    border: '#fb8c00',
    text: '#ffffff'
  },
  'transition metal': {
    bg: '#42a5f5',
    border: '#1e88e5',
    text: '#ffffff'
  },
  'post-transition metal': {
    bg: '#66bb6a',
    border: '#43a047',
    text: '#ffffff'
  },
  'metalloid': {
    bg: '#ab47bc',
    border: '#8e24aa',
    text: '#ffffff'
  },
  'nonmetal': {
    bg: '#26c6da',
    border: '#00acc1',
    text: '#ffffff'
  },
  'noble gas': {
    bg: '#ec407a',
    border: '#d81b60',
    text: '#ffffff'
  },
  'lanthanide': {
    bg: '#ffa726',
    border: '#fb8c00',
    text: '#ffffff'
  },
  'actinide': {
    bg: '#ff7043',
    border: '#f4511e',
    text: '#ffffff'
  }
};

const seriesMapping: Record<string, string> = {
  'Alkali': 'alkali metal',
  'Alkaline': 'alkaline earth metal',
  'Transition': 'transition metal',
  'Post-transition': 'post-transition metal',
  'Metalloid': 'metalloid',
  'Nonmetal': 'nonmetal',
  'Noble': 'noble gas',
  'Lanthanide': 'lanthanide',
  'Actinide': 'actinide'
};

export function getCategoryColor(category: string): CategoryColor {
  return categories[category] || categories['nonmetal'];
}

export function getSeriesColor(series: string): CategoryColor {
  const category = seriesMapping[series];
  return getCategoryColor(category);
}
