
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const SulfurReactivitySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Chemical Reactivity</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>Burns in air with blue flame: S + O₂ → SO₂</li>
          <li>Reacts with hydrogen: H₂ + S → H₂S (slow at room temp)</li>
          <li>Forms sulfides with most metals: Fe + S → FeS</li>
          <li>Reacts with halogens: S + 3F₂ → SF₆</li>
          <li>Disproportionates in alkaline solution: 3S + 6OH⁻ → 2S²⁻ + SO₃²⁻ + 3H₂O</li>
          <li>Forms polysulfides and sulfur chains</li>
          <li>Reacts with carbon: C + 2S → CS₂</li>
          <li>Combines with phosphorus: P₄ + 3S → P₄S₃</li>
          <li>Vulcanizes rubber by cross-linking</li>
          <li>Forms extensive catenation (S-S bonds)</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default SulfurReactivitySection;
