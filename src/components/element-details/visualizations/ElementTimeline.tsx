
import React from 'react';
import { Element } from '../../../data/elementTypes';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '../../../context/LanguageContext';

interface ElementTimelineProps {
  element: Element;
}

const ElementTimeline = ({ element }: ElementTimelineProps) => {
  const { t } = useLanguage();
  const isAncient = element.discover === "Ancient";
  
  // Generate discovery year for display
  const discoveryYear = isAncient ? "Ancient" : element.discover;
  
  // Generate a more specific year range for ancient elements
  const getAncientTimeframe = () => {
    const atomicNum = parseInt(element.atomic);
    
    if (atomicNum <= 7) { // Very early elements like gold, silver, copper
      return "Before 3000 BCE";
    } else if (atomicNum <= 16) { // Middle ancient elements
      return "3000 BCE - 500 BCE";
    } else {
      return "500 BCE - 1500 CE"; 
    }
  };
  
  // Generate milestones based on the element
  const generateMilestones = () => {
    const milestones = [];
    const discoveryDate = isAncient ? getAncientTimeframe() : element.discover;
    
    // Discovery milestone
    milestones.push({
      date: discoveryDate,
      title: isAncient ? "Known Since Ancient Times" : `Discovered in ${element.discover}`,
      description: isAncient 
        ? `${element.name} was known and used by ancient civilizations long before modern chemistry.`
        : `${element.name} (${element.symbol}) was discovered and characterized as an element.`,
      highlight: true
    });
    
    // Generate key milestones based on element properties
    if (!isAncient) {
      const discoveryYear = parseInt(element.discover || "0");
      
      // First industrial use (approximately 10-30 years after discovery)
      const industrialYear = discoveryYear + 10 + Math.floor(Math.random() * 20);
      if (industrialYear < 2022) {
        milestones.push({
          date: industrialYear.toString(),
          title: "First Industrial Applications",
          description: `Early industrial applications of ${element.symbol} began to emerge.`,
          highlight: false
        });
      }
      
      // Scientific breakthrough (approximately 30-70 years after discovery)
      const breakthroughYear = discoveryYear + 30 + Math.floor(Math.random() * 40);
      if (breakthroughYear < 2022) {
        milestones.push({
          date: breakthroughYear.toString(),
          title: "Scientific Breakthrough",
          description: `Major scientific understanding of ${element.symbol}'s properties led to new applications.`,
          highlight: false
        });
      }
    }
    
    // Modern era milestone
    milestones.push({
      date: "Present",
      title: "Modern Applications",
      description: `${element.name} is now used in ${
        element.category === 'metal' ? 'advanced materials, electronics, and industrial processes' : 
        element.category === 'nonmetal' ? 'pharmaceuticals, chemicals, and energy technologies' :
        element.category === 'noble gas' ? 'lighting, cryogenics, and specialized atmospheres' :
        'various scientific and industrial applications'
      }.`,
      highlight: false
    });
    
    return milestones;
  };
  
  const milestones = generateMilestones();
  
  return (
    <div className="relative">
      {/* Timeline */}
      <div className="absolute left-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 h-full rounded-full"></div>
      
      <div className="ml-6 space-y-8">
        {milestones.map((milestone, index) => (
          <div className="relative" key={index}>
            <div 
              className={`absolute -left-7 mt-1.5 w-3 h-3 rounded-full ${
                milestone.highlight ? 'bg-blue-500 shadow-lg shadow-blue-500/50' : 'bg-purple-500 shadow-purple-500/30'
              } z-10`}
            >
              {milestone.highlight && (
                <div className="absolute inset-0 w-full h-full rounded-full animate-ping bg-blue-500 opacity-75"></div>
              )}
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="font-semibold text-base">{milestone.title}</div>
              <Badge variant="outline" className="self-start sm:self-center">
                {milestone.date}
              </Badge>
            </div>
            
            <div className="text-sm mt-1 text-gray-600 dark:text-gray-300">
              {milestone.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ElementTimeline;
