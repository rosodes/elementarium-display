
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const GalliumOxStatesSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Oxidation States</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="pl-4 list-disc space-y-1">
        <li>Most common: +3 (gallium(III) compounds)</li>
        <li>Less common: +1, +2</li>
        <li>+3 state forms colorless Ga³⁺ ions</li>
        <li>Amphoteric oxide Ga₂O₃</li>
        <li>Forms complex ions readily</li>
        <li>Similar chemistry to aluminum</li>
      </ul>
    </CardContent>
  </Card>
);

export default GalliumOxStatesSection;
