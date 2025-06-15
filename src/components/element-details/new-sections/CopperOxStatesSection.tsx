
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const CopperOxStatesSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Oxidation States</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="pl-4 list-disc space-y-1">
        <li>Most common: +1 (cuprous) and +2 (cupric)</li>
        <li>+2 state forms blue hydrated ions [Cu(H₂O)₆]²⁺</li>
        <li>+1 state forms colorless compounds (Cu₂O)</li>
        <li>Rare states: 0, +3, +4 in special compounds</li>
        <li>Mixed valence compounds like Cu₃O₄</li>
        <li>Forms many colored complexes and salts</li>
      </ul>
    </CardContent>
  </Card>
);

export default CopperOxStatesSection;
