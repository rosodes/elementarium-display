
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const SeleniumExtractionSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Extraction</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="pl-4 list-disc space-y-1">
        <li>Recovery from copper refinery slimes</li>
        <li>Roasting selenium-bearing materials</li>
        <li>Reduction with sulfur dioxide: SeO₂ + 2SO₂ → Se + 2SO₃</li>
        <li>Electrolytic refining for high purity</li>
        <li>Distillation for final purification</li>
        <li>Special handling due to toxicity</li>
        <li>Recycling from electronic waste</li>
      </ul>
    </CardContent>
  </Card>
);

export default SeleniumExtractionSection;
