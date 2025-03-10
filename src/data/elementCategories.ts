
export const categories = {
  'Alkali': 'Alkali Metals',
  'Alkaline': 'Alkaline Earth Metals',
  'Transition': 'Transition Metals',
  'Post-transition': 'Post-transition Metals',
  'Metalloid': 'Metalloids',
  'Nonmetal': 'Nonmetals',
  'Halogen': 'Halogens',
  'Noble': 'Noble Gases',
  'Lanthanide': 'Lanthanides',
  'Actinide': 'Actinides'
};

export const getCategoryColor = (category: string): string => {
  switch (category.toLowerCase()) {
    case 'alkali':
      return 'bg-rose-500 text-white';
    case 'alkaline':
      return 'bg-orange-400 text-white';
    case 'transition':
      return 'bg-amber-300 text-gray-800';
    case 'post-transition':
      return 'bg-teal-500 text-white';
    case 'metalloid':
      return 'bg-emerald-400 text-white';
    case 'nonmetal':
      return 'bg-green-300 text-gray-800';
    case 'halogen':
      return 'bg-sky-400 text-white';
    case 'noble':
      return 'bg-indigo-400 text-white';
    case 'lanthanide':
      return 'bg-blue-500 text-white';
    case 'actinide':
      return 'bg-violet-500 text-white';
    default:
      return 'bg-gray-300 text-gray-800';
  }
};

export const getSeriesColor = (series: string): string => {
  switch (series) {
    case 'Alkali':
      return 'bg-rose-500 text-white';
    case 'Alkaline':
      return 'bg-orange-400 text-white';
    case 'Transition':
      return 'bg-amber-300 text-gray-800';
    case 'Post-transition':
      return 'bg-teal-500 text-white';
    case 'Metalloid':
      return 'bg-emerald-400 text-white';
    case 'Nonmetal':
      return 'bg-green-300 text-gray-800';
    case 'Halogen':
      return 'bg-sky-400 text-white';
    case 'Noble':
      return 'bg-indigo-400 text-white';
    case 'Lanthanide':
      return 'bg-blue-500 text-white';
    case 'Actinide':
      return 'bg-violet-500 text-white';
    default:
      return 'bg-gray-300 text-gray-800';
  }
};
