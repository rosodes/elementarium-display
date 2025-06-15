
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const GermaniumOxStatesSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Oxidation States</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="pl-4 list-disc space-y-1">
        <li>Most common: +4 (germanium(IV) compounds)</li>
        <li>Also stable: +2 (germanium(II) compounds)</li>
        <li>+4 state: GeO₂, GeCl₄, GeH₄</li>
        <li>+2 state: GeO, GeCl₂</li>
        <li>Forms tetrahedral complexes in +4 state</li>
        <li>Amphoteric oxide behavior</li>
      </ul>
    </CardContent>
  </Card>
);

export default GermaniumOxStatesSection;
