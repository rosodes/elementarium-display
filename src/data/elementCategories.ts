
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
    return "#c7c7c7";
  }

  const categoryMap: Record<string, string> = {
    "alkali": "#ff6e6c",
    "nonmetal": "#7dace4", 
    "noble": "#f2b5d4",
    "alkaline": "#ffc15e",
    "metalloid": "#8adbbc",
    "post-transition": "#b0a3f5",
    "transition": "#88d9e6",
    "lanthanide": "#ffa69e",
    "actinide": "#ff7e5f",
    "unknown": "#c7c7c7"
  };
  
  const key = category.toLowerCase();
  return categoryMap[key] || "#c7c7c7";
};

export const getSeriesColor = (series: string): string => {
  const seriesMap: Record<string, string> = {
    "Alkali": "#ff6e6c",
    "Nonmetal": "#7dace4",
    "Noble": "#f2b5d4", 
    "Alkaline": "#ffc15e",
    "Metalloid": "#8adbbc",
    "Post-transition": "#b0a3f5",
    "Transition": "#88d9e6",
    "Lanthanide": "#ffa69e", 
    "Actinide": "#ff7e5f",
    "Unknown": "#c7c7c7"
  };
  
  return seriesMap[series] || "#c7c7c7";
};

// This function helps determine if text should be dark or light based on the background
export const getTextColorForCategory = (category: string): string => {
  const darkTextCategories = ["alkaline", "nonmetal", "noble", "unknown"];
  const key = category.toLowerCase();
  
  return darkTextCategories.includes(key) ? "text-gray-800" : "text-gray-100";
};
