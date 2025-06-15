
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const SulfurExtractionSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-yellow-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Production &amp; Synthesis</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>Elemental sulfur is mostly recovered as a by-product from crude oil and natural gas refining (removal of H₂S and SO₂ gases).</li>
        <li>Older Frasch process: superheated water and air injected into sulfur deposits underground to melt and pump up sulfur.</li>
        <li>Sulfur can also be extracted from sulfide ores (pyrite, galena) via roasting (oxidation).</li>
        <li>Annual world production exceeds 70 million tons, mainly for sulfuric acid manufacture.</li>
        <li>Used for fertilizers, chemicals, rubber vulcanization, matches, fungicides, and gunpowder.</li>
        <li>Purified sulfur is cast into large blocks or powder for industrial use.</li>
      </ul>
    </CardContent>
  </Card>
);

export default SulfurExtractionSection;
