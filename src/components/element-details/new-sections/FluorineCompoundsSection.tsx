
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

// Chemistry and compounds of Fluorine
const FluorineCompoundsSection: React.FC = () => (
  <Card className="my-4 border border-green-200 dark:border-green-700">
    <CardHeader className="bg-green-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Compounds &amp; Chemistry</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs space-y-2">
      <div>
        <strong>Extreme reactivity:</strong> Fluorine is the most electronegative and reactive element—forms compounds with nearly all other elements.
      </div>
      <div>
        <strong>Oxidation state:</strong> Nearly always -1 (F<sup>-</sup>), but can form F<sub>2</sub> molecule in elemental state.
      </div>
      <div>
        <strong>Major compound classes:</strong>
        <ul className="list-disc pl-4 space-y-1">
          <li>Inorganic fluorides: NaF, CaF<sub>2</sub>, SF<sub>6</sub>, UF<sub>6</sub></li>
          <li>Hydrogen fluoride (HF): key industrial chemical, highly corrosive</li>
          <li>Organic fluorides: Teflon (PTFE), fluorocarbons (used in refrigerants, propellants)</li>
          <li>Pharmaceuticals: Many drugs contain C–F bonds (e.g., fluoxetine, ciprofloxacin)</li>
        </ul>
      </div>
      <div>
        <strong>Special chemistry:</strong> F<sub>2</sub> gas is so reactive it can ignite many materials (even ice, metals, organic matter).
      </div>
      <div>
        <strong>Biological compounds:</strong> No known essential biological role, but many organisms contain trace fluoride.
      </div>
      <div className="mt-2 text-[11px] text-gray-500">
        Sources: IUPAC, Advanced Inorganic Chemistry, Nature Chemistry
      </div>
    </CardContent>
  </Card>
);

export default FluorineCompoundsSection;
