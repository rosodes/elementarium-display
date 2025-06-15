
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const ZincOxStatesSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Oxidation States</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="pl-4 list-disc space-y-1">
        <li>Most common: +2 (zinc(II) compounds)</li>
        <li>Rare states: 0, +1 (in special circumstances)</li>
        <li>+2 state forms colorless compounds (Zn²⁺)</li>
        <li>Forms tetrahedral complexes readily</li>
        <li>Zn²⁺ ions are colorless due to d¹⁰ configuration</li>
        <li>Essential for many enzyme functions</li>
      </ul>
    </CardContent>
  </Card>
);

export default ZincOxStatesSection;
