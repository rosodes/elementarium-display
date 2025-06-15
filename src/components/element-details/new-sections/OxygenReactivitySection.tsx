
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const OxygenReactivitySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Chemical Reactivity</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>Highly reactive and supports combustion</li>
          <li>Forms oxides with most elements</li>
          <li>Essential for cellular respiration</li>
          <li>Reacts with hydrogen: 2H₂ + O₂ → 2H₂O</li>
          <li>Combines with metals to form metal oxides</li>
          <li>Ozone (O₃) is more reactive than O₂</li>
          <li>Supports all combustion reactions</li>
          <li>Forms hydrogen bonds in water</li>
          <li>Participates in redox reactions as oxidizing agent</li>
          <li>Essential for photosynthesis and respiration</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default OxygenReactivitySection;
