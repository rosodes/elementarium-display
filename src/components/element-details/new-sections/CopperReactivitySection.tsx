
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const CopperReactivitySection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Chemical Reactivity</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="pl-4 list-disc space-y-1">
        <li>Relatively unreactive - noble metal properties</li>
        <li>Forms green patina (copper carbonate) in air over time</li>
        <li>Reacts slowly with acids to form copper salts</li>
        <li>Forms copper sulfate with sulfuric acid: Cu + H₂SO₄ → CuSO₄ + H₂</li>
        <li>Oxidizes in air at high temperatures: 2Cu + O₂ → 2CuO</li>
        <li>Does not react with water under normal conditions</li>
        <li>Forms complexes with ammonia and other ligands</li>
      </ul>
    </CardContent>
  </Card>
);

export default CopperReactivitySection;
