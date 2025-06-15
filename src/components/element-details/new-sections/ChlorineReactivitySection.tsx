
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const ChlorineReactivitySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Chemical Reactivity</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>Highly reactive halogen, second only to fluorine</li>
          <li>Reacts explosively with hydrogen: H₂ + Cl₂ → 2HCl</li>
          <li>Forms chlorides with most metals</li>
          <li>Disproportionates in water: Cl₂ + H₂O → HCl + HClO</li>
          <li>Reacts with alkenes and alkynes (addition reactions)</li>
          <li>Strong oxidizing agent in aqueous solution</li>
          <li>Bleaches organic materials by oxidation</li>
          <li>Reacts with ammonia to form nitrogen trichloride</li>
          <li>Forms interhalogen compounds with other halogens</li>
          <li>Corrodes many metals in presence of moisture</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default ChlorineReactivitySection;
