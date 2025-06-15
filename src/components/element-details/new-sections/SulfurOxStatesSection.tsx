
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const SulfurOxStatesSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-yellow-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Compounds &amp; Chemistry</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <div>
        <b>Oxidation States:</b>
        <ul className="pl-4 list-disc">
          <li>-2: Hydrogen sulfide (H₂S), metal sulfides (ZnS, FeS).</li>
          <li>0: Elemental sulfur (S₈ molecules, rhombic and monoclinic forms).</li>
          <li>+4: Sulfur dioxide (SO₂), sulfites (Na₂SO₃).</li>
          <li>+6: Sulfates (SO₄²⁻), sulfuric acid (H₂SO₄), gypsum.</li>
        </ul>
        <div className="mt-2">
          <b>Important Compounds:</b>
          <ul className="pl-4 list-disc space-y-1">
            <li><b>Sulfuric acid:</b> essential industrial acid, fertilizer and chemical manufacturing.</li>
            <li><b>Sulfur dioxide:</b> used in bleaching, winemaking, refrigerants, and as a preservative.</li>
            <li><b>Hydrogen sulfide:</b> toxic, odorous gas; produced in volcanos, sewers and by bacteria.</li>
            <li><b>Metal sulfides:</b> ores for Zn, Pb, Fe, Cu, Ni extraction.</li>
            <li><b>Organic and biological sulfur compounds:</b> amino acids, antibiotics, vitamins.</li>
          </ul>
        </div>
        <div className="mt-2">
          <b>Chemical Reactivity:</b>
          <ul className="pl-4 list-disc">
            <li>Burns in air with a blue flame, forming SO₂.</li>
            <li>Combines with most metals and nonmetals at elevated temperatures.</li>
            <li>Can exist in several allotropes, especially S₈ (yellow) rings.</li>
          </ul>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default SulfurOxStatesSection;
