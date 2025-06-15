
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
          <li>Highly reactive metal, but protected by oxide layer</li>
          <li>Reacts with oxygen: 4Al + 3O₂ → 2Al₂O₃ (forms protective coating)</li>
          <li>Reacts with halogens: 2Al + 3Cl₂ → 2AlCl₃</li>
          <li>Reacts with acids: 2Al + 6HCl → 2AlCl₃ + 3H₂</li>
          <li>Thermite reaction: 2Al + Fe₂O₃ → Al₂O₃ + 2Fe (very exothermic)</li>
          <li>Reacts with strong bases: 2Al + 6NaOH + 6H₂O → 2Na₃Al(OH)₆ + 3H₂</li>
          <li>Amphoteric oxide: Al₂O₃ reacts with both acids and bases</li>
          <li>Resistant to corrosion due to passive oxide layer</li>
          <li>Reacts with water at high temperatures when oxide layer is disrupted</li>
          <li>Forms alloys readily with many metals</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default AluminumReactivitySection;
