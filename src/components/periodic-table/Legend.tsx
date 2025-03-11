
import React from 'react';

const Legend = () => {
  return (
    <div className="legend flex flex-wrap justify-center gap-4 mb-4 p-2">
      <div className="legend-item flex items-center">
        <div className="w-4 h-4 bg-alkali mr-2"></div>
        <span className="text-sm">Alkali Metals</span>
      </div>
      <div className="legend-item flex items-center">
        <div className="w-4 h-4 bg-alkaline mr-2"></div>
        <span className="text-sm">Alkaline Earth Metals</span>
      </div>
      <div className="legend-item flex items-center">
        <div className="w-4 h-4 bg-transition mr-2"></div>
        <span className="text-sm">Transition Metals</span>
      </div>
      <div className="legend-item flex items-center">
        <div className="w-4 h-4 bg-post_transition mr-2"></div>
        <span className="text-sm">Post-Transition Metals</span>
      </div>
      <div className="legend-item flex items-center">
        <div className="w-4 h-4 bg-metalloid mr-2"></div>
        <span className="text-sm">Metalloids</span>
      </div>
      <div className="legend-item flex items-center">
        <div className="w-4 h-4 bg-nonmetal mr-2"></div>
        <span className="text-sm">Nonmetals</span>
      </div>
      <div className="legend-item flex items-center">
        <div className="w-4 h-4 bg-noble mr-2"></div>
        <span className="text-sm">Noble Gases</span>
      </div>
      <div className="legend-item flex items-center">
        <div className="w-4 h-4 bg-lanthanide mr-2"></div>
        <span className="text-sm">Lanthanides</span>
      </div>
      <div className="legend-item flex items-center">
        <div className="w-4 h-4 bg-actinide mr-2"></div>
        <span className="text-sm">Actinides</span>
      </div>
    </div>
  );
};

export default Legend;
