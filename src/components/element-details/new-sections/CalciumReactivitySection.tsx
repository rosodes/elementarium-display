
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const CalciumReactivitySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Chemical Reactivity</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>Moderately reactive alkaline earth metal</li>
          <li>Reacts with water: Ca + 2H₂O → Ca(OH)₂ + H₂</li>
          <li>Burns in air with orange-red flame to form CaO</li>
          <li>Forms ionic compounds with halogens: Ca + Cl₂ → CaCl₂</li>
          <li>Reacts with acids to produce hydrogen gas</li>
          <li>Forms carbide with carbon: Ca + 2C → CaC₂</li>
          <li>Reduces many metal oxides at high temperatures</li>
          <li>Tarnishes slowly in moist air</li>
          <li>More reactive than magnesium, less than strontium</li>
          <li>Can be stored in inert atmosphere or mineral oil</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default CalciumReactivitySection;
