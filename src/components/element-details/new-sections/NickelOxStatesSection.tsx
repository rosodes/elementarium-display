
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const NickelOxStatesSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Oxidation States</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="pl-4 list-disc space-y-1">
        <li>Most common: +2 (nickel(II) compounds)</li>
        <li>Other states: 0, +1, +3, +4</li>
        <li>+2 state forms green hydrated ions [Ni(H₂O)₆]²⁺</li>
        <li>Forms many colored complexes and catalysts</li>
        <li>Ni(0) important in organometallic chemistry</li>
      </ul>
    </CardContent>
  </Card>
);

export default NickelOxStatesSection;
