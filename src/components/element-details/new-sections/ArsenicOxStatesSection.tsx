
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const ArsenicOxStatesSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Oxidation States</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="pl-4 list-disc space-y-1">
        <li>Common states: -3, +3, +5</li>
        <li>-3 state: Arsenides (GaAs, InAs)</li>
        <li>+3 state: Arsenic trioxide (As₂O₃)</li>
        <li>+5 state: Arsenic pentoxide (As₂O₅)</li>
        <li>Forms both covalent and ionic compounds</li>
        <li>Can act as both oxidizing and reducing agent</li>
        <li>Variable oxidation states in biological systems</li>
      </ul>
    </CardContent>
  </Card>
);

export default ArsenicOxStatesSection;
