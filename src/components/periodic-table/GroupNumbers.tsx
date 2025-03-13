
import React from 'react';

const GroupNumbers = () => {
  return (
    <div 
      className="flex flex-row flex-nowrap items-center gap-1 mb-1" 
      role="row" 
      aria-label="Group numbers"
    >
      <div className="w-6 mr-1" aria-hidden="true"></div>
      {Array.from({ length: 18 }, (_, i) => i + 1).map(num => (
        <div 
          key={`group-${num}`}
          className="w-[70px] text-center text-xs font-semibold opacity-60 flex-shrink-0"
          aria-hidden="true"
        >
          {num}
        </div>
      ))}
    </div>
  );
};

export default GroupNumbers;
