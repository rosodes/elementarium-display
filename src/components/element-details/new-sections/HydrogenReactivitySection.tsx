
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

/**
 * Реакционная способность водорода (отдельная секция)
 */
const HydrogenReactivitySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Chemical Reactivity</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>Highly flammable; reacts explosively with oxygen to form water</li>
          <li>Forms hydrides with many metals (NaH, LiH, etc.)</li>
          <li>Reacts with many nonmetals at elevated temperatures (e.g., Cl₂ → HCl, N₂ → NH₃)</li>
          <li>Does not react at room temperature with noble gases</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default HydrogenReactivitySection;
