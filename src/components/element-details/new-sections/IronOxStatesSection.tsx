
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

// Состояния окисления железа
const IronOxStatesSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Oxidation States</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="pl-4 list-disc space-y-1">
        <li>Common states: +2 (ferrous), +3 (ferric)</li>
        <li>Fe²⁺: green solutions, found in Fe(OH)₂</li>
        <li>Fe³⁺: yellow-brown solutions, found in Fe₂O₃ (rust)</li>
        <li>Rare states: 0, +1, +4, +5, +6</li>
        <li>+6 state in ferrates (FeO₄²⁻) - powerful oxidizers</li>
      </ul>
    </CardContent>
  </Card>
);

export default IronOxStatesSection;
