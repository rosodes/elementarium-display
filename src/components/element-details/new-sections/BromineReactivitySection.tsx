
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const BromineReactivitySection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Chemical Reactivity</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="pl-4 list-disc space-y-1">
        <li>Very reactive halogen, less than chlorine</li>
        <li>Reacts with most metals forming bromides</li>
        <li>Dissolves in water: Br₂ + H₂O → HBr + HBrO</li>
        <li>Oxidizes hydrogen: H₂ + Br₂ → 2HBr</li>
        <li>Displaces iodine from iodides</li>
        <li>Forms addition compounds with alkenes</li>
        <li>Corrosive to organic tissues</li>
      </ul>
    </CardContent>
  </Card>
);

export default BromineReactivitySection;
