
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const NitrogenExtractionSection: React.FC = () => (
  <Card className="my-4 border border-gray-300 dark:border-gray-700">
    <CardHeader className="bg-slate-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Production &amp; Synthesis</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs space-y-2">
      <div>
        <strong>Industrial nitrogen production:</strong>
        <ul className="list-disc pl-4 space-y-1">
          <li><strong>Fractional distillation of liquid air:</strong> Main commercial method, produces ultra-pure nitrogen</li>
          <li><strong>Pressure swing adsorption (PSA):</strong> Uses molecular sieves to separate nitrogen from air</li>
          <li><strong>Membrane separation:</strong> Polymer membranes selectively permeate oxygen, leaving nitrogen-enriched stream</li>
          <li><strong>Cryogenic distillation:</strong> Large-scale production in air separation plants</li>
        </ul>
      </div>
      <div>
        <strong>Laboratory preparation:</strong>
        <ul className="list-disc pl-4 space-y-1">
          <li>Thermal decomposition of ammonium nitrite: NH<sub>4</sub>NO<sub>2</sub> → N<sub>2</sub> + 2H<sub>2</sub>O</li>
          <li>Reaction of ammonia with copper oxide: 2NH<sub>3</sub> + 3CuO → N<sub>2</sub> + 3Cu + 3H<sub>2</sub>O</li>
          <li>Decomposition of sodium azide: 2NaN<sub>3</sub> → 2Na + 3N<sub>2</sub></li>
        </ul>
      </div>
      <div>
        <strong>Ammonia synthesis (Haber-Bosch process):</strong>
        <ul className="list-disc pl-4 space-y-1">
          <li>N<sub>2</sub> + 3H<sub>2</sub> ⇌ 2NH<sub>3</sub> (ΔH = -92 kJ/mol)</li>
          <li>Conditions: 400-500°C, 150-300 atm, iron catalyst</li>
          <li>Produces 180+ million tons of ammonia annually worldwide</li>
          <li>Consumes 1-2% of global energy production</li>
        </ul>
      </div>
      <div>
        <strong>Nitric acid production (Ostwald process):</strong>
        <ul className="list-disc pl-4 space-y-1">
          <li>4NH<sub>3</sub> + 5O<sub>2</sub> → 4NO + 6H<sub>2</sub>O (platinum catalyst, 900°C)</li>
          <li>2NO + O<sub>2</sub> → 2NO<sub>2</sub></li>
          <li>3NO<sub>2</sub> + H<sub>2</sub>O → 2HNO<sub>3</sub> + NO</li>
        </ul>
      </div>
      <div>
        <strong>Purification methods:</strong> Removal of oxygen, moisture, and other impurities using catalytic purification, molecular sieves, and distillation.
      </div>
      <div className="mt-2 text-[11px] text-gray-500">
        Sources: Chemical Engineering, Industrial Chemistry, USGS Minerals
      </div>
    </CardContent>
  </Card>
);

export default NitrogenExtractionSection;
