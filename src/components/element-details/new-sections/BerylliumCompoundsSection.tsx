
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const BerylliumCompoundsSection: React.FC = () => (
  <Card className="my-4 border border-blue-200 dark:border-blue-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Compounds &amp; Chemistry</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>Beryllium typically forms compounds in the +2 oxidation state.</li>
        <li>Main compounds: beryllium oxide (BeO), beryllium chloride (BeCl<sub>2</sub>), beryllium sulfate (BeSO<sub>4</sub>).</li>
        <li>Beryllium compounds are toxic and must be handled with care.</li>
        <li>BeO is notable for its high thermal conductivity and electrical insulation properties.</li>
      </ul>
    </CardContent>
  </Card>
);
export default BerylliumCompoundsSection;
