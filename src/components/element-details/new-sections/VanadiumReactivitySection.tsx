
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

// Химическая реактивность ванадия
const VanadiumReactivitySection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Chemical Reactivity</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>Forms passive oxide layer in air (corrosion-resistant)</li>
        <li>Burns in pure oxygen to form pentoxide (V₂O₅)</li>
        <li>Reacts with halogens at high temperatures</li>
        <li>Dissolves in acids forming colored ion solutions</li>
        <li>Does not react with alkalis at room temperature</li>
        <li>Forms intermetallics with many metals</li>
      </ul>
    </CardContent>
  </Card>
);

export default VanadiumReactivitySection;
