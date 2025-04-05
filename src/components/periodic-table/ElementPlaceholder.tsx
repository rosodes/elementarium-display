
import React from 'react';

interface ElementPlaceholderProps {
  type: 'lanthanide' | 'actinide';
  range: string;
}

const ElementPlaceholder = ({ type, range }: ElementPlaceholderProps) => {
  const bgClass = type === 'lanthanide' ? 'bg-f-block' : 'bg-f-block';
  const ariaLabel = type === 'lanthanide' ? 'Lanthanide series elements' : 'Actinide series elements';
  
  return (
    <div 
      className={`element-card ${bgClass} flex items-center justify-center dashed-connector placeholder-${type}`}
      aria-label={`${ariaLabel}: ${range}`}
    >
      <div className="connector-line"></div>
    </div>
  );
};

export default ElementPlaceholder;
