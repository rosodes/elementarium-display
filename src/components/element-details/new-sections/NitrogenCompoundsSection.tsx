
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const NitrogenCompoundsSection: React.FC = () => (
  <Card className="my-4 border border-blue-200 dark:border-blue-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Compounds &amp; Chemistry</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs space-y-2">
      <div>
        <strong>Molecular structure:</strong> Nitrogen exists as a diatomic molecule (N<sub>2</sub>), featuring a strong triple bond, making it very inert.
      </div>
      <div>
        <strong>Major compound classes:</strong>
        <ul className="list-disc pl-4 space-y-1">
          <li><strong>Ammonia (NH<sub>3</sub>):</strong> synthesis, fertilizers, explosives</li>
          <li><strong>Nitrates (NO<sub>3</sub><sup>-</sup>):</strong> Soil nutrients, gunpowder</li>
          <li><strong>Nitrites (NO<sub>2</sub><sup>-</sup>):</strong> Food preservatives</li>
          <li><strong>Hydrazine (N<sub>2</sub>H<sub>4</sub>):</strong> Rocket fuel, blowing agents</li>
          <li><strong>Organic nitrogen compounds:</strong> Amines, amino acids, nucleic acids, proteins</li>
          <li><strong>Oxides:</strong> NO, NO<sub>2</sub>, N<sub>2</sub>O, N<sub>2</sub>O<sub>5</sub> (varied reactivity, atmospheric roles)</li>
        </ul>
      </div>
      <div>
        <strong>Oxidation states:</strong> Ranges from -3 (ammonia, amines) to +5 (nitrates).
      </div>
      <div>
        <strong>Environmental role:</strong> Vital in biology and atmosphere (ozone destruction, greenhouse gases).
      </div>
      <div className="mt-2 text-[11px] text-gray-500">
        Sources: IUPAC, Advanced Inorganic Chemistry, Nature Chemistry
      </div>
    </CardContent>
  </Card>
);

export default NitrogenCompoundsSection;
