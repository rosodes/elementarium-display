
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const SodiumReactivitySection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Chemical Reactivity</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>Very reactive, especially with water — produces hydrogen gas and heat (flammable!)</li>
        <li>Reacts quickly with oxygen: forms Na<sub>2</sub>O, Na<sub>2</sub>O<sub>2</sub>, NaO<sub>2</sub></li>
        <li>Combines directly with halogens to form salts (e.g., Na+Cl<sub>2</sub> → NaCl)</li>
        <li>Displaces other metals from their compounds</li>
        <li>Stored under oil to prevent reaction with air/moisture</li>
        <li>Does not exist in nature as a free metal due to reactivity</li>
      </ul>
    </CardContent>
  </Card>
);

export default SodiumReactivitySection;
