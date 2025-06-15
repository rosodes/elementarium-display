
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const NitrogenReactivitySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Chemical Reactivity</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>N₂ gas is extremely stable due to triple bond (N≡N)</li>
          <li>Requires high energy to break N≡N bond (945 kJ/mol)</li>
          <li>Forms ammonia with hydrogen at high pressure and temperature (Haber process)</li>
          <li>Reacts with oxygen only at very high temperatures or in electric discharge</li>
          <li>Forms nitrides with metals at high temperatures</li>
          <li>Combines with lithium at room temperature: 6Li + N₂ → 2Li₃N</li>
          <li>Does not react with acids or bases under normal conditions</li>
          <li>Nitrogen compounds can be highly reactive (explosives, fertilizers)</li>
          <li>Essential for amino acids and proteins in biological systems</li>
          <li>Forms coordination complexes with transition metals</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default NitrogenReactivitySection;
