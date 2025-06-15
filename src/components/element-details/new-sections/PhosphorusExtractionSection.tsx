
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const PhosphorusExtractionSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Production & Synthesis</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>Commercially produced by heating phosphate rock (calcium phosphate) with sand and coke in an electric furnace.</li>
        <li>Reaction: 2Ca₃(PO₄)₂ + 6SiO₂ + 10C → 6CaSiO₃ + 10CO + P₄ (gas)</li>
        <li>White phosphorus is distilled off and solidified under water to prevent oxidation.</li>
        <li>Converted to red phosphorus by heating without air at 250°C.</li>
        <li>Most phosphorus is used for fertilizer manufacture (phosphates, superphosphate, ammonium phosphate).</li>
        <li>Also used in matches, pesticides, and pyrotechnics.</li>
      </ul>
    </CardContent>
  </Card>
);

export default PhosphorusExtractionSection;
