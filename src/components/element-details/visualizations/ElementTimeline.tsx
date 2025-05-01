
import React from 'react';
import { Element } from '../../../data/elementTypes';
import { Card, CardContent } from '@/components/ui/card';

interface ElementTimelineProps {
  element: Element;
}

const ElementTimeline = ({ element }: ElementTimelineProps) => {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="relative">
          {/* Timeline */}
          <div className="absolute left-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 h-full rounded-full"></div>
          
          <div className="ml-6 space-y-6">
            {/* Discovery Point */}
            <div className="relative">
              <div className="absolute -left-7 mt-1.5 w-3 h-3 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50 z-10">
                <div className="absolute inset-0 w-full h-full rounded-full animate-ping bg-blue-500 opacity-75"></div>
              </div>
              <div className="font-semibold">{element.discover === "Ancient" ? "Ancient Times" : element.discover}</div>
              <div className="text-sm mt-1">
                {element.discover === "Ancient" ? 
                  `${element.name} (${element.symbol}) has been known since ancient times.` :
                  `${element.name} was discovered in ${element.discover}.`
                }
              </div>
            </div>
            
            {/* Usage Point */}
            <div className="relative">
              <div className="absolute -left-7 mt-1.5 w-3 h-3 rounded-full bg-purple-500 shadow-lg shadow-purple-500/50 z-10"></div>
              <div className="font-semibold">Early Applications</div>
              <div className="text-sm mt-1">
                As understanding of {element.symbol} grew, scientists discovered its unique properties and applications.
                {element.category === 'metal' && ' Early uses included tools and basic alloys.'}
                {element.category === 'nonmetal' && ' Early uses included chemical compounds and reactions.'}
              </div>
            </div>
            
            {/* Modern Era */}
            <div className="relative">
              <div className="absolute -left-7 mt-1.5 w-3 h-3 rounded-full bg-green-500 shadow-lg shadow-green-500/50 z-10"></div>
              <div className="font-semibold">Present Day</div>
              <div className="text-sm mt-1">
                Today, {element.name} is used in various applications{element.category === 'metal' ? ' including electronics and advanced materials' : element.category === 'nonmetal' ? ' such as chemicals, pharmaceuticals, and energy storage' : ''} and continues to be studied for new possibilities.
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ElementTimeline;
