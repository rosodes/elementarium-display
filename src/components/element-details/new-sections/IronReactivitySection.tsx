
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

// Реактивность железа
const IronReactivitySection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Reactivity</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="pl-4 list-disc space-y-1">
        <li>Rusts readily in moist air: 4Fe + 3O₂ + 6H₂O → 4Fe(OH)₃</li>
        <li>Reacts with acids to produce hydrogen gas</li>
        <li>Burns in pure oxygen forming Fe₂O₃</li>
        <li>Reacts with steam at high temperatures</li>
        <li>Forms compounds with carbon, sulfur, phosphorus</li>
      </ul>
    </CardContent>
  </Card>
);

export default IronReactivitySection;
