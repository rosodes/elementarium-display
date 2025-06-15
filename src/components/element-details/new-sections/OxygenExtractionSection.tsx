
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const OxygenExtractionSection: React.FC = () => (
  <Card className="my-4 border border-gray-300 dark:border-gray-700">
    <CardHeader className="bg-slate-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Production &amp; Synthesis</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs space-y-2">
      <div>
        <strong>Industrial production methods:</strong>
        <ul className="list-disc pl-4 space-y-1">
          <li><strong>Fractional distillation of liquid air:</strong> Most common method, produces high-purity oxygen</li>
          <li><strong>Pressure swing adsorption (PSA):</strong> Uses zeolite molecular sieves to separate O<sub>2</sub> from air</li>
          <li><strong>Membrane separation:</strong> Polymer membranes selectively permeate oxygen</li>
          <li><strong>Vacuum swing adsorption (VSA):</strong> Lower pressure variant of PSA technology</li>
        </ul>
      </div>
      <div>
        <strong>Cryogenic air separation process:</strong>
        <ul className="list-disc pl-4 space-y-1">
          <li>Air compression and cooling to -196°C</li>
          <li>Fractional distillation in distillation columns</li>
          <li>Separation based on boiling points: N<sub>2</sub> (-196°C), O<sub>2</sub> (-183°C)</li>
          <li>Produces ultra-high purity oxygen (99.9%+)</li>
        </ul>
      </div>
      <div>
        <strong>Laboratory preparation methods:</strong>
        <ul className="list-disc pl-4 space-y-1">
          <li>Thermal decomposition of potassium permanganate: 2KMnO<sub>4</sub> → K<sub>2</sub>MnO<sub>4</sub> + MnO<sub>2</sub> + O<sub>2</sub></li>
          <li>Electrolysis of water: 2H<sub>2</sub>O → 2H<sub>2</sub> + O<sub>2</sub></li>
          <li>Catalytic decomposition of hydrogen peroxide: 2H<sub>2</sub>O<sub>2</sub> → 2H<sub>2</sub>O + O<sub>2</sub></li>
          <li>Heating metal oxides (e.g., HgO, PbO<sub>2</sub>)</li>
        </ul>
      </div>
      <div>
        <strong>Biological oxygen production:</strong>
        <ul className="list-disc pl-4 space-y-1">
          <li>Photosynthesis by plants, algae, and cyanobacteria</li>
          <li>Artificial photosynthesis research for clean oxygen production</li>
          <li>Algae bioreactors for oxygen generation in space applications</li>
        </ul>
      </div>
      <div>
        <strong>Purification and storage:</strong>
        <ul className="list-disc pl-4 space-y-1">
          <li>Removal of moisture, carbon dioxide, and hydrocarbons</li>
          <li>Storage as compressed gas or liquid oxygen</li>
          <li>Medical-grade oxygen requires additional purification</li>
          <li>Portable oxygen concentrators for home use</li>
        </ul>
      </div>
      <div>
        <strong>Production statistics:</strong> Global oxygen production exceeds 100 million tons annually, with steel industry consuming ~55%, chemicals ~25%, healthcare ~15%.
      </div>
      <div className="mt-2 text-[11px] text-gray-500">
        Sources: Industrial Gases Industry, Chemical Engineering, Air Products
      </div>
    </CardContent>
  </Card>
);

export default OxygenExtractionSection;
