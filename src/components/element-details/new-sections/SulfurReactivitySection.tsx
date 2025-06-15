
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const SulfurReactivitySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Chemical Reactivity</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>Burns in air to form sulfur dioxide: S + O₂ → SO₂</li>
          <li>Reacts with hydrogen to form hydrogen sulfide: H₂ + S → H₂S</li>
          <li>Forms sulfides with most metals at high temperatures</li>
          <li>Combines with halogens to form various sulfur halides</li>
          <li>Dissolves in carbon disulfide but not in water</li>
          <li>Can form long chains and rings (catenation)</li>
          <li>Reacts with nitric acid to form sulfuric acid</li>
          <li>Forms polysulfides with alkali metals</li>
          <li>Disproportionates in alkaline solutions</li>
          <li>Shows allotropy with different molecular forms</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default SulfurReactivitySection;
