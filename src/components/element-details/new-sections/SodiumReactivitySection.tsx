
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const SodiumReactivitySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Chemical Reactivity</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>Extremely reactive alkali metal</li>
          <li>Reacts violently with water: 2Na + 2H₂O → 2NaOH + H₂</li>
          <li>Burns in air with yellow flame: 4Na + O₂ → 2Na₂O</li>
          <li>Forms ionic compounds with nonmetals</li>
          <li>Must be stored under oil to prevent reaction with moisture</li>
          <li>Reacts with halogens to form salts (e.g., NaCl, NaBr)</li>
          <li>Reduces many metal oxides at high temperatures</li>
          <li>Forms amalgams with mercury</li>
          <li>Reacts with acids to produce hydrogen gas</li>
          <li>Can ignite spontaneously in humid air</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default SodiumReactivitySection;
