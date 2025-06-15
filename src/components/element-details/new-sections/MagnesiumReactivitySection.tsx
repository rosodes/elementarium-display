
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const MagnesiumReactivitySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Chemical Reactivity</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>Reactive alkaline earth metal</li>
          <li>Reacts with water: Mg + 2H₂O → Mg(OH)₂ + H₂ (slow at room temperature)</li>
          <li>Burns brilliantly in air: 2Mg + O₂ → 2MgO (bright white flame)</li>
          <li>Reacts with acids: Mg + 2HCl → MgCl₂ + H₂</li>
          <li>Forms ionic compounds with nonmetals</li>
          <li>Reacts with carbon dioxide: 2Mg + CO₂ → 2MgO + C</li>
          <li>Reduces many metal oxides at high temperatures</li>
          <li>Reacts with nitrogen at high temperature: 3Mg + N₂ → Mg₃N₂</li>
          <li>Corrodes slowly in dry air due to protective oxide layer</li>
          <li>Reacts with steam at high temperatures</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default MagnesiumReactivitySection;
