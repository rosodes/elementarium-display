
import { Element } from './elementTypes';
import { useTheme } from '../context/ThemeContext';

export const categories = {
  "Alkali": "Alkali Metal",
  "Alkaline": "Alkaline Earth Metal",
  "Transition": "Transition Metal",
  "Post-transition": "Post-Transition Metal",
  "Metalloid": "Metalloid",
  "Nonmetal": "Nonmetal",
  "Noble": "Noble Gas",
  "Lanthanide": "Lanthanide",
  "Actinide": "Actinide",
  "Unknown": "Unknown"
};

export const getCategoryColor = (category?: string): string => {
  if (!category) {
    return "bg-unknown";
  }

  const categoryMap: Record<string, string> = {
    "alkali": "bg-alkali",
    "nonmetal": "bg-nonmetal",
    "noble": "bg-noble",
    "alkaline": "bg-alkaline",
    "metalloid": "bg-metalloid",
    "post-transition": "bg-post_transition",
    "transition": "bg-transition",
    "lanthanide": "bg-lanthanide",
    "actinide": "bg-actinide",
    "unknown": "bg-unknown"
  };
  
  const key = category.toLowerCase();
  return categoryMap[key] || "bg-unknown";
};

export const getSeriesColor = (series: string): string => {
  const seriesMap: Record<string, string> = {
    "Alkali": "bg-alkali",
    "Nonmetal": "bg-nonmetal",
    "Noble": "bg-noble",
    "Alkaline": "bg-alkaline",
    "Metalloid": "bg-metalloid",
    "Post-transition": "bg-post_transition",
    "Transition": "bg-transition",
    "Lanthanide": "bg-lanthanide",
    "Actinide": "bg-actinide",
    "Unknown": "bg-unknown"
  };
  
  return seriesMap[series] || "bg-unknown";
};

// This function helps determine if text should be dark or light based on the background
export const getTextColorForCategory = (category: string): string => {
  const darkTextCategories = ["alkaline", "nonmetal", "noble", "unknown"];
  const key = category.toLowerCase();
  
  return darkTextCategories.includes(key) ? "text-gray-800" : "text-gray-100";
};
