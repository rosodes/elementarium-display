
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const FluorineOxStatesSection: React.FC = () => (
  <Card className="my-4 border border-lime-200 dark:border-lime-700">
    <CardHeader className="bg-lime-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Compounds &amp; Oxidation States</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>Fluorine forms only the −1 oxidation state in all its compounds—the most electronegative element known.</li>
        <li>Common compounds: hydrogen fluoride (HF), sodium fluoride (NaF), sulfur hexafluoride (SF₆), uranium hexafluoride (UF₆), and hundreds more.</li>
        <li>Strong tendency to oxidize other elements—reacts with all other elements except helium, neon, and argon.</li>
        <li>Unique chemistry: forms stable, often colorless, highly volatile, and sometimes inert compounds (e.g., Teflon: polytetrafluoroethylene, PTFE).</li>
        <li>Fluorides are widely used in water fluoridation, dental care, aluminum refining, and refrigerants.</li>
      </ul>
    </CardContent>
  </Card>
);

export default FluorineOxStatesSection;
