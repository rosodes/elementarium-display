
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
          <li>Highly reactive halogen gas</li>
          <li>Reacts with hydrogen: H₂ + Cl₂ → 2HCl (explosive in sunlight)</li>
          <li>Forms chlorides with most metals</li>
          <li>Reacts with water: Cl₂ + H₂O → HCl + HClO</li>
          <li>Disproportionates in alkaline solution: 3Cl₂ + 6OH⁻ → 5Cl⁻ + ClO₃⁻ + 3H₂O</li>
          <li>Strong oxidizing agent</li>
          <li>Bleaches organic materials by oxidation</li>
          <li>Reacts with hydrocarbons via substitution</li>
          <li>Forms addition compounds with alkenes</li>
          <li>Displaces bromine and iodine from their compounds</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default ChlorineReactivitySection;
