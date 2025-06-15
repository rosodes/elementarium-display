
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const PotassiumReactivitySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Chemical Reactivity</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>Extremely reactive alkali metal - more reactive than sodium</li>
          <li>Reacts explosively with water: 2K + 2H₂O → 2KOH + H₂</li>
          <li>Burns in air with violet flame to form K₂O</li>
          <li>Forms ionic compounds with halogens: K + Cl₂ → KCl</li>
          <li>Must be stored under mineral oil or inert atmosphere</li>
          <li>Reacts with alcohols to produce hydrogen gas</li>
          <li>Forms superoxides when burned in excess oxygen</li>
          <li>Reduces many metal oxides at high temperatures</li>
          <li>Tarnishes rapidly in moist air</li>
          <li>Can ignite spontaneously in humid air</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default PotassiumReactivitySection;
