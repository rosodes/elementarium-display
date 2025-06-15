
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const LithiumReactivitySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Chemical Reactivity</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>Extremely reactive alkali metal</li>
          <li>Reacts violently with water to produce hydrogen gas and lithium hydroxide</li>
          <li>Burns in air with a brilliant white flame</li>
          <li>Forms ionic compounds with halogens and other non-metals</li>
          <li>Must be stored under mineral oil or inert gas to prevent oxidation</li>
          <li>Lower reactivity than other alkali metals due to small size</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default LithiumReactivitySection;
