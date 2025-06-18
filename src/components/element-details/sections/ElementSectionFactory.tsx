
import React from 'react';
import { Element } from '../../../data/elementTypes';
import ManganeseDetailSections from '../new-sections/ManganeseDetailSections';

interface ElementSectionFactoryProps {
  element: Element;
}

const ElementSectionFactory: React.FC<ElementSectionFactoryProps> = ({ element }) => {
  // Special handling for specific elements
  switch (element.atomic) {
    case '25': // Manganese
      return <ManganeseDetailSections />;
    default:
      return null; // Will return default sections later
  }
};

export default ElementSectionFactory;
