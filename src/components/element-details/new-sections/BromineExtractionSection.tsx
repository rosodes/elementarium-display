
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const BromineExtractionSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Extraction</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="pl-4 list-disc space-y-1">
        <li>Primary source: seawater and natural brines</li>
        <li>Oxidation with chlorine: 2Br⁻ + Cl₂ → Br₂ + 2Cl⁻</li>
        <li>Steam distillation to concentrate bromine</li>
        <li>Air blowing to strip bromine vapor</li>
        <li>Absorption in sodium carbonate solution</li>
        <li>Acidification and re-distillation for purification</li>
        <li>Special handling due to toxicity and corrosiveness</li>
      </ul>
    </CardContent>
  </Card>
);

export default BromineExtractionSection;
