
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const PhosphorusExtractionSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Extraction & Production</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>Primary source: phosphate rock (mainly apatite)</li>
          <li>Electric furnace method: heating phosphate rock with coke and silica</li>
          <li>Reaction: Ca₃(PO₄)₂ + 3SiO₂ + 5C → 3CaSiO₃ + P₄ + 5CO</li>
          <li>Temperature required: 1200-1500°C</li>
          <li>Produces white phosphorus which condenses as vapor</li>
          <li>Red phosphorus made by heating white phosphorus to 250°C</li>
          <li>Black phosphorus created under high pressure</li>
          <li>Annual production: about 1 million tons globally</li>
          <li>Major producers: China, Kazakhstan, Morocco</li>
          <li>Most goes to phosphoric acid production for fertilizers</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default PhosphorusExtractionSection;
