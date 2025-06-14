import React from 'react';
import Element from '../../Element';
import { Element as ElementType } from '../../../data/elementTypes';
import PeriodRow from '../PeriodRow';
import { Separator } from '../../ui/separator';
import { elements } from '../../../data/elements';

// Helper function to safely find element
const findElement = (atomicNumber: number | string): ElementType | null => {
  const element = elements.find(e => e && e.atomic === atomicNumber.toString());
  if (!element || typeof element !== 'object') return null;
  if (!('atomic' in element)) return null;
  return element as ElementType;
};

export const renderLanthanides = (onElementClick: (element: ElementType) => void, skipFirstElement: boolean = false) => {
  const periodLabel = "6*";
  // Лантаноиды должны начинаться с Ce (58), а не с La (57)
  const startIndex = skipFirstElement ? 58 : 58;
  const endIndex = 71;

  const lanthanideElements = [];

  // Add vertical divider at the beginning если требуется
  if (skipFirstElement) {
    lanthanideElements.push(
      <div key="lanthanide-divider" className="flex items-center h-[70px] mr-2">
        <Separator orientation="vertical" className="h-full f-block-divider" />
      </div>
    );
  }

  for (let i = startIndex; i <= endIndex; i++) {
    const element = findElement(i);
    if (element) {
      lanthanideElements.push(
        <Element 
          key={`lanthanide-${i}`}
          element={element}
          onClick={() => onElementClick(element)}
        />
      );
    }
  }

  return (
    <PeriodRow periodLabel={periodLabel} elements={lanthanideElements} />
  );
};

export const renderActinides = (onElementClick: (element: ElementType) => void, skipFirstElement: boolean = false) => {
  const periodLabel = "7*";
  // Актиноиды должны начинаться с Th (90), а не с Ac (89)
  const startIndex = skipFirstElement ? 90 : 90;
  const endIndex = 103;

  const actinideElements = [];

  if (skipFirstElement) {
    actinideElements.push(
      <div key="actinide-divider" className="flex items-center h-[70px] mr-2">
        <Separator orientation="vertical" className="h-full f-block-divider" />
      </div>
    );
  }

  for (let i = startIndex; i <= endIndex; i++) {
    const element = findElement(i);
    if (element) {
      actinideElements.push(
        <Element 
          key={`actinide-${i}`}
          element={element}
          onClick={() => onElementClick(element)}
        />
      );
    }
  }

  return (
    <PeriodRow periodLabel={periodLabel} elements={actinideElements} />
  );
};
