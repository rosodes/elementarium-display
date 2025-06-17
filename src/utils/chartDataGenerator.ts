
// Utility for generating stable chart data based on element properties
export const generateStableIsotopeData = (atomicNumber: number) => {
  // Use atomic number as seed for consistent data generation
  const seed = atomicNumber;
  const random = (index: number) => {
    const x = Math.sin(seed * 12.9898 + index * 78.233) * 43758.5453;
    return x - Math.floor(x);
  };

  const baseCount = Math.max(20, atomicNumber * 2);
  
  const getMockAbundance = (isotope: number, index: number) => {
    if (isotope === atomicNumber) return 100;
    if (isotope === atomicNumber + 1) return random(index) * 20 + 10;
    if (isotope === atomicNumber - 1) return random(index + 10) * 15 + 5;
    return random(index + 20) * 5;
  };
  
  return Array.from({ length: 5 }, (_, i) => {
    const isotopeNum = atomicNumber - 2 + i;
    const abundance = getMockAbundance(isotopeNum, i);
    const halfLife = isotopeNum === atomicNumber 
      ? 'Stable' 
      : `${Math.floor(random(i + 30) * 1000) + 1} y`;
    
    return {
      isotope: `${isotopeNum}`,
      abundance: Math.round(abundance * 100) / 100,
      halfLife
    };
  });
};

export const generateStableUsageData = (atomicNumber: number) => {
  const seed = atomicNumber;
  const random = (index: number) => {
    const x = Math.sin(seed * 12.9898 + index * 78.233) * 43758.5453;
    return x - Math.floor(x);
  };

  const sectors = [
    'Electronics', 
    'Construction', 
    'Healthcare', 
    'Energy', 
    'Transportation', 
    'Agriculture', 
    'Research'
  ];
  
  const numSectors = Math.max(3, Math.min(5, Math.floor(atomicNumber % 5) + 3));
  const selectedSectors = [];
  
  // Use deterministic selection based on atomic number
  for (let i = 0; i < numSectors; i++) {
    const idx = Math.floor(random(i) * sectors.length);
    if (!selectedSectors.includes(sectors[idx])) {
      selectedSectors.push(sectors[idx]);
    }
  }
  
  // Generate stable percentages
  let remainingPercent = 100;
  const result = [];
  
  for (let i = 0; i < selectedSectors.length; i++) {
    if (i === selectedSectors.length - 1) {
      result.push({
        name: selectedSectors[i],
        value: Math.round(remainingPercent)
      });
    } else {
      const percent = Math.floor(random(i + 50) * Math.min(remainingPercent - 5, 45)) + 5;
      remainingPercent -= percent;
      result.push({
        name: selectedSectors[i],
        value: percent
      });
    }
  }
  
  return result;
};

export const generateStableAbundanceData = (element: any) => {
  if (!element.abundance) return null;
  
  const sources = [
    { label: "Universe", value: element.abundance.universe },
    { label: "Earth's Crust", value: element.abundance.crust },
    { label: "Oceans", value: element.abundance.ocean },
    { label: "Human Body", value: element.abundance.human }
  ];
  
  const COLORS = ["#818cf8", "#a3e635", "#38bdf8", "#60a5fa"];
  
  return sources
    .map((src, idx) => {
      let v: number;
      if (typeof src.value === "string") {
        v = parseFloat(src.value);
      } else if (typeof src.value === "number") {
        v = src.value;
      } else {
        return null;
      }
      if (isNaN(v) || v <= 0) return null;
      
      return { 
        env: src.label, 
        percent: Math.round(v * 100) / 100, 
        color: COLORS[idx % COLORS.length] 
      };
    })
    .filter(Boolean);
};

export const generateStablePieChartData = (element: any) => {
  if (!element.abundance || !element.abundance.human) return null;
  
  const value = typeof element.abundance.human === "number" 
    ? element.abundance.human 
    : parseFloat(element.abundance.human);
    
  if (isNaN(value) || value <= 0) return null;
  
  return [
    { name: `${element.name} (${element.symbol})`, value: Math.round(value * 100) / 100, color: "#60a5fa" },
    { name: "Other", value: Math.round((100 - value) * 100) / 100, color: "#a1a1aa" }
  ];
};
