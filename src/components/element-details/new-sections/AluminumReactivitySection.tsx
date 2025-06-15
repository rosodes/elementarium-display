
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const AluminumReactivitySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Chemical Reactivity</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>Forms protective oxide layer in air preventing further oxidation</li>
          <li>Reacts with oxygen: 4Al + 3O₂ → 2Al₂O₃</li>
          <li>Reacts with halogens to form aluminum halides</li>
          <li>Dissolves in acids: 2Al + 6HCl → 2AlCl₃ + 3H₂</li>
          <li>Reacts with strong bases: 2Al + 6NaOH + 6H₂O → 2Na₃Al(OH)₆ + 3H₂</li>
          <li>Thermite reaction: 2Al + Fe₂O₃ → Al₂O₃ + 2Fe (highly exothermic)</li>
          <li>Amphoteric oxide - reacts with both acids and bases</li>
          <li>Resists corrosion due to passivation layer</li>
          <li>Reacts with water at high temperatures</li>
          <li>Forms complex ions in solution</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default AluminumReactivitySection;
