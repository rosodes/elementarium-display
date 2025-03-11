
import React from 'react';

interface ElementPlaceholderProps {
  type: 'lanthanide' | 'actinide';
  range: string;
}

const ElementPlaceholder = ({ type, range }: ElementPlaceholderProps) => {
  const bgClass = type === 'lanthanide' ? 'bg-lanthanide' : 'bg-actinide';
  
  return (
    <div className={`element-card ${bgClass} flex items-center justify-center w-[70px] h-[70px] flex-shrink-0`}>
      <span className="text-xs font-bold">{range}</span>
    </div>
  );
};

export default ElementPlaceholder;
